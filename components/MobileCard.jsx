"use client";
import WhatsAppButton from "@/components/WhatsappBtn";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function MobileCard({ mobile }) {
  const inStock = mobile.stock > 0;

  return (
    <div className={`group relative flex flex-col h-full  rounded-xl overflow-hidden  border  border-[#e5a8ec] ${inter.className}`}>
      
      {/* 1. VISUAL ANCHOR (IMAGE) */}
      <div className="relative aspect-4/5 overflow-hidden ">
        {/* Soft gradient overlay for depth */}
        <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent z-10 pointer-events-none" />
        
        <img
          src={mobile.image}
          alt={mobile.name}
          className="w-full h-full object-contain p-8 "
        />

        {/* FLOATING CHIPS */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
          <span className="backdrop-blur-md bg-white/80 dark:bg-slate-900/80 text-slate-900 dark:text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm border border-white/20 uppercase tracking-tighter">
            New Arrival
          </span>
          
          {mobile.stock > 0 && mobile.stock <= 5 && (
            <span className="bg-orange-500 text-white text-[10px] font-black px-2.5 py-1.5 rounded-lg shadow-lg shadow-orange-500/30 animate-pulse uppercase">
              Low Stock
            </span>
          )}
        </div>
      </div>

      {/* 2. PRODUCT INFO */}
     {/* 2. PRODUCT INFO */}
<div
  className="
    flex flex-col grow p-6
    bg-linear-to-br
    from-[#2C0741] via-[#4B2050] to-[#171127]
    text-white
  "
>

        <div className="space-y-1 mb-4">
          <p className="text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            {mobile.brand}
          </p>
          <h2 className="text-slate-900 dark:text-white text-xl font-medium leading-tight  transition-colors">
            {mobile.name}
          </h2>
        </div>

        {/* 3. DYNAMIC FOOTER */}
        <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-800 flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-slate-400 dark:text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">
              Best Price
            </span>
            <div className="flex items-center gap-1">
              <span className="text-xl font-semibold text-slate-900 dark:text-white">
                ${mobile.price}
              </span>
            </div>
          </div>

          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${
            inStock 
              ? "border-emerald-100 bg-emerald-50 dark:bg-emerald-500/10 dark:border-emerald-500/20" 
              : "border-slate-100 bg-slate-50 dark:bg-slate-800 dark:border-slate-700"
          }`}>
            <span className={`w-2 h-2 rounded-full ${inStock ? "bg-emerald-500 animate-pulse" : "bg-slate-400"}`} />
            <span className={`text-[11px] font-bold uppercase tracking-tight ${inStock ? "text-emerald-700 dark:text-emerald-400" : "text-slate-500"}`}>
              {inStock ? "In Stock" : "Sold Out"}
            </span>
          </div>
        </div>

        {/* 4. BUTTON WITH HOVER EFFECT */}
        <div className="mt-6 transform transition-transform duration-300 group-hover:scale-[1.02]">
          <WhatsAppButton name={mobile.name} price={mobile.price} />
        </div>
      </div>
    </div>
  );
}