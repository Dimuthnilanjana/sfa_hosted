import React from "react";
import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
  notchClassName?: string;
  theme?: "light" | "dark";
}

export const PhoneFrame: React.FC<PhoneFrameProps> = ({
  children,
  className,
  notchClassName,
  theme = "light",
}) => {
  return (
    <div
      className={cn(
        "relative rounded-[40px] p-3 shadow-2xl border-[6px] transition-transform duration-300",
        theme === "dark"
          ? "bg-slate-900 border-slate-700 text-white shadow-brand-500/20"
          : "bg-slate-900 border-slate-800 text-white shadow-slate-900/20",
        className
      )}
    >
      {/* Dynamic Notch / Island */}
      <div
        className={cn(
          "absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full z-30 flex items-center justify-center gap-2",
          notchClassName
        )}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-slate-800" />
        <div className="w-2 h-2 rounded-full bg-blue-900" />
      </div>

      {/* Screen Container */}
      <div className="relative rounded-[32px] overflow-hidden bg-white w-full h-full min-h-[460px] flex flex-col pt-7">
        {children}
      </div>

      {/* Bottom bar indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-600/50 rounded-full z-30" />
    </div>
  );
};
