"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export const AboutOverview: React.FC = () => {
  return (
    <section id="overview" className="pt-12 sm:pt-14 lg:pt-16 pb-12 sm:pb-14 bg-white font-sans scroll-mt-12">
      <Container>
        {/* Main Editorial Headline with Reveal */}
        <Reveal delay={0} yOffset={20}>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight leading-[1.2] mb-6 sm:mb-8 font-sans text-balance">
            A Leading Field Sales, Distribution <br className="hidden sm:inline" />
            &amp;{" "}
            <span className="bg-gradient-to-r from-[#062B7E] via-[#5B76F7] to-[#082E85] bg-clip-text text-transparent">
              Sales Force Automation
            </span>{" "}
            Platform
          </h2>
        </Reveal>

        {/* Action Buttons with Reveal */}
        <Reveal delay={0.08} yOffset={16}>
          <div className="flex flex-wrap items-center gap-3 mb-10 sm:mb-12">
            {/* Primary CTA: Solid Blue Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium text-xs sm:text-sm shadow-xs transition-colors duration-150 cursor-pointer"
            >
              Get in Touch
            </Link>

            {/* Secondary Action: Redirect to Clients Page */}
            <Link
              href="/clients"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#EAEAEA] hover:bg-[#DFDFDF] text-slate-800 font-medium text-xs sm:text-sm border border-slate-300/40 transition-colors duration-150 cursor-pointer"
            >
              <span>See What Our Clients Say</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
            </Link>
          </div>
        </Reveal>

        {/* Editorial Body Paragraphs with Keyword Links - Full Width with Reveal */}
        <Reveal delay={0.14} yOffset={24}>
          <div className="space-y-6 text-slate-600 text-sm sm:text-[16px] lg:text-[17px] leading-[1.75] font-normal w-full">
          <p>
            Prima SFA was established in 2006 by{" "}
            <strong className="font-semibold text-slate-800">
              Prima Management Services (Pvt) Ltd
            </strong>{" "}
            — a dedicated IT solutions subsidiary of the multinational Prima Group
            Singapore — built from day one with enterprise-level capability, not as a
            basic off-the-shelf billing tool. With headquarters in Sri Lanka and active
            operations connecting leading enterprise FMCG distribution networks, Prima
            SFA has grown into the largest and most trusted{" "}
            <a
              href="#capabilities"
              className="bg-gradient-to-r from-[#062B7E] via-[#5B76F7] to-[#082E85] bg-clip-text text-transparent font-medium hover:underline decoration-[#4F6EF7] underline-offset-2"
            >
              sales force automation
            </a>{" "}
            platform of its kind, backed by over 15 years of continuous enterprise
            engineering.
          </p>

          <p>
            We are a complete sales operations platform, offering{" "}
            <a
              href="#capabilities"
              className="bg-gradient-to-r from-[#062B7E] via-[#5B76F7] to-[#082E85] bg-clip-text text-transparent font-medium hover:underline decoration-[#4F6EF7] underline-offset-2"
            >
              van sales billing
            </a>
            ,{" "}
            <a
              href="#capabilities"
              className="bg-gradient-to-r from-[#062B7E] via-[#5B76F7] to-[#082E85] bg-clip-text text-transparent font-medium hover:underline decoration-[#4F6EF7] underline-offset-2"
            >
              real-time order processing
            </a>
            , cash and cheque collection, live GPS route tracking,{" "}
            <a
              href="#capabilities"
              className="bg-gradient-to-r from-[#062B7E] via-[#5B76F7] to-[#082E85] bg-clip-text text-transparent font-medium hover:underline decoration-[#4F6EF7] underline-offset-2"
            >
              inventory management
            </a>
            , and executive sales analytics under one roof — backed by end-to-end field
            capability, from an on-the-road Bluetooth mobile printer to a full-scale
            enterprise ERP integration.
          </p>
        </div>
        </Reveal>

        {/* Crisp Horizontal Divider */}
        <hr className="border-t border-slate-200/90 my-10 sm:my-12 w-full" />

        {/* Lower Row: #1 Stat Badge + Ranked Statement with Reveal */}
        <Reveal delay={0.1} yOffset={20}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div className="text-6xl sm:text-7xl lg:text-[76px] font-black bg-gradient-to-r from-[#062B7E] via-[#5B76F7] to-[#082E85] bg-clip-text text-transparent tracking-tight leading-none shrink-0 font-sans select-none">
            #1
          </div>
          <div className="flex flex-col items-start gap-1 w-full">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-slate-400 uppercase font-mono">
              RANKED #1
            </span>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              <strong className="font-bold text-slate-900">
                #1 Enterprise Sales Force Automation Platform
              </strong>{" "}
              — Ranked #1 in Sri Lanka for{" "}
              <a
                href="#capabilities"
                className="bg-gradient-to-r from-[#062B7E] via-[#5B76F7] to-[#082E85] bg-clip-text text-transparent font-medium hover:underline decoration-[#4F6EF7] underline-offset-2"
              >
                Van Sales Automation
              </a>
              ,{" "}
              <a
                href="#capabilities"
                className="bg-gradient-to-r from-[#062B7E] via-[#5B76F7] to-[#082E85] bg-clip-text text-transparent font-medium hover:underline decoration-[#4F6EF7] underline-offset-2"
              >
                Field Order Management
              </a>
              , and{" "}
              <a
                href="#capabilities"
                className="bg-gradient-to-r from-[#062B7E] via-[#5B76F7] to-[#082E85] bg-clip-text text-transparent font-medium hover:underline decoration-[#4F6EF7] underline-offset-2"
              >
                Distribution Operations
              </a>
              .
            </p>
          </div>
        </div>
        </Reveal>

        {/* Explore Link with Right Arrow */}
        <div>
          <a
            href="#capabilities"
            className="inline-flex items-center gap-1.5 text-sm sm:text-base font-semibold hover:underline decoration-[#4F6EF7] underline-offset-4 transition-colors group cursor-pointer"
          >
            <span className="bg-gradient-to-r from-[#062B7E] via-[#5B76F7] to-[#082E85] bg-clip-text text-transparent">
              Explore all our services
            </span>
            <span className="text-[#082E85] transition-transform duration-150 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
};
