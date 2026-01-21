"use client";
import { useRef } from "react";
import MobileCard from "@/components/MobileCard";
import { useMobiles } from "@/app/hooks/useMobile.js";
import { Inter } from "next/font/google";
import { ChevronLeft, ChevronRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

const SkeletonCard = () => (
  <div className="min-w-60 sm:min-w-70 md:min-w-[320px] animate-pulse">
    <div className="bg-gray-200 h-64 w-full rounded-2xl mb-4"></div>
    <div className="h-5 bg-gray-200 rounded-full w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
  </div>
);

export default function MostSellingMobiles() {
  const { mobiles, loading } = useMobiles();
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const scrollAmount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="group relative p-6 mx-auto max-w-7xl mt-12">
      {/* HEADING SECTION */}
      <div className="relative mb-10">
        <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${inter.className}`}>
          <span className="bg-linear-to-r from-[#2C0741] via-[#4B2050] to-[#6348A6] bg-clip-text text-transparent">
            Most Selling Mobiles
          </span>
        </h2>
        <div className="absolute -bottom-2 left-0 w-20 h-1.5 rounded-full bg-linear-to-r from-[#2C0741] to-[#6348A6]" />
      </div>

      <div className="relative flex items-center">
        {/* LEFT BUTTON */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-5 top-1/2 -translate-y-1/2 z-30 hidden md:flex 
            items-center justify-center w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100
            hover:scale-110 active:scale-95 transition-all opacity-0 group-hover:opacity-100 text-[#4B2050]"
        >
          <ChevronLeft size={28} strokeWidth={2.5} />
        </button>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 scroll-smooth scrollbar-theme  px-1 w-full"
        >
          {loading && mobiles.length === 0 ? (
            Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
          ) : (
            mobiles?.slice(0, 8).map((mobile) => (
              <div
                key={mobile.id}
                className="min-w-60 sm:min-w-70 md:min-w-[320px] transition-transform duration-300 hover:-translate-y-2"
              >
                <MobileCard mobile={mobile} />
              </div>
            ))
          )}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 hidden md:flex 
            items-center justify-center w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100
            hover:scale-110 active:scale-95 transition-all opacity-0 group-hover:opacity-100 text-[#4B2050]"
        >
          <ChevronRight size={28} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}