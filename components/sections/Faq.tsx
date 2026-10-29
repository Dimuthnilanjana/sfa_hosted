"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Accordion } from "../ui/Accordion";
import { Reveal } from "../ui/Reveal";
import { faqData } from "@/data/faq";
import { siteConfig } from "@/config/site";
import { MessageSquare, Phone } from "lucide-react";

export const Faq: React.FC = () => {
  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-b border-slate-200/80 scroll-mt-20 relative font-sans">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Support CTA with Reveal */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <Reveal delay={0} yOffset={16}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200/70 mb-4 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase font-mono">
                  Frequently Asked Questions
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.08} yOffset={20}>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight leading-[1.2] mb-5 font-sans text-balance">
                Clear answers for your{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                  sales operations.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.14} yOffset={16}>
              <p className="text-base text-slate-600 leading-relaxed mb-8 font-normal">
                Everything you need to know about setting up Prima SFA, device compatibility, ERP integrations, and onboarding in Sri Lanka.
              </p>
            </Reveal>

            <Reveal delay={0.2} yOffset={16} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <button
                  onClick={() => window.open(siteConfig.links.whatsappChat, "_blank")}
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-900 text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-all active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  <span>Chat on WhatsApp</span>
                </button>
                <a
                  href={`tel:${siteConfig.company.phones[0]}`}
                  className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-900 text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call Sales Team</span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Clean Accordion with Reveal */}
          <div className="lg:col-span-7 w-full border-t border-slate-200/80">
            <Reveal delay={0.1} yOffset={24}>
              <Accordion items={faqData} defaultOpenId={faqData[0]?.id} />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
