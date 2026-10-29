"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Container } from "../ui/Container";

export const IntegrationsPlugIn: React.FC = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = rect.height - windowHeight;
      if (totalScrollableDistance <= 0) return;

      // When the top of section reaches top of viewport: rect.top <= 0
      const currentScroll = -rect.top;
      const rawProgress = Math.min(Math.max(currentScroll / totalScrollableDistance, 0), 1);
      scrollProgress.set(rawProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollProgress]);

  // Butter-smooth spring physics
  const smoothProgress = useSpring(scrollProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.4,
    restDelta: 0.001,
  });

  // ================= TEXT 1 ANIMATIONS (Move Out & Fade) =================
  // Defaults to centered in full view, then rises smoothly, scales slightly down and fades out
  const opacityText1 = useTransform(smoothProgress, [0, 0.22, 0.38], [1, 1, 0]);
  const scaleText1 = useTransform(smoothProgress, [0, 0.22, 0.38], [1, 1, 0.9]);
  const yText1 = useTransform(smoothProgress, [0, 0.22, 0.38], [0, 0, -65]);

  // ================= TEXT 2 ANIMATIONS (Zoom Smoothly In & Populate) =================
  // Populates as text 1 moves out, zooming smoothly in from center
  const opacityText2 = useTransform(smoothProgress, [0.32, 0.52, 0.95], [0, 1, 1]);
  const scaleText2 = useTransform(smoothProgress, [0.32, 0.54, 0.95], [0.74, 1, 1]);
  const yText2 = useTransform(smoothProgress, [0.32, 0.54, 0.95], [45, 0, 0]);

  // ================= 5 LOGOS ANIMATIONS (Zoom In & Position Around Text) =================
  // 1. SAP (Top-Left)
  const opacitySap = useTransform(smoothProgress, [0.36, 0.54, 0.95], [0, 1, 1]);
  const scaleSap = useTransform(smoothProgress, [0.36, 0.56, 0.95], [0.2, 1, 1]);
  const xSap = useTransform(smoothProgress, [0.36, 0.56, 0.95], [-40, 0, 0]);
  const ySap = useTransform(smoothProgress, [0.36, 0.56, 0.95], [-40, 0, 0]);

  // 2. Power BI (Top-Center)
  const opacityPowerBi = useTransform(smoothProgress, [0.38, 0.56, 0.95], [0, 1, 1]);
  const scalePowerBi = useTransform(smoothProgress, [0.38, 0.58, 0.95], [0.2, 1, 1]);
  const yPowerBi = useTransform(smoothProgress, [0.38, 0.58, 0.95], [-50, 0, 0]);

  // 3. Microsoft Dynamics (Top-Right)
  const opacityDynamics = useTransform(smoothProgress, [0.4, 0.58, 0.95], [0, 1, 1]);
  const scaleDynamics = useTransform(smoothProgress, [0.4, 0.6, 0.95], [0.2, 1, 1]);
  const xDynamics = useTransform(smoothProgress, [0.4, 0.6, 0.95], [40, 0, 0]);
  const yDynamics = useTransform(smoothProgress, [0.4, 0.6, 0.95], [-40, 0, 0]);

  // 4. IFS (Bottom-Left)
  const opacityIfs = useTransform(smoothProgress, [0.42, 0.6, 0.95], [0, 1, 1]);
  const scaleIfs = useTransform(smoothProgress, [0.42, 0.62, 0.95], [0.2, 1, 1]);
  const xIfs = useTransform(smoothProgress, [0.42, 0.62, 0.95], [-40, 0, 0]);
  const yIfs = useTransform(smoothProgress, [0.42, 0.62, 0.95], [40, 0, 0]);

  // 5. Infor (Bottom-Right)
  const opacityInfor = useTransform(smoothProgress, [0.44, 0.62, 0.95], [0, 1, 1]);
  const scaleInfor = useTransform(smoothProgress, [0.44, 0.64, 0.95], [0.2, 1, 1]);
  const xInfor = useTransform(smoothProgress, [0.44, 0.64, 0.95], [40, 0, 0]);
  const yInfor = useTransform(smoothProgress, [0.44, 0.64, 0.95], [40, 0, 0]);

  return (
    <section
      ref={containerRef}
      id="integrations-showcase"
      className="relative h-[260vh] bg-dark-navy-ambient text-white font-sans"
    >
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-dark-navy-ambient">

        {/* Subtle Technical Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Dynamic Orbital Ambient Rings */}
        <div className="absolute w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] rounded-full border border-blue-500/10 pointer-events-none animate-[spin_120s_linear_infinite]" />
        <div className="absolute w-[420px] h-[420px] sm:w-[620px] sm:h-[620px] rounded-full border border-dashed border-indigo-500/10 pointer-events-none animate-[spin_90s_linear_infinite_reverse]" />

        <Container className="relative z-10 w-full flex items-center justify-center">
          <div className="relative w-full max-w-5xl flex items-center justify-center min-h-[480px] sm:min-h-[540px]">
            {/* ==================================================================== */}
            {/* STAGE 1: DEFAULT TEXT ("Integrations Ready to Plug-In and GO!")     */}
            {/* ==================================================================== */}
            <motion.div
              style={{
                opacity: opacityText1,
                scale: scaleText1,
                y: yText1,
              }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/15 mb-6 backdrop-blur-xl shadow-[0_0_24px_rgba(37,99,235,0.2)]">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-xs font-semibold text-blue-300 tracking-widest uppercase font-mono">
                  Enterprise Ecosystem
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight leading-[1.2] max-w-4xl text-white">
                Integrations Ready to Plug-In{" "}
                <span className="block mt-2 sm:inline sm:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                  and GO!
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-xl font-normal leading-relaxed">
                Connect your field fleet directly to existing ERP backbones with zero operational friction.
              </p>

              {/* Scroll down indicator */}
              <div className="mt-12 flex flex-col items-center gap-2 text-slate-500 text-xs tracking-wider uppercase font-mono">
                <span>Scroll to see live connectivity</span>
                <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1">
                  <div className="w-1 h-2 rounded-full bg-blue-400 animate-bounce" />
                </div>
              </div>
            </motion.div>

            {/* ==================================================================== */}
            {/* STAGE 2: ZOOMING TEXT & 5 SURROUNDING APPLE-STYLE GLASS LOGOS        */}
            {/* ==================================================================== */}
            <div className="relative w-full flex flex-col items-center justify-center">
              {/* Central Zooming Text */}
              <motion.div
                style={{
                  opacity: opacityText2,
                  scale: scaleText2,
                  y: yText2,
                }}
                className="text-center px-4 max-w-3xl z-20"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 mb-5 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-semibold text-emerald-300 tracking-wider uppercase font-mono">
                    Zero Delay • Enterprise Ready
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.15] text-white">
                  From setup to full automation —{" "}
                  <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-sky-200 drop-shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                    it’s fast, flexible, and future-ready.
                  </span>
                </h3>

                <p className="mt-5 text-sm sm:text-base text-slate-300/80 max-w-xl mx-auto leading-relaxed font-normal">
                  Pre-configured bidirectional pipelines synchronize routes, sales, debtor credit limits, and depot stock balance in real time.
                </p>
              </motion.div>

              {/* ================================================================= */}
              {/* 5 LOGOS: APPLE-STYLE GLASS EFFECT, 1:1 SQUARE, ROUNDED, NO TEXT   */}
              {/* ================================================================= */}

              {/* 1. SAP LOGO (Top-Left) */}
              <motion.div
                style={{
                  opacity: opacitySap,
                  scale: scaleSap,
                  x: xSap,
                  y: ySap,
                }}
                className="z-30 mt-6 sm:mt-0 sm:absolute sm:-top-16 md:-top-24 sm:left-6 md:left-14 lg:left-20"
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  className="relative aspect-square w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-2xl p-3 flex items-center justify-center bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-2xl border border-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.25)] hover:border-white/30 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.12] to-transparent rounded-t-2xl pointer-events-none" />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center">
                    <Image
                      src="/resources/sap.svg"
                      alt="SAP Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(0,124,197,0.4)]"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* 2. POWER BI LOGO (Top-Center) */}
              <motion.div
                style={{
                  opacity: opacityPowerBi,
                  scale: scalePowerBi,
                  y: yPowerBi,
                }}
                className="z-30 mt-4 sm:mt-0 sm:absolute sm:-top-20 md:-top-28 sm:left-1/2 sm:-translate-x-1/2"
              >
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  className="relative aspect-square w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-2xl p-3 flex items-center justify-center bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-2xl border border-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.25)] hover:border-white/30 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.12] to-transparent rounded-t-2xl pointer-events-none" />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center">
                    <Image
                      src="/resources/powerbi.svg"
                      alt="Power BI Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(235,187,20,0.4)]"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* 3. MICROSOFT DYNAMICS LOGO (Top-Right) */}
              <motion.div
                style={{
                  opacity: opacityDynamics,
                  scale: scaleDynamics,
                  x: xDynamics,
                  y: yDynamics,
                }}
                className="z-30 mt-4 sm:mt-0 sm:absolute sm:-top-16 md:-top-24 sm:right-6 md:right-14 lg:right-20"
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="relative aspect-square w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-2xl p-3 flex items-center justify-center bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-2xl border border-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.25)] hover:border-white/30 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.12] to-transparent rounded-t-2xl pointer-events-none" />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center">
                    <Image
                      src="/resources/msdynamic.svg"
                      alt="Microsoft Dynamics Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(54,122,242,0.4)]"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* 4. IFS LOGO (Bottom-Left) */}
              <motion.div
                style={{
                  opacity: opacityIfs,
                  scale: scaleIfs,
                  x: xIfs,
                  y: yIfs,
                }}
                className="z-30 mt-4 sm:mt-0 sm:absolute sm:-bottom-16 md:-bottom-24 sm:left-12 md:left-24 lg:left-32"
              >
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                  className="relative aspect-square w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-2xl p-3 flex items-center justify-center bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-2xl border border-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.25)] hover:border-white/30 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.12] to-transparent rounded-t-2xl pointer-events-none" />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center">
                    <Image
                      src="/resources/ifs.svg"
                      alt="IFS Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(132,39,226,0.45)]"
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* 5. INFOR LOGO (Bottom-Right) */}
              <motion.div
                style={{
                  opacity: opacityInfor,
                  scale: scaleInfor,
                  x: xInfor,
                  y: yInfor,
                }}
                className="z-30 mt-4 sm:mt-0 sm:absolute sm:-bottom-16 md:-bottom-24 sm:right-12 md:right-24 lg:right-32"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  className="relative aspect-square w-16 h-16 sm:w-20 sm:h-20 lg:w-22 lg:h-22 rounded-2xl p-3 flex items-center justify-center bg-white/[0.08] hover:bg-white/[0.14] backdrop-blur-2xl border border-white/[0.18] shadow-[0_8px_32px_0_rgba(0,0,0,0.5),inset_0_1px_1px_0_rgba(255,255,255,0.25)] hover:border-white/30 hover:scale-105 transition-all duration-300 group"
                >
                  <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/[0.12] to-transparent rounded-t-2xl pointer-events-none" />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center">
                    <Image
                      src="/resources/infor.svg"
                      alt="Infor Logo"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(215,30,37,0.45)]"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};
