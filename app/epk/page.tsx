import Image from "next/image";
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


const links = [
  { label: "Spotify", href: "https://open.spotify.com/intl-ja/artist/08lMI3IEUcqQ8sbuaReqKc" },
  { label: "Apple Music", href: "https://music.apple.com/jp/artist/ryuw/1453891316" },
  { label: "Instagram", href: "https://www.instagram.com/ryuw_ryuw_/" },
  { label: "SoundCloud", href: "https://soundcloud.com/ryuw_prpr" },
];

export default function EPKPage() {
  return (
    <div className="min-h-screen pt-32 pb-28 lg:pt-40 lg:pb-40 px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
        <div>
          <p className="text-[#a3a3a3] text-[10px] tracking-[0.4em] uppercase mb-6">
            Electronic Press Kit
          </p>
          <h1 className="text-5xl lg:text-8xl font-bold text-white tracking-tight mb-4">
            Ryuw
          </h1>
          <p className="text-[#a3a3a3] text-sm lg:text-base tracking-[0.15em] uppercase">
            Tokyo-based Producer / Artist / Sound Director
          </p>
        </div>

        {/* Portrait */}
        <div className="relative w-full aspect-[3/4] max-w-xs lg:max-w-none overflow-hidden">
          <Image
            src="/ryuw-photo.jpg"
            alt="Ryuw"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1024px) 300px, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-16">
          {/* Biography EN */}
          <section>
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-6 pb-4 border-b border-white/5">
              Biography
            </p>
            <div className="space-y-4">
              <p className="text-[#d6d6d6] text-base leading-relaxed">
                Ryuw, a Tokyo-born DJ/producer specializing in dark but brilliant
                electronic music, as well as modern HIPHOP R&B tune with an
                emphasis on bass music. He started his music career in 2012.
              </p>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                In 2019, he released the collaboration track &ldquo;246&rdquo; with
                Foodman from Diplo&apos;s label MAD DECENT, and gradually attracted
                attention such as entering the playlist of Best Electronic music
                selected by Resident Advisor magazine and more.
              </p>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                He is also a member of japanese HIPHOP Creative collective
                PROPERPEDIGREE, as well as YENTOWN.
              </p>
            </div>
          </section>

          {/* Biography JA */}
          <section className="font-serif-jp">
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-6 pb-4 border-b border-white/5" style={{fontFamily: 'inherit'}}>
              プロフィール
            </p>
            <div className="space-y-5">
              <p className="text-[#d6d6d6] text-base leading-[2]">
                東京生まれ。Trap、HipHop、Electronic、Bass Musicを軸に活動するDJ / PRODUCER。<br />
                PROPERPEDIGREE / YENTOWN 所属。
              </p>
              <p className="text-[#a3a3a3] text-sm leading-[2]">
                ベースミュージックに重きをおいたダークでも華やかなエレクトニックなダンス・トラックやモダンなHIPHOP,R&Bチューンを得意とするRyuwは、2012年よりキャリアをスタート。
              </p>
              <p className="text-[#a3a3a3] text-sm leading-[2]">
                2019年、Diplo率いるレーベルMAD DECENTから食品まつり a.k.a foodmanのコラボ曲&ldquo;246&rdquo;をリリースしResident Advisor誌が選ぶBEST Electronic musicのプレイリストに入るなど実力派ベースミュージックプロデューサー。
              </p>
            </div>
          </section>

          {/* View Music CTA */}
          <section>
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-6 pb-4 border-b border-white/5">
              Selected Credits
            </p>
            <Link
              href="/music"
              className="group inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300 font-medium"
            >
              View Music
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
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
