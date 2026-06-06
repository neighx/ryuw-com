import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import WorkCard from "@/components/WorkCard";
import { featuredWorks } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Selected Works */}
      <section id="works" className="py-28 lg:py-40 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <SectionTitle
            title="Selected Music"
            subtitle="A selection of music, production, and sound direction works."
          />
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-[#a3a3a3] hover:text-white text-xs tracking-[0.2em] uppercase transition-colors shrink-0"
          >
            All Music
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </section>
    </>
  );
}
