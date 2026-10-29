"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const PageLoader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Lock body scrolling during initial loading screen
    document.body.style.overflow = "hidden";

    // Allow the logo intro animation to play smoothly (minimum 1.25s)
    const minTimer = setTimeout(() => {
      setIsExiting(true);

      const exitTimer = setTimeout(() => {
        setIsVisible(false);
        document.body.style.overflow = "";
      }, 500); // match exit transition duration

      return () => clearTimeout(exitTimer);
    }, 1250);

    return () => {
      clearTimeout(minTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="page-loader-failsafe fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white select-none pointer-events-auto"
          role="status"
          aria-label="Loading SalesForce.lk"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_46%,rgba(37,99,235,0.09)_0%,rgba(56,189,248,0.04)_40%,transparent_70%)] pointer-events-none" />

          {/* Subtle Technical Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, #0F172A 1px, transparent 1px), linear-gradient(to bottom, #0F172A 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Main Logo & Content Container */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Luminous Pulsing Bloom behind Logo */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0.4 }}
                animate={{ scale: [0.8, 1.25, 1], opacity: [0.4, 0.75, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-6 rounded-full bg-gradient-to-tr from-blue-600/25 via-sky-400/30 to-indigo-600/25 blur-2xl pointer-events-none"
              />

              {/* Animated SFA SVG Logo */}
              <motion.div
                initial={{ scale: 0.82, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-20 h-28 sm:w-24 sm:h-32 flex items-center justify-center drop-shadow-[0_12px_24px_rgba(37,99,235,0.22)]"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 532 766"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="overflow-visible"
                >
                  <defs>
                    <linearGradient
                      id="loader_paint0_linear"
                      x1="198.826"
                      y1="0"
                      x2="312.405"
                      y2="461.633"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#003DF0" />
                      <stop offset="1" stopColor="#032380" />
                    </linearGradient>
                    <linearGradient
                      id="loader_paint1_linear"
                      x1="27.0594"
                      y1="765.837"
                      x2="505.798"
                      y2="304.74"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#53C1E9" />
                      <stop offset="1" stopColor="#0F8DDB" />
                    </linearGradient>
                    <filter id="loader_glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="8" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>

                  {/* Upper Ribbon Path (Deep Royal Blue) */}
                  <motion.path
                    d="M273.561 351.67L276.281 351.32L337.331 386.09C338.931 387.12 338.431 388.32 337.541 389.82L294.111 414.51L291.431 414.14L216.601 455.96C202.501 463.84 187.051 463.36 173.151 455.46L29.3313 373.75C20.1613 368.54 13.1513 362.05 8.05129 352.75C-2.47871 333.56 -2.81871 310.32 7.85129 291.06C12.1213 283.36 17.9113 276.84 25.7313 272.38L502.541 0.669725C504.371 -0.370275 506.691 -0.0602776 507.991 0.659722C509.171 1.30972 510.801 2.96972 510.811 5.41972L511.231 228.18C511.231 230.48 509.811 232.18 508.831 233.05C507.551 234.18 504.491 235.11 502.521 233.98L422.601 188.15C420.171 186.76 418.371 187.26 416.031 188.59L200.871 311.04L273.551 351.68L273.561 351.67Z"
                    initial={{ pathLength: 0, fillOpacity: 0 }}
                    animate={{ pathLength: 1, fillOpacity: 1 }}
                    transition={{
                      pathLength: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                      fillOpacity: { duration: 0.7, delay: 0.25 },
                    }}
                    stroke="#2563EB"
                    strokeWidth="8"
                    fill="url(#loader_paint0_linear)"
                  />

                  {/* Lower Ribbon Path (Cyan & Sky Blue) */}
                  <motion.path
                    d="M291.441 414.14L337.391 388.02L273.561 351.67L349.311 308.69C356.811 304.47 365.501 302.99 373.371 307.47L500.751 379.89C509.731 385 517.061 391.07 522.211 399.86C535.881 423.19 535.301 452.05 520.011 474.3C515.621 480.69 510.711 485.76 503.761 489.66L375.671 561.62L247.911 633.26L12.8813 764.63C9.91133 766.29 7.21133 766.2 4.72133 764.59C2.84133 763.37 1.28133 761.26 1.28133 758.28L1.14133 653.77L1.16132 604.22L0.861328 538.04L1.14133 507C1.16133 504.2 3.17133 501.93 4.92133 501.08C7.74133 499.71 9.75132 500.49 12.3713 501.98L122.131 564.09C125.771 566.15 130.131 565.32 133.721 563.3L343.251 444.83L291.451 414.14H291.441Z"
                    initial={{ pathLength: 0, fillOpacity: 0 }}
                    animate={{ pathLength: 1, fillOpacity: 1 }}
                    transition={{
                      pathLength: { duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] },
                      fillOpacity: { duration: 0.7, delay: 0.4 },
                    }}
                    stroke="#38BDF8"
                    strokeWidth="8"
                    fill="url(#loader_paint1_linear)"
                  />
                </svg>
              </motion.div>
            </div>

            {/* Brand Title and Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
              className="mt-6 flex flex-col items-center text-center"
            >
              <h1 className="font-extrabold text-2xl sm:text-3xl tracking-tight text-slate-900 font-sans">
                SalesForce<span className="text-blue-600">.lk</span>
              </h1>
              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mt-1.5 font-medium">
                Sales Force Automation
              </p>
            </motion.div>

            {/* Micro-Progress Loading Track */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.8 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-7 w-36 sm:w-44 h-1 bg-slate-100 rounded-full overflow-hidden relative"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: ["-100%", "0%", "100%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.1,
                  ease: "easeInOut",
                }}
                className="w-1/2 h-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.6)]"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
