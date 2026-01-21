"use client";
import WhatsAppButton from "@/components/WhatsappBtn";
import { Flame, Clock } from "lucide-react";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MobileCard({ mobile }) {
  const inStock = mobile.stock > 0;
  const isDeal = mobile.category === "deals";

  return (
    <div className={`group relative flex flex-col h-full rounded-xl overflow-hidden border border-[#e5a8ec] ${inter.className}`}>
      
      {/* 1. VISUAL ANCHOR (IMAGE) */}
      <div className="relative aspect-5/5 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent z-10 pointer-events-none" />
        
        <img
          src={mobile.image}
          alt={mobile.name}
          className="w-full h-full object-contain p-8"
        />

        {/* FLOATING CHIPS */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
          <span className="backdrop-blur-md bg-white/40 text-slate-900 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm border border-white/20 uppercase tracking-tighter flex items-center">
            <Flame fill="red" className="w-3.5 h-3.5 md:w-4.5 md:h-4.5 text-red-600 mr-1" /> Hot selling
          </span>
          
          {/* DEAL EXPIRY BADGE (Top Right) */}
          {isDeal && mobile.dealDuration && (
            <span className="bg-[#4B2050] text-white text-[9px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 animate-pulse border border-purple-300/30">
              <Clock size={12} className="text-purple-300" />
              Ends in {mobile.dealDuration}
            </span>
          )}
        </div>
      </div>

      {/* 2. PRODUCT INFO */}
      <div className="flex flex-col grow p-6 bg-linear-to-br from-[#2C0741] via-[#4B2050] to-[#171127] text-white">

        <div className="space-y-1 mb-1">
          <p className="text-purple-300 text-xs font-bold uppercase tracking-[0.2em]">
            {mobile.brand}
          </p>
          <h2 className="text-white text-sm font-normal leading-tight h-10 line-clamp-2">
            {mobile.name}
          </h2>
        </div>

        {/* 3. DYNAMIC FOOTER */}
        <div className="mt-auto pt-2 border-t-[0.5px] border-slate-700 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-1">
              Best Price
            </span>
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-white">
                Rs {mobile.price}
              </span>
              
              {/* OLD PRICE (Right side of current price) */}
              {isDeal && mobile.oldPrice && (
                <span className="text-[11px] text-slate-400 line-through decoration-red-500/50">
                  Rs {mobile.oldPrice}
                </span>
              )}
            </div>
          </div>

          <div className={`flex items-center gap-2 px-3 py-1 rounded-full border ${
            inStock 
              ? "border-emerald-500/20 bg-emerald-500/10" 
              : "bg-slate-800 border-slate-700"
          }`}>
            <span className={`text-[8px] font-medium uppercase tracking-tight ${inStock ? "text-emerald-400" : "text-slate-500"}`}>
              {inStock ? "In Stock" : "Sold Out"}
            </span>
          </div>
        </div>

        {/* 4. BUTTON WITH HOVER EFFECT */}
        <div className="mt-4 transform transition-transform duration-300 group-hover:scale-[1.02]">
          <WhatsAppButton name={mobile.name} price={mobile.price} />
        </div>
      </div>
    </div>
  );
}