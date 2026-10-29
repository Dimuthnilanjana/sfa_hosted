"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Server, Cloud, Database, Cpu, Layers } from "lucide-react";

export const Specs: React.FC = () => {
  const erpIntegrations = [
    { name: "SAP Business One", type: "Certified ERP Connector", icon: Server },
    { name: "Microsoft Dynamics 365", type: "Enterprise ERP Sync", icon: Cloud },
    { name: "QuickBooks Enterprise", type: "Accounting & Ledger Sync", icon: Database },
    { name: "Tally ERP & TallyPrime", type: "Direct XML / REST Sync", icon: Cpu },
    { name: "Infor LN & M3", type: "FMCG Distribution", icon: Layers },
    { name: "Custom In-House ERP", type: "Secure JSON / REST APIs", icon: Layers },
  ];

  return (
    <section id="specs" className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-[#E5E7EB] font-sans relative scroll-mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Integration Overview */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF6FF] border border-[#D7E7FA] mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase font-mono">
                Enterprise Connectivity
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#111827] tracking-tight leading-[1.15] mb-6 font-sans">
              Integrations ready to{" "}
              <span className="font-medium text-[#2563EB]">
                connect and go.
              </span>
            </h2>

            <p className="text-base text-[#4B5563] leading-relaxed mb-8 font-normal">
              No need to replace your existing ERP or accounting system. Prima SFA integrates seamlessly via bidirectional APIs, automated batch synchronizations, or direct database connectors.
            </p>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] shadow-xs text-xs text-[#4B5563] space-y-1">
              <span className="text-[#111827] font-bold block mb-1">Standardized Two-Way Pipeline:</span>
              <p>• Master data (items, prices, credit limits) pushed to vans every morning.</p>
              <p>• Completed invoices, collections, and stock balances returned automatically.</p>
            </div>
          </div>

          {/* Right: Integration Connectors Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {erpIntegrations.map((erp, idx) => {
              const Icon = erp.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] flex items-start gap-3.5 hover:border-[#2563EB]/50 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EFF6FF] border border-[#D7E7FA] flex items-center justify-center text-[#2563EB] shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111827] mb-0.5">{erp.name}</h4>
                    <span className="text-xs text-[#6B7280]">{erp.type}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};
