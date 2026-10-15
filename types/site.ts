export type WorkCategory =
  | "All"
  | "Artist"
  | "Production"
  | "Remix"
  | "Brand / Film"
  | "Game / Anime"
  | "Dance";

export interface Work {
  id: string;
  title: string;
  year: number;
  role: string;
  category: WorkCategory;
  style: string[];
  description: string;
  descriptionJa?: string;
  note?: string;
  reviewQuote?: string;
  reviewSource?: string;
  reviewLink?: string;
  listenLink?: string;
  /** Label for listenLink when it isn't audio (e.g. "View Photos"). Defaults to "Listen". */
  linkLabel?: string;
  /** Exact date shown instead of the year, e.g. "2026.07.28". */
  date?: string;
  /** Flyer / artwork. Cards with an image span the full grid width. */
  image?: { src: string; width: number; height: number; alt: string };
  featured?: boolean;
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
