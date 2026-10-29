import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutOverview } from "@/components/about/AboutOverview";
import { StatementQuote } from "@/components/sections/StatementQuote";
import { AboutPurpose } from "@/components/about/AboutPurpose";
import { AboutBringsTogether } from "@/components/about/AboutBringsTogether";
import { AboutJourney } from "@/components/about/AboutJourney";
import { AboutDevelopedBy } from "@/components/about/AboutDevelopedBy";
import { AboutCta } from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description:
    "Learn about Sales Force Automation (SFA) by Prima Management Services — driving smarter sales operations, empowering field sales teams, and connecting enterprise FMCG distribution in Sri Lanka.",
  openGraph: {
    title: `About Prima SFA | Driving Smarter Sales Operations`,
    description:
      "Developed by Prima Management Services (Pvt) Ltd to help organizations manage field sales, customer relationships, and daily operations through a connected digital platform.",
  },
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Dark Hero Section: about.jpg & cinematic dark overlay */}
      <AboutHero />

      {/* 2. Platform Overview: Editorial Section with #1 Ranked badge */}
      <AboutOverview />

      {/* 3. Enterprise Distribution Mission Manifesto */}
      <StatementQuote
        id="manifesto"
        subtitle="Engineered for enterprise scale"
        statement={
          <>
            Our mission is to help Sri Lankan distributors transform{" "}
            <span className="text-slate-900">fragmented field operations</span> into{" "}
            <span className="bg-gradient-to-r from-[#062B7E] via-[#5B76F7] to-[#082E85] bg-clip-text text-transparent">
              unified, predictable growth.
            </span>
          </>
        }
        pillText="20+ years of domain excellence. 2,500+ active field reps. Mission-critical reliability."
      />

      {/* 4. Our Purpose: Built to Empower Field Sales Teams */}
      <AboutPurpose />

      {/* 3. What SFA Brings Together: One Platform. Connected Operations. */}
      <AboutBringsTogether />

      {/* 4. Our Journey: A Continued Commitment to Innovation */}
      <AboutJourney />

      {/* 5. Developed by: A Trusted Technology Partner (PMS) */}
      <AboutDevelopedBy />

      {/* 6. Let's Talk CTA: Discover How SFA Can Work for Your Business */}
      <AboutCta />
    </main>
  );
}
