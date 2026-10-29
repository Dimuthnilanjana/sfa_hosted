"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { MessageSquare } from "lucide-react";

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={siteConfig.links.whatsappChat}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Prima SFA sales team on WhatsApp"
      className="hidden lg:flex fixed bottom-8 right-8 z-40 items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-5 py-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105 group border-2 border-white/20"
    >
      <div className="relative">
        <MessageSquare className="w-6 h-6 fill-white stroke-emerald-600" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-300 rounded-full animate-ping" />
      </div>
      <div className="flex flex-col text-left">
        <span className="text-xs text-emerald-100 font-semibold leading-tight">Need Quick Answers?</span>
        <span className="text-sm font-extrabold leading-tight">Chat on WhatsApp</span>
      </div>
    </a>
  );
};
