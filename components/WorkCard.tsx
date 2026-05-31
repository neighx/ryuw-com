import Link from "next/link";
import { Play, ArrowUpRight } from "lucide-react";
import type { Work } from "@/types/site";

interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="group relative bg-[#111111] border border-white/5 rounded-sm p-6 hover:border-white/12 hover:bg-[#161616] transition-all duration-500">
      {/* Year badge */}
      <span className="text-[#a3a3a3] text-[10px] tracking-[0.2em] uppercase">
        {work.year}
      </span>

      {/* Title */}
      <h3 className="mt-3 text-white font-semibold text-lg leading-snug group-hover:text-white/90 transition-colors">
        {work.title}
      </h3>

      {/* Role */}
      <p className="mt-1 text-[#a3a3a3] text-xs tracking-wide">{work.role}</p>

      {/* Style tags */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {work.style.map((s) => (
          <span
            key={s}
            className="px-2 py-0.5 bg-white/5 border border-white/8 text-[#d6d6d6] text-[10px] tracking-wide rounded-sm"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="mt-4 text-[#a3a3a3] text-sm leading-relaxed">
        {work.description}
      </p>

      {/* Note */}
      {work.note && (
        <p className="mt-2 text-[#a3a3a3]/60 text-xs italic">{work.note}</p>
      )}

      {/* CTAs */}
      <div className="mt-6 flex items-center gap-4">
        <button className="flex items-center gap-2 text-[#d6d6d6] hover:text-white text-xs tracking-[0.15em] uppercase transition-colors group/btn">
          <Play size={10} className="fill-current group-hover/btn:scale-110 transition-transform" />
          Listen
        </button>
        <Link
          href="/contact"
          className="flex items-center gap-1.5 text-[#a3a3a3] hover:text-white text-xs tracking-[0.15em] uppercase transition-colors"
        >
          Similar Work
          <ArrowUpRight size={10} />
        </Link>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-purple-900/5 to-transparent" />
    </div>
  );
}
