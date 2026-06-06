import type { Work, NavLink } from "@/types/site";

export const navLinks: NavLink[] = [
  { label: "Music", href: "/work" },
  { label: "Bio / EPK", href: "/epk" },
  { label: "Contact", href: "/contact" },
];

export const works: Work[] = [
  {
    id: "foodman-246",
    title: "FOODMAN - 246 feat. Ryuw",
    year: 2019,
    role: "Producer / Artist / Composer",
    category: "Artist",
    style: ["Electronic", "Bass Music"],
    description:
      'In 2019, he released the collaboration track "246" with Foodman from Diplo\'s label MAD DECENT, entering the playlist of Best Electronic music selected by Resident Advisor magazine.',
    descriptionJa:
      "2019年、Diplo率いるレーベルMAD DECENTから食品まつり a.k.a foodmanのコラボ曲「246」をリリース。Resident Advisor誌が選ぶBEST Electronic musicのプレイリストに選出。",
    note: "Released via Mad Decent",
    reviewQuote:
      '"Only \'246,\' a collaboration with the Tokyo producer Ryuw, sounds like it belongs on Mad Decent. It\'s loaded with the kind of exaggerated sounds you hear in big-room trap, but, alongside roaring lions and electric guitars, \'246\' resembles an EDM banger."',
    reviewSource: "Resident Advisor",
    reviewLink: "https://ja.ra.co/reviews/23635",
    listenLink: "https://soundcloud.com/maddecent/sets/foodman-odoodo",
    featured: true,
  },
  {
    id: "dct-saa-kane",
    title: "DREAMS COME TRUE - さあ鐘を鳴らせ (YO-SIN & Ryuw REMIX)",
    year: 2020,
    role: "Producer / Remixer",
    category: "Remix",
    style: ["Electronic", "Bass"],
    description:
      'He has worked on a bass music remix for DREAMS COME TRUE, one of Japan\'s most respected music acts, collaborating with YO-SIN on "Saa Kane wo Narase (YO-SIN & Ryuw REMIX)."',
    descriptionJa:
      "DREAMS COME TRUEの「さあ鐘を鳴らせ」を、YO-SINとの共作によりベースミュージック・リミックスとして手掛けました。",
    note: "Produced by YO-SIN × Ryuw / Piano: Miyuki Ito",
    reviewSource: "BARKS",
    reviewLink: "https://barks.jp/news/892815/",
    listenLink:
      "https://store.universal-music.co.jp/products/umck1674",
    featured: true,
  },
  {
    id: "flower-ume",
    title: "Flower feat. Ume",
    year: 2024,
    role: "Producer / Artist",
    category: "Artist",
    style: ["Alternative R&B", "Electronic"],
    description:
      "Tokyo night, street culture, and emotional R&B fused into a cinematic soundscape.",
    featured: true,
  },
  {
    id: "dark-rnb-demo",
    title: "Dark R&B Demo",
    year: 2024,
    role: "Producer / Composer",
    category: "Production",
    style: ["R&B", "Hip Hop", "Electronic"],
    description:
      "Custom production demo for artists and vocalists seeking dark, emotional R&B sound.",
    featured: true,
  },
  {
    id: "tokyo-night-beat-pack",
    title: "Tokyo Night Beat Pack",
    year: 2024,
    role: "Producer",
    category: "Production",
    style: ["Hip Hop", "Electronic", "Trap"],
    description:
      "A pack of original beats capturing the neon-lit atmosphere of Tokyo at night.",
  },
  {
    id: "fashion-campaign-sound",
    title: "Fashion Campaign Sound",
    year: 2024,
    role: "Sound Director / Composer",
    category: "Brand / Film",
    style: ["Cinematic", "Fashion", "Electronic"],
    description:
      "Original music for a fashion brand campaign, minimal and visually driven.",
    featured: true,
  },
  {
    id: "cinematic-brand-intro",
    title: "Cinematic Brand Intro",
    year: 2024,
    role: "Sound Director / Composer",
    category: "Brand / Film",
    style: ["Cinematic", "Electronic", "Luxury"],
    description:
      "Atmospheric intro music for a luxury brand's visual identity — dark, minimal, and powerful.",
  },
];

export const featuredWorks = works.filter((w) => w.featured);
