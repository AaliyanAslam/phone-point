"use client";

import MobileCard from "@/components/MobileCard";
import { useMobiles } from "@/app/hooks/useMobile";
import { Inter } from "next/font/google";
import { ChevronRight, LayoutGrid } from "lucide-react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// --- IMPROVED SKELETON (Matches MobileCard Shape) ---
const SkeletonCard = () => (
  <div className="rounded-xl border border-gray-100 overflow-hidden bg-white shadow-sm h-full">
    <div className="aspect-square bg-gray-100 animate-pulse" />
    <div className="p-5 space-y-3">
      <div className="h-3 bg-gray-100 rounded-full w-1/3 animate-pulse" />
      <div className="h-4 bg-gray-100 rounded-full w-3/4 animate-pulse" />
      <div className="h-10 bg-gray-100 rounded-lg w-full mt-4 animate-pulse" />
    </div>
  </div>
);

export default function AllMobilesPage() {
  const { mobiles, loading } = useMobiles();

  return (
    <div className={`min-h-screen bg-[#fafafa] pb-20 ${inter.className}`}>
      {/* 1. TOP HEADER / BREADCRUMB SECTION */}
      <div className="bg-white border-b border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <nav className="flex items-center gap-2 text-xs font-medium text-gray-400 mb-4 uppercase tracking-widest">
            <Link href="/" className="hover:text-[#4B2050] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-[#4B2050]">All Mobiles</span>
          </nav>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                <span className="bg-linear-to-r from-[#2C0741] via-[#4B2050] to-[#6348A6] bg-clip-text text-transparent">
                  Explore Collection
                </span>
              </h1>
              <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-xl">
                Discover the latest smartphones with unbeatable prices and authentic warranty.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-gray-500 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
              <LayoutGrid size={18} className="text-[#4B2050]" />
              <span className="text-sm font-bold">
                {loading ? "..." : mobiles?.length} Products
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. GRID SECTION */}
      <div className="p-4 sm:p-6 mx-auto max-w-7xl mt-8">
        {loading ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : mobiles?.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
            {mobiles.map((mobile) => (
              <div key={mobile.id} className="h-full">
                <MobileCard mobile={mobile} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-gray-300">
              <LayoutGrid size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-800">No Mobiles Found</h3>
            <p className="text-gray-500 max-w-xs">We couldn't find any products in our catalog right now.</p>
            <Link href="/" className="mt-6 px-6 py-2 bg-[#4B2050] text-white rounded-full font-bold text-sm">
              Go Back Home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}