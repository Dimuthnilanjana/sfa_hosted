import React from "react";
import { TrendingUp, Users, DollarSign, PackageCheck, ArrowUpRight, CheckCircle2 } from "lucide-react";

export const DashboardMock: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 text-white text-xs select-none bg-[#000000] p-4 sm:p-5 rounded-b-xl font-body">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-white/10">
        <div>
          <h4 className="font-extrabold text-base text-white font-heading">Distributor Sales Control</h4>
          <p className="text-[#A1A1AA] text-xs">Live updates from 18 active van routes across Colombo</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0E0E14] text-[#2FAFA8] text-xs font-semibold rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#2FAFA8]" />
            18/18 Vans Synced Live
          </span>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="bg-[#0A0A0F] p-3.5 rounded-lg border border-white/10 shadow-xs">
          <div className="flex items-center justify-between text-[#A1A1AA] mb-1">
            <span>Today Sales</span>
            <DollarSign className="w-4 h-4 text-[#2387D9]" />
          </div>
          <div className="font-extrabold text-lg text-white font-mono">Rs. 1,485,000</div>
          <div className="flex items-center gap-1 text-[11px] text-[#2FAFA8] font-semibold mt-1">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+14.2% vs target</span>
          </div>
        </div>

        <div className="bg-[#0A0A0F] p-3.5 rounded-lg border border-white/10 shadow-xs">
          <div className="flex items-center justify-between text-[#A1A1AA] mb-1">
            <span>Cheque Collections</span>
            <PackageCheck className="w-4 h-4 text-[#93C5FD]" />
          </div>
          <div className="font-extrabold text-lg text-white font-mono">Rs. 892,400</div>
          <div className="text-[11px] text-[#A1A1AA] mt-1">32 Cheques Received</div>
        </div>

        <div className="bg-[#0A0A0F] p-3.5 rounded-lg border border-white/10 shadow-xs">
          <div className="flex items-center justify-between text-[#A1A1AA] mb-1">
            <span>Outlet Visits</span>
            <Users className="w-4 h-4 text-[#2FAFA8]" />
          </div>
          <div className="font-extrabold text-lg text-white font-mono">342 / 380</div>
          <div className="flex items-center gap-1 text-[11px] text-[#2FAFA8] font-semibold mt-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>90% Beat Compliance</span>
          </div>
        </div>

        <div className="bg-[#0A0A0F] p-3.5 rounded-lg border border-white/10 shadow-xs">
          <div className="flex items-center justify-between text-[#A1A1AA] mb-1">
            <span>Monthly Target</span>
            <TrendingUp className="w-4 h-4 text-[#2387D9]" />
          </div>
          <div className="font-extrabold text-lg text-white font-mono">87.4%</div>
          <div className="w-full bg-[#101722] h-1.5 rounded-full mt-2 overflow-hidden">
            <div className="bg-[#2387D9] h-full rounded-full w-[87%]" />
          </div>
        </div>
      </div>

      {/* Analytics Row: Line Chart + Donut */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Line Chart */}
        <div className="lg:col-span-2 bg-[#0F172A] p-4 rounded-xl border border-white/10 shadow-xs flex flex-col justify-between">
          <div className="flex justify-between items-center mb-3">
            <span className="font-bold text-white text-sm">Hourly Sales Trend (LKR)</span>
            <span className="text-[11px] text-slate-400 font-mono">Today • Live Data</span>
          </div>
          <div className="h-40 w-full relative">
            <svg viewBox="0 0 500 150" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#6366F1" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Grid lines */}
              <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

              {/* Area Fill */}
              <path
                d="M 0,130 Q 80,110 140,70 T 280,50 T 420,20 L 500,35 L 500,150 L 0,150 Z"
                fill="url(#chartGradient)"
              />
              {/* Curve Line */}
              <path
                d="M 0,130 Q 80,110 140,70 T 280,50 T 420,20 L 500,35"
                fill="none"
                stroke="#00D2FF"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Data points */}
              <circle cx="140" cy="70" r="5" fill="#6366F1" className="animate-pulse" />
              <circle cx="280" cy="50" r="5" fill="#3B82F6" />
              <circle cx="420" cy="20" r="5" fill="#00E5D4" />
            </svg>
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 font-mono pt-2 border-t border-white/10">
            <span>08:00 AM</span>
            <span>10:00 AM</span>
            <span>12:00 PM</span>
            <span>02:00 PM</span>
            <span>04:00 PM</span>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="bg-[#0A0A0F] p-4 rounded-lg border border-white/10 shadow-xs flex flex-col justify-between">
          <div className="font-bold text-white text-sm mb-2 font-heading">Category Revenue</div>
          <div className="flex items-center justify-center my-2 relative">
            <svg viewBox="0 0 100 100" className="w-28 h-28 transform -rotate-90">
              <circle cx="50" cy="50" r="40" stroke="#18181B" strokeWidth="16" fill="transparent" />
              <circle cx="50" cy="50" r="40" stroke="#2387D9" strokeWidth="16" fill="transparent" strokeDasharray="251" strokeDashoffset="80" />
              <circle cx="50" cy="50" r="40" stroke="#2FAFA8" strokeWidth="16" fill="transparent" strokeDasharray="251" strokeDashoffset="170" />
              <circle cx="50" cy="50" r="40" stroke="#93C5FD" strokeWidth="16" fill="transparent" strokeDasharray="251" strokeDashoffset="220" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-extrabold text-sm text-white font-mono">Rs. 1.48M</span>
              <span className="text-[9px] text-[#A1A1AA]">Total</span>
            </div>
          </div>
          <div className="space-y-1 text-[11px] text-[#A1A1AA]">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#2387D9]" />Flour &amp; Grains</span>
              <span className="font-bold text-white font-mono">48%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#2FAFA8]" />Spices &amp; Oils</span>
              <span className="font-bold text-white font-mono">32%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-[#93C5FD]" />Confectionery</span>
              <span className="font-bold text-white font-mono">20%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Debtor Ageing Table */}
      <div className="bg-[#0A0A0F] rounded-lg border border-white/10 p-4 shadow-xs overflow-x-auto">
        <div className="font-bold text-white text-sm mb-3 flex items-center justify-between font-heading">
          <span>Debtor Ageing Summary (Top Outlets)</span>
          <span className="text-xs text-[#2387D9] font-semibold cursor-pointer hover:underline">View All 142 Accounts →</span>
        </div>
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-[#14141B] text-[#A1A1AA] border-b border-white/10 font-semibold">
              <th className="p-2 rounded-l-md">Customer Outlet</th>
              <th className="p-2">Route</th>
              <th className="p-2">0 - 30 Days</th>
              <th className="p-2">31 - 60 Days</th>
              <th className="p-2">60+ Days (Overdue)</th>
              <th className="p-2 rounded-r-md text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10 font-medium">
            <tr>
              <td className="p-2 font-bold text-white">Perera Super Centre</td>
              <td className="p-2 text-[#A1A1AA]">Colombo North</td>
              <td className="p-2 text-[#F4F7FB] font-mono">Rs. 145,000</td>
              <td className="p-2 text-[#F4F7FB] font-mono">Rs. 0</td>
              <td className="p-2 text-[#52525B] font-mono">Rs. 0</td>
              <td className="p-2 text-right"><span className="px-2 py-0.5 bg-[#2FAFA8]/15 text-[#2FAFA8] rounded-full font-bold text-[10px] border border-[#2FAFA8]/30">NORMAL</span></td>
            </tr>
            <tr>
              <td className="p-2 font-bold text-white">Jayalath Traders</td>
              <td className="p-2 text-[#A1A1AA]">Nugegoda Route</td>
              <td className="p-2 text-[#F4F7FB] font-mono">Rs. 82,000</td>
              <td className="p-2 text-[#93C5FD] font-semibold font-mono">Rs. 45,000</td>
              <td className="p-2 text-[#52525B] font-mono">Rs. 0</td>
              <td className="p-2 text-right"><span className="px-2 py-0.5 bg-[#2387D9]/15 text-[#93C5FD] rounded-full font-bold text-[10px] border border-[#2387D9]/30">DUE SOON</span></td>
            </tr>
            <tr>
              <td className="p-2 font-bold text-white">Lanka Retail Stores</td>
              <td className="p-2 text-[#A1A1AA]">Dehiwala Beat</td>
              <td className="p-2 text-[#F4F7FB] font-mono">Rs. 30,000</td>
              <td className="p-2 text-[#F4F7FB] font-mono">Rs. 28,000</td>
              <td className="p-2 text-[#EF4444] font-bold font-mono">Rs. 64,500</td>
              <td className="p-2 text-right"><span className="px-2 py-0.5 bg-red-500/15 text-red-400 rounded-full font-bold text-[10px] border border-red-500/30">BLOCKED</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
