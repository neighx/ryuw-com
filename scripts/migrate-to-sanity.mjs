#!/usr/bin/env node
// One-time import of lib/data.ts into Sanity.
//
//   NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx SANITY_WRITE_TOKEN=sk... node scripts/migrate-to-sanity.mjs [--dry-run] [--force]
//
// - Writes a JSON backup of the local data and of whatever is already in Sanity to backups/.
// - Creates categories and works with fixed ids (category-*, work-*), keeping the current order.
// - Uploads local images (public/...) to Sanity.
// - Safe to re-run: existing documents are left untouched unless --force is given,
//   so edits made in the admin screen are never overwritten by accident.

import { createReadStream } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { createClient } from "@sanity/client";
import { LexoRank } from "lexorank";

const root = path.resolve(import.meta.dirname, "..");
const dryRun = process.argv.includes("--dry-run");
const force = process.argv.includes("--force");

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_WRITE_TOKEN;
if (!projectId || (!token && !dryRun)) {
  console.error("NEXT_PUBLIC_SANITY_PROJECT_ID と SANITY_WRITE_TOKEN を指定してください");
  process.exit(1);
}

// Node strips the TypeScript types when importing lib/data.ts
const { works } = await import(path.join(root, "lib/data.ts"));

const client = createClient({ projectId, dataset, token, apiVersion: "2026-10-01", useCdn: false });

const CATEGORIES = [
  "Artist",
  "Production",
  "Remix",
  "Dance",
  "Brand / Film",
  "Game / Anime",
  "DJ / Event",
  "Other",
];

const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

function linkField(url) {
  const host = new URL(url).hostname.replace(/^www\./, "");
  const is = (...hosts) => hosts.some((h) => host === h || host.endsWith(`.${h}`));
  if (is("youtube.com", "youtu.be")) return "youtubeUrl";
  if (is("spotify.com", "spotify.link")) return "spotifyUrl";
  if (is("music.apple.com")) return "appleMusicUrl";
  if (is("soundcloud.com")) return "soundcloudUrl";
  if (is("instagram.com")) return "instagramUrl";
  return "otherUrl";
}

function ranks(n) {
  const out = [];
  let r = LexoRank.min().genNext();
  for (let i = 0; i < n; i++) {
    out.push(r.toString());
    r = r.genNext().genNext();
  }
  return out;
}

// ── Backup ─────────────────────────────────────────────────────────────────
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
await mkdir(path.join(root, "backups"), { recursive: true });
await writeFile(path.join(root, `backups/local-works-${stamp}.json`), JSON.stringify(works, null, 2));
if (token) {
  const existing = await client.fetch(`*[_type in ["work", "category"]]`, {}, { perspective: "raw" });
  await writeFile(path.join(root, `backups/sanity-${stamp}.json`), JSON.stringify(existing, null, 2));
  console.log(`バックアップ: backups/local-works-${stamp}.json, backups/sanity-${stamp}.json（既存 ${existing.length} 件）`);
}

// ── Categories ─────────────────────────────────────────────────────────────
const used = [...new Set(works.map((w) => w.category).filter(Boolean))];
const categoryTitles = [...CATEGORIES, ...used.filter((c) => !CATEGORIES.includes(c))];
const categoryRanks = ranks(categoryTitles.length);
const categoryDocs = categoryTitles.map((title, i) => ({
  _id: `category-${slug(title)}`,
  _type: "category",
  title,
  orderRank: categoryRanks[i],
}));

// ── Works ──────────────────────────────────────────────────────────────────
async function uploadImage(image) {
  if (!image) return undefined;
  if (dryRun) return { _type: "image", alt: image.alt, asset: { _ref: `(upload ${image.src})` } };
  const file = path.join(root, "public", image.src);
  const asset = await client.assets.upload("image", createReadStream(file), {
    filename: path.basename(file),
  });
  return { _type: "image", alt: image.alt, asset: { _type: "reference", _ref: asset._id } };
}

const workRanks = ranks(works.length);
const workDocs = [];
for (const [i, w] of works.entries()) {
  const doc = {
    _id: `work-${w.id}`,
    _type: "work",
    title: w.title,
    slug: { _type: "slug", current: w.id },
    category: w.category
      ? { _type: "reference", _ref: `category-${slug(w.category)}` }
      : undefined,
    role: w.role,
    tags: w.style?.length ? w.style : undefined,
    descriptionEn: w.description,
    descriptionJa: w.descriptionJa,
    credits: w.note,
    reviewQuote: w.reviewQuote,
    reviewSource: w.reviewSource,
    reviewLink: w.reviewLink,
    buttonLabel: w.linkLabel,
    featured: !!w.featured,
    epk: false,
    hidden: false,
    orderRank: workRanks[i],
  };
  if (w.date) doc.releaseDate = w.date.replaceAll(".", "-");
  else doc.year = w.year;
  if (w.listenLink) doc[linkField(w.listenLink)] = w.listenLink;
  workDocs.push({ doc, image: w.image });
}

// ── Write ──────────────────────────────────────────────────────────────────
const existingIds = new Set(
  token
    ? await client.fetch(`*[_id in $ids]._id`, {
        ids: [...categoryDocs.map((d) => d._id), ...workDocs.map((w) => w.doc._id)],
      })
    : []
);

let created = 0;
let skipped = 0;
const tx = client.transaction();
for (const doc of categoryDocs) {
  if (existingIds.has(doc._id) && !force) { skipped++; continue; }
  tx.createOrReplace(doc);
  created++;
}
for (const { doc, image } of workDocs) {
  if (existingIds.has(doc._id) && !force) { skipped++; continue; }
  const mainImage = await uploadImage(image);
  if (mainImage) doc.mainImage = mainImage;
  tx.createOrReplace(JSON.parse(JSON.stringify(doc))); // drops undefined fields
  created++;
  console.log(`  ${dryRun ? "[dry-run] " : ""}${doc.title}${mainImage ? "（画像あり）" : ""}`);
}

if (dryRun) {
  console.log(`\n[dry-run] 作成予定 ${created} 件 / スキップ ${skipped} 件。書き込みはしていません。`);
} else {
  await tx.commit();
  console.log(`\n完了: 作成・更新 ${created} 件 / 既存のためスキップ ${skipped} 件`);
}
