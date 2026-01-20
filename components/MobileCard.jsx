"use client";
import WhatsAppButton from "@/components/WhatsappBtn";

export default function MobileCard({ mobile }) {
  const inStock = mobile.stock > 0;

  return (
    <div className="group relative flex flex-col h-full bg-white dark:bg-slate-900 
      border border-slate-200/60 dark:border-slate-800/60 
      rounded-2xl overflow-hidden 
      transition-all duration-500 
      hover:-translate-y-1 hover:shadow-xl">

      {/* IMAGE */}
      <div className="relative aspect-[3/4] sm:aspect-square overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={mobile.image}
          alt={mobile.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* BADGES */}
        <div className="absolute top-3 left-3 right-3 flex justify-between">
          <span className="text-xs font-semibold px-3 py-1 rounded-full 
            bg-white/80 dark:bg-slate-900/80 backdrop-blur">
            New
          </span>

          {mobile.stock > 0 && mobile.stock <= 5 && (
            <span className="text-[11px] font-bold px-2 py-1 rounded-md 
              bg-red-500 text-white animate-pulse">
              Only {mobile.stock} left
            </span>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col flex-grow p-4 sm:p-5">
        <span className="text-xs font-semibold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
          {mobile.brand}
        </span>

        <h2 className="mt-1 text-base sm:text-lg font-semibold text-slate-800 dark:text-white line-clamp-2">
          {mobile.name}
        </h2>

        {/* PRICE + STOCK */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
          <div>
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Price
            </p>
            <p className="text-lg font-bold text-slate-900 dark:text-white">
              ${mobile.price}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                inStock ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span className="text-sm text-slate-500">
              {inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4">
          <WhatsAppButton name={mobile.name} price={mobile.price} />
        </div>
      </div>
    </div>
  );
}
