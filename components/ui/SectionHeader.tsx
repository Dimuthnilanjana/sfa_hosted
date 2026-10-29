import React from "react";
import { cn } from "@/lib/utils";
import { Badge, BadgeProps } from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  badgeVariant?: BadgeProps["variant"];
  theme?: "dark" | "light";
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
  subtitleClassName,
  badgeVariant = "brand",
  theme = "dark",
}) => {
  const isLight = theme === "light";

  return (
    <div
      className={cn(
        "flex flex-col gap-3.5 mb-12 sm:mb-16",
        align === "center" ? "items-center text-center max-w-3xl mx-auto" : "items-start text-left max-w-2xl",
        className
      )}
    >
      {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-[42px] font-medium tracking-tight text-balance leading-[1.2]",
          isLight ? "text-slate-900" : "text-white",
          titleClassName
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg font-normal max-w-2xl text-balance leading-relaxed",
            isLight ? "text-slate-600" : "text-slate-300",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
