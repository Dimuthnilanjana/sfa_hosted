import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Route, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | Prima SFA",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#080B14] py-20 lg:py-32 flex items-center justify-center">
      <Container className="max-w-md text-center">
        <div className="bg-[#0F172A] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-400/30 flex items-center justify-center mb-6">
            <Route className="w-8 h-8" />
          </div>

          <span className="text-4xl font-extrabold text-cyan-300 mb-2">404</span>

          <h1 className="text-2xl font-extrabold text-white mb-3 tracking-tight">
            Off Route! Page Not Found
          </h1>

          <p className="text-sm text-slate-300 mb-8 leading-relaxed">
            The page you are looking for doesn&apos;t exist or might have been relocated to another route.
          </p>

          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </Container>
    </main>
  );
}
