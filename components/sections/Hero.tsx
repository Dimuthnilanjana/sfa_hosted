

"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Play, ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [stars, setStars] = useState<{ id: number; top: number; left: number; delay: number; size: number; opacity: number; color: string }[]>([]);

  // Generate subtle, refined atmospheric light particles
  useEffect(() => {
    const starColors = [
      "rgba(37, 99, 235, 0.40)",  // soft royal blue
      "rgba(56, 189, 248, 0.45)",  // soft cyan
      "rgba(139, 92, 246, 0.35)", // gentle violet
    ];

    const generatedStars = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      top: Math.random() * 85 + 5,
      left: Math.random() * 90 + 5,
      delay: Math.random() * 8,
      size: Math.random() * 1.4 + 1.2,
      opacity: Math.random() * 0.25 + 0.25,
      color: starColors[i % starColors.length],
    }));
    setStars(generatedStars);
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-12 sm:pt-14 sm:pb-14 lg:pt-16 lg:pb-16 font-sans">
      {/* Infinite Moving Gradient Keyframes */}
      <style>{`
        @keyframes movingGradientText {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-moving-gradient {
          background-size: 200% auto;
          animation: movingGradientText 4.5s ease-in-out infinite;
        }
      `}</style>
      {/* =========================================================================
          LAYER 1: HERO BACKGROUND IMAGE (hero_bg.png from public/resources/)
          ========================================================================= */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none select-none"
        style={{
          backgroundImage: `url('/resources/hero_bg.png')`,
        }}
      />

      {/* =========================================================================
          LAYER 3: ANIMATED TECHNICAL GRID (Balanced visibility, refined CommandLine style)
          ========================================================================= */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.065] animate-grid-subtle"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(15, 23, 42, 0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15, 23, 42, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at 50% 45%, black 45%, transparent 95%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, black 45%, transparent 95%)",
        }}
      />

      {/* =========================================================================
          LAYER 4: LUMINOUS STAR PARTICLES (Twinkling & Drifting)
          ========================================================================= */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-star-float"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.color,
              animationDelay: `${star.delay}s`,
              opacity: star.opacity,
              boxShadow: `0 0 5px 1px ${star.color}`,
            }}
          />
        ))}
      </div>

      {/* =========================================================================
          LAYER 5: HERO CONTENT (CommandLine-matched font weight & full black text)
          ========================================================================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        {/* Sri Lanka Flag Badge — Styled like the CommandLine pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-lg bg-white border border-blue-400/80 text-[11px] font-mono tracking-wider uppercase text-blue-600 mb-6 shadow-xs backdrop-blur-xs">
          <span>No:1 Sales Force Automation Platform in Sri Lanka</span>
        </div>

        {/* Large Headline (52px on desktop, font-medium, 2-color gradient style with line spacing & moving gradient) */}
        <h1 className="text-3xl sm:text-4xl lg:text-[52px] font-medium text-slate-900 tracking-tight leading-[1.2] max-w-4xl text-center">
          <span className="block mb-2 sm:mb-2.5">Empower Your Field Team.</span>
          <span className="inline-block bg-gradient-to-r from-blue-600 via-sky-400 via-indigo-600 to-blue-600 bg-clip-text text-transparent animate-moving-gradient">
            Automate Your Sales.
          </span>
        </h1>

        {/* Supporting Copy (Exact 16px, clean line-height and contrast) */}
        <p className="mt-4 text-sm sm:text-[16px] text-black/75 max-w-2xl leading-relaxed text-center font-normal">
          Connect field sales, distributors, retailers, orders, payments, and reporting in one practical platform built for your sales operations.
        </p>

        {/* Primary and Secondary CTAs (Book Demo in Black) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          {/* Primary CTA: Full Black Background */}
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-2.5 text-sm sm:text-base font-medium rounded-lg bg-black hover:bg-neutral-800 text-white transition-all duration-150 shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <span>Book a Demo</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>

          {/* Secondary CTA */}
          <button
            onClick={() => {
              const el = document.getElementById("features");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-normal text-black bg-white hover:bg-slate-50 border border-slate-300 rounded-lg transition-colors duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Explore the Platform</span>
          </button>
        </div>

      

        {/* Product Visual Container (Authentic SFA Video Presentation, CommandLine framing) */}
        <div className="mt-12 w-full max-w-5xl relative">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 bg-slate-900 shadow-2xl shadow-slate-300/40 aspect-[16/10] sm:aspect-video group">
            <video
              ref={videoRef}
              src="/resources/sfa_intro.mp4"
              className="w-full h-full object-cover cursor-pointer"
              controls={isPlaying}
              onClick={togglePlay}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              playsInline
              preload="metadata"
            />

            {/* Play Overlay */}
            {!isPlaying && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label="Play Intro Video"
                className="absolute inset-0 z-20 bg-black/35 hover:bg-black/25 flex flex-col items-center justify-center gap-3.5 cursor-pointer transition-colors duration-200"
              >
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-blue-600 hover:bg-blue-700 border border-white/30 flex items-center justify-center text-white shadow-xl transition-transform duration-200 hover:scale-105">
                  <Play className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white translate-x-0.5" />
                </div>
                <span className="px-3.5 py-1 rounded-full bg-white/90 backdrop-blur-xs border border-slate-200 text-xs text-slate-900 font-semibold shadow-md">
                  Watch SFA Overview (2 mins)
                </span>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

