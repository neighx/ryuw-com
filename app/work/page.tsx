"use client";

import { useState } from "react";
import SectionTitle from "@/components/SectionTitle";
import WorkCard from "@/components/WorkCard";
import { works } from "@/lib/data";
import type { WorkCategory } from "@/types/site";
import { cn } from "@/lib/utils";

const categories: WorkCategory[] = [
  "All",
  "Artist",
  "Production",
  "Remix",
  "Brand / Film",
  "Game / Anime",
];

export default function WorkPage() {
  const [active, setActive] = useState<WorkCategory>("All");

  const filtered =
    active === "All" ? works : works.filter((w) => w.category === active);

  return (
    <div className="min-h-screen pt-32 pb-28 lg:pt-40 lg:pb-40 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <SectionTitle
        title="Works"
        subtitle="Selected music, production, and sound direction works."
        className="mb-12"
      />

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={cn(
              "px-4 py-2 text-[10px] tracking-[0.2em] uppercase border transition-all duration-300",
              active === cat
                ? "border-white/40 bg-white/8 text-white"
                : "border-white/10 text-[#a3a3a3] hover:border-white/25 hover:text-[#d6d6d6]"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Works grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24">
          <p className="text-[#a3a3a3] text-sm">No works found.</p>
        </div>
      )}
    </div>
  );
}
