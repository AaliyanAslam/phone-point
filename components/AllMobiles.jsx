"use client";
import MobileCard from "@/components/MobileCard";
import { useMobiles } from "@/app/hooks/useMobile.js";

export default function MostSellingMobiles() {
  const { mobiles, loading } = useMobiles();

  if (loading)
    return <p className="text-center mt-10">Loading Top Sellers...</p>;

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h2 className="text-2xl font-bold mb-6">
        Most Selling Mobiles
      </h2>

      {/* HORIZONTAL SCROLL */}
      <div className="flex gap-4 overflow-x-auto pb-4 scroll-smooth
        scrollbar-hide">

        {mobiles.map((mobile) => (
          <div
            key={mobile.id}
          className="
  min-w-60
  sm:min-w-70
  md:min-w-[320px]
"

          >
            <MobileCard mobile={mobile} />
          </div>
        ))}
      </div>
    </div>
  );
}
