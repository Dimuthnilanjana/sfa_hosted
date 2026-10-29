import React from "react";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";

interface IconTileProps {
  iconName: string;
  size?: "sm" | "md" | "lg";
  gradient?: string;
  className?: string;
}

export const IconTile: React.FC<IconTileProps> = ({
  iconName,
  size = "md",
  gradient = "from-brand-500 to-violet",
  className,
}) => {
  // Dynamically resolve icon component from lucide-react safely
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[iconName] || Icons.HelpCircle;

  const sizeClasses = {
    sm: "w-9 h-9 text-white p-2 rounded-xl",
    md: "w-12 h-12 text-white p-3 rounded-2xl",
    lg: "w-16 h-16 text-white p-4 rounded-3xl",
  };

  const iconSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-8 h-8",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center bg-gradient-to-br shadow-md flex-shrink-0 transition-transform duration-200 hover:scale-105",
        gradient,
        sizeClasses[size],
        className
      )}
    >
      <IconComponent className={iconSizes[size]} strokeWidth={1.75} aria-hidden="true" />
    </div>
  );
};
