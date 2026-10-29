"use client";

import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Badge } from "../ui/Badge";
import { featuredTestimonial, reviewsData, caseStudiesData } from "@/data/testimonials";
import { Star, Quote, ArrowRight } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-dark-navy-ambient border-b border-white/[0.06] relative font-helvetica overflow-hidden">
      <Container className="relative z-10">
        <SectionHeader
          badge="Social Proof"
          badgeVariant="cyan"
          title="Loved by Sri Lankan sales leaders"
          subtitle="See how Prima SFA helps FMCG distributors and manufacturers eliminate paperwork and accelerate cash flow."
        />

        <div className="mb-12 mt-12 sm:mt-16">
          <div className="p-8 sm:p-12 bg-[#0F172A] border border-white/10 rounded-[24px] shadow-sm relative overflow-hidden group hover:border-cyan-400/40 transition-all">
            <Quote className="absolute -top-4 -right-4 w-36 h-36 text-white/5 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 flex flex-col items-start">
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(featuredTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-xl sm:text-2xl font-bold text-white leading-relaxed mb-6">
                  &ldquo;{featuredTestimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 flex items-center justify-center font-bold text-lg">
                    {featuredTestimonial.authorName[0]}
                  </div>
                  <div>
                    <div className="font-extrabold text-base text-white">{featuredTestimonial.authorName}</div>
                    <div className="text-xs text-slate-400 font-semibold">
                      {featuredTestimonial.authorRole}, {featuredTestimonial.companyName} ({featuredTestimonial.location})
                    </div>
                  </div>
                </div>
              </div>

              {featuredTestimonial.beforeAfterMetrics && (
                <div className="lg:col-span-4 bg-[#0B101E] p-6 rounded-2xl border border-white/10 space-y-4">
                  <div className="text-xs uppercase font-mono font-extrabold tracking-wider text-cyan-300">
                    Impact Metrics (Before vs After)
                  </div>
                  <div className="space-y-3">
                    {featuredTestimonial.beforeAfterMetrics.map((m, idx) => (
                      <div key={idx} className="bg-white/[0.04] p-3 rounded-xl border border-white/10 text-xs">
                        <div className="text-slate-400 font-semibold mb-1">{m.metric}</div>
                        <div className="flex items-center justify-between font-bold">
                          <span className="text-rose-400 line-through">{m.before}</span>
                          <span className="text-aqua-400 text-sm font-extrabold">{m.after}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="h-full p-6 sm:p-8 bg-[#0F172A] border border-white/10 hover:border-cyan-400/40 rounded-[20px] flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-base leading-relaxed mb-6 font-normal">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-indigo-500/15 border border-indigo-400/30 text-indigo-200 flex items-center justify-center font-bold text-sm">
                  {rev.authorName[0]}
                </div>
                <div>
                  <div className="font-bold text-sm text-white">{rev.authorName}</div>
                  <div className="text-xs text-slate-400">{rev.authorRole}, {rev.companyName}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-extrabold text-white mb-6 text-center">
            Featured Distributor Case Studies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudiesData.map((cs) => (
              <div
                key={cs.id}
                className="h-full p-6 bg-[#0F172A] border border-white/10 hover:border-cyan-400/40 rounded-[20px] flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1"
              >
                <div>
                  <Badge variant="gray" className="mb-4 text-[10px]">
                    {cs.industryTag}
                  </Badge>
                  <h4 className="text-lg font-bold text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
                    {cs.title}
                  </h4>
                  <p className="text-xs font-semibold text-cyan-300 mb-4">
                    {cs.resultHeadline}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed mb-6 font-normal">
                    {cs.summary}
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-cyan-300">
                  <span>Read case study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
