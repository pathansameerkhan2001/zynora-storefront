"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Leaf, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t.common.home, href: "/" },
    { name: t.common.shop, href: "/shop" },
    { name: t.common.about, href: "/about" },
    { name: t.common.contact, href: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] border-b border-[#D4B06A]/10 ${
        isScrolled 
          ? "bg-[#F7F1E7]/95 backdrop-blur-2xl py-3 shadow-sm" 
          : "bg-[#F7F1E7] py-5"
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-8 lg:px-16 flex items-center justify-between">
        
        {/* Logo - Left & Refined with Leaf Icon */}
        <div className="flex-shrink-0">
          <Link 
            href="/" 
            className="flex flex-col items-center group transition-all duration-500"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-1"
            >
              <Leaf className="w-[18px] h-[18px] text-[#D4B06A] fill-[#D4B06A] stroke-[2.5] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
            </motion.div>
            <span className="font-playfair text-xl lg:text-2xl font-bold tracking-[0.25em] text-[#0B2E26] transition-all duration-500 group-hover:text-[#D4B06A]">
              ZYNORA
            </span>
          </Link>
        </div>

        {/* Navigation Links - Center & Spaced */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="relative group text-[#0B2E26] text-[13px] font-bold tracking-[0.15em] uppercase transition-colors duration-500"
            >
              {item.name}
              {/* Soft gold underline animation */}
              <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#D4B06A] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Icons & Language Switcher - Right Side */}
        <div className="flex items-center gap-6 lg:gap-8">
          
          {/* Language Switcher */}
          <div className="flex items-center gap-3 border-e border-[#0B2E26]/10 pe-6 me-2">
            <button 
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-[#0B2E26] hover:text-[#D4B06A] transition-all duration-500 uppercase group"
            >
              <Globe className="w-4 h-4 stroke-[2.5] transition-transform duration-500 group-hover:rotate-12" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={language}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {language === 'en' ? 'العربية' : 'EN'}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>

          <button className="group relative text-[#0B2E26] hover:text-[#D4B06A] transition-all duration-500">
            <Search className="w-[20px] h-[20px] stroke-[2.5] group-hover:scale-110 transition-transform duration-500" />
          </button>
          
          <button className="group relative text-[#0B2E26] hover:text-[#D4B06A] transition-all duration-500">
            <ShoppingBag className="w-[20px] h-[20px] stroke-[2.5] group-hover:scale-110 transition-transform duration-500" />
            <span className="absolute -top-2 -right-2 bg-[#D4B06A] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-[0_2px_4px_rgba(212,176,106,0.3)]">
              0
            </span>
          </button>
        </div>
        
      </div>
    </motion.nav>
  );
}
