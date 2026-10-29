import React from "react";
import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  children: React.ReactNode;
  url?: string;
  className?: string;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({
  children,
  url = "dashboard.primasfa.lk",
  className,
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl overflow-hidden bg-white border border-line shadow-2xl flex flex-col w-full",
        className
      )}
    >
      {/* Top Browser Bar */}
      <div className="bg-slate-100 px-4 py-3 border-b border-line flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
        </div>
        <div className="bg-white border border-slate-200 rounded-lg px-4 py-1 text-xs text-slate-500 font-mono max-w-xs sm:max-w-md w-full text-center truncate shadow-xs">
          🔒 https://{url}
        </div>
        <div className="w-12" />
      </div>

      {/* Browser Body */}
      <div className="relative bg-mist/50 p-4 sm:p-6 overflow-hidden flex-1">
        {children}
      </div>
    </div>
  );
};
