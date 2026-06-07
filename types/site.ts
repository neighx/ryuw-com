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
