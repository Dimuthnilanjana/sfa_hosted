"use client";

import React from "react";
import { Container } from "../ui/Container";

export const AboutPurpose: React.FC = () => {
  const cards = [
    {
      title: "People First",
      badge: "FIELD-CENTRIC DESIGN",
      desc: "Designed to support sales teams in the field and in the office.",
      tags: ["Field Sales Reps", "Van Drivers", "Sales Supervisors", "Finance Teams"],
    },
    {
      title: "Practical Solutions",
      badge: "OPERATIONAL WORKFLOWS",
      desc: "Built around real business processes and operational needs.",
      tags: ["Van Sales Invoicing", "Cheque Collection", "Route Tracking", "Inventory Audits"],
    },
    {
      title: "Better Outcomes",
      badge: "MEASURABLE IMPACT",
      desc: "Helping businesses gain visibility, control, and sustainable growth.",
      tags: ["Real-time Visibility", "Zero Cash Leakage", "Route Adherence", "Faster Reconciliation"],
    },
  ];

  return (
    <section id="purpose" className="py-14 sm:py-16 lg:py-20 bg-[#FFFFFF] border-b border-slate-100 font-sans relative scroll-mt-12">
      <Container>
        {/* Centered Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          {/* Pill Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-[11px] font-mono tracking-widest text-blue-600 uppercase font-semibold mb-6 shadow-2xs">
            OUR PURPOSE
          </div>

          {/* Main Headline: 42px on desktop, font-medium, 2-color gradient */}
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight leading-[1.2] mb-5 font-sans">
            Built to Empower <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Field Sales Teams.
            </span>
          </h2>

          {/* Centered Supporting Paragraph */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
            We believe technology can make field sales simpler, more organized, and more effective. Our purpose is to provide businesses with a reliable solution that connects people, processes, and information — helping teams work smarter every day.
          </p>
        </div>

        {/* 3 Modern Cards Matching Reference Screenshot with Plus-Grid Texture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c, idx) => {
            return (
              <div
                key={idx}
                className="relative rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-9 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                {/* Subtle Plus-Grid Pattern Layer Matching Reference */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-60 rounded-3xl"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 9.5V14.5M9.5 12H14.5' stroke='%23CBD5E1' stroke-width='1.2' stroke-linecap='round'/%3E%3C/svg%3E")`,
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-start">
                  {/* Title at Top */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-7 sm:mb-8 font-sans">
                    {c.title}
                  </h3>

                  {/* Capsule Pill Badge in Middle */}
                  <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-slate-200/90 bg-white/95 shadow-2xs mb-7 sm:mb-8">
                    <span className="text-[11px] sm:text-xs font-bold text-slate-800 tracking-wider uppercase font-mono">
                      {c.badge}
                    </span>
                  </div>

                  {/* Description at Bottom */}
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal mb-8">
                    {c.desc}
                  </p>
                </div>

                {/* Pill Chips at the Bottom Preserving All Details */}
                <div className="relative z-10 flex flex-wrap gap-2 pt-5 border-t border-slate-200/70 mt-auto">
                  {c.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-full text-xs font-medium text-slate-600 bg-white/90 border border-slate-200/80 shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
