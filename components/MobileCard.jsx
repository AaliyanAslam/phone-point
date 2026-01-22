"use client";
import WhatsAppButton from "@/components/WhatsappBtn";
import { Flame, Clock } from "lucide-react";
import { Inter } from 'next/font/google';
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] });

export default function MobileCard({ mobile }) {
  const inStock = mobile.stock > 0;
  const isDeal = mobile.category === "deals";

  return (
    <div className={`group relative flex flex-col h-full rounded-lg sm:rounded-xl overflow-hidden border border-[#e5a8ec] ${inter.className}`}>
      
      {/* --- EXTRA SMALL DEAL BADGE --- */}
      {isDeal && mobile.dealDuration && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
          <div className="bg-linear-to-r from-[#2C0741] to-[#6348A6] text-white 
            text-[7px] sm:text-[9px] px-2 sm:px-4 py-0.5 sm:py-1 
            rounded-b-md sm:rounded-b-lg shadow-md border-x border-b border-purple-400/30 flex items-center gap-1 whitespace-nowrap">
            <Clock size={8} className="text-purple-300 animate-pulse sm:w-2.75" />
            <span>ENDS: {mobile.dealDuration}</span>
          </div>
        </div>
      )}

      {/* 1. COMPACT VISUAL ANCHOR */}
      <div className="relative aspect-square overflow-hidden bg-white">
        <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent z-10 pointer-events-none" />
        
        <Link href={`/mobile/${mobile.id}`} className="block w-full h-full relative">
          <Image
            height={200} // Increased for better resolution
            width={200}
            src={mobile.image}
            alt={mobile.name}
            className="w-full h-full object-contain p-3 sm:p-8 transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* TINY FLOATING CHIP */}
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20">
          <span className="backdrop-blur-md bg-white/40 text-slate-900 text-[7px] sm:text-[10px] font-bold px-1.5 sm:px-3 py-0.5 sm:py-1.5 rounded-full shadow-sm border border-white/20 uppercase tracking-tighter flex items-center">
            <Flame fill="red" className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-red-600 mr-0.5 sm:mr-1" /> {mobile.category || "Hot"}
          </span>
        </div>
      </div>

      {/* 2. PRODUCT INFO - Extremely tight on mobile (p-2) */}
      <div className="flex flex-col grow p-2.5 sm:p-6 bg-linear-to-br from-[#2C0741] via-[#4B2050] to-[#171127] text-white">

        <div className="space-y-0 sm:space-y-1 mb-1">
          <p className="text-purple-300 text-[8px] sm:text-xs font-bold uppercase tracking-wider">
            {mobile.brand}
          </p>
          <h2 className="text-white text-[10px] sm:text-sm font-medium leading-tight h-7 sm:h-10 line-clamp-2">
            {mobile.name}
          </h2>
        </div>

        {/* 3. DYNAMIC FOOTER */}
        <div className="mt-auto pt-1.5 border-t-[0.5px] border-slate-700/50 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-slate-400 text-[7px] sm:text-[10px] font-bold uppercase mb-0 sm:mb-1">
              Price
            </span>
            <div className="flex items-center gap-1 sm:gap-2 leading-none">
              <span className="text-[11px] sm:text-base font-bold text-white">
                Rs {mobile.price}
              </span>
              
              {isDeal && mobile.oldPrice && (
                <span className="text-[8px] sm:text-[11px] text-slate-500 line-through">
                  {mobile.oldPrice}
                </span>
              )}
            </div>
          </div>

          <div className={`flex items-center px-1.5 py-0.5 rounded-sm sm:rounded-full border ${
            inStock 
              ? "border-emerald-500/20 bg-emerald-500/10" 
              : "bg-slate-800 border-slate-700"
          }`}>
            <span className={`text-[6px] sm:text-[8px] font-bold uppercase ${inStock ? "text-emerald-400" : "text-slate-500"}`}>
              {inStock ? "IN" : "OUT"}
            </span>
          </div>
        </div>

        {/* 4. BUTTON WITH HOVER EFFECT */}
        <div className="mt-2 sm:mt-4 transform transition-transform duration-300 group-hover:scale-[1.01]">
          {/* Ensure your WhatsAppButton also has responsive padding internally */}
          <WhatsAppButton name={mobile.name} price={mobile.price} />
        </div>
      </div>
    </div>
  );
}