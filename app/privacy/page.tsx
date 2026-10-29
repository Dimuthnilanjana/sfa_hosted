import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Prima SFA",
  description: "Privacy policy and data protection terms for Prima SFA platform.",
};

export default function PrivacyPage() {
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
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-white tracking-tight">
              Privacy <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">Policy</span>
            </h1>
            <p className="text-xs text-slate-400 font-mono">Last updated: September 28, 2026</p>
          </div>
        </div>

        <article className="max-w-none space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
          <p>
            This Privacy Policy describes how {siteConfig.company.name} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and protects your business and personal information when you visit our website or use the {siteConfig.name} Sales Force Automation mobile application and cloud dashboard.
          </p>

          <h2 className="text-xl font-bold text-white pt-4 border-t border-white/10">1. Information We Collect</h2>
          <p>
            When you request a demo, register for an account, or utilize the Prima SFA software, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contact Details:</strong> Full name, business email, phone number, and company name.</li>
            <li><strong>Field Operational Data:</strong> GPS-stamped route visits, sales invoices, stock inventory movements, and shop front photographs submitted by your authorized field sales representatives.</li>
            <li><strong>Technical Diagnostics:</strong> Device model, operating system version, app logs, and IP addresses used during cloud synchronization.</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4 border-t border-white/10">2. How We Use Your Information</h2>
          <p>
            We process collected data strictly for providing and improving our distribution automation services, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Scheduling product demonstrations and setting up master distribution data.</li>
            <li>Synchronizing van sales invoices, cheque collections, and stock balances between mobile devices and distributor cloud servers.</li>
            <li>Providing 24/7 technical helpdesk support and debugging field operational issues.</li>
          </ul>

          <h2 className="text-xl font-bold text-white pt-4 border-t border-white/10">3. Data Security & Storage</h2>
          <p>
            All operational data transmitted between the mobile application and cloud servers is encrypted using industry-standard Transport Layer Security (TLS 1.3) and stored at rest using AES-256 encryption. We implement strict role-based access controls to ensure your sales metrics remain strictly confidential to your organization.
          </p>

          <h2 className="text-xl font-bold text-white pt-4 border-t border-white/10">4. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy or data governance, please contact our data protection officer at:
          </p>
          <div className="p-4 bg-[#0F172A] rounded-2xl border border-white/10 font-mono text-xs text-slate-200 space-y-1">
            <p><strong>{siteConfig.company.name}</strong></p>
            <p>{siteConfig.company.address}</p>
            <p>Email: {siteConfig.company.email}</p>
            <p>Hotline: {siteConfig.company.phones[0]}</p>
          </div>
        </article>
      </Container>
    </main>
  );
}
