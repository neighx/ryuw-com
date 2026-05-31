import type { SoundPalette } from "@/types/site";
import { cn } from "@/lib/utils";

interface SoundPaletteCardProps {
  palette: SoundPalette;
}

export default function SoundPaletteCard({ palette }: SoundPaletteCardProps) {
  return (
    <div
      className={cn(
        "group relative bg-[#111111] border border-white/5 rounded-sm p-8 hover:border-white/12 hover:bg-[#161616] transition-all duration-500 overflow-hidden"
      )}
    >
      {/* Background gradient */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700",
          palette.gradient
        )}
      />

      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-white transition-colors">
          {palette.title}
        </h3>

        {/* Description */}
        <p className="text-[#a3a3a3] text-sm leading-relaxed mb-6">
          {palette.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {palette.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-white/5 border border-white/8 text-[#a3a3a3] text-[10px] tracking-wide rounded-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
