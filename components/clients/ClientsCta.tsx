"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { MessageSquare, ArrowRight } from "lucide-react";

export const ClientsCta: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white font-sans relative border-b border-slate-100">
      <Container>
        <Reveal delay={0.08} yOffset={24}>
          {/* Vibrant Modern Tech Blue Banner matching reference screenshot */}
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#2E6CF6] via-[#2D68FE] to-[#3B7BFF] shadow-[0_24px_64px_-16px_rgba(46,108,246,0.38)] border border-blue-400/30">
            {/* Subtle Grid Pattern Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.08]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #FFFFFF 1px, transparent 1px),
                  linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)
                `,
                backgroundSize: "36px 36px",
              }}
            />

            {/* Subtle Center Radial Glow Overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.12) 0%, transparent 70%)",
              }}
            />

            {/* Inner Content Centered */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-14 sm:py-16 md:py-20 lg:py-24 max-w-4xl mx-auto">
              {/* Heading: Pure Crisp White matching screenshot */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium text-white tracking-tight leading-[1.15] text-balance max-w-3xl">
                Ready to Modernize Your <br className="hidden sm:inline" />
                Field Sales Fleet?
              </h2>

              {/* Subtitle / Paragraph */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-normal">
                Join Sri Lanka&apos;s leading consumer and industrial distributors. Schedule a 20-minute tailored walkthrough of the mobile app and management dashboard with our Colombo enterprise team.
              </p>

              {/* Dual Action Buttons matching screenshot style */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
                {/* Primary: Solid White Button with Right Arrow */}
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white hover:bg-slate-50 text-slate-900 font-semibold text-xs sm:text-[13px] tracking-wider uppercase shadow-xs transition-all duration-150 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] group cursor-pointer"
                >
                  <span>Talk to Our Team</span>
                  <ArrowRight className="w-4 h-4 text-slate-900 transition-transform group-hover:translate-x-1" />
                </Link>

                {/* Secondary: Solid Black Button with Right Arrow */}
                <button
                  onClick={() => window.open(siteConfig.links.whatsappChat, "_blank")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-black hover:bg-neutral-900 text-white font-semibold text-xs sm:text-[13px] tracking-wider uppercase shadow-xs transition-all duration-150 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] border border-black/40 group cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4 text-white/80 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
