"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import {
  FileText,
  MapPin,
  CreditCard,
  Store,
  RefreshCw,
  Target,
  Camera,
  Layers,
  ArrowRight,
  Printer,
} from "lucide-react";

export const Features: React.FC = () => {
  const [activeWorkflow, setActiveWorkflow] = useState("invoicing");

  const workflowCategories = [
    { id: "invoicing", label: "Field Invoicing & Van Sales", icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
    { id: "routes", label: "Route & Beat Planning", icon: MapPin, color: "text-emerald-600", bg: "bg-emerald-50" },
    { id: "collections", label: "Payments & Receivables", icon: CreditCard, color: "text-indigo-600", bg: "bg-indigo-50" },
    { id: "retailers", label: "Retailer & Outlet Management", icon: Store, color: "text-amber-600", bg: "bg-amber-50" },
    { id: "returns", label: "Returns & Stock Reconciliation", icon: RefreshCw, color: "text-rose-600", bg: "bg-rose-50" },
    { id: "targets", label: "Targets & Performance", icon: Target, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <section id="features" className="py-14 sm:py-16 lg:py-20 bg-[#FFFFFF] border-b border-slate-200/80 font-sans relative scroll-mt-20">
      <Container className="relative z-10">
        {/* Editorial Section Header with Reveal */}
        <div className="flex flex-col items-start max-w-3xl mb-10 sm:mb-12">
          <Reveal delay={0} yOffset={16}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200/80 mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-semibold text-blue-900 tracking-wider uppercase font-mono">
                Core Capabilities
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08} yOffset={20}>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight leading-[1.2] font-sans text-balance">
              Built for the speed of{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Sri Lankan distribution.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16} yOffset={16}>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every capability in Prima SFA is engineered around the actual daily rhythm of field sales reps, depot managers, and executive finance teams.
            </p>
          </Reveal>
        </div>

        {/* Asymmetrical 2-Column Workflow Showcase with Reveal */}
        <Reveal delay={0.12} yOffset={24} className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-stretch">
          {/* Left Column: Interactive Workflow Directory (Full Height Matching Right Side Content) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5 h-full">
            {workflowCategories.map((wf) => {
              const Icon = wf.icon;
              const isSelected = activeWorkflow === wf.id;
              return (
                <button
                  key={wf.id}
                  onClick={() => setActiveWorkflow(wf.id)}
                  className={`w-full flex-1 text-left px-4 py-3 sm:py-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-white border-blue-600 text-slate-900 shadow-md ring-1 ring-blue-600/20"
                      : "bg-slate-50/70 border-slate-200 text-slate-600 hover:bg-white hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors shrink-0 ${
                        isSelected ? "bg-blue-600 text-white shadow-xs" : `${wf.bg} ${wf.color}`
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold">{wf.label}</span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform shrink-0 ${
                      isSelected ? "text-blue-600 translate-x-1" : "text-slate-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Product Showcase Panel (Clean Presentation with Badge Attached to Image) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm text-slate-900 overflow-hidden flex flex-col justify-between h-full">
            {activeWorkflow === "invoicing" && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-sans mb-2">
                    Generate tax-compliant receipts at the retail counter in 15 seconds.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Reps pick items from van inventory with applied promotional schemes, auto-calculated VAT/NBT, and immediate Bluetooth ESC/POS printing. No cellular coverage required.
                  </p>
                </div>

                {/* Screenshot Display with Attached Badge */}
                <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 group">
                  <Image
                    src="/resources/fieldinvoicing.png"
                    alt="Field Invoicing and Van Sales Interface"
                    width={900}
                    height={420}
                    className="w-full h-auto max-h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Badge Attached Directly in the Image */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="text-xs font-semibold text-emerald-800 bg-white/95 backdrop-blur-md border border-emerald-300 px-3 py-1 rounded-full shadow-md">
                      100% Offline Capable
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeWorkflow === "routes" && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-sans mb-2">
                    Sequential customer beats with GPS check-in verification.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Supervisors map fixed routes per weekday. Reps navigate prioritized stop lists with automatic timestamps and outlet compliance indicators.
                  </p>
                </div>

                {/* Screenshot Display with Attached Badge */}
                <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 group">
                  <Image
                    src="/resources/route_planning.png"
                    alt="Route and Beat Planning Interface"
                    width={900}
                    height={420}
                    className="w-full h-auto max-h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Badge Attached Directly in the Image */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="text-xs font-semibold text-blue-800 bg-white/95 backdrop-blur-md border border-blue-300 px-3 py-1 rounded-full shadow-md">
                      GPS Geofenced
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeWorkflow === "collections" && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-sans mb-2">
                    Close daily accounts with complete cheque and cash audit trails.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Reps collect post-dated cheques (PDC), capture bank branch details and due dates, or accept cash against outstanding invoice balances.
                  </p>
                </div>

                {/* Screenshot Display with Attached Badge */}
                <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 group">
                  <Image
                    src="/resources/payments_receivables.png"
                    alt="Payments and Receivables Tracking"
                    width={900}
                    height={420}
                    className="w-full h-auto max-h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Badge Attached Directly in the Image */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="text-xs font-semibold text-indigo-800 bg-white/95 backdrop-blur-md border border-indigo-300 px-3 py-1 rounded-full shadow-md">
                      PDC &amp; Cash Split
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeWorkflow === "retailers" && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-sans mb-2">
                    Comprehensive 360° outlet credit history in rep hands.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Prevent unauthorized credit extension. View debtor-aging, return rates, past invoice history, and preferred order patterns directly at the store.
                  </p>
                </div>

                {/* Screenshot Display with Attached Badge */}
                <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 group">
                  <Image
                    src="/resources/outlet_management.png"
                    alt="Retailer and Outlet Management Interface"
                    width={900}
                    height={420}
                    className="w-full h-auto max-h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Badge Attached Directly in the Image */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="text-xs font-semibold text-amber-800 bg-white/95 backdrop-blur-md border border-amber-300 px-3 py-1 rounded-full shadow-md">
                      Credit Limits
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeWorkflow === "returns" && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-sans mb-2">
                    Damage logging, expiry swaps, and 15-minute van stock reconciliation.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Log damage or expiry return reasons at the point of exchange. Automated credit notes deduct from the day&apos;s settlement, ensuring accurate depot inventory.
                  </p>
                </div>

                {/* Screenshot Display with Attached Badge */}
                <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 group">
                  <Image
                    src="/resources/returns_stock.png"
                    alt="Returns and Stock Reconciliation"
                    width={900}
                    height={420}
                    className="w-full h-auto max-h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Badge Attached Directly in the Image */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="text-xs font-semibold text-rose-800 bg-white/95 backdrop-blur-md border border-rose-300 px-3 py-1 rounded-full shadow-md">
                      Van Audit
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeWorkflow === "targets" && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-sans mb-2">
                    Daily revenue pacing for reps and regional managers.
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    Keep field teams motivated with clear visibility into their daily target run-rate, commission tiers, and SKU-level focus incentives.
                  </p>
                </div>

                {/* Screenshot Display with Attached Badge */}
                <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md bg-slate-950 group">
                  <Image
                    src="/resources/target.png"
                    alt="Targets and Performance Tracking"
                    width={900}
                    height={420}
                    className="w-full h-auto max-h-[420px] object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Badge Attached Directly in the Image */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="text-xs font-semibold text-purple-800 bg-white/95 backdrop-blur-md border border-purple-300 px-3 py-1 rounded-full shadow-md">
                      Live Quota
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Reveal>

        {/* 3 Focused Supporting Capability Cards with Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <Reveal delay={0.05} yOffset={24} className="h-full">
            <div
              className="h-full relative rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-300/80 transition-all duration-300 group min-h-[230px]"
              style={{
                backgroundImage: `radial-gradient(rgba(148, 163, 184, 0.28) 1px, transparent 1px)`,
                backgroundSize: "16px 16px",
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 font-sans tracking-tight">
                    01. Shelf &amp; Merchandising Photos
                  </h4>
                  <Camera className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Capture GPS-tagged outlet display and competition presence photos directly linked to rep visit records.
                </p>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-slate-200 bg-white/95 text-[10px] sm:text-[11px] font-bold text-slate-800 tracking-wider uppercase font-mono shadow-2xs">
                  GPS MERCHANDISING
                </span>
              </div>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={0.12} yOffset={24} className="h-full">
            <div
              className="h-full relative rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-300/80 transition-all duration-300 group min-h-[230px]"
              style={{
                backgroundImage: `radial-gradient(rgba(148, 163, 184, 0.28) 1px, transparent 1px)`,
                backgroundSize: "16px 16px",
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 font-sans tracking-tight">
                    02. Multi-Tier Promotional Schemes
                  </h4>
                  <Layers className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Execute buy-X-get-Y, invoice-level discounts, or dealer-tier cash rebates without rep arithmetic errors.
                </p>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-slate-200 bg-white/95 text-[10px] sm:text-[11px] font-bold text-slate-800 tracking-wider uppercase font-mono shadow-2xs">
                  PROMOTIONAL ENGINE
                </span>
              </div>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={0.19} yOffset={24} className="h-full">
            <div
              className="h-full relative rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md hover:border-blue-300/80 transition-all duration-300 group min-h-[230px]"
              style={{
                backgroundImage: `radial-gradient(rgba(148, 163, 184, 0.28) 1px, transparent 1px)`,
                backgroundSize: "16px 16px",
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 font-sans tracking-tight">
                    03. Hardware &amp; Printer Compatibility
                  </h4>
                  <Printer className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Compatible with standard 2-inch and 3-inch ESC/POS thermal printers, rugged Android handhelds, and mobile phones.
                </p>
              </div>
              <div className="mt-8">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full border border-slate-200 bg-white/95 text-[10px] sm:text-[11px] font-bold text-slate-800 tracking-wider uppercase font-mono shadow-2xs">
                  HARDWARE COMPATIBLE
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};
