import React from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { XCircle, CheckCircle2 } from "lucide-react";

export const ProblemSolution: React.FC = () => {
  const problems = [
    { title: "Manual Paper Bills", desc: "Hours wasted re-typing hand-written invoices and collecting carbon copies." },
    { title: "Zero Route Visibility", desc: "No way to verify outlet visits, rep punctuality, or off-route deviations." },
    { title: "Lost Credit & Cheques", desc: "Outstanding credit terms, PDC dates, and collections trapped in notebooks." },
    { title: "Van Stock Mismatches", desc: "Daily inventory discrepancies between depot morning loading and evening returns." },
  ];

  const solutions = [
    { title: "Instant Thermal Invoicing", desc: "Fast Bluetooth invoice printing at every outlet with 100% offline support." },
    { title: "Live GPS-Verified Visits", desc: "Automated geofenced check-ins, timestamps, and real-time beat sequence tracking." },
    { title: "Automated Receivables", desc: "Live debtor ledgers, automated credit limits, and transparent cheque tracking." },
    { title: "Exact Stock Reconciliation", desc: "15-minute end-of-day van settlement with real-time stock balance verification." },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 font-sans overflow-hidden border-b border-white/10 bg-[#070B14]">
      {/* Background Image: TheOperationalShift.jpg */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/resources/TheOperationalShift.jpg')`,
        }}
      />

      {/* Dark Charcoal / Deep Navy Photographic Overlay with Subtle Contrast Gradient */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            linear-gradient(180deg, rgba(5, 8, 18, 0.78) 0%, rgba(7, 11, 22, 0.84) 50%, rgba(5, 8, 18, 0.90) 100%),
            radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.12) 0%, transparent 60%)
          `,
        }}
      />

      <Container className="relative z-10">
        {/* Editorial Section Header with Reveal */}
        <div className="flex flex-col items-start max-w-3xl mb-12 sm:mb-16">
          <Reveal delay={0} yOffset={16}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-5 backdrop-blur-md shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
              <span className="text-xs font-semibold text-[#BFDBFE] tracking-wider uppercase font-mono">
                The Operational Shift
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08} yOffset={20}>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-white leading-[1.2] text-balance">
              Your sales operations grew.{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                Your paperwork didn&apos;t keep pace.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16} yOffset={16}>
            <p className="mt-4 text-base sm:text-lg text-[#B8C0CE] leading-relaxed font-normal">
              Traditional van sales rely on disjointed paper receipts, manual data entry, and guesswork. 
              Prima SFA establishes an auditable digital pipeline from the distributor warehouse to the retail counter.
            </p>
          </Reveal>
        </div>

        {/* High-Contrast Comparison Grid with Translucent Glass-Style Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: The Legacy Operational Friction */}
          <div className="lg:col-span-5 flex flex-col">
            <Reveal delay={0.12} direction="up" className="h-full">
              <div className="h-full flex flex-col justify-between rounded-2xl p-7 sm:p-9 bg-[rgba(18,22,34,0.68)] backdrop-blur-md border border-white/10 shadow-2xl relative">
                <div>
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                    <h3 className="text-lg font-bold text-white">Traditional Manual Sales</h3>
                    <span className="text-[11px] font-semibold text-rose-300 bg-rose-500/15 px-2.5 py-1 rounded-md border border-rose-500/30">
                      High Risk &amp; Latency
                    </span>
                  </div>

                  <div className="space-y-5">
                    {problems.map((prob, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-1" />
                        <div>
                          <h4 className="text-sm font-bold text-white leading-tight mb-1">{prob.title}</h4>
                          <p className="text-xs text-[#B8C0CE] leading-relaxed">{prob.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-white/10 text-xs text-[#94A3B8] flex items-center justify-between font-mono">
                  <span>Paperwork bottleneck</span>
                  <span className="text-rose-400 font-bold">~4.5 Hours Lost / Van</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: The SFA Transformation */}
          <div className="lg:col-span-7 flex flex-col">
            <Reveal delay={0.2} direction="up" className="h-full">
              <div className="h-full flex flex-col justify-between rounded-2xl p-7 sm:p-9 bg-[rgba(18,22,34,0.74)] backdrop-blur-md border border-[#38BDF8]/30 shadow-2xl relative overflow-hidden">
                {/* Subtle Inner Ambient Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                    <div>
                      <h3 className="text-xl font-bold text-white">Automated with Prima SFA</h3>
                      <p className="text-xs text-[#94A3B8] mt-0.5">Real-time field intelligence &amp; compliance</p>
                    </div>
                    <span className="text-[11px] font-semibold text-[#93C5FD] bg-blue-500/15 px-2.5 py-1 rounded-md border border-blue-400/30">
                      Verified Digital Trail
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {solutions.map((sol, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-blue-400/30 transition-colors">
                        <div className="flex items-center gap-2.5 mb-2">
                          <div className="w-6 h-6 rounded-md bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#60A5FA]" />
                          </div>
                          <h4 className="text-sm font-bold text-white">{sol.title}</h4>
                        </div>
                        <p className="text-xs text-[#B8C0CE] leading-relaxed">{sol.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-6 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between text-xs gap-3">
                  <span className="text-[#94A3B8]">Evening reconciliation reduced to:</span>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#60A5FA] text-sm">Under 15 minutes</span>
                    <span className="text-[#64748B] font-mono">• Zero manual data re-entry</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
};
