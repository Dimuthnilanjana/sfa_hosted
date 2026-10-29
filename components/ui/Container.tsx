import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1240px] px-5 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
};
