"use client";
import { useRef } from "react";
import MobileCard from "@/components/MobileCard";
import { useMobiles } from "@/app/hooks/useMobile.js";
import { Inter } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";


const inter = Inter({ subsets: ["latin"] });

// --- SKELETON ---
const SkeletonCard = () => (
  <div className="min-w-60 sm:min-w-70 md:min-w-[320px] animate-pulse">
    <div className="bg-gray-200 h-64 w-full rounded-2xl mb-4"></div>
    <div className="h-5 bg-gray-200 rounded-full w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
  </div>
);

export default function DealsMobiles() {
  const { mobiles, loading } = useMobiles();
  const scrollRef = useRef(null);
  const router = useRouter();

  // 🔥 FILTER DEALS CATEGORY
  const dealMobiles = mobiles?.filter(
    (mobile) => mobile.category === "deals"
  );

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <div className="group relative p-6 mx-auto max-w-7xl mt-16">
      {/* HEADING */}
      <div className="relative mb-10">
        <h2
          className={`text-3xl sm:text-4xl font-bold tracking-tight ${inter.className}`}
        >
          <span className="bg-linear-to-r from-[#2C0741] via-[#4B2050] to-[#6348A6] bg-clip-text text-transparent">
            Hot Deals 🔥
          </span>
        </h2>
        <div className="absolute -bottom-2 left-0 w-20 h-1.5 rounded-full bg-linear-to-r from-[#2C0741] to-[#6348A6]" />
      </div>

      <div className="relative flex items-center">
        {/* LEFT */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-30 hidden md:flex 
          items-center justify-center w-12 h-12 rounded-full bg-white shadow-xl border
           transition-all opacity-0 group-hover:opacity-100 text-[#4B2050]"
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scroll-smooth scrollbar-theme px-1 w-full"
        >
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
          ) : dealMobiles?.length > 0 ? (
            dealMobiles.slice(0, 8).map((mobile) => (
              <div
                key={mobile.id}
                className="min-w-60 sm:min-w-70 md:min-w-[320px]  transition-transform"
              >
                <MobileCard mobile={mobile} />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center w-full">
              No deals available right now
            </p>
          )}
            <div className="flex items-center justify-center min-w-37.5 sm:min-w-50 pr-4">
        <button
          onClick={() => router.push("/all-mobiles")} // or your target path
          className="group/btn flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105"
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-linear-to-br from-[#2C0741] to-[#6348A6] flex items-center justify-center shadow-lg group-hover/btn:shadow-purple-500/40 text-white">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-6 h-6 sm:w-8 sm:h-8 group-hover/btn:translate-x-1 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
          <span className="text-xs sm:text-sm font-bold bg-linear-to-r from-[#2C0741] to-[#6348A6] bg-clip-text text-transparent uppercase tracking-widest">
            See More
          </span>
        </button>
      </div>
        </div>

        {/* RIGHT */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 hidden md:flex 
          items-center justify-center w-12 h-12 rounded-full bg-white shadow-xl border
          hover:scale-110 transition-all opacity-0 group-hover:opacity-100 text-[#4B2050]"
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
