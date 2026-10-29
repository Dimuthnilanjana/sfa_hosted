"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/Container";

export const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 min-h-[500px] lg:min-h-[560px] flex items-center py-16 sm:py-20 lg:py-24 font-sans">
      {/* Dynamic Keyframes for 3D Y-Axis Slow Coin Rotation */}
      <style>{`
        @keyframes coinSpinY {
          0% {
            transform: perspective(1000px) rotateY(0deg);
          }
          100% {
            transform: perspective(1000px) rotateY(360deg);
          }
        }
        .animate-coin-spin {
          animation: coinSpinY 12s linear infinite;
          transform-style: preserve-3d;
        }
        .animate-coin-spin:hover {
          animation-play-state: paused;
        }
        .coin-face-front {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .coin-face-back {
          transform: rotateY(180deg);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>

      {/* Background Image: public/resources/about.jpg */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none select-none opacity-90"
        style={{
          backgroundImage: `url('/resources/about.jpg')`,
        }}
      />

      {/* Multi-layer Dark Gradient & Vignette Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/75 via-black/55 to-black/35 pointer-events-none" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/45 via-transparent to-black/55 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Hero Actions */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col items-start text-left">
            {/* Translucent Pill Badge with Blue Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.14] text-[11px] sm:text-xs font-mono tracking-wider uppercase text-white/80 mb-6 backdrop-blur-md shadow-sm">
              <span className="w-1.5 h-1.5 rounded-xs bg-blue-500 shrink-0" />
              <span>FULL-STACK SFA TEAM — ELIMINATING SALES LEAKAGE AND GUESSWORK.</span>
            </div>

            {/* Headline: Crisp White + Gradient Accent Second Line, 42px on desktop, font-medium */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-white tracking-tight leading-[1.2] mb-5 font-sans">
              Field Sales &amp; Distribution <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Built for Predictable Growth
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal max-w-2xl mb-9">
              If your field sales operations feel scattered across manual bills, delayed
              collections, and guesswork on the road, here is how partnering with one
              unified platform connects your entire distribution.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Primary Glowing Blue CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-500 text-white font-semibold text-sm shadow-[0_0_24px_rgba(37,99,235,0.45)] hover:shadow-[0_0_30px_rgba(37,99,235,0.65)] transition-all duration-200 cursor-pointer active:scale-95"
              >
                Book Discovery Call
              </Link>

              {/* Secondary Glassy Dark Button - Move to Timeline */}
              <a
                href="#journey"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95"
              >
                See Our Journey
              </a>
            </div>
          </div>

          {/* Right Column: 3D Rotating 20-Years Anniversary Medallion Coin */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col items-center justify-center">
            <div className="relative flex items-center justify-center group cursor-pointer">
              {/* Subtle Ambient Radial Lighting Behind Coin */}
              <div className="absolute -inset-6 sm:-inset-10 bg-gradient-to-tr from-blue-600/30 via-sky-400/25 to-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

              {/* Coin 3D Wrapper */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 perspective-[1000px]">
                <div className="w-full h-full relative animate-coin-spin">
                  {/* Front Face */}
                  <div className="coin-face-front absolute inset-0 w-full h-full flex items-center justify-center filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)]">
                    <Image
                      src="/resources/20years.png"
                      alt="20 Years of Excellence (2006 - 2026) Medallion Coin"
                      width={320}
                      height={320}
                      className="w-full h-full object-contain pointer-events-none select-none"
                      priority
                    />
                  </div>

                  {/* Back Face (Mirrored scaleX to ensure text reads correctly from both sides) */}
                  <div className="coin-face-back absolute inset-0 w-full h-full flex items-center justify-center filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.6)]">
                    <Image
                      src="/resources/20years.png"
                      alt="20 Years of Excellence (2006 - 2026) Medallion Coin"
                      width={320}
                      height={320}
                      className="w-full h-full object-contain pointer-events-none select-none -scale-x-100"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Milestone Indicator */}
            <div className="mt-4 px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-mono tracking-widest text-sky-300 uppercase shadow-xs">
              2006 — 2026 &bull; 20 YEARS OF EXCELLENCE
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
