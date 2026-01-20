"use client";
import MobileCard from "@/components/MobileCard";
import { useMobiles } from "@/app/hooks/useMobile.js";

export default function MostSellingMobiles() {
  const { mobiles, loading } = useMobiles();

  if (loading) return <p className="text-center mt-10">Loading Top Sellers...</p>;

  return (
    <div className="p-6 mx-auto max-w-7xl">
      <h2 className="text-2xl font-bold mb-6">Most Selling Mobiles</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {mobiles.map((mobile) => (
          <MobileCard key={mobile.id} mobile={mobile} />
        ))}
      </div>
    </div>
  );
}