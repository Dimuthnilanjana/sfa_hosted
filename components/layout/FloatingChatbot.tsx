"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { X } from "lucide-react";

export const FloatingChatbot: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center pointer-events-none">
      {/* Floating Chatbot Widget Button */}
      <a
        href={siteConfig.links.whatsappChat}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Need Quick Support? Chat with us"
        className="pointer-events-auto relative group flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 active:scale-95 focus:outline-none"
      >
        {/* Refined SVG Chatbot Icon */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 drop-shadow-xl transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/resources/Livechatbot.svg"
            alt="Live Chatbot Support"
            width={128}
            height={128}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Support Text Pill positioned directly below the SVG */}
        {showTooltip && (
          <div className="mt-1 whitespace-nowrap bg-[#FFFFFF] text-[#111827] border border-[#E5E7EB] shadow-lg px-3 py-1.5 rounded-full flex items-center gap-2 transition-all">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
            <span className="text-xs font-medium text-[#111827] tracking-wide font-sans">
              Need Quick Support?
            </span>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="ml-1 text-slate-400 hover:text-slate-800 p-0.5 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close text bubble"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </a>
    </div>
  );
};
