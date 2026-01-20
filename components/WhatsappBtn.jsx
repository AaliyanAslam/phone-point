"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton({ name, price }) {
  const phoneNumber = "923327507765";
  const message = encodeURIComponent(
    `Hi, I am interested in buying ${name} priced at $${price}. Is it still available?`
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      // Responsive Classes Breakdown:
      // w-full: takes full width on small screens for better thumb reach
      // sm:w-auto: goes back to natural width on larger screens
      // px & py: scale from small mobile to 2xl desktop
      // text: scales from xs to xl
      className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto 
                 bg-[#25D366] hover:bg-[#1da851] dark:bg-[#25D366] 
                 text-white font-bold 
                 px-4 py-2.5 
                 sm:px-6 sm:py-3 
                 2xl:px-8 2xl:py-4 
                 text-xs sm:text-sm lg:text-base 2xl:text-xl
                 rounded-xl sm:rounded-full 
                 transition-all duration-300 ease-in-out 
                 shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] 
                 hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] 
                 active:scale-95"
    >
      <MessageCircle 
        className="transition-transform duration-300 group-hover:rotate-12 
                   w-4 h-4 sm:w-5 sm:h-5 2xl:w-6 2xl:h-6" 
      />
      <span>Order via WhatsApp</span>
    </a>
  );
}