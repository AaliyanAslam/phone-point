"use client";
import { useEffect, useState } from "react";
import MobileCard from "@/components/MobileCard";

export default function HomePage() {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMobiles = async () => {
      try {
        const res = await fetch("/api/mobiles");
        const data = await res.json();
        setMobiles(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMobiles();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {mobiles.map((mobile) => (
        <MobileCard key={mobile.id} mobile={mobile} />
      ))}
    </div>
  );
}
