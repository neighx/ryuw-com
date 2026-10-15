import "server-only";
import { defineQuery } from "next-sanity";
import { client, SANITY_TAG } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/sanity/env";
import { works as localWorks } from "@/lib/data";
import type { Work, WorkImage } from "@/types/site";

/** Category order used when Sanity isn't connected (matches the original site). */
const LOCAL_CATEGORIES = ["Artist", "Production", "Remix", "Dance", "Brand / Film", "Game / Anime"];

// Fallback revalidation in case a webhook is ever missed.
const REVALIDATE_SECONDS = 3600;

const imageProjection = `{ alt, asset->{ url, metadata { dimensions { width, height } } } }`;

const WORKS_QUERY = defineQuery(`*[_type == "work" && hidden != true && defined(slug.current)] | order(orderRank asc) {
  "id": slug.current,
  title, artist, releaseDate, year, role, tags,
  "category": category->title,
  descriptionJa, descriptionEn, credits, extraInfo,
  reviewQuote, reviewSource, reviewLink,
  youtubeUrl, spotifyUrl, appleMusicUrl, soundcloudUrl, instagramUrl, otherUrl, buttonLabel,
  featured, epk,
  mainImage ${imageProjection},
  gallery[] ${imageProjection}
}`);

const CATEGORIES_QUERY = defineQuery(`*[_type == "category"] | order(orderRank asc).title`);

interface SanityImage {
  alt?: string | null;
  asset?: { url: string; metadata?: { dimensions?: { width: number; height: number } } } | null;
}

interface SanityWork {
  id: string;
  title: string;
  artist?: string | null;
  releaseDate?: string | null;
  year?: number | null;
  role?: string | null;
  tags?: string[] | null;
  category?: string | null;
  descriptionJa?: string | null;
  descriptionEn?: string | null;
  credits?: string | null;
  extraInfo?: string | null;
  reviewQuote?: string | null;
  reviewSource?: string | null;
  reviewLink?: string | null;
  youtubeUrl?: string | null;
  spotifyUrl?: string | null;
  appleMusicUrl?: string | null;
  soundcloudUrl?: string | null;
  instagramUrl?: string | null;
  otherUrl?: string | null;
  buttonLabel?: string | null;
  featured?: boolean | null;
  epk?: boolean | null;
  mainImage?: SanityImage | null;
  gallery?: SanityImage[] | null;
}

const u = <T,>(v: T | null | undefined) => v ?? undefined;

function toImage(img: SanityImage | null | undefined, fallbackAlt: string): WorkImage | undefined {
  const dims = img?.asset?.metadata?.dimensions;
  if (!img?.asset?.url || !dims) return undefined;
  return { src: img.asset.url, width: dims.width, height: dims.height, alt: img.alt || fallbackAlt };
}

function toWork(doc: SanityWork): Work {
  // Main button = first link present, in this priority order. The rest become small links.
  const candidates = [
    { label: "YouTube", href: doc.youtubeUrl },
    { label: "Spotify", href: doc.spotifyUrl },
    { label: "Apple Music", href: doc.appleMusicUrl },
    { label: "SoundCloud", href: doc.soundcloudUrl },
    { label: "Official", href: doc.otherUrl },
    { label: "Instagram", href: doc.instagramUrl },
  ].filter((l): l is { label: string; href: string } => !!l.href);
  const [primary, ...rest] = candidates;

  return {
    id: doc.id,
    title: doc.title,
    artist: u(doc.artist),
    year: doc.releaseDate ? Number(doc.releaseDate.slice(0, 4)) : u(doc.year),
    date: doc.releaseDate ? doc.releaseDate.replaceAll("-", ".") : undefined,
    role: u(doc.role),
    category: u(doc.category),
    style: doc.tags ?? [],
    description: u(doc.descriptionEn),
    descriptionJa: u(doc.descriptionJa),
    note: u(doc.credits),
    extra: u(doc.extraInfo),
    reviewQuote: u(doc.reviewQuote),
    reviewSource: u(doc.reviewSource),
    reviewLink: u(doc.reviewLink),
    listenLink: primary?.href,
    linkLabel: u(doc.buttonLabel),
    links: rest.length ? rest : undefined,
    image: toImage(doc.mainImage, doc.title),
    gallery: (doc.gallery ?? []).map((g) => toImage(g, doc.title)).filter((g): g is WorkImage => !!g),
    featured: !!doc.featured,
    epk: !!doc.epk,
  };
}

/**
 * All public works in display order. Falls back to lib/data.ts while Sanity isn't
 * connected or holds no works yet, so the live site never goes empty. A fetch error
 * is thrown on purpose: Next keeps serving the last good page instead.
 */
export async function getWorks(): Promise<Work[]> {
  if (!isSanityConfigured) return localWorks;
  const docs = await client.fetch<SanityWork[]>(WORKS_QUERY, {}, {
    next: { revalidate: REVALIDATE_SECONDS, tags: [SANITY_TAG] },
  });
  return docs.length ? docs.map(toWork) : localWorks;
}

export async function getFeaturedWorks() {
  return (await getWorks()).filter((w) => w.featured);
}

export async function getEpkWorks() {
  return (await getWorks()).filter((w) => w.epk);
}

/** Category filter labels, in CMS order, limited to categories that have works. */
export async function getCategories(works: Work[]): Promise<string[]> {
  const fromCms = isSanityConfigured
    ? await client.fetch<string[]>(CATEGORIES_QUERY, {}, {
        next: { revalidate: REVALIDATE_SECONDS, tags: [SANITY_TAG] },
      })
    : [];
  const order = fromCms.length ? fromCms : LOCAL_CATEGORIES;
  const used = new Set(works.map((w) => w.category).filter(Boolean));
  const ordered = order.filter((c) => used.has(c));
  // Categories used by works but missing from the list still get a button.
  const extra = [...used].filter((c): c is string => !!c && !ordered.includes(c));
  return [...ordered, ...extra];
}
