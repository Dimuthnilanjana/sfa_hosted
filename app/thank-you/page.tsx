import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Phone, MessageSquare, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Thank You | Prima SFA",
  description: "Thank you for booking a demo with Prima SFA.",
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#080B14] py-20 lg:py-32 flex items-center justify-center">
      <Container className="max-w-2xl text-center">
        <div className="bg-[#0F172A] p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-tealSoft text-growth flex items-center justify-center mb-6 shadow-inner">
            <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
          </div>

          <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-300 bg-cyan-500/10 border border-cyan-400/30 px-3.5 py-1.5 rounded-full mb-4">
            Request Received
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Thank you! We&apos;ve received your request.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-lg">
            Our distribution solutions specialist in Colombo will review your company requirements and contact you at <strong className="text-white">your phone number</strong> within 2 business hours to schedule your live demo.
          </p>

          <div className="w-full bg-[#0B101E] p-4 sm:p-6 rounded-2xl border border-white/10 mb-8 space-y-3 text-left">
            <h3 className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
              Need immediate assistance?
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.links.whatsappChat}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp Now</span>
              </a>
              <a
                href={`tel:${siteConfig.company.phones[0].replace(/\s+/g, "")}`}
                className="flex-1 py-3 px-4 bg-[#131E38] border border-white/15 text-white hover:border-cyan-400/50 hover:text-cyan-300 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call {siteConfig.company.phones[0]}</span>
              </a>
            </div>
          </div>

          <Link href="/">
            <Button variant="outline" size="md" leftIcon={<ArrowLeft className="w-4 h-4" />}>
              Return to Homepage
            </Button>
          </Link>
        </div>
      </Container>
    </main>
  );
}
