"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "../ui/Container";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Platform Overview", href: "/#features" },
        { label: "Field Invoicing & Van Sales", href: "/#features" },
        { label: "Route & Beat Planning", href: "/#features" },
        { label: "ERP Connectors & APIs", href: "/#integrations-showcase" },
        { label: "Offline Mobile App", href: "/#features" },
        { label: "Daily Operational Process", href: "/#how" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "For Field Reps", href: "/#benefits" },
        { label: "For Depot Supervisors", href: "/#benefits" },
        { label: "For Finance Controllers", href: "/#benefits" },
        { label: "For Executive Management", href: "/#benefits" },
        { label: "FMCG Distribution", href: "/#benefits" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About SalesForce.lk", href: "/about" },
        { label: "Clients & Reviews", href: "/clients" },
        { label: "Our Story & Journey", href: "/about#journey" },
        { label: "Developed by PMS", href: siteConfig.links.pmsWebsite, isExternal: true },
        { label: "Book Demo", href: "/contact" },
        { label: "Talk to Our Team", href: siteConfig.links.whatsappChat, isExternal: true },
      ],
    },
  ];

  return (
    <footer className="bg-black text-neutral-400 pt-20 pb-0 border-t border-neutral-900 font-sans relative overflow-hidden select-none">
      <Container className="relative z-10 flex flex-col gap-14">
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Link href="/" className="inline-flex items-center gap-3 group focus:outline-none">
              <div className="relative h-8 sm:h-9 w-auto flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/resources/sfa_white.svg"
                  alt="SFA Logo"
                  width={24}
                  height={35}
                  className="h-7 sm:h-8 w-auto object-contain"
                />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white font-sans">
                SalesForce<span className="text-blue-500">.lk</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-normal">
              Building the future of intelligent sales automation with connected field operations and real-time distribution results.
            </p>
          </div>

          {/* Nav Columns: Product, Solutions, Company */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((sec) => (
              <div key={sec.title} className="flex flex-col gap-3.5">
                <h4 className="text-white font-semibold text-xs tracking-wider uppercase font-mono">
                  {sec.title}
                </h4>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px]">
                  {sec.links.map((link) => (
                    <li key={link.label}>
                      {link.isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-white transition-colors duration-150"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-neutral-400 hover:text-white transition-colors duration-150"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Legal Bar (Matching Reference Screenshot) */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span>© {currentYear} SalesForce.lk. All rights reserved.</span>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <Link href="/privacy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-neutral-700 hidden sm:inline">•</span>
            <Link href="/terms" className="hover:text-neutral-300 transition-colors">
              Terms of Service
            </Link>
          </div>
          <div className="text-neutral-600 text-[11px] font-mono">
            <a
              href={siteConfig.links.pmsWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-400 transition-colors"
            >
              Developed by Prima Management Services (Pvt) Ltd
            </a>
          </div>
        </div>
      </Container>

      {/* Giant Low-Opacity Watermark Brand Name (Matching Reference Screenshot) */}
      <div className="w-full overflow-hidden select-none pointer-events-none pt-6 sm:pt-10 flex justify-center">
        <span className="text-[13vw] sm:text-[14.5vw] font-black tracking-tighter text-white/[0.08] leading-none whitespace-nowrap uppercase select-none transition-opacity">
          SalesForce.lk
        </span>
      </div>
    </footer>
  );
};
