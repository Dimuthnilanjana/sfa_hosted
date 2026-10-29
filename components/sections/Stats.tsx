"use client";

import React from "react";
import { Container } from "../ui/Container";
import { CountUp } from "../ui/CountUp";
import { statsData } from "@/data/stats";

export const Stats: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-dark-navy-ambient text-white relative overflow-hidden border-y border-white/[0.06] font-helvetica">

      <Container className="relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {statsData.map((stat, idx) => (
            <div
              key={stat.id}
              className={`flex flex-col items-center text-center ${
                idx > 0 ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8" : ""
              }`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-aqua-400 via-cyan-300 to-radiant-400 mb-2 font-mono drop-shadow-[0_0_25px_rgba(0,210,255,0.35)]">
                <CountUp
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={2200}
                />
              </div>

              <div className="text-sm font-semibold text-slate-300 max-w-[200px] leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
