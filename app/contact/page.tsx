import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-28 lg:pt-40 lg:pb-40 px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <p className="text-[#a3a3a3] text-[10px] tracking-[0.4em] uppercase mb-6">
          Get in Touch
        </p>
        <h1 className="text-4xl lg:text-6xl font-bold text-white tracking-tight mb-4">
          Start a Project
        </h1>
        <p className="text-[#a3a3a3] text-base leading-relaxed max-w-lg">
          Tell me about your release, film, brand campaign, or visual project.
        </p>
      </div>

      {/* Side layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Sidebar info */}
        <div className="space-y-10">
          <div>
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-4 pb-3 border-b border-white/5">
              Direct Contact
            </p>
            <a
              href="mailto:ryuw.beats@gmail.com"
              className="text-[#d6d6d6] hover:text-white text-sm transition-colors"
            >
              ryuw.beats@gmail.com
            </a>
          </div>

          <div>
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-4 pb-3 border-b border-white/5">
              Based In
            </p>
            <p className="text-[#d6d6d6] text-sm">Tokyo, Japan</p>
            <p className="text-[#a3a3a3] text-xs mt-1">
              Wuloong Studio Tokyo
            </p>
          </div>

          <div>
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-4 pb-3 border-b border-white/5">
              Availability
            </p>
            <p className="text-[#d6d6d6] text-sm">Open for new projects</p>
            <p className="text-[#a3a3a3] text-xs mt-1">Response within 48h</p>
          </div>

          <div>
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.3em] uppercase mb-4 pb-3 border-b border-white/5">
              Services
            </p>
            <ul className="space-y-2">
              {[
                "Music Production",
                "Vocal Mix",
                "Sound Design",
                "Film / Brand Music",
                "Studio Sessions",
                "Creative Direction",
              ].map((s) => (
                <li key={s} className="text-[#a3a3a3] text-xs">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
