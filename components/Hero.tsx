"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const ease = "easeOut" as const;

const VIDEO_SRC = "/Ryuw_Silver_Shimmer_3s.mp4";
const POSTER_SRC = "/Ryuw_Silver_Shimmer_Poster.jpg";

// Fade the video's empty margins into the page background so the square frame
// (and the brighter glow in its top-right corner) never shows as an edge.
// The logo sits roughly within 13–87% horizontally, 6–90% vertically (only the very tip touches the top fade), and along
// the bottom-left → top-right diagonal, so these stops leave it untouched.
const MASK_LAYERS = [
  "linear-gradient(to right, transparent, #000 11%, #000 89%, transparent)",
  "linear-gradient(to bottom, transparent, #000 8%, #000 91%, transparent)",
  "linear-gradient(135deg, transparent 14%, #000 32%, #000 68%, transparent 86%)",
].join(", ");

const edgeMask: React.CSSProperties = {
  maskImage: MASK_LAYERS,
  maskComposite: "intersect",
  WebkitMaskImage: MASK_LAYERS,
  WebkitMaskComposite: "source-in",
};

function FadeUp({
  delay,
  children,
  className,
}: {
  delay: number;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  // Show the still poster instead of the video for reduced-motion users
  // or when the video can't be played.
  const [useStill, setUseStill] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setUseStill((prev) => prev || mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section className="relative lg:min-h-svh flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#07080c] from-70% to-[#050505] px-4 pt-16 pb-14 lg:pt-20 lg:pb-16">
      <h1 className="sr-only">Ryuw</h1>

      {/* Logo — square video wider than the viewport on mobile; only its empty
          margins overflow, so the logo itself always stays fully visible. */}
      <div
        className="relative shrink-0 aspect-square bg-contain bg-center bg-no-repeat [--logo-w:min(124vw,calc(100svh-7rem))] lg:[--logo-w:min(84vw,calc(100svh-6rem),62rem)] w-[var(--logo-w)] -mt-[calc(var(--logo-w)*0.02)] -mb-[calc(var(--logo-w)*0.09)]"
        style={{ ...edgeMask, backgroundImage: `url(${POSTER_SRC})` }}
      >
        {useStill ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={POSTER_SRC}
            alt=""
            width={960}
            height={960}
            className="w-full h-full object-contain"
          />
        ) : (
          <video
            src={VIDEO_SRC}
            poster={POSTER_SRC}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            aria-hidden="true"
            tabIndex={-1}
            onError={() => setUseStill(true)}
            className="w-full h-full object-contain pointer-events-none motion-reduce:hidden"
          />
        )}
      </div>

      {/* Tagline + CTA — understated, below the logo */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <FadeUp delay={0.4}>
          <p className="text-[#a3a3a3] text-[10px] lg:text-xs tracking-[0.25em] lg:tracking-[0.3em] uppercase mb-6 lg:mb-8">
            Tokyo-based Music Producer / Artist DJ
          </p>
        </FadeUp>

        <FadeUp delay={0.6}>
          <Link
            href="/music"
            className="inline-flex items-center gap-3 px-6 lg:px-7 py-3 border border-white/20 text-white text-[10px] lg:text-xs tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            <Play size={9} className="fill-current" />
            View Music
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
