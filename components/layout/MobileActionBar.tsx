"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { Phone, MessageSquare, Calendar } from "lucide-react";

export const MobileActionBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#FFFFFF]/95 backdrop-blur-md border-t border-[#E5E7EB] p-2.5 shadow-xl font-sans"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href={`tel:${siteConfig.company.phones[0].replace(/\s+/g, "")}`}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#FFFFFF] hover:bg-[#F8FAFC] text-[#111827] rounded-lg border border-[#E5E7EB] transition-colors text-[11px] font-semibold"
        >
          <Phone className="w-4 h-4 text-[#2563EB] mb-0.5" />
          <span>Call Sales</span>
        </a>

        <a
          href={siteConfig.links.whatsappChat}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#FFFFFF] hover:bg-[#F8FAFC] text-[#111827] rounded-lg border border-[#E5E7EB] transition-colors text-[11px] font-semibold"
        >
          <MessageSquare className="w-4 h-4 text-[#059669] mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={() => {
            const el = document.getElementById("demo");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-lg font-semibold shadow-xs transition-colors active:scale-95 text-[11px] cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-white mb-0.5" />
          <span>Book Demo</span>
        </button>
      </div>
    </aside>
  );
};
