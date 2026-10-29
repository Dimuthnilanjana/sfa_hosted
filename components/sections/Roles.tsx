"use client";

import React, { useState } from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Smartphone, Truck, BarChart3, CheckCircle2 } from "lucide-react";

export const Roles: React.FC = () => {
  const [activeRole, setActiveRole] = useState<"reps" | "distributors" | "management">("reps");

  const roles = [
    {
      id: "reps" as const,
      title: "Field Sales Reps",
      badge: "In The Van",
      icon: Smartphone,
      headline: "Zero billing errors. Fast outlet visits. 100% offline confidence.",
      desc: "Reps spend less time calculating discounts and writing paperwork, giving them more time to build retailer relationships and achieve targets.",
      benefits: [
        "15-second Bluetooth invoice printing at the counter",
        "Clear daily route sequence with GPS check-in prompts",
        "Pre-calculated promotional pricing schemes & tax tiers",
        "Instant view of customer credit terms and overdue balances",
        "Digital logging of returns, damage claims, and PDC cheques",
      ],
      metric: { val: "45 mins", label: "Saved per day on billing paperwork" },
    },
    {
      id: "distributors" as const,
      title: "Distributors & Depot Managers",
      badge: "At The Depot",
      icon: Truck,
      headline: "15-minute van settlement and live inventory reconciliation.",
      desc: "Eliminate evening accounting bottlenecks. Reconcile loaded goods against cash, cheques, and returns before reps leave the depot.",
      benefits: [
        "Morning loading sheets matched to van physical stock",
        "Live cash, cheque (PDC), and credit ledger tracking",
        "Automated credit note deduction for returned goods",
        "Real-time GPS visibility into route progression & rep location",
        "Direct export to Tally, SAP B1, or distributor ERP systems",
      ],
      metric: { val: "100%", label: "Cash & stock audit trail integrity" },
    },
    {
      id: "management" as const,
      title: "Executive & Sales Leadership",
      badge: "Head Office",
      icon: BarChart3,
      headline: "Live national revenue tracking and beat compliance analytics.",
      desc: "Gain instant visibility into secondary sales performance across territories without waiting for weekly or monthly manual consolidations.",
      benefits: [
        "Consolidated national and regional revenue dashboards",
        "Target vs achievement run-rate tracking by SKU and rep",
        "Territory beat compliance and outlet penetration metrics",
        "Debtor-aging and market credit exposure monitoring",
        "Fast response to stock shortages and competitor activity",
      ],
      metric: { val: "Zero", label: "Day-end reporting delay" },
    },
  ];

  const current = roles.find((r) => r.id === activeRole) || roles[0];
  const CurrentIcon = current.icon;

  return (
    <section id="benefits" className="relative py-14 sm:py-16 lg:py-20 font-sans overflow-hidden border-b border-white/10 bg-[#070B14]">
      {/* Background Image: sales.jpg */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/resources/sales.jpg')`,
        }}
      />

      {/* Dark Charcoal / Deep Navy Photographic Overlay with Subtle Contrast Gradient */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            linear-gradient(180deg, rgba(5, 8, 18, 0.78) 0%, rgba(7, 11, 22, 0.84) 50%, rgba(5, 8, 18, 0.90) 100%),
            radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.14) 0%, transparent 60%)
          `,
        }}
      />

      <Container className="relative z-10">
        {/* Editorial Section Header with Reveal */}
        <div className="flex flex-col items-start max-w-3xl mb-12 sm:mb-16">
          <Reveal delay={0} yOffset={16}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-5 backdrop-blur-md shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
              <span className="text-xs font-semibold text-[#BFDBFE] tracking-wider uppercase font-mono">
                Designed For Every Stakeholder
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08} yOffset={20}>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-white leading-[1.2] text-balance">
              Value tailored for the van,{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                the depot, and head office.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16} yOffset={16}>
            <p className="mt-4 text-base sm:text-lg text-[#B8C0CE] leading-relaxed font-normal">
              A successful field sales platform must serve everyone who touches it. SFA provides purpose-built interfaces for reps, distributor operations, and leadership.
            </p>
          </Reveal>
        </div>

        {/* Role Selector Tabs with Reveal */}
        <Reveal delay={0.12} yOffset={16} className="mb-10 w-full sm:w-auto">
          <div className="flex flex-col sm:inline-flex sm:flex-row p-1.5 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.35)] gap-1.5 sm:gap-2 w-full sm:w-auto">
            {roles.map((r) => {
              const Icon = r.icon;
              const isSelected = activeRole === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => setActiveRole(r.id)}
                  className={`flex items-center justify-start sm:justify-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer w-full sm:w-auto ${
                    isSelected
                      ? "bg-[#2563EB] text-white shadow-[0_0_20px_rgba(37,99,235,0.45)] border border-blue-400/40"
                      : "text-neutral-300 hover:text-white hover:bg-white/[0.08] border border-transparent"
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isSelected ? "text-white" : "text-neutral-400"}`} />
                  <span>{r.title}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Detailed Role Breakdown Card with Reveal */}
        <Reveal delay={0.2} yOffset={24}>
          <div className="rounded-2xl border border-white/15 bg-[rgba(18,22,34,0.72)] backdrop-blur-xl p-7 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          {/* Specular Top Reflection Line */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

          {/* Ambient Blue Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          {/* Left Column: Role Details & Benefits */}
          <div className="lg:col-span-8 flex flex-col items-start relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-xs font-semibold text-[#93C5FD] mb-4 backdrop-blur-md">
              <CurrentIcon className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>{current.badge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans mb-3 sm:mb-4 leading-tight tracking-tight">
              {current.headline}
            </h3>

            <p className="text-sm sm:text-base text-[#B8C0CE] leading-relaxed mb-8">
              {current.desc}
            </p>

            {/* Benefits in Apple-Style Glass Pill Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full">
              {current.benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md hover:border-blue-400/30 hover:bg-white/[0.07] transition-all duration-200 group"
                >
                  <div className="w-5 h-5 rounded-md bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#60A5FA]" />
                  </div>
                  <span className="text-xs sm:text-[13px] text-neutral-200 group-hover:text-white font-medium leading-relaxed">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Apple-Style Frosted Stat Card */}
          <div className="lg:col-span-4 flex justify-center relative z-10 w-full">
            <div className="w-full rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/15 p-8 text-center flex flex-col items-center justify-center shadow-xl relative overflow-hidden group hover:border-blue-400/30 transition-colors">
              {/* Inner Specular Highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              {/* Inner Gradient Tint */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />

              <div className="relative z-10 text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-blue-200 font-sans mb-2 tracking-tight">
                {current.metric.val}
              </div>
              <div className="relative z-10 text-xs sm:text-sm font-medium text-[#94A3B8] max-w-[200px] leading-snug">
                {current.metric.label}
              </div>

              {/* Sub-badge pill */}
              <div className="relative z-10 mt-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-[11px] font-mono font-medium text-[#93C5FD]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
                <span>Audited Performance</span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
      </Container>
    </section>
  );
};
