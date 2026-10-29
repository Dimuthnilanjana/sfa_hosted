import React from "react";
import Image from "next/image";
import { clientsData } from "@/data/clients";
import { Reveal } from "../ui/Reveal";

export const TrustStrip: React.FC = () => {
  // Split clients into two rows
  const half = Math.ceil(clientsData.length / 2);
  const row1Data = clientsData.slice(0, half);
  const row2Data = clientsData.slice(half);

  // Duplicate for seamless infinite loop (at least 4x to ensure uninterrupted scroll on wide screens)
  const row1 = [...row1Data, ...row1Data, ...row1Data, ...row1Data];
  const row2 = [...row2Data, ...row2Data, ...row2Data, ...row2Data];

  // Helper to optically balance logos with solid backgrounds or edge-to-edge typography
  const getLogoSizeClasses = (id: string) => {
    switch (id) {
      case "anton":
        return "h-7 sm:h-9 md:h-10 max-w-[120px] sm:max-w-[150px] md:max-w-[170px]";
      case "hasky":
        return "h-6 sm:h-7 md:h-8 max-w-[95px] sm:max-w-[120px] md:max-w-[135px]";
      case "lanwa-cement":
        return "h-6 sm:h-8 md:h-9 max-w-[100px] sm:max-w-[125px] md:max-w-[145px]";
      case "cai":
        return "h-8 sm:h-10 md:h-12 max-w-[110px] sm:max-w-[135px] md:max-w-[155px]";
      default:
        return "h-10 sm:h-14 md:h-16 max-w-[170px] sm:max-w-[210px] md:max-w-[240px]";
    }
  };

  return (
    <section className="py-10 sm:py-14 bg-white relative overflow-hidden font-helvetica select-none border-y border-slate-200/80">
      {/* Background Subtle Grid Pattern with reduced opacity */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0f172a 1px, transparent 1px),
            linear-gradient(to bottom, #0f172a 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px"
        }}
      />

      {/* Subtle radial vignette/glow for extra polish */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-white/40 to-white pointer-events-none" />

      {/* Top Header Section with Reveal */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 mb-8 sm:mb-10">
        <Reveal delay={0} yOffset={16}>
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-xs font-semibold text-blue-900 tracking-wider uppercase font-mono">Our Distribution Network</span>
          </div>
        </Reveal>

        <Reveal delay={0.08} yOffset={20}>
          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight leading-[1.2] text-balance">
            Trusted by <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">20+ Industry Leaders</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16} yOffset={16}>
          {/* Subtitle description */}
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Powering field sales teams, distributor depots, and FMCG brand leaders across all 25 districts of Sri Lanka.
          </p>
        </Reveal>
      </div>

      {/* Infinite Scrolling Logo Containers with Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 sm:gap-8 z-10">
        {/* Left & Right Edge Fade Gradients into White */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Scrolling to RIGHT (marquee-reverse) */}
        <div className="flex w-max items-center gap-10 sm:gap-16 animate-marquee-reverse hover:[animation-play-state:paused]">
          {row1.map((client, index) => (
            <div
              key={`row1-${client.id}-${index}`}
              className="flex items-center justify-center h-16 sm:h-20 px-4 transition-transform duration-300 hover:scale-105 shrink-0"
              title={client.name}
            >
              <Image
                src={client.logoUrl}
                alt={client.name}
                width={180}
                height={64}
                className={`w-auto object-contain transition-all duration-300 rounded-sm ${getLogoSizeClasses(client.id)}`}
              />
            </div>
          ))}
        </div>

        {/* Row 2: Scrolling to LEFT (marquee) */}
        <div className="flex w-max items-center gap-10 sm:gap-16 animate-marquee hover:[animation-play-state:paused]">
          {row2.map((client, index) => (
            <div
              key={`row2-${client.id}-${index}`}
              className="flex items-center justify-center h-16 sm:h-20 px-4 transition-transform duration-300 hover:scale-105 shrink-0"
              title={client.name}
            >
              <Image
                src={client.logoUrl}
                alt={client.name}
                width={180}
                height={64}
                className={`w-auto object-contain transition-all duration-300 rounded-sm ${getLogoSizeClasses(client.id)}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
