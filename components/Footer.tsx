import Link from "next/link";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/ryuw_ryuw_/" },
  { label: "Spotify", href: "https://open.spotify.com/intl-ja/artist/08lMI3IEUcqQ8sbuaReqKc" },
  { label: "Apple Music", href: "https://music.apple.com/jp/artist/ryuw/1453891316" },
  { label: "SoundCloud", href: "https://soundcloud.com/ryuw_prpr" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Brand */}
          <div>
            <p className="text-white font-bold tracking-[0.35em] text-base mb-3">
              Ryuw
            </p>
            <p className="text-[#a3a3a3] text-xs tracking-widest uppercase">
              Tokyo-based Producer / Artist / Sound Director
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.2em] uppercase mb-5">
              Links
            </p>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#d6d6d6] hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#a3a3a3] text-[10px] tracking-[0.2em] uppercase mb-5">
              Contact
            </p>
            <a
              href="mailto:ryuw.beats@gmail.com"
              className="text-[#d6d6d6] hover:text-white text-sm transition-colors"
            >
              ryuw.beats@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[#a3a3a3] text-xs">
            © 2026 Ryuw. All rights reserved.
          </p>
          <p className="text-[#a3a3a3]/40 text-[10px] tracking-widest uppercase">
            Tokyo
          </p>
        </div>
      </div>
    </footer>
  );
}
