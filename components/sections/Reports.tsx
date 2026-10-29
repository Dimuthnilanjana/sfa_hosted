"use client";

import React, { useState } from "react";
import { Container } from "../ui/Container";
import { DashboardMock } from "../visuals/DashboardMock";
import { DollarSign, Users, PackageCheck, TrendingUp, BarChart2 } from "lucide-react";

const reportCategories = [
  { id: "sales", label: "Van & Route Sales Summary", icon: DollarSign, desc: "Hourly revenue, cash vs credit split, invoice totals" },
  { id: "debtors", label: "Debtor Ageing Analysis", icon: Users, desc: "0-30, 31-60, 60+ days overdue account tracking" },
  { id: "stock", label: "Van Stock & Movements", icon: PackageCheck, desc: "Morning loading, re-stocking, returns, damage claims" },
  { id: "targets", label: "Target vs Achievement", icon: TrendingUp, desc: "Individual rep & route-wise quota performance" },
  { id: "productivity", label: "Rep Visit Productivity", icon: BarChart2, desc: "Effective vs zero-sales visits, GPS compliance" },
];

export const Reports: React.FC = () => {
  const [selectedReport, setSelectedReport] = useState("sales");

  return (
    <section id="reports" className="py-20 lg:py-28 bg-dark-navy-ambient border-b border-white/10 scroll-mt-20 relative font-body">
      <Container>
        {/* Editorial Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0D0D12] border border-white/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2387D9]" />
            <span className="text-xs font-semibold text-[#A1A1AA] tracking-wider uppercase font-mono">
              Real-Time Analytics &amp; Control
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F7FB] tracking-tight leading-[1.15] font-sans">
            Live visibility across every route,{" "}
            <span className="font-extrabold text-[#60A5FA]">
              invoice, and rupee.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
            Eliminate end-of-day billing delays. Depot managers and financial controllers monitor live van sales totals, cheque collections, and stock balances in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Report Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            {reportCategories.map((report) => {
              const IconComponent = report.icon;
              const isSelected = selectedReport === report.id;
              return (
                <button
                  key={report.id}
                  onClick={() => setSelectedReport(report.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-3 cursor-pointer ${
                    isSelected
                      ? "bg-[#0E0E14] border-[#2387D9] text-white shadow-sm"
                      : "bg-[#050508] border-white/10 text-[#A1A1AA] hover:bg-[#0E0E14] hover:text-white"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg shrink-0 ${
                      isSelected ? "bg-[#2387D9] text-white" : "bg-[#182230] text-[#B0BBC9]"
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white mb-0.5">{report.label}</h4>
                    <p className="text-xs text-[#B0BBC9] leading-relaxed font-normal">{report.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Web Dashboard Mock */}
          <div className="lg:col-span-8 rounded-xl border border-white/10 overflow-hidden bg-[#000000] shadow-2xl">
            <div className="bg-[#0A0A0F] px-4 py-2.5 border-b border-white/10 flex items-center justify-between text-xs text-[#A1A1AA]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="ml-2 font-mono text-[11px] text-[#A1A1AA]">distributor.salesforce.lk/analytics</span>
              </div>
              <span className="font-mono text-[11px] text-[#2FAFA8]">Live WebSocket Sync</span>
            </div>
            <DashboardMock />
          </div>
        </div>
      </Container>
    </section>
  );
};
