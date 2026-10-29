"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

interface StatementQuoteProps {
  subtitle?: string;
  statement: React.ReactNode;
  pillText: string;
  id?: string;
  className?: string;
}

export const StatementQuote: React.FC<StatementQuoteProps> = ({
  subtitle = "Purpose-Built for Island-Wide FMCG Distribution",
  statement,
  pillText,
  id,
  className = "",
}) => {
  return (
    <section
      id={id}
      className={`py-14 sm:py-18 lg:py-24 bg-[#FFFFFF] border-b border-slate-100 font-sans relative select-none ${className}`}
    >
      <Container>
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Top Quote Icon with Reveal */}
          <Reveal delay={0} yOffset={16}>
            <div className="flex items-center justify-center mb-5 sm:mb-6">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 drop-shadow-xs"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </Reveal>

          {/* Subtitle - Blue text */}
          <Reveal delay={0.08} yOffset={18}>
            <span className="inline-block text-xs sm:text-sm font-semibold tracking-wider uppercase text-blue-600 font-mono mb-4 sm:mb-5">
              {subtitle}
            </span>
          </Reveal>

          {/* Main Statement Quote */}
          <Reveal delay={0.16} yOffset={24}>
            <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-medium text-slate-900 tracking-tight leading-[1.25] sm:leading-[1.2] mb-8 sm:mb-10 font-sans max-w-3xl lg:max-w-4xl text-balance">
              {statement}
            </h2>
          </Reveal>

          {/* Bottom Bar */}
          <Reveal delay={0.24} yOffset={20} className="w-full">
            <div className="w-full relative mt-2 py-4 sm:py-5 flex items-center justify-center rounded-2xl overflow-hidden border border-blue-100/60 shadow-xs">
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, #FFFFFF 0%, #EBF3FE 15%, #DFEEFD 50%, #EBF3FE 85%, #FFFFFF 100%)",
                }}
              />
              <p className="relative z-10 text-xs sm:text-sm md:text-[15px] font-medium text-blue-700 text-center leading-relaxed px-4 sm:px-8">
                {pillText}
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
