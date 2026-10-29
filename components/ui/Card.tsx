import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  variant?: "default" | "mist" | "navy" | "glass" | "bordered";
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, hoverEffect = false, variant = "default", ...props }, ref) => {
    const variantStyles = {
      default: "bg-[#0F172A] border border-white/10 shadow-card text-white",
      mist: "bg-[#0B101E] border border-white/10 shadow-xs text-white",
      navy: "bg-navy border border-slate-700/60 text-white shadow-card-hover",
      glass: "glass-panel shadow-glass text-white",
      bordered: "bg-[#0F172A] border-2 border-white/15 text-white",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-card p-6 sm:p-8 transition-all duration-300 relative overflow-hidden",
          variantStyles[variant],
          hoverEffect && "hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-300/60",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
