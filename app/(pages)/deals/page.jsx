"use client";

import MobileCard from "@/components/MobileCard";
import { useMobiles } from "@/app/hooks/useMobile";
import { Inter } from "next/font/google";
import { Flame, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// --- SKELETON (Matches Deals Layout) ---
const SkeletonCard = () => (
  <div className="rounded-xl border border-gray-100 overflow-hidden bg-white h-full animate-pulse">
    <div className="aspect-square bg-gray-200" />
    <div className="p-4 space-y-3">
      <div className="h-3 bg-gray-200 rounded w-1/4" />
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-8 bg-gray-200 rounded w-full mt-4" />
    </div>
  </div>
);

const DealsPage = () => {
  const { mobiles, loading } = useMobiles();

  // 🔥 FILTER ONLY DEALS
  const dealMobiles = mobiles?.filter((m) => m.category === "deals");

  return (
    <div className={`min-h-screen bg-[#fcfcfc] pb-20 ${inter.className}`}>
      
      {/* --- HERO SECTION --- */}
      <div className="bg-linear-to-br from-[#171127] via-[#2C0741] to-[#4B2050] text-white pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs font-medium text-purple-300/60 mb-6 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white">Flash Deals</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 bg-red-500/20 text-red-400 px-3 py-1 rounded-full w-fit text-xs font-bold uppercase tracking-tighter border border-red-500/30">
                <Zap size={14} fill="currentColor" /> Limited Time Offers
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
                Hot Deals <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-500">🔥</span>
              </h1>
              <p className="text-purple-200/70 max-w-lg text-sm sm:text-base">
                Grab your favorite flagship devices at a fraction of the cost. Prices valid only until stock lasts!
              </p>
            </div>

            <div className="hidden lg:block">
               <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-center">
                  <p className="text-xs uppercase font-bold text-purple-300 mb-1">Total Active Deals</p>
                  <p className="text-4xl font-black">{loading ? "..." : dealMobiles?.length}</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- DEALS GRID --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8">
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : dealMobiles?.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {dealMobiles.map((mobile) => (
              <div key={mobile.id} className="transition-transform duration-300 hover:-translate-y-1">
                <MobileCard mobile={mobile} />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-20 shadow-sm border border-gray-100 flex flex-col items-center text-center mt-12">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <Flame size={32} className="text-gray-300" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">No Active Deals</h2>
            <p className="text-gray-500 mt-1">Check back later for fresh flash sales!</p>
            <Link href="/all-mobiles" className="mt-6 text-sm font-bold text-[#4B2050] hover:underline">
              Browse All Mobiles
            </Link>
          </div>
        )}
      </div>

    </div>
  );
};

export default DealsPage;