"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Leaf, Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
          ? "bg-[#F7F1E7]/95 backdrop-blur-2xl py-2 md:py-3 shadow-sm" 
          : "bg-[#F7F1E7] py-4 md:py-5"
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between">
        
        {/* Mobile Hamburger - Visible only on mobile */}
        <div className="flex md:hidden flex-1">
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-[#0B2E26] hover:text-[#D4B06A] transition-colors p-2"
          >
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>

        {/* Logo - Center on mobile, Left on desktop */}
        <div className="flex-shrink-0 flex-1 md:flex-initial flex justify-center md:justify-start">
          <Link 
            href="/" 
            className="flex flex-col items-center group transition-all duration-500"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotate: -15 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-0.5 md:mb-1"
            >
              <Leaf className="w-4 h-4 md:w-[18px] md:h-[18px] text-[#D4B06A] fill-[#D4B06A] stroke-[2.5] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" />
            </motion.div>
            <span className="font-playfair text-lg md:text-xl lg:text-2xl font-bold tracking-[0.2em] md:tracking-[0.25em] text-[#0B2E26] transition-all duration-500 group-hover:text-[#D4B06A]">
              ZYNORA
            </span>
          </Link>
        </div>

        {/* Navigation Links - Desktop Only */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 lg:gap-12">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href} 
              className="relative group text-[#0B2E26] text-[12px] lg:text-[13px] font-bold tracking-[0.15em] uppercase transition-colors duration-500"
            >
              {item.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#D4B06A] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Icons & Right Side Actions */}
        <div className="flex items-center justify-end gap-3 md:gap-6 lg:gap-8 flex-1">
          
          {/* Language Switcher - Desktop Only (Simplified on Mobile) */}
          <div className="hidden md:flex items-center gap-3 border-e border-[#0B2E26]/10 pe-6 me-2">
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

          <button className="hidden sm:block group relative text-[#0B2E26] hover:text-[#D4B06A] transition-all duration-500">
            <Search className="w-5 h-5 md:w-[20px] md:h-[20px] stroke-[2.5] group-hover:scale-110 transition-transform duration-500" />
          </button>
          
          <button className="group relative text-[#0B2E26] hover:text-[#D4B06A] transition-all duration-500 p-2">
            <ShoppingBag className="w-5 h-5 md:w-[20px] md:h-[20px] stroke-[2.5] group-hover:scale-110 transition-transform duration-500" />
            <span className="absolute top-0 right-0 md:-top-2 md:-right-2 bg-[#D4B06A] text-white text-[8px] md:text-[9px] w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center font-bold shadow-[0_2px_4px_rgba(212,176,106,0.3)]">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#0B2E26]/40 backdrop-blur-sm z-[60]"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 ${isRTL ? "left-0" : "right-0"} h-full w-[80%] max-w-sm bg-[#F7F1E7] z-[70] shadow-2xl flex flex-col`}
            >
              <div className="flex items-center justify-between p-6 border-b border-[#0B2E26]/5">
                <span className="font-playfair text-xl font-bold tracking-widest text-[#0B2E26]">MENU</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-[#0B2E26] hover:rotate-90 transition-transform duration-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-grow py-8 px-8 flex flex-col gap-6">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                  >
                    <Link 
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-playfair font-bold text-[#0B2E26] hover:text-[#D4B06A] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="p-8 border-t border-[#0B2E26]/5 flex flex-col gap-6">
                <button 
                  onClick={() => {
                    setLanguage(language === 'en' ? 'ar' : 'en');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 text-sm font-bold tracking-widest text-[#0B2E26] uppercase"
                >
                  <Globe className="w-5 h-5" />
                  {language === 'en' ? 'Switch to Arabic' : 'التحويل للإنجليزية'}
                </button>
                
                <div className="flex gap-4">
                  <div className="p-3 rounded-full bg-[#0B2E26]/5 text-[#0B2E26]">
                    <Search className="w-5 h-5" />
                  </div>
                  <Link href="/cart" onClick={() => setIsMobileMenuOpen(false)} className="flex-grow">
                    <button className="w-full py-4 bg-[#0B2E26] text-white rounded-xl text-xs font-bold tracking-[0.2em] uppercase">
                      View Cart (0)
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
