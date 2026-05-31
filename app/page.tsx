import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import WorkCard from "@/components/WorkCard";
import SoundPaletteCard from "@/components/SoundPaletteCard";
import ServiceCard from "@/components/ServiceCard";
import { featuredWorks, soundPalettes, services } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Selected Works */}
      <section id="works" className="py-28 lg:py-40 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <SectionTitle
            title="Selected Works"
            subtitle="A selection of music, production, and sound direction works."
          />
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-[#a3a3a3] hover:text-white text-xs tracking-[0.2em] uppercase transition-colors shrink-0"
          >
            All Works
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </div>

      {/* Sound Palette */}
      <section id="sound" className="py-28 lg:py-40 px-6 lg:px-8 max-w-7xl mx-auto">
        <SectionTitle
          title="Sound Palette"
          subtitle="Different sonic directions available for artists, visual projects, and brands."
          className="mb-16"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {soundPalettes.map((palette) => (
            <SoundPaletteCard key={palette.id} palette={palette} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </div>

      {/* Services */}
      <section id="services" className="py-28 lg:py-40 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <SectionTitle
            title="Services"
            subtitle="Music production and sound direction for artists, brands, film, and visual projects."
          />
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-[#a3a3a3] hover:text-white text-xs tracking-[0.2em] uppercase transition-colors shrink-0"
          >
            View Services
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
      </div>

      {/* About */}
      <section id="about" className="py-28 lg:py-40 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <SectionTitle title="About Ryuw" className="mb-8" />
            <div className="space-y-6">
              <p className="text-[#d6d6d6] text-base leading-relaxed">
                Ryuw is a Tokyo-based producer, artist, and sound director
                creating music across hip-hop, R&B, electronic, and bass music.
                His sound blends dark beauty, street culture, and futuristic
                club energy.
              </p>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                As both an artist and producer, Ryuw works with vocalists,
                rappers, visual creators, and culture-driven brands to create
                emotional and forward-thinking music.
              </p>
              <p className="text-[#a3a3a3] text-sm leading-relaxed">
                Ryuwは東京を拠点に活動するプロデューサー / アーティスト /
                サウンドディレクター。HIPHOP、R&B、Electronic、Bass
                Musicを軸に、ダークで美しい質感、ストリートカルチャー、未来的なクラブサウンドを融合させた音楽を制作している。
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-8">
              Credits
            </p>
            <div className="space-y-0">
              {[
                'FOODMAN x Ryuw "246" released via Mad Decent',
                "Wuloong Studio Tokyo",
                "HIPHOP / R&B / Electronic / Bass Music",
                "Music production for artists, film, brands, and nightlife",
              ].map((credit) => (
                <div
                  key={credit}
                  className="flex items-start gap-4 py-5 border-b border-white/5 first:border-t"
                >
                  <span className="w-1 h-1 rounded-full bg-white/30 mt-2 shrink-0" />
                  <p className="text-[#d6d6d6] text-sm leading-relaxed">
                    {credit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 lg:py-40 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-purple-950/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#a3a3a3] text-[10px] tracking-[0.4em] uppercase mb-8">
            Let&apos;s Work
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-8">
            Need music for your next release, film, brand campaign or visual
            project?
          </h2>
          <p className="text-[#a3a3a3] text-base leading-relaxed max-w-xl mx-auto mb-12">
            Tell me about your project. I create dark, emotional, and futuristic
            sound for artists, visual projects, and culture-driven brands.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs tracking-[0.25em] uppercase hover:bg-white/90 transition-all duration-300 font-medium"
          >
            Start a Project
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
