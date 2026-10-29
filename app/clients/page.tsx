import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ClientsHero } from "@/components/clients/ClientsHero";
import { ClientsBentoGrid } from "@/components/clients/ClientsBentoGrid";
import { ClientsReviews } from "@/components/clients/ClientsReviews";
import { ClientsCta } from "@/components/clients/ClientsCta";

export const metadata: Metadata = {
  title: `Our Clients & Reviews | ${siteConfig.name}`,
  description:
    "Explore how Sri Lanka's leading FMCG, beverage, cosmetic, and industrial distribution brands power van sales, mobile invoicing, and route operations with Prima SFA.",
  openGraph: {
    title: `Enterprise Clients & Verified Reviews | ${siteConfig.name}`,
    description:
      "Over 500+ active field sales vans and 40+ distributor hubs running on Prima SFA across Sri Lanka. Read real client reviews and operational case metrics.",
    url: `${siteConfig.url}/clients`,
  },
};

export default function ClientsPage() {
  return (
    <main className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Dark Hero Section (Matching About Hero with about.jpg & overlay) */}
      <ClientsHero />

      {/* 2. Client Logos Bento Grid Showcase on Pure White */}
      <ClientsBentoGrid />

      {/* 3. Verified Client Reviews & Executive Spotlight with Dark Theme Balance */}
      <ClientsReviews />

      {/* 4. Conversion CTA on Pure White */}
      <ClientsCta />
    </main>
  );
}
