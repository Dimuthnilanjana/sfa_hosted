"use client";

import React from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Star, CheckCircle, ShieldCheck, Quote } from "lucide-react";

export const ClientsReviews: React.FC = () => {
  const reviews = [
    {
      id: "rev-1",
      initials: "KP",
      name: "Kushan Perera",
      role: "Head of Distribution",
      company: "Apex Foods Sri Lanka",
      location: "Kandy, Central Province",
      rating: 5,
      quote:
        "The mobile app works flawlessly in hill country routes with zero cellular coverage. Our reps print Bluetooth bills and record cash or cheques without any delay, then auto-sync as soon as they reach town.",
    },
    {
      id: "rev-2",
      initials: "NJ",
      name: "Nirosha Jayawardena",
      role: "Finance & Operations Manager",
      company: "Islandwide Logistics",
      location: "Galle, Southern Province",
      rating: 5,
      quote:
        "Live GPS tracking on the map gave us total route visibility. The automated credit limit block stopped reps from billing shops that owe money past their due dates, saving us millions in bad debt.",
    },
    {
      id: "rev-3",
      initials: "CW",
      name: "Chaminda Wickramasinghe",
      role: "Depot Operations Lead",
      company: "Central FMCG Distributors",
      location: "Kurunegala, North Western",
      rating: 5,
      quote:
        "Evening reconciliation used to be a painful 3-hour ordeal with missing slips. With Prima SFA, damaged stock requires photo proof on the road, and daily van stock reconciles in under 15 minutes.",
    },
    {
      id: "rev-4",
      initials: "FM",
      name: "Farhan Mohideen",
      role: "Commercial Sales Director",
      company: "Western Consumer Brands",
      location: "Colombo, Western Province",
      rating: 5,
      quote:
        "Rolling out Prima SFA across 45 vans was painless. The simple UI in Sinhala and English meant even veteran van drivers with zero smartphone background became confident within a single morning.",
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-20 lg:py-24 bg-[#070D1A] border-y border-white/10 font-sans relative scroll-mt-12">
      <Container>
        {/* Header Area with Reveal */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <Reveal delay={0} yOffset={16}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-[11px] font-mono tracking-widest text-blue-400 uppercase font-semibold mb-6 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span>VERIFIED CLIENT REVIEWS</span>
            </div>
          </Reveal>

          <Reveal delay={0.08} yOffset={20}>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-white tracking-tight leading-[1.2] mb-5 font-sans text-balance">
              Real Operations. <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
                What Our Clients Say.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.16} yOffset={16}>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal max-w-2xl">
              Hear directly from managing directors, distribution heads, and finance leaders who
              eliminated operational friction and scaled field revenues with Prima SFA.
            </p>
          </Reveal>
        </div>

        {/* Spotlight Executive Review with Reveal */}
        <Reveal delay={0.12} yOffset={24}>
          <div className="max-w-4xl mx-auto rounded-3xl bg-white/[0.04] border border-white/15 p-8 sm:p-12 lg:p-14 backdrop-blur-xl shadow-2xl mb-12 sm:mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col items-start">
              {/* Top Row: 5 Stars & Quote Icon */}
              <div className="w-full flex items-center justify-between mb-6">
                <div className="flex items-center gap-1.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-2.5 text-xs font-mono font-semibold text-white/80">
                    5.0 Verified Review
                  </span>
                </div>
                <Quote className="w-8 h-8 text-blue-400/40" />
              </div>

              {/* The Review Text */}
              <blockquote className="text-lg sm:text-xl lg:text-[22px] font-normal text-white/95 leading-relaxed mb-8 font-sans">
                &ldquo;Prima SFA completely transformed our daily van sales operations. Before, our accounting staff spent over 3.5 hours every single evening manually matching paper books, sorting cheques, and re-keying numbers. Now, bills are printed on the road, cheque collections are tracked to the rupee, and daily evening settlement is completed in just 15 minutes.&rdquo;
              </blockquote>

              {/* Author Meta */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10 w-full">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-base shadow-md shrink-0">
                  DS
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="font-bold text-white text-base sm:text-lg">Dammika Samarasinghe</span>
                    <span className="inline-flex items-center text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
                      <CheckCircle className="w-3 h-3 text-emerald-400 mr-1" />
                      Verified Client
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Managing Director &bull; Lanka Consumer Goods (Pvt) Ltd (Colombo, Sri Lanka)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Balanced Testimonials Grid with Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {reviews.map((rev, idx) => (
            <Reveal key={rev.id} delay={0.06 * idx} yOffset={24} className="h-full">
              <div className="h-full rounded-2xl bg-white/[0.03] border border-white/10 p-7 sm:p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-200 group">
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Quote */}
                  <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal mb-6">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                {/* Reviewer Details */}
                <div className="flex items-center gap-3.5 pt-5 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-white/10 text-white font-semibold text-xs flex items-center justify-center shrink-0 border border-white/15">
                    {rev.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {rev.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {rev.role} &bull; {rev.company}
                    </p>
                    <span className="text-[11px] text-slate-500 font-mono block mt-0.5">
                      {rev.location}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};
