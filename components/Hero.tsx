"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";

const ease = "easeOut" as const;

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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.004;

      const orbs = [
        { x: 0.2, y: 0.5, r: 0.5, color: "rgba(109,40,217,0.10)" },
        { x: 0.8, y: 0.4, r: 0.4, color: "rgba(30,64,175,0.08)" },
        { x: 0.5, y: 0.8, r: 0.35, color: "rgba(80,0,0,0.07)" },
      ];

      orbs.forEach((orb, i) => {
        const ox = orb.x + Math.sin(t + i * 1.2) * 0.06;
        const oy = orb.y + Math.cos(t + i * 0.9) * 0.05;
        const gx = ox * canvas.width;
        const gy = oy * canvas.height;
        const gr = orb.r * Math.min(canvas.width, canvas.height);
        const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
        g.addColorStop(0, orb.color);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* Gradient canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Photo — right side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease }}
        className="absolute right-0 top-0 h-full w-[55%] lg:w-[48%] pointer-events-none"
      >
        <Image
          src="/ryuw-photo.jpg"
          alt="Ryuw"
          fill
          priority
          className="object-cover object-center"
          sizes="(max-width: 1024px) 55vw, 48vw"
        />
        {/* Fade: left edge into background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/40 to-transparent" />
        {/* Fade: bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
        {/* Fade: top */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-transparent" />
      </motion.div>

      {/* Content — left side */}
      <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <FadeUp delay={0.1}>
            <p className="text-[#a3a3a3] text-[10px] lg:text-xs tracking-[0.4em] uppercase mb-8">
              Official Site
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <h1 className="text-[clamp(4rem,12vw,10rem)] font-bold leading-none tracking-[-0.02em] text-white mb-6">
              Ryuw
            </h1>
          </FadeUp>

          <FadeUp delay={0.5}>
            <p className="text-[#d6d6d6] text-xs lg:text-sm tracking-[0.2em] uppercase mb-4">
              Tokyo-based Producer / Artist / Sound Director
            </p>
          </FadeUp>

          <FadeUp delay={0.65}>
            <p className="text-[#a3a3a3] text-sm lg:text-base leading-relaxed mb-12 max-w-sm">
              Dark, emotional, and futuristic sound for artists, brands, film,
              and nightlife.
            </p>
          </FadeUp>

          <FadeUp delay={0.8}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-3 px-6 py-3 bg-white text-black text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300"
              >
                Work With Me
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              <Link
                href="/work"
                className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-xs tracking-[0.2em] uppercase hover:border-white/50 hover:bg-white/5 transition-all duration-300"
              >
                <Play size={10} className="fill-white" />
                View Music
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/20" />
        <p className="text-[#a3a3a3]/50 text-[9px] tracking-[0.3em] uppercase">
          Scroll
        </p>
      </motion.div>
    </section>
  );
}
