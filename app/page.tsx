import React from "react";
import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { StatementQuote } from "@/components/sections/StatementQuote";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Features } from "@/components/sections/Features";
import { Roles } from "@/components/sections/Roles";
import { IntegrationsPlugIn } from "@/components/sections/IntegrationsPlugIn";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Faq } from "@/components/sections/Faq";

export default function HomePage() {
  return (
    <main className="bg-[#FFFFFF] min-h-screen">
      {/* 1. Dark Hero Section */}
      <Hero />

      {/* 2. White TrustStrip with Subtle Grid & Dual Infinite Scrolling Marquees */}
      <TrustStrip />

      {/* 3. Operational Manifesto Statement */}
      <StatementQuote
        id="manifesto"
        subtitle="Built through real-world field use"
        statement={
          <>
            Our goal is to help enterprises move from{" "}
            <span className="text-slate-900">manual paper guesswork</span> to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              connected, real-time sales execution.
            </span>
          </>
        }
        pillText="One platform. Offline van billing. Real-time route tracking. Automated reconciliation."
      />

      {/* 4. Warm Light Operational Problem vs SFA Transformation */}
      <ProblemSolution />

      {/* 4. Dark SFA Capabilities & Workflow Architecture */}
      <Features />

      {/* 5. Value Tailored by Stakeholder Role */}
      <Roles />

      {/* 6. Dark Scroll-Animated Integrations Showcase */}
      <IntegrationsPlugIn />

      {/* 7. Crisp White 4-Stage Daily Process */}
      <HowItWorks />

      {/* 8. Warm Light Practical FAQ */}
      <Faq />
    </main>
  );
}

