import Link from "next/link";
import { Play, ArrowUpRight, ExternalLink } from "lucide-react";
import type { Work } from "@/types/site";

interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  return (
    <div className="group relative bg-[#111111] border border-white/5 rounded-sm p-6 hover:border-white/12 hover:bg-[#161616] transition-all duration-500 flex flex-col">
      {/* Year + Category */}
      <div className="flex items-center gap-3">
        <span className="text-[#a3a3a3] text-[10px] tracking-[0.2em] uppercase">
          {work.year}
        </span>
        <span className="w-px h-3 bg-white/15" />
        <span className="text-[#a3a3a3] text-[10px] tracking-[0.2em] uppercase">
          {work.category}
        </span>
      </div>

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

      {/* Japanese description */}
      {work.descriptionJa && (
        <p className="mt-2 text-[#a3a3a3]/70 text-xs leading-relaxed">
          {work.descriptionJa}
        </p>
      )}

      {/* Note */}
      {work.note && (
        <p className="mt-2 text-[#a3a3a3]/50 text-[10px] tracking-wide uppercase">
          {work.note}
        </p>
      )}

      {/* Review quote */}
      {work.reviewQuote && (
        <div className="mt-4 border-l border-white/10 pl-4">
          <p className="text-[#a3a3a3]/70 text-xs leading-relaxed italic">
            {work.reviewQuote}
          </p>
          {work.reviewSource && work.reviewLink && (
            <a
              href={work.reviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-[#a3a3a3]/50 hover:text-[#a3a3a3] text-[10px] tracking-widest uppercase transition-colors"
            >
              — {work.reviewSource}
              <ExternalLink size={9} />
            </a>
          )}
        </div>
      )}

      {/* CTAs */}
      <div className="mt-6 flex items-center gap-4 pt-4 border-t border-white/5">
        {work.listenLink ? (
          <a
            href={work.listenLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#d6d6d6] hover:text-white text-xs tracking-[0.15em] uppercase transition-colors group/btn"
          >
            <Play size={10} className="fill-current group-hover/btn:scale-110 transition-transform" />
            Listen
          </a>
        ) : (
          <span className="flex items-center gap-2 text-[#a3a3a3]/30 text-xs tracking-[0.15em] uppercase cursor-default">
            <Play size={10} className="fill-current" />
            Coming Soon
          </span>
        )}
        <Link
          href="/contact"
          className="flex items-center gap-1.5 text-[#a3a3a3] hover:text-white text-xs tracking-[0.15em] uppercase transition-colors ml-auto"
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
