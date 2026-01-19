"use client";
import WhatsAppButton from "@/components/WhatsappBtn";

export default function MobileCard({ mobile }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={mobile.image} alt={mobile.name} className="w-full h-48 object-cover rounded-md mb-3" />
      <h2 className="text-xl font-bold">{mobile.name}</h2>
      <p className="text-gray-600">{mobile.brand}</p>
      <p className="text-gray-800 font-semibold">${mobile.price}</p>
      <p className="text-sm text-gray-500">Stock: {mobile.stock}</p>
      <p className="mt-1 text-gray-700">{mobile.features.join(", ")}</p>
      <div className="mt-2">
        <WhatsAppButton name={mobile.name} price={mobile.price} />
      </div>
    </div>
  );
}
