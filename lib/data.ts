import type { Work, Service, SoundPalette, NavLink } from "@/types/site";

export const navLinks: NavLink[] = [
  { label: "Works", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Sound", href: "/#sound" },
  { label: "About", href: "/#about" },
  { label: "EPK", href: "/epk" },
  { label: "Contact", href: "/contact" },
];

export const works: Work[] = [
  {
    id: "foodman-246",
    title: "FOODMAN x Ryuw — 246",
    year: 2024,
    role: "Producer / Artist",
    category: "Artist",
    style: ["Experimental", "Electronic", "Bass"],
    description:
      "Collaborative release with FOODMAN, blending experimental electronics and Tokyo street energy.",
    note: "Released via Mad Decent",
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
    id: "dark-rnb-vocal-demo",
    title: "Dark R&B Vocal Demo",
    year: 2024,
    role: "Producer / Composer",
    category: "Demo",
    style: ["R&B", "Hip Hop", "Electronic"],
    description:
      "Custom production demo for artists and vocalists seeking dark, emotional R&B sound.",
    featured: true,
  },
  {
    id: "tokyo-night-beat-pack",
    title: "Tokyo Night Beat Pack Demo",
    year: 2024,
    role: "Producer",
    category: "Demo",
    style: ["Hip Hop", "Electronic", "Trap"],
    description:
      "A pack of original beats capturing the neon-lit atmosphere of Tokyo at night.",
  },
  {
    id: "fashion-campaign-sound",
    title: "Fashion Campaign Sound Sketch",
    year: 2024,
    role: "Sound Director / Composer",
    category: "Brand / Film",
    style: ["Cinematic", "Fashion", "Electronic"],
    description:
      "Original music sketch for a fashion brand campaign, minimal and visually driven.",
    featured: true,
  },
  {
    id: "vocal-mix-before-after",
    title: "Vocal Mix Before / After",
    year: 2024,
    role: "Vocal Mix Engineer",
    category: "Vocal Mix",
    style: ["R&B", "Pop", "Electronic"],
    description:
      "Vocal mix demonstration showcasing modern processing for R&B and electronic records.",
  },
  {
    id: "bass-music-club-demo",
    title: "Bass Music Club Demo",
    year: 2024,
    role: "Producer / Sound Designer",
    category: "Demo",
    style: ["Bass Music", "Electronic", "Club"],
    description:
      "Heavy low-end, distorted energy, and forward-thinking club sound design.",
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

export const services: Service[] = [
  {
    id: "music-production",
    title: "Music Production",
    price: "From ¥80,000",
    description:
      "Custom tracks, full song production, arrangement, and production direction for artists.",
    items: [
      "Custom beat production",
      "Full song arrangement",
      "Artist direction",
      "Reference-based production",
      "Stems delivery",
    ],
  },
  {
    id: "full-song-production",
    title: "Full Song Production",
    price: "From ¥200,000",
    description:
      "End-to-end song creation from composition to final direction.",
    items: [
      "Composition",
      "Arrangement",
      "Production",
      "Vocal direction",
      "Recording support",
      "Mix direction",
    ],
  },
  {
    id: "vocal-mix",
    title: "Vocal Mix",
    price: "From ¥30,000",
    description:
      "Modern vocal mixing for R&B, Hip Hop, Electronic, and Pop records.",
    items: [
      "Lead vocal mix",
      "Doubles and adlibs",
      "Reverb / delay design",
      "Pitch correction direction",
      "Rough mastering",
    ],
  },
  {
    id: "sound-design-film-brand",
    title: "Sound Design for Film / Brand",
    price: "From ¥300,000",
    description:
      "Original music and sound design for film, fashion, advertising, and visual projects.",
    items: [
      "Original music for visuals",
      "Fashion / campaign sound",
      "Intro / outro sound logo",
      "Cinematic textures",
      "Commercial-use delivery",
    ],
  },
  {
    id: "tokyo-studio-session",
    title: "Tokyo Studio Session",
    price: "From ¥8,000",
    description:
      "Private recording and production sessions at Wuloong Studio Tokyo.",
    items: [
      "Private recording session",
      "Vocal recording",
      "Direction support",
      "Wuloong Studio Tokyo",
    ],
  },
  {
    id: "release-creative-direction",
    title: "Release Creative Direction",
    price: "From ¥50,000",
    description:
      "Release concept, artist positioning, pitch text, EPK, and international presentation.",
    items: [
      "Artist bio",
      "Press kit",
      "Spotify pitch text",
      "Release concept",
      "SNS rollout plan",
    ],
  },
];

export const soundPalettes: SoundPalette[] = [
  {
    id: "dark-rnb",
    title: "Dark R&B",
    description:
      "Emotional vocals, late-night atmosphere, warm low-end, wide space.",
    tags: ["R&B", "Emotional", "Vocals", "Late Night"],
    gradient: "from-purple-900/20 to-transparent",
  },
  {
    id: "tokyo-night-electronic",
    title: "Tokyo Night Electronic",
    description:
      "Neon textures, cinematic synths, urban melancholy, futuristic drums.",
    tags: ["Electronic", "Cinematic", "Tokyo", "Nightlife"],
    gradient: "from-blue-900/20 to-transparent",
  },
  {
    id: "bass-club-experimental",
    title: "Bass / Club / Experimental",
    description:
      "Heavy low-end, distorted energy, club impact, forward-thinking sound design.",
    tags: ["Bass", "Club", "Experimental", "Sound Design"],
    gradient: "from-red-900/20 to-transparent",
  },
  {
    id: "street-fashion-luxury",
    title: "Street / Fashion / Luxury",
    description:
      "Minimal, stylish, visual-driven music for campaigns, fashion, and culture.",
    tags: ["Fashion", "Film", "Luxury", "Minimal"],
    gradient: "from-gray-800/30 to-transparent",
  },
];
