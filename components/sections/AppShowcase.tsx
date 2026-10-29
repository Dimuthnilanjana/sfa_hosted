"use client";

import React, { useRef, useState, useEffect } from "react";
import { Container } from "../ui/Container";
import { Check, Sun } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export const AppShowcase: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollRange, setScrollRange] = useState(0);

  // Exact capabilities preserved from original
  const capabilities = [
    {
      title: "Engineered for Harsh Daylight",
      desc: "High-contrast UI designed to remain razor-sharp and readable under midday Sri Lankan sunlight.",
    },
    {
      title: "Full Offline Autonomy",
      desc: "Perform visits, calculate complex promos, and print invoices without cellular network reception.",
    },
    {
      title: "One-Tap Bluetooth Receipt Printing",
      desc: "Instant wireless communication with portable 58mm and 80mm ESC/POS thermal belt printers.",
    },
    {
      title: "Background Delta Synchronization",
      desc: "Silently syncs invoices, GPS coordinates, and stock balances whenever 3G/4G connectivity resumes.",
    },
  ];

  // Calculate actual horizontal travel distance dynamically on resize
  useEffect(() => {
    const calculateDistance = () => {
      if (trackRef.current) {
        const totalTrackWidth = trackRef.current.scrollWidth;
        const visibleContainerWidth = trackRef.current.offsetWidth;
        const distance = Math.max(0, totalTrackWidth - visibleContainerWidth);
        setScrollRange(distance);
      }
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    return () => window.removeEventListener("resize", calculateDistance);
  }, []);

  // Framer Motion scroll hook tied to target container
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);

  return (
    <section
      id="mobile-app"
      className="bg-[#FFFFFF] border-b border-slate-200/80 font-sans relative text-slate-900"
    >
      {/* ================= DESKTOP PINNED HORIZONTAL EXPERIENCE ================= */}
      <div ref={targetRef} className="hidden lg:block relative h-[320vh]">
        {/* Sticky Viewport Container */}
        <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-8 bg-slate-50/50">
          
          {/* Subtle Technical Grid Overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(to right, #0f172a 1px, transparent 1px),
                linear-gradient(to bottom, #0f172a 1px, transparent 1px)
              `,
              backgroundSize: "48px 48px",
            }}
          />

          <Container className="w-full mb-6 relative z-10">
            {/* Editorial Header */}
            <div className="flex flex-col items-start max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200/80 mb-3 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                <span className="text-xs font-semibold text-blue-900 tracking-wider uppercase font-mono">
                  Field-Tested Mobile Application
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-3">
                Built for the road.{" "}
                <span className="text-blue-600 font-extrabold">
                  Readable in direct sun.
                </span>
              </h2>

              <p className="text-slate-600 text-base leading-relaxed max-w-2xl font-normal">
                Field representatives operate in moving vans, crowded store aisles, and rural distributor zones. 
                The SFA Android application strips away unnecessary friction so reps can complete transactions in seconds.
              </p>
            </div>
          </Container>

          {/* Horizontal Scrolling Stage: Smartphone Mockup on Left + Horizontal Cards Track */}
          <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center gap-8 lg:gap-12 relative z-10">
            
            {/* Preserved Smartphone Mockup (Fixed in Viewport alongside the scrolling cards) */}
            <div className="shrink-0">
              <div className="w-[300px] xl:w-[320px] rounded-[32px] p-3.5 bg-slate-900 border-4 border-slate-700 shadow-2xl relative">
                {/* Phone Speaker Notch */}
                <div className="w-20 h-3.5 bg-slate-800 rounded-full mx-auto mb-3 border border-slate-600/50" />

                {/* Mobile Screen Surface (Preserved exactly) */}
                <div className="rounded-2xl bg-[#FAFAF7] p-3.5 text-slate-800 font-sans space-y-3 shadow-inner">
                  {/* Rep Header */}
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-200">
                    <div>
                      <span className="text-[10px] text-slate-500 block font-mono uppercase">Rep: Sunil Jayawardena</span>
                      <h5 className="text-xs font-bold text-slate-900">Route: Wattala Beat #2</h5>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      Synced
                    </span>
                  </div>

                  {/* Active Outlet Card */}
                  <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs">
                    <div className="flex justify-between items-start mb-1.5">
                      <div>
                        <span className="text-[10px] font-bold text-blue-600 font-mono">CURRENT STOP #06</span>
                        <h6 className="text-xs font-bold text-slate-900">Wijeya Stores</h6>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500">GPS Verified</span>
                    </div>
                    <div className="text-[11px] text-slate-600 space-y-1 mb-2.5">
                      <div className="flex justify-between">
                        <span>Credit Limit:</span>
                        <span className="font-semibold text-slate-900">LKR 150,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Overdue Balance:</span>
                        <span className="font-semibold text-rose-600">LKR 12,400 (7 days)</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-slate-100">
                      <div className="py-1.5 text-center rounded-lg bg-blue-600 text-white text-[11px] font-semibold">
                        + New Invoice
                      </div>
                      <div className="py-1.5 text-center rounded-lg bg-slate-100 text-slate-800 border border-slate-200 text-[11px] font-semibold">
                        Collect Payment
                      </div>
                    </div>
                  </div>

                  {/* Day Summary Micro KPI */}
                  <div className="grid grid-cols-2 gap-1.5 text-center">
                    <div className="p-2 rounded-lg bg-white border border-slate-200">
                      <span className="text-[9px] text-slate-500 block">Day Sales</span>
                      <span className="text-[11px] font-bold text-slate-900 font-mono">LKR 148,200</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-slate-200">
                      <span className="text-[9px] text-slate-500 block">Visits Completed</span>
                      <span className="text-[11px] font-bold text-slate-900 font-mono">14 / 18</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Home Indicator */}
                <div className="w-24 h-1 bg-slate-700 rounded-full mx-auto mt-3" />
              </div>
            </div>

            {/* Pinned Horizontal Carousel Track (Light Theme Cards) */}
            <div ref={trackRef} className="flex-1 overflow-hidden">
              <motion.div
                style={{ x }}
                className="flex items-stretch gap-6 w-max pr-12 py-2"
              >
                {capabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="w-[340px] xl:w-[380px] shrink-0 p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition-all duration-200 shadow-sm flex flex-col justify-between group"
                  >
                    <div>
                      {/* Badge / Index & Icon */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center font-bold shadow-2xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Check className="w-5 h-5 stroke-[2.5]" />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400">
                          0{idx + 1}
                        </span>
                      </div>

                      {/* Exact Title */}
                      <h4 className="text-base font-bold text-slate-900 leading-snug mb-3">
                        {cap.title}
                      </h4>

                      {/* Exact Description */}
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        {cap.desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-medium">
                        Field Verification Passed
                      </span>
                    </div>
                  </div>
                ))}

                {/* Outdoor Contrast Callout Card */}
                <div className="w-[340px] xl:w-[380px] shrink-0 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-sm">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center font-bold mb-5 shadow-2xs">
                      <Sun className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 leading-snug mb-3">
                      High-Contrast Terminal Token
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal">
                      Optimized color tokens pass WCAG AAA contrast guidelines for outdoor mobile terminals.
                    </p>
                  </div>
                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-[11px] font-mono text-amber-700 font-semibold">
                    <span>WCAG AAA Compliant</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>

          {/* Desktop Scroll Indicator */}
          <Container className="w-full mt-4 relative z-10">
            <div className="flex items-center gap-3 text-xs font-mono text-slate-500">
              <div className="w-16 h-1 bg-slate-200 rounded-full overflow-hidden">
                <motion.div
                  style={{ scaleX: scrollYProgress, transformOrigin: "left" }}
                  className="h-full bg-blue-600"
                />
              </div>
              <span>Scroll down to navigate field capabilities</span>
            </div>
          </Container>

        </div>
      </div>

      {/* ================= MOBILE & TABLET LAYOUT (Touch-friendly & Natural Scrolling) ================= */}
      <div className="block lg:hidden py-16 sm:py-20 bg-slate-50/60">
        <Container>
          <div className="flex flex-col items-start mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200/80 mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-xs font-semibold text-blue-900 tracking-wider uppercase font-mono">
                Field-Tested Mobile Application
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Built for the road.{" "}
              <span className="text-blue-600 font-extrabold">
                Readable in direct sun.
              </span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-6 font-normal">
              Field representatives operate in moving vans, crowded store aisles, and rural distributor zones. 
              The SFA Android application strips away unnecessary friction so reps can complete transactions in seconds.
            </p>
          </div>

          {/* Mobile Smartphone Mockup */}
          <div className="flex justify-center mb-10">
            <div className="w-full max-w-xs rounded-[32px] p-4 bg-slate-900 border-4 border-slate-700 shadow-2xl relative">
              {/* Phone Speaker Notch */}
              <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-4 border border-slate-600/50" />

              {/* Mobile Screen Surface */}
              <div className="rounded-2xl bg-[#FAFAF7] p-4 text-slate-800 font-sans space-y-4">
                {/* Rep Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                  <div>
                    <span className="text-[10px] text-slate-500 block font-mono uppercase">Rep: Sunil Jayawardena</span>
                    <h5 className="text-sm font-bold text-slate-900">Route: Wattala Beat #2</h5>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Synced
                  </span>
                </div>

                {/* Active Outlet Card */}
                <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 font-mono">CURRENT STOP #06</span>
                      <h6 className="text-sm font-bold text-slate-900">Wijeya Stores</h6>
                    </div>
                    <span className="text-[10px] font-semibold text-slate-500">GPS Verified</span>
                  </div>
                  <div className="text-xs text-slate-600 space-y-1 mb-3">
                    <div className="flex justify-between">
                      <span>Credit Limit:</span>
                      <span className="font-semibold text-slate-900">LKR 150,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Overdue Balance:</span>
                      <span className="font-semibold text-rose-600">LKR 12,400 (7 days)</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                    <div className="py-2 text-center rounded-lg bg-blue-600 text-white text-xs font-semibold cursor-pointer">
                      + New Invoice
                    </div>
                    <div className="py-2 text-center rounded-lg bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold cursor-pointer">
                      Collect Payment
                    </div>
                  </div>
                </div>

                {/* Day Summary Micro KPI */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Day Sales</span>
                    <span className="text-xs font-bold text-slate-900 font-mono">LKR 148,200</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                    <span className="text-[10px] text-slate-500 block">Visits Completed</span>
                    <span className="text-xs font-bold text-slate-900 font-mono">14 / 18</span>
                  </div>
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="w-32 h-1 bg-slate-700 rounded-full mx-auto mt-4" />
            </div>
          </div>

          {/* Mobile Horizontal Cards Stack */}
          <div className="space-y-4 mb-6">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200 shadow-2xs"
              >
                <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Check className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-tight mb-1">{cap.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{cap.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Outdoor Sunlight Callout */}
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 font-medium shadow-2xs">
            <Sun className="w-5 h-5 text-amber-600 shrink-0" />
            <span>Optimized color tokens pass WCAG AAA contrast guidelines for outdoor mobile terminals.</span>
          </div>
        </Container>
      </div>
    </section>
  );
};

