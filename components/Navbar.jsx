"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShoppingCart, Search, User, Heart, ArrowRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for glassmorphism
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
      <nav className={`w-full mx-auto max-w-7xl transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-xl shadow-sm py-2" : "bg-transparent py-4"
      }`}>
        <div className="max-w-384 mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center">
            
            {/* Left: Mobile Menu Trigger & Logo */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsOpen(true)}
                className="p-2 -ml-2 md:hidden text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Open Menu"
              >
                <Menu size={26} />
              </button>
              
             <Link href="/" className="group flex items-center gap-2">
  {/* Added Image Here */}
  <img 
    src="/logo/brand.png" 
    alt="Store Logo" 
    className="h-11 w-58 object-contain transition-transform " 
  />
  
  
</Link>
            </div>

            {/* Middle: Desktop Navigation (Fluid Spacing) */}
            <div className="hidden md:flex items-center lg:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm lg:text-base font-medium text-gray-600 hover:text-black transition-colors group"
                >
                  {link.name}
                  <span className="absolute inset-x-4 bottom-1 h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                </Link>
              ))}
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-1 xs:gap-3 sm:gap-5">
              {/* Animated Desktop Search */}
              <div className="hidden sm:flex items-center relative group">
                <Search className="absolute left-3 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="pl-10 pr-4 py-2 bg-gray-100/50 border border-transparent focus:border-blue-200 focus:bg-white rounded-full text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 w-32 lg:w-48 xl:w-64 transition-all duration-300"
                />
              </div>

              <div className="flex items-center gap-1">
                <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-all hidden xs:flex">
                  <Heart size={22} />
                </button>
                <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-all">
                  <User size={22} />
                </button>
                <button className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-all relative">
                  <ShoppingCart size={22} />
                  <span className="absolute top-1 right-1 bg-blue-600 text-white text-[10px] font-bold h-4 w-4 flex items-center justify-center rounded-full ring-2 ring-white">
                    3
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen Mobile Overlay */}
      <div className={`fixed inset-0 z-60 bg-black/20 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setIsOpen(false)} />

      {/* Mobile Drawer */}
      <aside className={`fixed top-0 left-0 bottom-0 w-[85%] max-w-sm z-70 bg-white shadow-2xl transform transition-transform duration-500 ease-out md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 flex justify-between items-center border-b border-gray-50">
            <span className="text-2xl font-black tracking-tighter">STORE<span className="text-blue-600">.</span></span>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X size={24} />
            </button>
          </div>

          {/* Search in Mobile Menu */}
          <div className="px-6 py-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search catalog..." 
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-xl text-base focus:outline-none"
              />
            </div>
          </div>
          
          {/* Nav Links */}
          <nav className="flex-1 px-6 py-4 overflow-y-auto">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-4 text-lg font-semibold text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-2xl transition-all"
                >
                  {link.name}
                  <ArrowRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              ))}
            </div>
          </nav>

          {/* Footer Section */}
          <div className="p-6 bg-gray-50 border-t border-gray-100">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Account Settings</p>
            <div className="grid grid-cols-1 gap-3">
              <Link href="/account" className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm text-sm font-medium">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><User size={18} /></div>
                Personal Profile
              </Link>
              <Link href="/wishlist" className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm text-sm font-medium">
                <div className="p-2 bg-pink-100 text-pink-600 rounded-lg"><Heart size={18} /></div>
                Saved Items
              </Link>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Spacer to prevent content jump due to fixed nav */}
      <div className="h-20 md:h-24" />
    </>
  );
};

export default Navbar;