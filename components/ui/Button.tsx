import React from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "navy" | "lime" | "aqua" | "gradient";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none rounded-full cursor-pointer select-none active:scale-[0.98]";

    const variants = {
      primary:
        "bg-gradient-to-r from-aqua-500 to-cyan-500 text-dark-900 hover:from-aqua-400 hover:to-cyan-400 font-extrabold shadow-[0_0_25px_rgba(0,229,212,0.35)] hover:shadow-[0_0_35px_rgba(0,210,255,0.45)] border border-cyan-300/30",
      secondary:
        "bg-indigo-600 text-white hover:bg-indigo-500 shadow-md hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] border border-indigo-400/30",
      gradient:
        "bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 text-white hover:brightness-110 font-bold shadow-lg hover:shadow-[0_0_30px_rgba(0,210,255,0.4)]",
      outline:
        "bg-dark-100 text-white border border-line hover:border-cyan-400/60 hover:text-cyan-300 hover:bg-dark-50/70",
      ghost:
        "bg-transparent text-slate-300 hover:text-cyan-300 hover:bg-white/[0.05]",
      navy:
        "bg-dark-100 text-white hover:bg-dark-50 border border-slate-700 shadow-md",
      lime:
        "bg-gradient-to-r from-aqua-500 to-cyan-500 text-dark-900 hover:from-aqua-400 hover:to-cyan-400 font-extrabold shadow-[0_0_25px_rgba(0,229,212,0.35)] border border-cyan-300/30",
      aqua:
        "bg-gradient-to-r from-aqua-500 to-cyan-500 text-dark-900 hover:from-aqua-400 hover:to-cyan-400 font-extrabold shadow-[0_0_25px_rgba(0,229,212,0.35)] border border-cyan-300/30",
    };

    const sizes = {
      sm: "text-sm min-h-[38px] px-4 py-1.5 gap-1.5",
      md: "text-base min-h-[46px] px-6 py-2.5 gap-2",
      lg: "text-lg min-h-[54px] px-8 py-3.5 gap-2.5",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
