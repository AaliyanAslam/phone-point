"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] sm:min-h-[85vh] lg:h-[92vh] flex items-center justify-center px-4 sm:px-8 md:px-12 2xl:px-0 mt-20 md:mt-24">
      
      {/* Background Image Container with Premium Border Radius scaling */}
      <div className="absolute inset-0 z-0 mx-auto max-w-400 2xl:my-4 overflow-hidden rounded-2xl sm:rounded-[2.5rem] md:rounded-[4rem] shadow-2xl">
        <Image
          src="/images/hero.png"
          alt="Phone Point Hero"
          fill
          priority
          className="object-cover object-[center_center] sm:object-center transition-transform duration-1000 hover:scale-105"
          quality={100}
        />
        {/* Advanced Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-black/40 md:bg-linear-to-r md:from-black/70 md:via-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center md:items-start text-center md:text-left justify-end md:justify-center h-full pb-12 md:pb-0">
        
        {/* Premium Fluid Typography Section */}
        
       
        {/* Adaptive Buttons Container */}
        <div className="flex flex-col xs:flex-row justify-end items-center h-150 gap-4 w-full xs:w-auto mt-8 md:mt-12">
          <a
            href="#mobiles"
            className="group w-full xs:w-auto flex items-center justify-center gap-3 bg-[#822A63] hover:bg-[#9e3479] text-white font-bold py-4 px-8 md:px-10 rounded-full shadow-lg shadow-[#822a63]/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Explore Mobiles
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a
            href="/deals"
            className="w-full xs:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 font-bold py-4 px-8 md:px-10 rounded-full transition-all duration-300 hover:border-white/60"
          >
            View Deals
          </a>
        </div>
      </div>

    </section>
  );
}