"use client";

import { useMobiles } from "@/app/hooks/useMobile";
import MobileCard from "@/components/MobileCard";
import { Trash2 } from "lucide-react";

export default function AdminMobilesPage() {
  const { mobiles, loading, refetch } = useMobiles();

  const handleDelete = async (id) => {
    const ok = confirm("Are you sure you want to delete this mobile?");
    if (!ok) return;

    const res = await fetch(`/api/del-mobile/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      refetch(); // 🔥 reload list
    } else {
      alert("Failed to delete mobile");
    }
  };

  if (loading) return <p className="mt-20 text-center">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 mt-20">
      <h1 className="text-3xl font-black mb-8">Admin – Manage Mobiles</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mobiles.map((mobile) => (
          <div key={mobile.id} className="relative">
            <MobileCard mobile={mobile} />

            {/* DELETE BUTTON */}
            <button
              onClick={() => handleDelete(mobile.id)}
              className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full shadow-lg"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
