"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { clientsData } from "@/data/clients";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { ArrowRight, Sparkles } from "lucide-react";

export const ClientsBentoGrid: React.FC = () => {
  // Helper to visually balance logos with solid backgrounds or edge-to-edge typography
  const getBentoLogoClasses = (id: string) => {
    switch (id) {
      case "anton":
        return "max-h-8 sm:max-h-10 max-w-[110px] sm:max-w-[130px]";
      case "hasky":
        return "max-h-6 sm:max-h-7 max-w-[90px] sm:max-w-[110px]";
      case "lanwa-cement":
        return "max-h-7 sm:max-h-8 max-w-[95px] sm:max-w-[115px]";
      case "cai":
        return "max-h-9 sm:max-h-11 max-w-[95px] sm:max-w-[115px]";
      default:
        return "max-h-full max-w-[130px] sm:max-w-[155px]";
    }
  };

  return (
    <section id="clients-grid" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100 font-sans relative scroll-mt-12">
      <Container>
        {/* Section Header with Reveal */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <Reveal delay={0} yOffset={16}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-[11px] font-mono tracking-widest text-blue-600 uppercase font-semibold mb-6 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>ENTERPRISE CLIENT NETWORK</span>
            </div>
          </Reveal>

          <Reveal delay={0.08} yOffset={20}>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight leading-[1.2] mb-5 font-sans text-balance">
              Trusted by{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Sri Lanka&apos;s Market Leaders
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16} yOffset={16}>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
              Powering islandwide field distribution, van billing, and real-time operations
              for Sri Lanka&apos;s leading enterprise conglomerates and FMCG networks.
            </p>
          </Reveal>
        </div>

        {/* Clean Logo Grid Card with Reveal */}
        <Reveal delay={0.14} yOffset={24}>
          <div className="max-w-6xl mx-auto rounded-2xl md:rounded-3xl border border-slate-200/90 bg-white overflow-hidden shadow-xs">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 -mr-[1px] -mb-[1px]">
              {clientsData.map((client, index) => {
                const isDefaultHighlighted = index === 2;
                const isLastItem = index === clientsData.length - 1;

                return (
                  <div
                    key={client.id}
                    className={`flex flex-col items-center justify-center p-7 sm:p-9 lg:p-11 text-center transition-all duration-200 group border-b border-r border-slate-200/80 cursor-pointer ${
                      isLastItem ? "col-span-2 md:col-span-1" : ""
                    } ${
                      isDefaultHighlighted
                        ? "bg-blue-50/40 hover:bg-blue-50/60"
                        : "bg-white hover:bg-blue-50/40"
                    }`}
                  >
                    {/* Client Logo */}
                    <div className="h-12 sm:h-14 w-full flex items-center justify-center mb-3 sm:mb-4 px-2">
                      <Image
                        src={client.logoUrl}
                        alt={client.name}
                        width={160}
                        height={56}
                        className={`w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-105 rounded-sm ${getBentoLogoClasses(client.id)}`}
                      />
                    </div>

                    {/* Client Name */}
                    <span
                      className={`text-xs sm:text-[13px] font-semibold transition-colors font-sans ${
                        isDefaultHighlighted
                          ? "text-blue-600"
                          : "text-slate-800 group-hover:text-blue-600"
                      }`}
                    >
                      {client.name}
                    </span>
                  </div>
                );
              })}

              {/* Seamless Grid Filler CTA Tile */}
              <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center gap-5 p-7 sm:p-9 lg:p-11 border-b border-r border-slate-200/80 bg-gradient-to-r from-slate-50/80 via-blue-50/30 to-indigo-50/30 col-span-2 md:col-span-1 lg:col-span-3">
                <div className="text-center md:text-left">
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1 font-sans">
                    Join 50+ Top Enterprise Brands Across Sri Lanka
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
                    Deploy robust van sales automation, Bluetooth billing, and ERP synchronization in under 2 weeks.
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-xs transition-all shrink-0 group active:scale-95"
                >
                  <span>Talk to Our Team</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
