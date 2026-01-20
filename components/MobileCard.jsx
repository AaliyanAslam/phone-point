"use client";
import WhatsAppButton from "@/components/WhatsappBtn";

export default function MobileCard({ mobile }) {
  return (
    <div className="group relative flex flex-col h-full bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/60 rounded-[calc(1rem+1vw)] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_22px_50px_-12px_rgba(0,0,0,0.15)] hover:-translate-y-2">
      
      {/* 1. ULTRA RESPONSIVE IMAGE CONTAINER */}
      {/* Uses aspect-ratio for perfect scaling without layout shift */}
      <div className="relative aspect-[3/4] sm:aspect-square md:aspect-[4/5] overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img 
          src={mobile.image} 
          alt={mobile.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
        />
        
        {/* Floating Badges with blur effect */}
        <div className="absolute top-2 left-2 right-2 flex justify-between items-start pointer-events-none">
          <span className="backdrop-blur-md bg-white/70 dark:bg-slate-900/70 text-slate-900 dark:text-white text-[clamp(0.6rem,1.5vw,0.8rem)] font-bold px-3 py-1 rounded-full shadow-sm">
            New
          </span>
          {mobile.stock < 5 && (
            <span className="bg-red-500/90 backdrop-blur-sm text-white text-[clamp(0.6rem,1.5vw,0.75rem)] font-black px-2 py-1 rounded-md uppercase animate-pulse">
              Only {mobile.stock} left
            </span>
          )}
        </div>
      </div>

      {/* 2. DYNAMIC CONTENT SECTION */}
      {/* Padding uses 'clamp' to grow smoothly with screen size */}
      <div className="flex flex-col flex-grow p-[clamp(1rem,3vw,1.5rem)]">
        <div className="mb-3">
          <span className="block text-blue-600 dark:text-blue-400 font-bold uppercase tracking-[0.15em] text-[clamp(0.65rem,1.2vw,0.75rem)] mb-1">
            {mobile.brand}
          </span>
          <h2 className="text-slate-800 dark:text-white font-black leading-tight text-[clamp(1.1rem,2.5vw,1.75rem)] line-clamp-2">
            {mobile.name}
          </h2>
        </div>

        {/* Dynamic Feature List (Auto-hides on extremely small heights) */}
        <div className="flex flex-wrap gap-1 mb-4">
          {mobile.features.slice(0, 3).map((feature, i) => (
            <span key={i} className="text-[clamp(0.65rem,1.1vw,0.85rem)] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-2 py-0.5 rounded">
              {feature}
            </span>
          ))}
        </div>

        {/* 3. PREMIUM FOOTER ROW */}
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-end justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-slate-400 dark:text-slate-500 text-[clamp(0.6rem,1vw,0.75rem)] font-bold uppercase tracking-wider">
              Best Price
            </span>
            <span className="text-slate-900 dark:text-white font-black text-[clamp(1.25rem,3vw,2.2rem)] leading-none">
              ${mobile.price}
            </span>
          </div>
          
          {/* Subtle Stock Indicator */}
          <div className="hidden xs:flex items-center gap-1.5 pb-1">
            <div className={`w-2 h-2 rounded-full ${mobile.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-[clamp(0.7rem,1vw,0.85rem)] font-medium text-slate-500">In Stock</span>
          </div>
        </div>

        {/* 4. CALL TO ACTION */}
        <div className="mt-[clamp(1rem,2vw,1.5rem)] w-full">
          <WhatsAppButton name={mobile.name} price={mobile.price} />
        </div>
      </div>
    </div>
  );
}