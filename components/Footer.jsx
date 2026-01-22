import React from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Truck, 
  RotateCcw 
} from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`bg-white border-t border-gray-100 ${inter.className}`}>
      {/* 1. TRUST BAR - Clean & Minimal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#822A63]/5 rounded-2xl text-[#822A63]">
              <Truck size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">Free Express Delivery</h4>
              <p className="text-xs text-gray-500 mt-0.5">On all orders above Rs. 50,000</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#822A63]/5 rounded-2xl text-[#822A63]">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">Official Warranty</h4>
              <p className="text-xs text-gray-500 mt-0.5">100% genuine brand products</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-[#822A63]/5 rounded-2xl text-[#822A63]">
              <RotateCcw size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">7-Day Easy Return</h4>
              <p className="text-xs text-gray-500 mt-0.5">Hassle-free exchange policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/">
              <img src="/logo/brand.png" alt="Logo" className="h-9 w-auto object-contain" />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Experience the future of mobile technology. We bring you the latest flagship devices with premium service.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-2.5 bg-gray-50 text-gray-400 hover:text-[#822A63] hover:bg-[#822A63]/5 rounded-xl transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#822A63] mb-6">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'All Mobiles', 'Deals', 'New Arrivals'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-gray-500 hover:text-[#822A63] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#822A63] mb-6">Support</h3>
            <ul className="space-y-4">
              {['Contact Us', 'Track Order', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-sm text-gray-500 hover:text-[#822A63] transition-colors">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Card */}
          <div className="lg:col-span-4">
            <div className="bg-gray-50 rounded-4xl p-8 space-y-6">
              <h3 className="text-sm font-bold text-gray-900">Visit Our Store</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <MapPin size={20} className="text-[#822A63] shrink-0" />
                  <p className="text-sm text-gray-600">123 Tech Hub, Mobile Market, Karachi, Pakistan</p>
                </div>
                <div className="flex gap-4">
                  <Phone size={20} className="text-[#822A63] shrink-0" />
                  <p className="text-sm text-gray-600">+92 300 1234567</p>
                </div>
                <div className="flex gap-4">
                  <Mail size={20} className="text-[#822A63] shrink-0" />
                  <p className="text-sm text-gray-600">hello@yourstore.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. COPYRIGHT BAR */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-gray-50">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            © {currentYear} PREMUIM MOBILE STORE. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-6">
            <img src="/icons/visa.svg" alt="Visa" className="h-4 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100" />
            <img src="/icons/mastercard.svg" alt="Mastercard" className="h-6 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100" />
            <img src="/icons/apple-pay.svg" alt="Apple Pay" className="h-5 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;