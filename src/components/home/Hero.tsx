"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const containerRef = useRef(null);
  const { t, isRTL } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#F7F1E7]"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} w-[70%] h-full bg-[radial-gradient(circle_at_70%_50%,rgba(239,227,207,0.8)_0%,transparent_70%)] opacity-60`} />
        <div className={`absolute top-[-20%] ${isRTL ? 'left-[-10%]' : 'right-[-10%]'} w-[800px] h-[800px] bg-[#D4B06A]/10 rounded-full blur-[150px] animate-pulse-slow`} />
        <div className={`absolute bottom-[-10%] ${isRTL ? 'right-[-5%]' : 'left-[-5%]'} w-[600px] h-[600px] bg-[#E7D3B0]/20 rounded-full blur-[120px]`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4)_0%,transparent_80%)]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 pt-16 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className={`lg:col-span-6 flex flex-col gap-8 ${isRTL ? 'lg:pl-12' : 'lg:pr-12'}`}
          >
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-[90px] font-bold leading-[1.1] text-[#0B2E26] tracking-tight rtl:tracking-normal">
              {isRTL ? (
                <>
                  صُممت لترتقي<br />
                  بنمط <span className="text-[#D4B06A] italic font-medium">حياتك.</span>
                </>
              ) : (
                <>
                  Made For<br />
                  How You<br />
                  <span className="text-[#D4B06A] italic font-medium">Live.</span>
                </>
              )}
            </h1>
            
            <p className="text-lg md:text-xl text-[#06231D]/70 font-light leading-relaxed max-w-md">
              {t.hero.subtext}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
              <Link 
                href="/shop" 
                className="group relative px-10 py-4 bg-[#0B2E26] text-[#F7F1E7] text-[14px] font-bold tracking-[0.2em] uppercase rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(11,46,38,0.2)]"
              >
                <span className="relative z-10">{t.common.exploreCollection}</span>
                <div className="absolute inset-0 bg-[#D4B06A] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>

              <Link 
                href="/about" 
                className="px-10 py-4 border border-[#0B2E26]/20 text-[#0B2E26] text-[14px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-[#0B2E26]/5 transition-all duration-500"
              >
                {t.common.ourStory}
              </Link>
            </div>
          </motion.div>

          {/* Video Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative flex justify-center lg:justify-end rtl:lg:justify-start"
          >
            <div className="relative w-full max-w-[600px] aspect-[14/16] rounded-[36px] overflow-hidden border border-[#D4B06A]/20 shadow-[0_30px_60px_rgba(0,0,0,0.1)] bg-white/5 backdrop-blur-sm">
              <div className="absolute inset-0 z-20 pointer-events-none select-none" draggable={false} />
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-contain pointer-events-none select-none"
                draggable={false}
              >
                <source src="/videos/zynora-hero.mp4.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#F7F1E7]/10 via-transparent to-[#D4B06A]/5 z-10 pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(247,241,231,0.2)] z-10 pointer-events-none" />
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#D4B06A]/5 rounded-full blur-[100px] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
