import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "brand" | "teal" | "orange" | "violet" | "gray" | "dark" | "lime" | "aqua" | "cyan" | "indigo";
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "brand",
  dot = false,
  ...props
}) => {
  const variantStyles = {
    brand: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    teal: "bg-aqua-500/10 text-aqua-400 border-aqua-500/30",
    orange: "bg-radiant-500/10 text-radiant-300 border-radiant-500/30",
    violet: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
    gray: "bg-white/[0.05] text-slate-300 border-white/10",
    dark: "bg-dark-100/90 text-white border-white/10",
    lime: "bg-aqua-500/10 text-aqua-400 border-aqua-500/30",
    aqua: "bg-aqua-500/10 text-aqua-400 border-aqua-500/30",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30",
  };

  const dotStyles = {
    brand: "bg-cyan-400",
    teal: "bg-aqua-400 animate-pulseGlow",
    orange: "bg-radiant-400",
    violet: "bg-indigo-400",
    gray: "bg-slate-400",
    dark: "bg-aqua-400",
    lime: "bg-aqua-400 animate-pulseGlow",
    aqua: "bg-aqua-400 animate-pulseGlow",
    cyan: "bg-cyan-400 animate-pulseGlow",
    indigo: "bg-indigo-400",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold border tracking-wide uppercase shadow-xs backdrop-blur-xs",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-2 h-2 rounded-full flex-shrink-0", dotStyles[variant])}
          aria-hidden="true"
        />
      )}
      <span>{children}</span>
    </div>
  );
};
