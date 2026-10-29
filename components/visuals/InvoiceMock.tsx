import React from "react";
import { Printer, ShoppingBag } from "lucide-react";
import { Badge } from "../ui/Badge";

export const InvoiceMock: React.FC = () => {
  return (
    <div className="flex flex-col h-full bg-[#0B101E] text-slate-200 text-xs select-none font-helvetica">
      {/* App Bar */}
      <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 text-white px-4 py-3 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4 text-cyan-200" />
          <span className="font-bold text-sm">New Tax Invoice</span>
        </div>
        <span className="bg-aqua-400/20 text-aqua-300 text-[10px] px-2 py-0.5 rounded font-mono border border-aqua-400/30 font-bold">
          OFFLINE READY
        </span>
      </div>

      {/* Customer Info Card */}
      <div className="p-3 bg-[#0F172A] border-b border-white/10">
        <div className="flex justify-between items-start mb-1">
          <div>
            <div className="font-bold text-white text-sm">Lanka Super Stores</div>
            <div className="text-slate-400 text-[11px]">No. 142, Main Street, Kandy</div>
          </div>
          <Badge variant="cyan" className="text-[10px] py-0.5 px-2">
            CREDIT OK
          </Badge>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-400 mt-2 pt-2 border-t border-white/[0.06]">
          <span>Beat: Kandy Central</span>
          <span>•</span>
          <span>Rep: Suneth P.</span>
        </div>
      </div>

      {/* Items Table */}
      <div className="p-3 flex-1 overflow-y-auto space-y-2">
        <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
          Invoice Line Items
        </div>

        <div className="bg-[#131E38] p-2.5 rounded-xl border border-white/10 shadow-xs flex justify-between items-center">
          <div>
            <div className="font-semibold text-white">Prima Wheat Flour 1kg</div>
            <div className="text-slate-400 text-[10px]">50 bags × Rs. 240.00</div>
          </div>
          <div className="text-right">
            <div className="font-bold text-cyan-300">Rs. 12,000</div>
            <div className="text-aqua-400 text-[10px] font-medium">+5 bags Free Issue</div>
          </div>
        </div>

        <div className="bg-[#131E38] p-2.5 rounded-xl border border-white/10 shadow-xs flex justify-between items-center">
          <div>
            <div className="font-semibold text-white">Ceylon Spice Mix 250g</div>
            <div className="text-slate-400 text-[10px]">100 packs × Rs. 180.00</div>
          </div>
          <div className="text-right">
            <div className="font-bold text-cyan-300">Rs. 18,000</div>
            <div className="text-radiant-300 text-[10px] font-medium">5% Trade Disc</div>
          </div>
        </div>

        <div className="bg-[#131E38] p-2.5 rounded-xl border border-white/10 shadow-xs flex justify-between items-center">
          <div>
            <div className="font-semibold text-white">Sunflower Oil 1L</div>
            <div className="text-slate-400 text-[10px]">25 bottles × Rs. 500.00</div>
          </div>
          <div className="text-right">
            <div className="font-bold text-cyan-300">Rs. 12,500</div>
            <div className="text-slate-400 text-[10px]">Standard Price</div>
          </div>
        </div>
      </div>

      {/* Invoice Totals & Action */}
      <div className="p-3 bg-[#0F172A] border-t border-white/10 shadow-lg space-y-2">
        <div className="space-y-1 text-slate-300 text-[11px]">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>Rs. 42,500</span>
          </div>
          <div className="flex justify-between text-aqua-400 font-medium">
            <span>Total Discounts</span>
            <span>- Rs. 900</span>
          </div>
          <div className="flex justify-between font-bold text-white text-sm pt-1 border-t border-white/[0.08]">
            <span>Net Payable</span>
            <span className="text-cyan-300">Rs. 41,600</span>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-aqua-400 to-cyan-400 hover:brightness-110 text-dark-900 font-extrabold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,229,212,0.35)] cursor-pointer transition-transform active:scale-95">
          <Printer className="w-4 h-4" />
          <span>Issue &amp; Print Bluetooth Bill</span>
        </button>
      </div>
    </div>
  );
};
