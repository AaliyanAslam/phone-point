"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, Search, User, Heart, ArrowRight } from 'lucide-react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Shop All', href: '/shop' },
    { name: 'Categories', href: '/categories' },
    { name: 'Deals', href: '/deals' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-xl shadow-md py-2" : "bg-transparent py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            
            {/* Left: Mobile Menu & Logo */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsOpen(true)}
                className="p-2 -ml-2 md:hidden text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Menu size={24} />
              </button>
              
              <Link href="/" className="flex items-center">
                <img 
                  src="/logo/brand.png" 
                  alt="Store Logo" 
                  className="h-8 w-auto xs:h-10 md:h-11 object-contain" 
                />
              </Link>
            </div>

            {/* Middle: Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm lg:text-base font-semibold text-gray-600 hover:text-[#822A63] transition-colors group ${inter.className}`}
                >
                  {link.name}
                  <span className="absolute inset-x-4 bottom-1 h-0.5 bg-[#822A63] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              ))}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-1 xs:gap-2">
              <div className="hidden sm:flex items-center relative group">
                <Search className="absolute left-3 text-gray-400 group-focus-within:text-[#822A63] transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="pl-9 pr-4 py-2 bg-gray-100/80 border-transparent focus:border-[#822A63]/30 focus:bg-white rounded-full text-sm focus:outline-none focus:ring-4 focus:ring-[#822A63]/5 w-32 lg:w-48 transition-all"
                />
              </div>

              <button className="p-2 text-gray-700 hover:text-[#822A63] hover:bg-[#822A63]/5 rounded-full transition-all hidden xs:flex">
                <Heart size={22} />
              </button>
              <button className="p-2 text-gray-700 hover:text-[#822A63] hover:bg-[#822A63]/5 rounded-full transition-all">
                <User size={22} />
              </button>
              <button className="p-2 text-gray-700 hover:text-[#822A63] hover:bg-[#822A63]/5 rounded-full transition-all relative">
                <ShoppingCart size={22} />
                <span className="absolute top-1 right-1 bg-[#822A63] text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full ring-2 ring-white">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 z-60 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} 
        onClick={() => setIsOpen(false)} 
      />

      {/* Mobile Drawer */}
      <aside className={`fixed top-0 left-0 bottom-0 w-[80%] max-w-xs z-70 bg-white shadow-2xl transform transition-transform duration-500 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col h-full font-sans">
          
          {/* Mobile Header */}
          <div className="p-5 flex justify-between items-center border-gray-200 border-b">
            <Link href="/" className="flex items-center">
                <img 
                  src="/logo/brand.png" 
                  alt="Store Logo" 
                  className="h-8 w-auto xs:h-10 md:h-11 object-contain" 
                />
              </Link>
            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
              <X size={24} />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto space-y-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between p-4 rounded-xl transition-all hover:bg-[#822A63]/5"
              >
                <span className={`text-sm xs:text-lg font-semibold text-gray-700 group-hover:text-[#822A63] transition-colors ${inter.className}`}>
                
    {link.name}
                </span>
                <ArrowRight size={18} className="text-[#822A63] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </Link>
            ))}
          </nav>

          {/* Mobile Footer */}
          <div className={`p-6 bg-gray-50 ${inter.className}`}>
            <div className="space-y-3">
              <Link href="/account" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200">
                <div className="p-2 bg-[#822A63]/10 text-[#822A63] rounded-lg"><User size={18} /></div>
                <span className="text-sm xs:text-base font-semibold text-gray-700">Account</span>
              </Link>
              <Link href="/wishlist" className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200">
                <div className="p-2 bg-pink-50 text-pink-600 rounded-lg"><Heart size={18} /></div>
                <span className="text-sm xs:text-base font-semibold text-gray-700">Wishlist</span>
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;