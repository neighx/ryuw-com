"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const ease = "easeOut" as const;

const VIDEO_SRC = "/Ryuw_Silver_Shimmer_3s.mp4";
const POSTER_SRC = "/Ryuw_Silver_Shimmer_Poster.jpg";

// Feather the video edges into the background so the square frame is invisible.
// Kept narrow (4%) so the tip of the logo near the top edge is never dimmed.
const edgeMask: React.CSSProperties = {
  maskImage:
    "linear-gradient(to right, transparent, #000 4%, #000 96%, transparent), linear-gradient(to bottom, transparent, #000 4%, #000 96%, transparent)",
  maskComposite: "intersect",
  WebkitMaskImage:
    "linear-gradient(to right, transparent, #000 4%, #000 96%, transparent), linear-gradient(to bottom, transparent, #000 4%, #000 96%, transparent)",
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
    <section className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#07080c] from-70% to-[#050505] px-4 pt-20 pb-16 lg:pt-24">
      <h1 className="sr-only">Ryuw</h1>

      {/* Logo — square, always fully visible */}
      <div
        className="relative aspect-square w-[min(92vw,calc(100svh-15rem),52rem)] bg-contain bg-center bg-no-repeat"
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
      <div className="relative z-10 flex flex-col items-center text-center mt-2 lg:mt-4">
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
