import React from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Search, RotateCw, CreditCard, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Plan Beats & Load Van",
      desc: "Supervisors assign morning route sequences and verify physical van inventory loading at the depot.",
      icon: Search,
      svgUrl: "/resources/plan_card.svg",
      svgAlt: "Plan beats and load van animation",
    },
    {
      step: "02",
      title: "Execute Outlet Visits",
      desc: "Reps navigate geofenced stops, record orders, calculate schemes, and print Bluetooth invoices.",
      icon: RotateCw,
      svgUrl: "/resources/rep_card.svg",
      svgAlt: "Execute outlet visits animation",
    },
    {
      step: "03",
      title: "Collect Payments & Returns",
      desc: "Record cash collections, post-dated cheques (PDC), and log damaged or expired inventory returns.",
      icon: CreditCard,
      svgUrl: "/resources/payments_card.svg",
      svgAlt: "Collect payments and returns animation",
    },
    {
      step: "04",
      title: "Settle Depot & Review",
      desc: "15-minute end-of-day van settlement with instant ERP sync, debtor update, and executive reporting.",
      icon: Zap,
      svgUrl: "/resources/review_card.svg",
      svgAlt: "Settle depot and review animation",
    },
  ];

  return (
    <section id="how" className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E5E7EB] font-sans relative scroll-mt-20">
      <Container>
        {/* Editorial Section Header with Reveal */}
        <div className="flex flex-col items-start max-w-3xl mb-12 sm:mb-14">
          <Reveal delay={0} yOffset={16}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF6FF] border border-[#D7E7FA] mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse" />
              <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase font-mono">
                The Daily Operational Cycle
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08} yOffset={20}>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight leading-[1.2] text-balance">
              How Prima SFA works in{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                four daily stages.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16} yOffset={16}>
            <p className="mt-4 text-base sm:text-lg text-[#4B5563] leading-relaxed font-normal">
              From morning loading at the distributor warehouse to evening reconciliation and executive visibility.
            </p>
          </Reveal>
        </div>

        {/* Seamless Full-Width Connected Grid Container with Reveal */}
        <Reveal delay={0.12} yOffset={26}>
          <div className="border border-[#E5E7EB] rounded-2xl overflow-hidden bg-[#FFFFFF] shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.step}
                  className={cn(
                    "flex flex-col justify-between p-6 sm:p-7 lg:p-8 transition-colors duration-200 hover:bg-slate-50/70 group bg-white",
                    idx < 3 ? "border-b md:border-b-0" : "",
                    idx < 2 ? "md:border-b lg:border-b-0" : "",
                    idx % 2 === 0 ? "md:border-r" : "",
                    idx < 3 ? "lg:border-r" : "",
                    "border-[#E5E7EB]"
                  )}
                >
                  <div>
                    {/* Top Stage Indicator Header */}
                    <div className="flex items-center justify-between mb-4 pb-2.5 border-b border-slate-100">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#EFF6FF] border border-[#D7E7FA] text-[#2563EB]">
                        Stage {st.step}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        Phase {idx + 1} of 4
                      </span>
                    </div>

                    {/* Icon + Title Header Row */}
                    <div className="flex items-start gap-2.5 mb-3">
                      <Icon className="w-5 h-5 text-[#111827] shrink-0 mt-0.5 group-hover:text-[#2563EB] transition-colors" />
                      <h3 className="text-base sm:text-lg font-bold text-[#111827] font-sans leading-snug group-hover:text-[#2563EB] transition-colors">
                        {st.title}
                      </h3>
                    </div>

                    {/* Attached Animated SVG Container */}
                    <div className="w-full h-36 sm:h-40 my-3 flex items-center justify-center overflow-hidden bg-transparent border-none p-0">
                      <Image
                        src={st.svgUrl}
                        alt={st.svgAlt}
                        width={280}
                        height={160}
                        className="w-full h-full object-contain pointer-events-none drop-shadow-xs group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Description Copy */}
                    <p className="text-xs sm:text-[13px] text-[#4B5563] leading-relaxed font-normal">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};
