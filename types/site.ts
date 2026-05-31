export type WorkCategory =
  | "All"
  | "Artist"
  | "Production"
  | "Vocal Mix"
  | "Brand / Film"
  | "Demo";

export interface Work {
  id: string;
  title: string;
  year: number;
  role: string;
  category: WorkCategory;
  style: string[];
  description: string;
  note?: string;
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
