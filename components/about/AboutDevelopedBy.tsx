"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "../ui/Container";

export const AboutDevelopedBy: React.FC = () => {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-white border-b border-slate-100 font-sans relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: PMS Partner Information */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-bold text-blue-600 tracking-wider uppercase font-mono">
                DEVELOPED BY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight leading-[1.2] mb-6 font-sans">
              A Trusted <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">Technology Partner</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6">
              Sales Force Automation is developed by Prima Management Services (Pvt) Ltd, a Sri Lankan IT services company and subsidiary of Prima Group. With experience in software development and IT-enabled services, PMS creates solutions designed to address real business needs.
            </p>

            <div className="space-y-2.5 mb-8">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Subsidiary of Prima Group Singapore</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>15+ Years Enterprise IT &amp; SFA Systems in Sri Lanka</span>
              </div>
            </div>

            <a
              href="https://primamanagement.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-sm transition-all duration-200 group cursor-pointer"
            >
              <span>Learn More About PMS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right Column: Corporate Headquarters Image with PMS Badge */}
          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_16px_48px_-10px_rgba(0,0,0,0.08)] bg-slate-50 group">
              <Image
                src="/resources/pms.webp"
                alt="Prima Management Services Technology Operations Headquarters"
                fill
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />

              {/* PMS Brand Badge in the Top Right (Matching reference design) */}
              <div className="absolute top-5 right-5 px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.1)] flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-blue-600 animate-pulse" />
                <span className="font-extrabold text-base tracking-wider text-slate-900 font-sans">
                  PMS
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
