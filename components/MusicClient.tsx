"use client";

import { useState } from "react";
import WorkCard from "@/components/WorkCard";
import { cn } from "@/lib/utils";
import type { Work, WorkCategory } from "@/types/site";

const categories: WorkCategory[] = [
  "All",
  "Artist",
  "Production",
  "Remix",
  "Dance",
  "Brand / Film",
  "Game / Anime",
];

const INITIAL_LIMIT = 12;

interface MusicClientProps {
  works: Work[];
}

export default function MusicClient({ works }: MusicClientProps) {
  const [active, setActive] = useState<WorkCategory>("All");
  const [showAll, setShowAll] = useState(false);

  const filtered =
    active === "All" ? works : works.filter((w) => w.category === active);

  const displayed = showAll ? filtered : filtered.slice(0, INITIAL_LIMIT);
  const hasMore = filtered.length > INITIAL_LIMIT && !showAll;

  const handleCategoryChange = (cat: WorkCategory) => {
    setActive(cat);
    setShowAll(false);
  };

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
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
        {displayed.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24">
          <p className="text-[#a3a3a3] text-sm">No works found.</p>
        </div>
      )}

      {/* Load More */}
      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3 border border-white/20 text-[#a3a3a3] hover:border-white/50 hover:text-white text-xs tracking-[0.2em] uppercase transition-all duration-300"
          >
            More Works ({filtered.length - INITIAL_LIMIT})
          </button>
        </div>
      )}
    </>
  );
}
