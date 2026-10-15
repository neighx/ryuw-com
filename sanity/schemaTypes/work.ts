import { defineArrayMember, defineField, defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";
import { PlayIcon } from "@sanity/icons/Play";

/** Lowercase ASCII slug; Japanese-only titles fall back to a random id. */
function slugify(input: string) {
  const slug = input
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return slug || `work-${Math.random().toString(36).slice(2, 8)}`;
}

/** URL field limited to http(s) and, optionally, to the given domains. */
function urlField(name: string, title: string, hosts?: string[], description?: string) {
  return defineField({
    name,
    title,
    description,
    type: "url",
    group: "media",
    validation: (rule) =>
      rule.uri({ scheme: ["https", "http"] }).custom((value) => {
        if (!value || !hosts) return true;
        try {
          const host = new URL(value).hostname.replace(/^www\./, "");
          return hosts.some((h) => host === h || host.endsWith(`.${h}`))
            ? true
            : `${title}のURLを入力してください（${hosts.join(" / ")}）`;
        } catch {
          return "URLの形式が正しくありません";
        }
      }),
  });
}

const imageWithAlt = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    description,
    type: "image",
    group: "media",
    options: { hotspot: true, accept: "image/jpeg,image/png,image/webp,image/avif" },
    fields: [
      defineField({
        name: "alt",
        title: "画像の説明（代替テキスト）",
        description: "画像が見られない人や検索エンジン向けの短い説明。例: COMPLEX JAPAN Launch Party のフライヤー",
        type: "string",
      }),
    ],
  });

export const work = defineType({
  name: "work",
  title: "作品",
  type: "document",
  icon: PlayIcon,
  groups: [
    { name: "basic", title: "基本情報", default: true },
    { name: "text", title: "紹介・クレジット" },
    { name: "media", title: "画像・リンク" },
    { name: "publish", title: "公開設定" },
  ],
  fields: [
    // ── 基本情報 ──────────────────────────────────────────────
    defineField({
      name: "title",
      title: "作品タイトル",
      description: "例: JNKMN - OD feat. CHOUJI (Prod. Ryuw)",
      type: "string",
      group: "basic",
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "artist",
      title: "アーティスト名／クライアント名",
      description: "任意。タイトルに含めていない場合だけ「アーティスト名 - タイトル」の形で表示されます",
      type: "string",
      group: "basic",
    }),
    defineField({
      name: "releaseDate",
      title: "公開日",
      description: "入れると「2026.10.10」のように日付で表示されます",
      type: "date",
      group: "basic",
      options: { dateFormat: "YYYY.MM.DD" },
    }),
    defineField({
      name: "year",
      title: "制作年",
      description: "公開日がない場合に表示されます",
      type: "number",
      group: "basic",
      validation: (rule) => rule.integer().min(1990).max(2100),
    }),
    defineField({
      name: "category",
      title: "カテゴリー",
      type: "reference",
      to: [{ type: "category" }],
      group: "basic",
      validation: (rule) => rule.warning().required(),
    }),
    defineField({
      name: "role",
      title: "担当内容",
      description: "例: Producer / Composer / DJ / Sound Director",
      type: "string",
      group: "basic",
    }),
    defineField({
      name: "tags",
      title: "ジャンル・タグ",
      description: "1つ入力するごとに Enter",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
      group: "basic",
    }),

    // ── 紹介・クレジット ──────────────────────────────────────
    defineField({
      name: "descriptionJa",
      title: "日本語紹介文",
      description: "改行はそのままサイトに反映されます",
      type: "text",
      rows: 5,
      group: "text",
    }),
    defineField({
      name: "descriptionEn",
      title: "英語紹介文",
      type: "text",
      rows: 5,
      group: "text",
    }),
    defineField({
      name: "credits",
      title: "制作クレジット",
      description: "紹介文の下に小さく表示されます。例: Lyrics: Ume / Producer: Ryuw",
      type: "text",
      rows: 2,
      group: "text",
    }),
    defineField({
      name: "extraInfo",
      title: "補足情報",
      type: "text",
      rows: 2,
      group: "text",
    }),
    defineField({
      name: "reviewQuote",
      title: "レビュー・メディア掲載の引用",
      type: "text",
      rows: 3,
      group: "text",
    }),
    defineField({
      name: "reviewSource",
      title: "引用元（媒体名）",
      description: "例: Resident Advisor",
      type: "string",
      group: "text",
    }),
    defineField({
      name: "reviewLink",
      title: "引用元のURL",
      type: "url",
      group: "text",
      validation: (rule) => rule.uri({ scheme: ["https", "http"] }),
    }),

    // ── 画像・リンク ──────────────────────────────────────────
    imageWithAlt(
      "mainImage",
      "メイン画像（フライヤー・ジャケット）",
      "入れると、その作品のカードが横幅いっぱいの大きな表示になります"
    ),
    defineField({
      name: "gallery",
      title: "追加画像（複数枚）",
      type: "array",
      group: "media",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true, accept: "image/jpeg,image/png,image/webp,image/avif" },
          fields: [defineField({ name: "alt", title: "画像の説明", type: "string" })],
        }),
      ],
      options: { layout: "grid" },
    }),
    urlField("youtubeUrl", "YouTube", ["youtube.com", "youtu.be"]),
    urlField("spotifyUrl", "Spotify", ["spotify.com", "spotify.link"]),
    urlField("appleMusicUrl", "Apple Music", ["music.apple.com"]),
    urlField("soundcloudUrl", "SoundCloud", ["soundcloud.com", "on.soundcloud.com"]),
    urlField("instagramUrl", "Instagram", ["instagram.com"]),
    urlField("otherUrl", "その他の公式URL", undefined, "公式ニュース・ストア・配信まとめページなど"),
    defineField({
      name: "buttonLabel",
      title: "メインボタンの文言",
      description:
        "空欄なら「Listen」。メインボタンは YouTube → Spotify → Apple Music → SoundCloud → その他 → Instagram の順で最初に入っているリンクになります。例: View Photos",
      type: "string",
      group: "media",
      validation: (rule) => rule.max(24),
    }),

    // ── 公開設定 ──────────────────────────────────────────────
    defineField({
      name: "hidden",
      title: "非公開にする",
      description: "ONにすると、公開済みでもサイトに表示されません",
      type: "boolean",
      group: "publish",
      initialValue: false,
    }),
    defineField({
      name: "featured",
      title: "トップページに掲載",
      type: "boolean",
      group: "publish",
      initialValue: false,
    }),
    defineField({
      name: "epk",
      title: "EPKページに掲載",
      type: "boolean",
      group: "publish",
      initialValue: false,
    }),
    defineField({
      name: "slug",
      title: "URL用ID（slug）",
      description: "タイトルから自動で作られます。サイト上では /music#slug のリンクに使われます",
      type: "slug",
      group: "publish",
      options: { source: "title", slugify, maxLength: 80 },
      validation: (rule) => rule.required(),
    }),
    orderRankField({ type: "work" }),
  ],
  preview: {
    select: {
      title: "title",
      date: "releaseDate",
      year: "year",
      category: "category.title",
      hidden: "hidden",
      featured: "featured",
      media: "mainImage",
    },
    prepare({ title, date, year, category, hidden, featured, media }) {
      const when = date ? String(date).replaceAll("-", ".") : year;
      const flags = [hidden ? "非公開" : null, featured ? "TOP" : null].filter(Boolean);
      return {
        title,
        subtitle: [when, category, ...flags].filter(Boolean).join(" · "),
        media,
      };
    },
  },
});
