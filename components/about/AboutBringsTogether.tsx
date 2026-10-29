"use client";

import React from "react";
import Link from "next/link";
import { Container } from "../ui/Container";

export const AboutBringsTogether: React.FC = () => {
  const capabilities = [
    {
      title: "Field Sales Management",
      desc: "Equip mobile sales reps with real-time customer data, visit schedules, live orders, and daily targets on the road.",
    },
    {
      title: "Customer & Retailer Management",
      desc: "Maintain comprehensive outlet profiles, credit limits, outstanding balances, and purchase histories in one unified view.",
    },
    {
      title: "Order Processing & Invoicing",
      desc: "Generate instant van bills, promotional discounts, tax receipts, and record cash and cheque collections instantly.",
    },
    {
      title: "Inventory Monitoring",
      desc: "Track real-time van stock levels, warehouse stock movements, damaged goods returns, and accurate van reconciliations.",
    },
    {
      title: "Route Planning & GPS Tracking",
      desc: "Optimize daily rep journey plans with geo-stamped shop visits, GPS route adherence, and live fleet visibility on maps.",
    },
    {
      title: "Sales Performance & Reporting",
      desc: "Access live executive dashboards with daily sales totals, team KPI benchmarks, and automated distributor settlements.",
    },
  ];

  return (
    <section
      id="capabilities"
      className="py-14 sm:py-16 lg:py-20 bg-[#070D1A] border-b border-white/10 font-sans relative scroll-mt-12"
    >
      <Container>
        {/* Header Area: Left Info + Right Action Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 sm:mb-14">
          <div className="max-w-2xl flex flex-col items-start text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-[11px] font-mono tracking-widest text-blue-400 uppercase font-semibold mb-6 shadow-sm">
              WHAT SFA BRINGS TOGETHER
            </div>

            {/* Title: 42px on desktop, font-medium, 2-color gradient */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-white tracking-tight leading-[1.2]">
              One Platform. <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Connected Operations.
              </span>
            </h2>

            {/* Paragraph Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal mt-5 max-w-xl">
              SFA brings together the key elements of field sales and distribution
              into a connected platform, giving businesses tools to manage everyday
              operations more efficiently.
            </p>
          </div>

          {/* Right Action Buttons matching screenshot */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-[0_0_20px_rgba(37,99,235,0.45)] transition-all duration-150 active:scale-95 cursor-pointer"
            >
              Get Started
            </Link>
            <a
              href="#journey"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 backdrop-blur-md transition-all duration-150 active:scale-95 cursor-pointer"
            >
              See Our Work
            </a>
          </div>
        </div>

        {/* Capabilities Grid with Numbering, Alternating Titles, Accent Bars, & Thin Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-white/10">
          {capabilities.map((c, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 lg:p-9 flex flex-col items-start text-left border-b border-white/10 ${
                (idx + 1) % 3 !== 0 ? "lg:border-r border-white/10" : ""
              } ${
                (idx + 1) % 2 !== 0 ? "md:max-lg:border-r border-white/10" : ""
              } hover:bg-white/[0.02] transition-colors group cursor-default`}
            >
              {/* Index Number */}
              <span className="text-xs font-mono font-semibold text-slate-500 mb-3 tracking-wider">
                {String(idx + 1).padStart(2, "0")}
              </span>

              {/* Title with Alternating Blue / White Accent */}
              <h3
                className={`text-base sm:text-lg font-bold mb-1 transition-colors ${
                  idx % 2 === 0
                    ? "text-blue-400 group-hover:text-blue-300"
                    : "text-white group-hover:text-blue-400"
                }`}
              >
                {c.title}
              </h3>

              {/* Blue Horizontal Accent Dash */}
              <div className="w-7 h-[2px] bg-blue-500 my-3.5 rounded-full" />

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
