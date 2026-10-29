"use client";

import React, { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";

export const CookieNotice: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem("prima_sfa_cookie_consent");
      if (!accepted) {
        setIsVisible(true);
      }
    } catch {
      // localStorage disabled or blocked
      setIsVisible(false);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem("prima_sfa_cookie_consent", "true");
    } catch {
      // ignore
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-6 left-4 sm:left-6 z-40 max-w-sm bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E5E7EB] p-4 rounded-xl shadow-xl flex items-start gap-3 text-[#111827] font-sans"
    >
      <Cookie className="w-5 h-5 text-[#2563EB] flex-shrink-0 mt-0.5" />
      <div className="flex-1 text-xs text-[#4B5563]">
        <p className="font-bold text-[#111827] mb-1">We respect your privacy</p>
        <p className="mb-2.5">We use cookies to analyze site traffic and improve your browsing experience.</p>
        <div className="flex items-center gap-2">
          <button
            onClick={handleAccept}
            className="px-3 py-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-md font-semibold text-xs cursor-pointer shadow-xs transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="px-2 py-1 text-[#6B7280] hover:text-[#111827] text-xs cursor-pointer transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        aria-label="Close cookie banner"
        className="text-[#94A3B8] hover:text-[#111827] p-0.5 cursor-pointer"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
