"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { demoRequestSchema, DemoRequestInput } from "@/lib/validators";
import { siteConfig } from "@/config/site";
import { Container } from "../ui/Container";
import { CheckCircle2, Phone, Mail, ShieldCheck, AlertCircle, ArrowRight } from "lucide-react";

export const DemoCta: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DemoRequestInput>({
    resolver: zodResolver(demoRequestSchema),
    defaultValues: {
      fullName: "",
      company: "",
      phone: "",
      email: "",
      teamSize: "1-10",
      message: "",
      website_url: "",
    },
  });

  const onSubmit = async (data: DemoRequestInput) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit demo request. Please try again.");
      }

      router.push("/thank-you");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setServerError(message);
      setIsSubmitting(false);
    }
  };

  return (
    <section id="demo" className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E5E7EB] text-[#111827] font-sans relative scroll-mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Value Proposition */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EFF6FF] border border-[#D7E7FA] mb-5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
              <span className="text-xs font-semibold text-[#2563EB] tracking-wider uppercase font-mono">
                Get Started
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.15] mb-6 font-sans">
              Ready to simplify your{" "}
              <span className="font-extrabold text-[#2563EB]">
                sales operations?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-8 font-normal">
              Schedule a personalized walkthrough with our Sri Lanka deployment team. 
              We will demonstrate van invoicing, depot settlement, and ERP integration tailored to your SKU catalogue.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span className="text-sm text-[#111827] font-medium">30-minute tailored platform demonstration</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span className="text-sm text-[#111827] font-medium">Free workflow &amp; ERP compatibility assessment</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0 mt-0.5" />
                <span className="text-sm text-[#111827] font-medium">Clear commercial proposal with zero hidden fees</span>
              </div>
            </div>

            {/* Direct Contact Info */}
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#E5E7EB] space-y-3 w-full">
              <span className="text-xs font-bold text-[#111827] uppercase tracking-wider block font-mono">Direct Contact</span>
              <div className="flex items-center gap-3 text-sm text-[#4B5563]">
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <a href={`tel:${siteConfig.company.phones[0]}`} className="hover:text-[#111827] transition-colors">{siteConfig.company.phones[0]}</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#4B5563]">
                <Mail className="w-4 h-4 text-[#2563EB]" />
                <a href={`mailto:${siteConfig.company.email}`} className="hover:text-[#111827] transition-colors">{siteConfig.company.email}</a>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Enterprise Form */}
          <div className="lg:col-span-6 bg-[#FFFFFF] rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 shadow-lg">
            <h3 className="text-xl font-bold text-[#111827] mb-1 font-sans">Request a Product Demo</h3>
            <p className="text-xs text-[#6B7280] mb-6">Fill in your company details and our team will get in touch within 24 hours.</p>

            {serverError && (
              <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{serverError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Honeypot field for bot protection */}
              <input
                type="text"
                {...register("website_url")}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#4B5563] mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    {...register("fullName")}
                    placeholder="e.g. Kasun Fernando"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#CBD5E1] text-[#111827] text-xs placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4B5563] mb-1.5">Company Name *</label>
                  <input
                    type="text"
                    {...register("company")}
                    placeholder="e.g. Ceylon Traders"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#CBD5E1] text-[#111827] text-xs placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                  {errors.company && <p className="text-[11px] text-red-600 mt-1">{errors.company.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#4B5563] mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="077 123 4567"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#CBD5E1] text-[#111827] text-xs placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                  {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone.message}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4B5563] mb-1.5">Work Email *</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="name@company.lk"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#CBD5E1] text-[#111827] text-xs placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                  />
                  {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#4B5563] mb-1.5">Field Sales Team Size</label>
                <select
                  {...register("teamSize")}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#CBD5E1] text-[#111827] text-xs focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                >
                  <option value="1-10">1 - 10 Reps (Growing Distribution)</option>
                  <option value="11-50">11 - 50 Reps (Regional Operations)</option>
                  <option value="51-200">51 - 200 Reps (National FMCG)</option>
                  <option value="200+">200+ Reps (Enterprise Manufacturer)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#4B5563] mb-1.5">Current Challenges / Notes</label>
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder="Tell us about your current van sales process or ERP system..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#FFFFFF] border border-[#CBD5E1] text-[#111827] text-xs placeholder:text-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-semibold transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 shadow-sm"
              >
                <span>{isSubmitting ? "Submitting Request..." : "Request a Demo"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#6B7280] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
                <span>Your details are kept strictly confidential. No spam.</span>
              </div>
            </form>
          </div>

        </div>
      </Container>
    </section>
  );
};
