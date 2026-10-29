"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormInput } from "@/lib/validators";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      company: "",
      email: "",
      phone: "",
      source: "",
      message: "",
      website_url: "",
    },
  });

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit message. Please try again.");
      }

      setIsSuccess(true);
      reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-[#FFFFFF] p-6 sm:p-9 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#111827] tracking-tight">
          Send us a message
        </h2>
        <p className="text-xs text-[#6B7280] mt-1 font-normal">
          Fields marked with * are required.
        </p>
      </div>

      {serverError && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
          <span>{serverError}</span>
        </div>
      )}

      {isSuccess ? (
        <div className="py-12 px-4 text-center flex flex-col items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4 shadow-sm">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="text-xl font-bold text-[#111827] mb-2">Message Received</h3>
          <p className="text-sm text-[#4B5563] max-w-md leading-relaxed mb-6">
            Thank you for reaching out. A senior member of our team will review your inquiry and get back to you within one business day.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-4.5" noValidate>
          {/* Honeypot field (hidden from genuine users) */}
          <input
            type="text"
            {...register("website_url")}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          {/* Row 1: First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-xs font-semibold text-[#374151] mb-1.5">
                First Name *
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Jane"
                {...register("firstName")}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#111827] placeholder:text-[#9CA3AF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 ${
                  errors.firstName ? "border-red-400 bg-red-50/20" : "border-[#D1D5DB] focus:border-[#2563EB]"
                }`}
              />
              {errors.firstName && (
                <span className="text-[11px] text-red-600 mt-1 block font-medium">
                  {errors.firstName.message}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-xs font-semibold text-[#374151] mb-1.5">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Smith"
                {...register("lastName")}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] text-sm text-[#111827] placeholder:text-[#9CA3AF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
              />
            </div>
          </div>

          {/* Row 2: Job Title & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="jobTitle" className="block text-xs font-semibold text-[#374151] mb-1.5">
                Job Title
              </label>
              <input
                id="jobTitle"
                type="text"
                placeholder="Head of Marketing"
                {...register("jobTitle")}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] text-sm text-[#111827] placeholder:text-[#9CA3AF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-semibold text-[#374151] mb-1.5">
                Company
              </label>
              <input
                id="company"
                type="text"
                placeholder="Acme Corp"
                {...register("company")}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] text-sm text-[#111827] placeholder:text-[#9CA3AF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
              />
            </div>
          </div>

          {/* Row 3: Work Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-[#374151] mb-1.5">
                Work Email *
              </label>
              <input
                id="email"
                type="email"
                placeholder="jane@acmecorp.com"
                {...register("email")}
                className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#111827] placeholder:text-[#9CA3AF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 ${
                  errors.email ? "border-red-400 bg-red-50/20" : "border-[#D1D5DB] focus:border-[#2563EB]"
                }`}
              />
              {errors.email && (
                <span className="text-[11px] text-red-600 mt-1 block font-medium">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-[#374151] mb-1.5">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+94 70 000 0000"
                {...register("phone")}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] text-sm text-[#111827] placeholder:text-[#9CA3AF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB]"
              />
            </div>
          </div>

          {/* Row 4: How did you hear about us? */}
          <div>
            <label htmlFor="source" className="block text-xs font-semibold text-[#374151] mb-1.5">
              How did you hear about us?
            </label>
            <div className="relative">
              <select
                id="source"
                {...register("source")}
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] text-sm text-[#111827] bg-[#FFFFFF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] appearance-none cursor-pointer"
              >
                <option value="">Select source</option>
                <option value="Google Search">Google Search</option>
                <option value="LinkedIn / Social Media">LinkedIn / Social Media</option>
                <option value="Referral / Word of Mouth">Referral / Word of Mouth</option>
                <option value="Industry Event / Expo">Industry Event / Expo</option>
                <option value="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#6B7280]">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Row 5: How can we help? */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-[#374151] mb-1.5">
              How can we help? *
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about your brand, your goals, and what you're looking for..."
              {...register("message")}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-[#111827] placeholder:text-[#9CA3AF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 resize-none ${
                errors.message ? "border-red-400 bg-red-50/20" : "border-[#D1D5DB] focus:border-[#2563EB]"
              }`}
            />
            {errors.message && (
              <span className="text-[11px] text-red-600 mt-1 block font-medium">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.99] text-white font-semibold text-sm transition-all duration-150 shadow-sm flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <span>Send Message</span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
