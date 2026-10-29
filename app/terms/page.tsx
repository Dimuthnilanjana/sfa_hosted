import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Prima SFA",
  description: "Terms and conditions of service for Prima SFA distribution platform.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#080B14] py-16 lg:py-24">
      <Container className="max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Homepage
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-white tracking-tight">
              Terms of <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">Service</span>
            </h1>
            <p className="text-xs text-slate-400 font-mono">Last updated: September 28, 2026</p>
          </div>
        </div>

        <article className="max-w-none space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p>
            Welcome to {siteConfig.name}. By accessing or using our software applications, website, or enterprise distribution services provided by {siteConfig.company.name}, you agree to be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-bold text-white pt-4 border-t border-white/10">1. Service Subscription & Licenses</h2>
          <p>
            {siteConfig.name} grants your organization a non-exclusive, non-transferable subscription license to access the field sales mobile application and web dashboard according to your active rep user quota.
          </p>

          <h2 className="text-xl font-bold text-white pt-4 border-t border-white/10">2. User Responsibilities</h2>
          <p>
            Subscribing distributors and companies are responsible for maintaining the security of user credentials and ensuring field reps utilize authorized mobile devices. You agree not to attempt to reverse engineer or breach the cloud platform infrastructure.
          </p>

          <h2 className="text-xl font-bold text-white pt-4 border-t border-white/10">3. Service Uptime & Maintenance</h2>
          <p>
            We strive to maintain 99.9% cloud infrastructure availability. Scheduled maintenance windows will be notified in advance. Mobile app offline functionality ensures van sales activity can proceed uninterrupted during network outages.
          </p>

          <h2 className="text-xl font-bold text-white pt-4 border-t border-white/10">4. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of the Democratic Socialist Republic of Sri Lanka.
          </p>
        </article>
      </Container>
    </main>
  );
}
