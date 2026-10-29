"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  badge?: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  className?: string;
  tabListClassName?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTabId,
  className,
  tabListClassName,
}) => {
  const [activeTabId, setActiveTabId] = useState(defaultTabId || tabs[0]?.id);

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight") {
      const nextIndex = (index + 1) % tabs.length;
      setActiveTabId(tabs[nextIndex].id);
    } else if (e.key === "ArrowLeft") {
      const prevIndex = (index - 1 + tabs.length) % tabs.length;
      setActiveTabId(tabs[prevIndex].id);
    }
  };

  return (
    <div className={cn("w-full flex flex-col items-center", className)}>
      <div
        role="tablist"
        aria-label="Content navigation tabs"
        className={cn(
          "inline-flex p-1.5 bg-[#0F1524] border border-white/10 rounded-full gap-1 mb-8 sm:mb-12 shadow-md flex-wrap justify-center backdrop-blur-md",
          tabListClassName
        )}
      >
        {tabs.map((tab, idx) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveTabId(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 select-none",
                isActive
                  ? "bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(0,210,255,0.3)] scale-[1.02]"
                  : "text-slate-400 hover:text-white hover:bg-white/[0.06]"
              )}
            >
              <span>{tab.label}</span>
              {tab.badge && (
                <span
                  className={cn(
                    "text-[10px] uppercase font-bold px-2 py-0.5 rounded-full",
                    isActive ? "bg-white/20 text-white" : "bg-white/10 text-slate-300"
                  )}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${activeTab.id}`}
        aria-labelledby={`tab-${activeTab.id}`}
        className="w-full focus-visible:outline-none"
        tabIndex={0}
      >
        {activeTab.content}
      </div>
    </div>
  );
};
