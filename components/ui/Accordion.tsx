"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId = items[0]?.id,
  className,
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={cn("w-full flex flex-col font-sans", className)}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const numberFormatted = String(index + 1).padStart(2, "0");

        return (
          <div
            key={item.id}
            className="border-b border-slate-200/80 py-5 sm:py-6 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 sm:gap-6">
              {/* Left Side: Number + Question & Answer */}
              <div className="flex items-start gap-4 sm:gap-6 flex-1">
                {/* Number Badge (01, 02, etc.) */}
                <span
                  className={cn(
                    "text-sm sm:text-base font-bold shrink-0 pt-0.5 tracking-tight font-sans transition-colors select-none",
                    isOpen ? "text-blue-600" : "text-slate-400"
                  )}
                >
                  {numberFormatted}
                </span>

                {/* Content Container */}
                <div className="flex-1">
                  <button
                    type="button"
                    id={`accordion-btn-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-panel-${item.id}`}
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left cursor-pointer focus:outline-none group"
                  >
                    <h3
                      className={cn(
                        "text-base sm:text-lg lg:text-[19px] font-semibold tracking-tight transition-colors font-sans leading-snug",
                        isOpen
                          ? "text-blue-600"
                          : "text-slate-900 group-hover:text-blue-600"
                      )}
                    >
                      {item.question}
                    </h3>
                  </button>

                  {/* Expandable Answer */}
                  {isOpen && (
                    <div
                      id={`accordion-panel-${item.id}`}
                      role="region"
                      aria-labelledby={`accordion-btn-${item.id}`}
                      className="mt-3 sm:mt-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal pr-2 sm:pr-8 animate-fadeIn"
                    >
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side: Plus / Minus Toggle Button Matching Screenshot */}
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-label={isOpen ? "Collapse question" : "Expand question"}
                className={cn(
                  "w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 cursor-pointer shadow-2xs mt-0.5",
                  isOpen
                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                    : "border border-slate-200/90 bg-white text-slate-400 hover:text-slate-600 hover:border-slate-300"
                )}
              >
                {isOpen ? (
                  <Minus className="w-4 h-4 text-white stroke-[2.5]" />
                ) : (
                  <Plus className="w-4 h-4 stroke-[2]" />
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
