import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us & Book a Free Consultation | SalesForce.lk",
  description:
    "Prefer to reach us directly? Call, message, or email — we're quick to respond and happy to help across every service.",
};

export default function ContactPage() {
  const steps = [
    {
      num: "01",
      title: "We review",
      desc: "Every inquiry is read by a senior team member — not a bot. We take the time to understand your business first.",
    },
    {
      num: "02",
      title: "We respond",
      desc: "You get a personalised reply within one business day. No automation, no templates — a real answer to your question.",
    },
    {
      num: "03",
      title: "Discovery call",
      desc: "A focused 20-minute call to understand your brand, your goals, and what growth looks like for you.",
    },
    {
      num: "04",
      title: "Free consultation",
      desc: "A 30-minute working session where we map a tailored plan for you — no obligation, no hard sell.",
    },
  ];

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#111827] font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* =========================================================================
          SECTION 1: HERO & MAIN CONTACT FORM (Matching Reference Design)
          ========================================================================= */}
      <section className="py-16 sm:py-20 lg:py-24 border-b border-[#E5E7EB]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Contact & Offices */}
            <div className="lg:col-span-5 flex flex-col items-start">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#EFF6FF] border border-[#D7E7FA] text-xs font-semibold text-[#2563EB] tracking-wider uppercase font-mono mb-4">
                TALK TO US
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight leading-[1.2] mb-4">
                Book a free <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">consultation.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-8 max-w-md">
                Prefer to reach us directly? Call, message, or email — we&apos;re quick to respond and happy to help across every service.
              </p>

              {/* Contact Key-Value Rows */}
              <div className="w-full border-t border-[#E5E7EB] mb-10">
                {/* Phone 1 */}
                <div className="flex items-center justify-between py-3.5 border-b border-[#E5E7EB] text-sm">
                  <span className="text-xs font-mono font-medium text-[#6B7280] uppercase tracking-wider w-24">
                    PHONE
                  </span>
                  <a
                    href="tel:+94112880488"
                    className="font-semibold text-[#111827] hover:text-[#2563EB] transition-colors"
                  >
                    +94 11 288 0488
                  </a>
                </div>

                {/* Phone 2 */}
                <div className="flex items-center justify-between py-3.5 border-b border-[#E5E7EB] text-sm">
                  <span className="text-xs font-mono font-medium text-[#6B7280] uppercase tracking-wider w-24">
                    MOBILE
                  </span>
                  <a
                    href="tel:+94773148861"
                    className="font-semibold text-[#111827] hover:text-[#2563EB] transition-colors"
                  >
                    +94 77 314 8861
                  </a>
                </div>

                {/* Sales Email */}
                <div className="flex items-center justify-between py-3.5 border-b border-[#E5E7EB] text-sm">
                  <span className="text-xs font-mono font-medium text-[#6B7280] uppercase tracking-wider w-24">
                    SALES
                  </span>
                  <a
                    href="mailto:pms-sales@prima.com.lk"
                    className="font-semibold text-[#111827] hover:text-[#2563EB] transition-colors"
                  >
                    pms-sales@prima.com.lk
                  </a>
                </div>

                {/* General Inquiries */}
                <div className="flex items-center justify-between py-3.5 border-b border-[#E5E7EB] text-sm">
                  <span className="text-xs font-mono font-medium text-[#6B7280] uppercase tracking-wider w-24">
                    INQUIRIES
                  </span>
                  <a
                    href="mailto:pms-info@prima.com.lk"
                    className="font-semibold text-[#111827] hover:text-[#2563EB] transition-colors"
                  >
                    pms-info@prima.com.lk
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center justify-between py-3.5 border-b border-[#E5E7EB] text-sm">
                  <span className="text-xs font-mono font-medium text-[#6B7280] uppercase tracking-wider w-24">
                    WHATSAPP
                  </span>
                  <a
                    href={siteConfig.links.whatsappChat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#111827] hover:text-[#2563EB] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>Message us on WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6B7280]" />
                  </a>
                </div>
              </div>

              {/* Office Section */}
              <div className="w-full">
                <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#EFF6FF] border border-[#D7E7FA] text-xs font-semibold text-[#2563EB] tracking-wider uppercase font-mono mb-4">
                  OFFICE
                </div>

                <div className="w-full text-xs sm:text-[13px] leading-relaxed">
                  {/* Sri Lanka Head Office */}
                  <div>
                    <h4 className="font-bold text-[#111827] mb-1 text-sm">Sri Lanka (HQ)</h4>
                    <p className="text-[#4B5563]">
                      Prima Management Services (Pvt) Ltd<br />
                      No. 50, Sri Jayawardenapura Mawatha,<br />
                      Rajagiriya, Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Send Us a Message Card */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2: WHAT HAPPENS NEXT (Matching Reference Design)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-[#FFFFFF]">
        <Container>
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center px-3 py-1 rounded-md bg-[#EFF6FF] border border-[#D7E7FA] text-xs font-semibold text-[#2563EB] tracking-wider uppercase font-mono mb-4">
              WHAT HAPPENS NEXT
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-slate-900 tracking-tight leading-[1.2]">
              From first message to a{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                real plan.
              </span>
            </h2>
          </div>

          {/* 4 Connected Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#E5E7EB] rounded-2xl overflow-hidden bg-[#FFFFFF] shadow-xs">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className={`p-7 sm:p-8 flex flex-col justify-start transition-colors duration-150 hover:bg-[#F8FAFC] ${
                  idx < steps.length - 1
                    ? "border-b sm:border-b-0 lg:border-r border-[#E5E7EB]"
                    : ""
                } ${
                  idx === 1 ? "sm:border-r-0 lg:border-r" : ""
                } ${
                  idx % 2 === 0 && idx < 2 ? "sm:border-r sm:border-b lg:border-b-0" : ""
                } ${
                  idx === 1 ? "sm:border-b lg:border-b-0" : ""
                }`}
              >
                <span className="text-sm font-bold text-[#2563EB] font-mono mb-4 block">
                  {step.num}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-2 font-sans">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
