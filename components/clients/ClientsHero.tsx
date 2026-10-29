"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";

export const ClientsHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 min-h-[460px] lg:min-h-[520px] flex items-center py-16 sm:py-20 lg:py-24 font-sans">
      {/* Background Image: public/resources/about.jpg (matching About hero) */}
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
        <div className="max-w-3xl flex flex-col items-start text-left">
          {/* Translucent Pill Badge with Blue Indicator */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.14] text-[11px] sm:text-xs font-mono tracking-wider uppercase text-white/80 mb-6 backdrop-blur-md shadow-sm">
            <span className="w-1.5 h-1.5 rounded-xs bg-blue-500 shrink-0" />
            <span>ENTERPRISE FLEET TRACK RECORD — TRUSTED BY SRI LANKA&apos;S LARGEST NETWORKS.</span>
          </div>

          {/* Headline: 42px on desktop, font-medium, 2-color gradient style */}
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-white tracking-tight leading-[1.2] mb-5 font-sans">
            Trusted by Market Leaders <br />
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
              Across Every Island Route.
            </span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal max-w-2xl mb-9">
            From nationwide FMCG conglomerates to regional van sales fleets, discover how
            Sri Lanka&apos;s leading consumer, agricultural, and industrial distributors run their
            operations with Prima SFA.
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

            {/* Secondary Glassy Dark Button */}
            <a
              href="#reviews"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95"
            >
              See Client Stories
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
