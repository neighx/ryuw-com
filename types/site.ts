/** Category label as shown on the site (e.g. "Production"). Managed in the CMS. */
export type WorkCategory = string;

export interface WorkImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface Work {
  /** Stable id — also the anchor on /music (#id) and the CMS slug. */
  id: string;
  title: string;
  /** Artist / client name — shown as "artist - title" unless the title already starts with it. */
  artist?: string;
  year?: number;
  role?: string;
  category?: WorkCategory;
  style: string[];
  description?: string;
  descriptionJa?: string;
  note?: string;
  /** Extra info shown under the credits. */
  extra?: string;
  reviewQuote?: string;
  reviewSource?: string;
  reviewLink?: string;
  /** Main button link. */
  listenLink?: string;
  /** Label for listenLink when it isn't audio (e.g. "View Photos"). Defaults to "Listen". */
  linkLabel?: string;
  /** Additional links shown next to the main button (Spotify, Apple Music, …). */
  links?: { label: string; href: string }[];
  /** Exact date shown instead of the year, e.g. "2026.07.28". */
  date?: string;
  /** Flyer / artwork. Cards with an image span the full grid width. */
  image?: WorkImage;
  gallery?: WorkImage[];
  featured?: boolean;
  /** Listed in the Selected Credits section of /epk. */
  epk?: boolean;
}

export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  items: string[];
}

export interface SoundPalette {
  id: string;
  title: string;
  description: string;
  tags: string[];
  gradient: string;
}

export interface NavLink {
  label: string;
  href: string;
}
