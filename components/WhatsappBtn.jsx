"use client";

import { MessageCircle } from "lucide-react"; // Optional: For an icon

export default function WhatsAppButton({ name, price }) {
  // Clean the phone number (remove spaces/pluses) for the URL
  const phoneNumber = "923327507765"; 
  const message = encodeURIComponent(`Hi, I am interested in buying ${name} priced at $${price}. Is it still available?`);

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer" // Security best practice for target="_blank"
      className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold px-6 py-2.5 rounded-full transition-colors shadow-md mt-4"
    >
      <MessageCircle size={20} />
      Order via WhatsApp
    </a>
  );
}