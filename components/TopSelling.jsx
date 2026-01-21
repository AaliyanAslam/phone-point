"use client";

import MobileCard from "@/components/MobileCard";
import { useMobiles } from "@/app/hooks/useMobile.js";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// --- SKELETON COMPONENT ---
const SkeletonCard = () => (
  <div className="min-w-60 sm:min-w-70 md:min-w-[320px] animate-pulse">
    <div className="bg-gray-200 h-48 w-full rounded-xl mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
  </div>
);

export default function MostSellingMobiles() {
  const { mobiles, loading } = useMobiles();

  return (
    <div className="p-6 mx-auto max-w-7xl mt-12">
      
      {/* Heading */}
      <h2
        className={`relative mb-8 text-3xl sm:text-4xl font-bold tracking-tight ${inter.className}`}
      >
        <span
          className="
            bg-linear-to-r
            from-[#2C0741] via-[#4B2050] to-[#6348A6]
            bg-clip-text text-transparent
          "
        >
          Most Selling Mobiles
        </span>

        {/* underline glow */}
        <span
          className="
            absolute -bottom-2 left-0
            w-20 h-1 rounded-full
            bg-linear-to-r
            from-[#2C0741] to-[#6348A6]
          "
        />
      </h2>

      {/* Cards */}
      <div className="flex gap-4 overflow-x-auto pb-4 scroll-smooth scrollbar-theme">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : (
          mobiles
            .slice(0, 4) // ✅ ONLY 4 MOBILES
            .map((mobile) => (
              <div
                key={mobile.id}
                className="min-w-60 sm:min-w-70 md:min-w-[320px]"
              >
                <MobileCard mobile={mobile} />
              </div>
            ))
        )}
      </div>
    </div>
  );
}
