import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const genres = [
  "Hip Hop",
  "R&B",
  "Electronic",
  "Bass Music",
  "Alternative R&B",
  "Sound Design",
];

const credits = [
  {
    title: 'FOODMAN x Ryuw "246"',
    label: "Released via Mad Decent",
  },
  {
    title: "Ryuw — Flower feat. Ume",
    label: "Single",
  },
  {
    title: "Wuloong Studio Tokyo",
    label: "Recording / Production Studio",
  },
  {
    title: "Production / Vocal Mix / Sound Direction",
    label: "For artists, brands, and visual projects",
  },
];

const links = [
  { label: "Spotify", href: "#" },
  { label: "Apple Music", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
];

export default function EPKPage() {
  return (
    <div className="min-h-screen pt-32 pb-28 lg:pt-40 lg:pb-40 px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-24">
        <p className="text-[#a3a3a3] text-[10px] tracking-[0.4em] uppercase mb-6">
          Electronic Press Kit
        </p>
        <h1 className="text-5xl lg:text-8xl font-bold text-white tracking-tight mb-4">
          RYUW
        </h1>
        <p className="text-[#a3a3a3] text-sm lg:text-base tracking-[0.15em] uppercase">
          Tokyo-based Producer / Artist / Sound Director
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-16">
          {/* Short Bio */}
          <section>
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-6 pb-4 border-b border-white/5">
              Short Bio
            </p>
            <p className="text-[#d6d6d6] text-base leading-relaxed">
              Ryuw is a Tokyo-based producer, artist, and sound director
              creating dark, emotional, and futuristic music across hip-hop,
              R&B, electronic, and bass music.
            </p>
          </section>

          {/* Long Bio */}
          <section>
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-6 pb-4 border-b border-white/5">
              Biography
            </p>
            <p className="text-[#a3a3a3] text-sm leading-relaxed">
              Ryuw blends Tokyo street culture, late-night R&B, electronic
              textures, and bass-heavy club energy into a distinctive sound. As
              an artist and producer, he creates music for vocalists, rappers,
              visual projects, brands, and nightlife.
            </p>
            <p className="text-[#a3a3a3] text-sm leading-relaxed mt-4">
              With roots in Tokyo&apos;s underground music scene, Ryuw has
              developed a signature sound that moves between dark emotional R&B,
              futuristic electronic production, and forward-thinking club
              energy. His work spans original releases, brand campaigns, film
              sound, and artist production — always pushing the boundary between
              music and culture.
            </p>
          </section>

          {/* Credits */}
          <section>
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-6 pb-4 border-b border-white/5">
              Selected Credits
            </p>
            <div className="space-y-0">
              {credits.map((c) => (
                <div
                  key={c.title}
                  className="py-5 border-b border-white/5 flex items-start justify-between gap-8"
                >
                  <p className="text-[#d6d6d6] text-sm font-medium">{c.title}</p>
                  <p className="text-[#a3a3a3] text-xs shrink-0 text-right">{c.label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="space-y-12">
          {/* Genres */}
          <section>
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-6 pb-4 border-b border-white/5">
              Genres
            </p>
            <div className="flex flex-wrap gap-2">
              {genres.map((g) => (
                <span
                  key={g}
                  className="px-3 py-1.5 bg-white/5 border border-white/8 text-[#d6d6d6] text-[10px] tracking-wide"
                >
                  {g}
                </span>
              ))}
            </div>
          </section>

          {/* Links */}
          <section>
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-6 pb-4 border-b border-white/5">
              Links
            </p>
            <div className="space-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between text-[#d6d6d6] hover:text-white text-sm transition-colors group"
                >
                  {link.label}
                  <ExternalLink size={11} className="text-[#a3a3a3] group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section>
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-6 pb-4 border-b border-white/5">
              Booking & Production
            </p>
            <a
              href="mailto:ryuw.beats@gmail.com"
              className="text-[#d6d6d6] hover:text-white text-sm transition-colors block mb-2"
            >
              ryuw.beats@gmail.com
            </a>
            <p className="text-[#a3a3a3]/60 text-xs">Tokyo, Japan</p>
          </section>

          {/* CTA */}
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300 font-medium w-full justify-center"
          >
            Work With Ryuw
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
