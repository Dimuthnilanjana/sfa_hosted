"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Smartphone,
  Users,
  LayoutDashboard,
  BarChart3,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const solutionsMenuRef = useRef<HTMLDivElement | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const isAboutPage = pathname === "/about";
  const isContactPage = pathname === "/contact";
  const isClientsPage = pathname === "/clients";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        solutionsMenuRef.current &&
        !solutionsMenuRef.current.contains(event.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close all menus on route change
  useEffect(() => {
    setSolutionsOpen(false);
    setMobileMenuOpen(false);
    setMobileSolutionsOpen(false);
  }, [pathname]);

  // Hover handlers with smooth grace period
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 200);
  };

  const handleToggleClick = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setSolutionsOpen((prev) => !prev);
  };

  const solutionItems = [
    {
      title: "Sales Rep Mobile App",
      desc: "100% offline van sales, instant Bluetooth invoicing & route execution.",
      icon: Smartphone,
      href: "/#features",
    },
    {
      title: "ASM App",
      desc: "Real-time beat tracking, stock loading verification & supervisor controls.",
      icon: Users,
      href: "/#features",
    },
    {
      title: "Sales Dashboard",
      desc: "Live web portal for territory revenue, collection ledgers & daily audit.",
      icon: LayoutDashboard,
      href: "/#features",
    },
    {
      title: "Power BI Solutions",
      desc: "Advanced executive analytics, SKU velocity & market share intelligence.",
      icon: BarChart3,
      href: "/#integrations-showcase",
    },
    {
      title: "Report Module",
      desc: "Automated end-of-day van settlement, tax tiers & custom ERP exports.",
      icon: FileText,
      href: "/#features",
    },
  ];

  return (
    <>
      {/* Top Announcement Banner - Darker Deep Royal/Navy Gradient */}
      {showBanner && (
        <div
          className="w-full font-sans text-white text-xs py-2 sm:py-2.5 px-4 sm:px-6 relative transition-all duration-300 select-none border-b border-white/10 overflow-hidden"
          style={{
            background:
              "linear-gradient(90deg, #010416 0%, #030C2E 20%, #081B66 45%, #0B2482 55%, #081B66 75%, #030C2E 90%, #010416 100%)",
          }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 relative z-10">
            {/* Center Content: Exact Text & Button */}
            <div className="flex-1 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center">
              <span className="text-white/95 text-xs sm:text-[13px] font-normal tracking-wide">
                The intelligence era is here. Get more time back for the work that matters.
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-3 sm:px-3.5 py-0.5 sm:py-1 rounded-full border border-white/60 hover:border-white hover:bg-white/10 text-[11px] sm:text-xs font-medium text-white transition-all shadow-2xs shrink-0"
              >
                Explore SFA
              </Link>
            </div>

            {/* Close Button on Right (Matching Reference Screenshot) */}
            <button
              type="button"
              onClick={() => setShowBanner(false)}
              aria-label="Dismiss announcement"
              className="p-1 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors shrink-0 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Navbar Header */}
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow duration-200 font-sans",
          isScrolled ? "shadow-sm" : ""
        )}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3">
          <div className="relative flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-none relative z-10"
            >
              <div className="relative h-8 sm:h-9 w-auto flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/resources/sfa_logo.svg"
                  alt="SFA Logo"
                  width={24}
                  height={35}
                  className="h-7 sm:h-8 w-auto object-contain"
                  priority
                />
              </div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 font-sans transition-colors">
                SalesForce<span className="text-blue-600">.lk</span>
              </span>
            </Link>

            {/* Center Nav Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-3">
              {/* Home */}
              <div className="relative py-1">
                <Link
                  href="/"
                  className={cn(
                    "flex items-center gap-1 text-[13px] px-3 py-1.5 rounded-lg transition-colors duration-150 relative",
                    pathname === "/"
                      ? "text-blue-600 font-semibold after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-0.5 after:bg-blue-600 after:rounded-full"
                      : "font-normal text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                  )}
                >
                  <span>Home</span>
                </Link>
              </div>

              {/* Solutions Dropdown Menu (Hover + Click) */}
              <div
                className="relative py-1"
                ref={solutionsMenuRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={handleToggleClick}
                  aria-expanded={solutionsOpen}
                  className={cn(
                    "flex items-center gap-1 text-[13px] px-3 py-1.5 rounded-lg transition-colors duration-150 relative cursor-pointer select-none",
                    solutionsOpen
                      ? "text-blue-600 font-semibold bg-blue-50/70"
                      : "font-normal text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                  )}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200 text-slate-500",
                      solutionsOpen ? "rotate-180 text-blue-600" : ""
                    )}
                  />
                </button>

                {/* Floating Mega-Menu Popover (Matching Attached Screenshot) */}
                {solutionsOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-[100]"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="w-[700px] max-w-[94vw] bg-white rounded-3xl border border-slate-200 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.22)] p-5 flex gap-6 animate-in fade-in zoom-in-95 duration-150">
                      {/* Left Dark Promo Card (Matching Screenshot) */}
                      <div className="bg-[#090D1A] text-white p-5 rounded-2xl flex flex-col justify-between w-64 lg:w-72 shrink-0 border border-slate-800">
                        <div>
                          {/* Rounded Image Container */}
                          <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 border border-white/10 bg-slate-900">
                            <Image
                              src="/resources/fieldinvoicing.png"
                              alt="Solutions Preview"
                              fill
                              className="object-cover object-top"
                            />
                          </div>

                          <h3 className="font-bold text-white text-base leading-snug mb-2 font-sans">
                            SalesForce.lk Solutions Guide
                          </h3>

                          <p className="text-xs text-slate-400 leading-relaxed font-normal">
                            See how modern distributors connect field van billing, warehouse operations, and leadership dashboards.
                          </p>
                        </div>

                        <div className="pt-4 mt-4 border-t border-white/10">
                          <Link
                            href="/#features"
                            onClick={() => setSolutionsOpen(false)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-blue-400 transition-colors"
                          >
                            <span>Explore Solutions</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>

                      {/* Right Menu Items List */}
                      <div className="flex-1 flex flex-col justify-start">
                        <div className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider mb-2.5 px-3">
                          PLATFORM &amp; SOLUTIONS
                        </div>

                        <div className="space-y-1">
                          {solutionItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setSolutionsOpen(false)}
                                className="group flex items-start gap-3.5 p-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                              >
                                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xs">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                                    {item.title}
                                  </h4>
                                  <p className="text-xs text-slate-500 leading-snug font-normal mt-0.5 line-clamp-1">
                                    {item.desc}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* About */}
              <div className="relative py-1">
                <Link
                  href="/about"
                  className={cn(
                    "flex items-center gap-1 text-[13px] px-3 py-1.5 rounded-lg transition-colors duration-150 relative",
                    isAboutPage
                      ? "text-blue-600 font-semibold after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-0.5 after:bg-blue-600 after:rounded-full"
                      : "font-normal text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                  )}
                >
                  <span>About</span>
                </Link>
              </div>

              <div className="relative py-1">
                <Link
                  href="/clients"
                  className={cn(
                    "flex items-center gap-1 text-[13px] px-3 py-1.5 rounded-lg transition-colors duration-150 relative",
                    isClientsPage
                      ? "text-blue-600 font-semibold after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-0.5 after:bg-blue-600 after:rounded-full"
                      : "font-normal text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                  )}
                >
                  <span>Clients</span>
                </Link>
              </div>

              {/* Contact */}
              <div className="relative py-1">
                <Link
                  href="/contact"
                  className={cn(
                    "flex items-center gap-1 text-[13px] px-3 py-1.5 rounded-lg transition-colors duration-150 relative",
                    isContactPage
                      ? "text-blue-600 font-semibold after:absolute after:-bottom-2.5 after:left-1/2 after:-translate-x-1/2 after:w-5 after:h-0.5 after:bg-blue-600 after:rounded-full"
                      : "font-normal text-slate-700 hover:text-slate-950 hover:bg-slate-50"
                  )}
                >
                  <span>Contact</span>
                </Link>
              </div>
            </nav>

            {/* Right CTA Button (Desktop) */}
            <div className="hidden md:flex items-center relative z-10">
              <Link
                href="/contact"
                className="px-5 py-2 text-[13px] font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-[0_4px_16px_rgba(37,99,235,0.35)] transition-all duration-150 active:scale-[0.98] inline-flex items-center gap-1.5"
              >
                <span>Talk to Our Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className={cn(
                "md:hidden p-2 rounded-lg",
                "bg-slate-100 text-slate-800 hover:bg-slate-200",
                "border border-slate-200",
                "transition-colors duration-150 cursor-pointer"
              )}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 md:hidden transition-all duration-300 ease-out",
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className={cn(
            "absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300",
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            "relative flex flex-col bg-white border-b border-slate-200 p-6 transition-all duration-300 ease-out shadow-xl max-h-[85vh] overflow-y-auto",
            mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
          )}
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2"
            >
              <Image
                src="/resources/sfa_logo.svg"
                alt="SFA Logo"
                width={20}
                height={29}
                className="h-6 w-auto object-contain"
              />
              <span className="font-extrabold text-base text-slate-900 font-sans">
                SalesForce<span className="text-blue-600">.lk</span>
              </span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-2 py-4">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "py-2 px-3 rounded-lg text-sm font-medium transition-colors",
                pathname === "/"
                  ? "text-blue-600 bg-blue-50 font-semibold"
                  : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
              )}
            >
              Home
            </Link>

            {/* Mobile Solutions Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 cursor-pointer"
              >
                <span>Solutions</span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform text-slate-500",
                    mobileSolutionsOpen ? "rotate-180 text-blue-600" : ""
                  )}
                />
              </button>

              {mobileSolutionsOpen && (
                <div className="pl-4 pr-1 py-2 space-y-1.5 border-l-2 border-blue-100 ml-3 my-1">
                  {solutionItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileSolutionsOpen(false);
                        }}
                        className="flex items-start gap-2.5 py-1.5 px-2 rounded-md hover:bg-slate-50 transition-colors"
                      >
                        <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-slate-900 leading-tight">
                            {item.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {item.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* About */}
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "py-2 px-3 rounded-lg text-sm font-medium transition-colors",
                isAboutPage
                  ? "text-blue-600 bg-blue-50 font-semibold"
                  : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
              )}
            >
              About
            </Link>

            {/* Clients */}
            <Link
              href="/clients"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "py-2 px-3 rounded-lg text-sm font-medium transition-colors",
                isClientsPage
                  ? "text-blue-600 bg-blue-50 font-semibold"
                  : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
              )}
            >
              Clients
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "py-2 px-3 rounded-lg text-sm font-medium transition-colors",
                isContactPage
                  ? "text-blue-600 bg-blue-50 font-semibold"
                  : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
              )}
            >
              Contact
            </Link>
          </div>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full mt-2 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Talk to Our Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
};
