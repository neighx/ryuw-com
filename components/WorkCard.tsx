import Image from "next/image";
import Link from "next/link";
import { Play, ArrowUpRight, ExternalLink } from "lucide-react";
import type { Work } from "@/types/site";
import { cn } from "@/lib/utils";

interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  const hasImage = !!work.image;
  const title =
    work.artist && !work.title.toLowerCase().startsWith(work.artist.toLowerCase())
      ? `${work.artist} - ${work.title}`
      : work.title;
  const linkLabel = work.linkLabel ?? "Listen";

  return (
    <div
      id={work.id}
      className={cn(
        "group relative scroll-mt-28 bg-[#111111] border border-white/5 rounded-sm hover:border-white/12 hover:bg-[#161616] transition-all duration-500 flex flex-col",
        hasImage ? "md:col-span-2 md:flex-row overflow-hidden" : "p-6"
      )}
    >
      {/* Flyer / artwork */}
      {work.image && (
        <MaybeLink
          href={work.listenLink}
          label={`${title} — ${linkLabel}`}
          className="relative block shrink-0 bg-black overflow-hidden md:w-[38%] lg:w-[30%]"
        >
          <Image
            src={work.image.src}
            width={work.image.width}
            height={work.image.height}
            alt={work.image.alt}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 38vw, 30vw"
            className="w-full h-auto max-h-[34rem] md:max-h-none object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </MaybeLink>
      )}

      <div className={cn("flex flex-col flex-1", hasImage && "p-6 lg:p-12 md:justify-center")}>
        {/* Year + Category */}
        <div className="flex items-center gap-3">
          {(work.date ?? work.year) && (
            <span className="text-[#a3a3a3] text-[10px] tracking-[0.2em] uppercase">
              {work.date ?? work.year}
            </span>
          )}
          {(work.date ?? work.year) && work.category && <span className="w-px h-3 bg-white/15" />}
          {work.category && (
            <span className="text-[#a3a3a3] text-[10px] tracking-[0.2em] uppercase">
              {work.category}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={cn(
            "mt-3 text-white font-semibold leading-snug group-hover:text-white/90 transition-colors",
            hasImage ? "text-xl lg:text-3xl lg:mt-4" : "text-lg"
          )}
        >
          {title}
        </h3>

        {/* Role */}
        {work.role && <p className="mt-1 text-[#a3a3a3] text-xs tracking-wide">{work.role}</p>}

        {/* Style tags */}
        {work.style.length > 0 && (
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
        )}

        {/* Description */}
        {work.description && (
          <p className="mt-4 text-[#a3a3a3] text-sm leading-relaxed whitespace-pre-line">
            {work.description}
          </p>
        )}

        {/* Japanese description */}
        {work.descriptionJa && (
          <p className="mt-2 text-[#a3a3a3]/70 text-xs leading-relaxed whitespace-pre-line">
            {work.descriptionJa}
          </p>
        )}

        {/* Note */}
        {work.note && (
          <p className="mt-2 text-[#a3a3a3]/50 text-[10px] tracking-wide uppercase whitespace-pre-line">
            {work.note}
          </p>
        )}

        {/* Extra info */}
        {work.extra && (
          <p className="mt-2 text-[#a3a3a3]/50 text-[10px] tracking-wide whitespace-pre-line">
            {work.extra}
          </p>
        )}

        {/* Additional images */}
        {work.gallery && work.gallery.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {work.gallery.map((img) => (
              <a
                key={img.src}
                href={img.src}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-16 h-16 lg:w-20 lg:h-20 overflow-hidden bg-black border border-white/5 hover:border-white/20 transition-colors"
              >
                <Image
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  alt={img.alt}
                  sizes="80px"
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
          </div>
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
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 border-t border-white/5">
          {work.listenLink ? (
            <a
              href={work.listenLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#d6d6d6] hover:text-white text-xs tracking-[0.15em] uppercase transition-colors group/btn"
            >
              {work.linkLabel ? (
                <ExternalLink size={10} className="group-hover/btn:scale-110 transition-transform" />
              ) : (
                <Play size={10} className="fill-current group-hover/btn:scale-110 transition-transform" />
              )}
              {linkLabel}
            </a>
          ) : (
            <span className="flex items-center gap-2 text-[#a3a3a3]/30 text-xs tracking-[0.15em] uppercase cursor-default">
              <Play size={10} className="fill-current" />
              Coming Soon
            </span>
          )}
          {work.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3a3a3] hover:text-white text-[10px] tracking-[0.15em] uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/contact"
            className="flex items-center gap-1.5 text-[#a3a3a3] hover:text-white text-xs tracking-[0.15em] uppercase transition-colors ml-auto"
          >
            Similar Work
            <ArrowUpRight size={10} />
          </Link>
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-purple-900/5 to-transparent" />
    </div>
  );
}

/** Wraps children in an external link when there is one. */
function MaybeLink({
  href,
  label,
  className,
  children,
}: {
  href?: string;
  label: string;
  className: string;
  children: React.ReactNode;
}) {
  if (!href) return <div className={className}>{children}</div>;
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>
      {children}
    </a>
  );
}
