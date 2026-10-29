import React from "react";
import { Navigation } from "lucide-react";

export const RouteMapMock: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[220px] bg-[#0B101E] rounded-2xl p-4 text-white relative overflow-hidden flex flex-col justify-between select-none font-helvetica border border-white/10">
      {/* Map Grid Background pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00D2FF_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center bg-[#0F172A]/90 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
        <div className="flex items-center gap-2">
          <Navigation className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="font-bold text-xs">Route #4 - Kandy Highway</span>
        </div>
        <span className="text-[10px] bg-aqua-500/20 text-aqua-300 px-2 py-0.5 rounded font-mono border border-aqua-400/30">
          Rep Live (Van WP-GA 4821)
        </span>
      </div>

      {/* SVG Map Lines & Stops */}
      <div className="absolute inset-0 flex items-center justify-center p-6 pointer-events-none">
        <svg viewBox="0 0 400 160" className="w-full h-full">
          {/* Dashed route path */}
          <path
            d="M 40,120 Q 120,40 220,100 T 360,30"
            fill="none"
            stroke="#00D2FF"
            strokeWidth="3"
            strokeDasharray="6 6"
            className="animate-pulse"
          />

          {/* Visited Stop 1 */}
          <circle cx="40" cy="120" r="10" fill="#00E5D4" fillOpacity="0.3" />
          <circle cx="40" cy="120" r="6" fill="#00E5D4" />

          {/* Visited Stop 2 */}
          <circle cx="140" cy="65" r="10" fill="#00E5D4" fillOpacity="0.3" />
          <circle cx="140" cy="65" r="6" fill="#00E5D4" />

          {/* Current Live Van Position Pin */}
          <circle cx="220" cy="100" r="16" fill="#6366F1" fillOpacity="0.4" className="animate-ping" />
          <circle cx="220" cy="100" r="10" fill="#3B82F6" />
          <circle cx="220" cy="100" r="4" fill="#ffffff" />

          {/* Pending Stop 4 */}
          <circle cx="360" cy="30" r="8" fill="#64748b" fillOpacity="0.4" />
          <circle cx="360" cy="30" r="5" fill="#64748b" />
        </svg>
      </div>

      {/* Bottom Floating Stats */}
      <div className="relative z-10 grid grid-cols-3 gap-2 text-center text-[11px] bg-[#0F172A]/90 backdrop-blur-md p-2 rounded-xl border border-white/10 mt-auto">
        <div className="border-r border-white/10 pr-1">
          <div className="text-slate-400 text-[9px]">Completed</div>
          <div className="font-bold text-aqua-400">14 Outlets</div>
        </div>
        <div className="border-r border-white/10 pr-1">
          <div className="text-slate-400 text-[9px]">Next Stop</div>
          <div className="font-bold text-white truncate">Perera Groceries</div>
        </div>
        <div>
          <div className="text-slate-400 text-[9px]">ETA</div>
          <div className="font-bold text-cyan-300">3 mins away</div>
        </div>
      </div>
    </div>
  );
};
