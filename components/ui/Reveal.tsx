"use client";

import React from "react";
import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface RevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
  scale?: number;
  amount?: number | "some" | "all";
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.55,
  yOffset = 22,
  xOffset = 0,
  direction = "up",
  once = false, // Set to false so it smoothly reveals scrolling top-to-bottom & bottom-to-top
  scale = 1,
  amount = 0.15,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  let initialY = 0;
  let initialX = 0;

  if (direction === "up") initialY = yOffset;
  else if (direction === "down") initialY = -yOffset;
  else if (direction === "left") initialX = xOffset || 24;
  else if (direction === "right") initialX = -(xOffset || 24);

  return (
    <motion.div
      className={cn("transform-gpu will-change-[transform,opacity]", className)}
      initial={{
        opacity: 0,
        y: initialY,
        x: initialX,
        scale: scale !== 1 ? scale : 1,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{
        once,
        amount,
        margin: "-40px 0px -40px 0px",
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Apple-style snappy fluid ease-out
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
