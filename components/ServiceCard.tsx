import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Service } from "@/types/site";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group relative bg-[#111111] border border-white/5 rounded-sm p-8 hover:border-white/12 hover:bg-[#161616] transition-all duration-500 flex flex-col">
      {/* Price */}
      <p className="text-[#a3a3a3] text-[10px] tracking-[0.25em] uppercase mb-4">
        {service.price}
      </p>

      {/* Title */}
      <h3 className="text-white font-semibold text-xl leading-snug mb-3">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[#a3a3a3] text-sm leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Items */}
      <ul className="space-y-2.5 flex-1 mb-8">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check size={12} className="text-[#a3a3a3] mt-0.5 shrink-0" />
            <span className="text-[#d6d6d6] text-sm">{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/contact"
        className="group/btn inline-flex items-center gap-2 px-5 py-3 border border-white/15 text-white text-xs tracking-[0.2em] uppercase hover:border-white/40 hover:bg-white/5 transition-all duration-300 self-start"
      >
        Start a Project
        <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
      </Link>

      {/* Hover accent */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
