import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingChatbot } from "@/components/layout/FloatingChatbot";
import { CookieNotice } from "@/components/ui/CookieNotice";
import { PageLoader } from "@/components/ui/PageLoader";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Sales Force Automation for Sri Lankan Distributors`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Sales Force Automation Sri Lanka",
    "Prima SFA",
    "Van sales mobile app Sri Lanka",
    "Distributor software Colombo",
    "FMCG distribution SFA",
    "Bluetooth thermal receipt invoicing app",
    "Offline SFA mobile app",
    "GPS sales rep tracking Sri Lanka",
  ],
  authors: [{ name: siteConfig.company.name }],
  creator: siteConfig.company.name,
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: siteConfig.url,
    title: `${siteConfig.name} | Sales Force Automation`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Prima SFA Mobile App and Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Sales Force Automation`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/resources/sfa_logo.svg",
    shortcut: "/resources/sfa_logo.svg",
    apple: "/resources/sfa_logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#2563EB",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdOrg = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.company.phones[0],
      contactType: "sales",
      areaServed: "LK",
      availableLanguage: ["en", "si", "ta"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.company.address,
      addressLocality: siteConfig.company.city,
      addressCountry: siteConfig.company.country,
    },
  };

  const jsonLdApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    operatingSystem: "Android, Web Browser",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "LKR",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.company.name,
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }}
        />
      </head>
      <body className="font-sans text-[#111827] bg-[#FFFFFF] min-h-screen flex flex-col relative antialiased selection:bg-blue-100 selection:text-blue-900">
        <PageLoader />

        {/* Accessible Skip to main content link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-xl focus:shadow-xl font-medium text-sm"
        >
          Skip to main content
        </a>

        <Navbar />

        <div id="main-content" className="flex-1">
          {children}
        </div>

        <Footer />
        <FloatingChatbot />
        <ScrollToTop />
        <CookieNotice />
      </body>
    </html>
  );
}
