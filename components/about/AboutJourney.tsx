"use client";

import React from "react";
import { Building2, Settings, Rocket, Smartphone } from "lucide-react";
import { Container } from "../ui/Container";

export const AboutJourney: React.FC = () => {
  const milestones = [
    {
      year: "2006",
      title: "Prima Management Services established",
      icon: Building2,
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      year: "2010",
      title: "First SFA implementation for Ceylon Agro Industries Limited",
      icon: Settings,
      color: "bg-blue-50 text-blue-600 border-blue-200",
    },
    {
      year: "2013",
      title: "SFA officially launched",
      icon: Rocket,
      color: "bg-indigo-50 text-indigo-600 border-indigo-200",
    },
    {
      year: "2018",
      title: "Cross-platform SFA solution launched",
      icon: Smartphone,
      color: "bg-purple-50 text-purple-600 border-purple-200",
    },
  ];

  return (
    <section id="journey" className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-200/80 font-sans relative overflow-hidden">
      {/* Decorative Wavy Curve */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <svg
          className="w-full h-full text-blue-200/50"
          viewBox="0 0 1440 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 300 C 400 150, 900 450, 1440 250"
            stroke="url(#journey-wave)"
            strokeWidth="2"
            strokeDasharray="4 6"
          />
          <defs>
            <linearGradient id="journey-wave" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#6366F1" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Journey Overview */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 border border-blue-200/70 mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-bold text-blue-700 tracking-wider uppercase font-mono">
                OUR JOURNEY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight leading-[1.2] mb-6 font-sans">
              A Continued <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">Commitment to Innovation</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Our journey reflects our commitment to developing practical solutions that help businesses manage their sales operations more effectively.
            </p>
          </div>

          {/* Right Column: Responsive Timeline */}
          <div className="lg:col-span-8 w-full">
            {/* Desktop & Tablet: Horizontal Flow */}
            <div className="hidden sm:block relative pt-8 pb-4">
              {/* Connecting Line */}
              <div className="absolute top-14 left-8 right-8 h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 rounded-full" />

              {/* 4 Nodes */}
              <div className="grid grid-cols-4 gap-4 relative z-10">
                {milestones.map((m, idx) => {
                  const Icon = m.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center group">
                      {/* Node Circle */}
                      <div
                        className={`w-12 h-12 rounded-full border-2 ${m.color} bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300 relative z-10`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>

                      {/* Year */}
                      <span className="text-xl font-extrabold text-blue-600 tracking-tight mb-2 font-sans">
                        {m.year}
                      </span>

                      {/* Description */}
                      <p className="text-xs text-slate-600 font-normal leading-relaxed max-w-[170px]">
                        {m.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile: Vertical Timeline */}
            <div className="sm:hidden relative pl-6 border-l-2 border-gradient-to-b border-blue-400 space-y-8">
              {milestones.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div key={idx} className="relative flex flex-col items-start text-left">
                    {/* Node Dot */}
                    <div
                      className={`absolute -left-[37px] top-0 w-10 h-10 rounded-full border-2 ${m.color} bg-white flex items-center justify-center shadow-xs`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>

                    <span className="text-lg font-extrabold text-blue-600 tracking-tight font-sans">
                      {m.year}
                    </span>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed font-normal">
                      {m.title}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
