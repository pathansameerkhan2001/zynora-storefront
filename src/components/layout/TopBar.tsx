"use client";

import { Leaf, Droplet, Sun, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TopBar() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="bg-[#0A1A14] text-zynora-gold py-4 px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 font-inter">
      
      {/* Left Section */}
      <div className="flex items-center gap-6 flex-1">
        <div className="flex items-center gap-4 border border-zynora-gold/20 rounded-xl p-3">
          <div className="text-[10px] uppercase tracking-wider text-white leading-relaxed">
            Premium Nutrition.<br/>
            Real Ingredients.<br/>
            For Real Life.
          </div>
          <div className="w-[1px] h-10 bg-zynora-gold/30" />
          <div className="text-[10px] text-end text-zynora-gold leading-relaxed font-sans">
            تغذية فاخرة.<br/>
            مكونات حقيقية.<br/>
            لحياة حقيقية.
          </div>
        </div>
        
        {/* Gold Seal Badge */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-zynora-gold rounded-full opacity-20" />
          <div className="absolute inset-1 border border-dashed border-zynora-gold rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
          <div className="text-center">
            <span className="block text-[8px] font-bold tracking-widest text-zynora-gold">PREMIUM</span>
            <span className="block text-[8px] font-bold tracking-widest text-zynora-gold">QUALITY</span>
            <span className="block text-[7px] mt-0.5 text-zynora-gold">جودة عالية</span>
          </div>
        </div>
      </div>

      {/* Center Section - Logo */}
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex flex-col items-center">
          <div className="text-zynora-gold mb-1">
             <Leaf className="w-6 h-6 fill-current" />
          </div>
          <h1 className="font-playfair text-3xl lg:text-4xl font-bold tracking-widest text-zynora-gold mb-1">
            ZYNORA
          </h1>
          <p className="text-[9px] font-medium tracking-[0.3em] text-zynora-gold uppercase">
            {t.hero.heading}
          </p>
        </div>
      </div>

      {/* Right Section - Trust Icons */}
      <div className="flex flex-col items-center lg:items-end flex-1 gap-3">
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center">
            <Leaf className="w-5 h-5 mb-1 stroke-[1.5]" />
            <span className="text-[8px] uppercase tracking-widest text-white">{t.common.natural}</span>
            <span className="text-[8px]">طبيعي</span>
          </div>
          <div className="w-[1px] h-6 bg-zynora-gold/30" />
          <div className="flex flex-col items-center">
            <Droplet className="w-5 h-5 mb-1 stroke-[1.5]" />
            <span className="text-[8px] uppercase tracking-widest text-white">Pure</span>
            <span className="text-[8px]">نقي</span>
          </div>
          <div className="w-[1px] h-6 bg-zynora-gold/30" />
          <div className="flex flex-col items-center">
            <Sun className="w-5 h-5 mb-1 stroke-[1.5]" />
            <span className="text-[8px] uppercase tracking-widest text-white">Daily</span>
            <span className="text-[8px]">يومياً</span>
          </div>
          <div className="w-[1px] h-6 bg-zynora-gold/30" />
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-5 h-5 mb-1 stroke-[1.5]" />
            <span className="text-[8px] uppercase tracking-widest text-white">{t.common.cleanSafe}</span>
            <span className="text-[8px]">نظيف وآمن</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-[9px] text-white/80 pt-2 border-t border-zynora-gold/20">
          <span>{t.common.noPreservatives} | <span className="text-zynora-gold">بدون مواد حافظة</span></span>
          <div className="w-[1px] h-3 bg-zynora-gold/30" />
          <span>No Artificial Colours | <span className="text-zynora-gold">بدون ألوان صناعية</span></span>
        </div>
      </div>

    </div>
  );
}
