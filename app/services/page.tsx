import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-28 lg:pt-40 lg:pb-40 px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <SectionTitle
        title="Services"
        subtitle="Sound for artists, brands, film, and nightlife."
        className="mb-6"
      />

      {/* Note */}
      <p className="text-[#a3a3a3]/60 text-xs tracking-wide mb-16 max-w-md">
        All prices are starting rates. Final quote provided after project consultation.
      </p>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-white/5 pt-20">
        <div className="max-w-2xl">
          <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-6">
            Custom Projects
          </p>
          <h2 className="text-2xl lg:text-4xl font-bold text-white leading-tight mb-6">
            Not sure which service fits? Let&apos;s talk.
          </h2>
          <p className="text-[#a3a3a3] text-sm leading-relaxed mb-8 max-w-md">
            Every project is different. Reach out with your vision and I&apos;ll
            create a custom quote for you.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs tracking-[0.25em] uppercase hover:bg-white/90 transition-all duration-300 font-medium"
          >
            Start a Project
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
