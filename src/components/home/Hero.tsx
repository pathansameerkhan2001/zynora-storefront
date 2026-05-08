"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
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
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-zynora-cream"
    >
      {/* Cinematic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 end-0 w-[70%] h-full bg-[radial-gradient(circle_at_70%_50%,rgba(239,227,207,0.8)_0%,transparent_70%)] opacity-60" />
        <div className="absolute top-[-20%] end-[-10%] w-[800px] h-[800px] bg-zynora-gold/10 rounded-full blur-[150px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] start-[-5%] w-[600px] h-[600px] bg-zynora-beige/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4)_0%,transparent_80%)]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-16 relative z-10 pt-20 md:pt-16 pb-16">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 md:gap-16 lg:gap-24 items-center">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ opacity: opacity }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:col-span-6 flex flex-col gap-6 md:gap-8 lg:pe-12 text-center lg:text-start items-center lg:items-start"
          >
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-[90px] font-bold leading-[1.2] lg:leading-[1.1] text-zynora-emerald tracking-tight rtl:tracking-normal">
              {isRTL ? (
                <>
                  صُممت لترتقي<br className="hidden md:block" />
                  بنمط <span className="text-zynora-gold italic font-medium">حياتك.</span>
                </>
              ) : (
                <>
                  Made For<br className="hidden md:block" />
                  How You<br className="hidden md:block" />
                  <span className="text-zynora-gold italic font-medium">Live.</span>
                </>
              )}
            </h1>
            
            <p className="text-base md:text-xl text-zynora-emerald/70 font-light leading-relaxed max-w-sm md:max-w-md">
              {t.hero.subtext}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-4 w-full sm:w-auto">
              <Link 
                href="/shop" 
                className="w-full sm:w-auto text-center group relative px-8 md:px-10 py-3.5 md:py-4 bg-zynora-emerald text-zynora-cream text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase rounded-full overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(11,46,38,0.2)]"
              >
                <span className="relative z-10">{t.common.exploreCollection}</span>
                <div className="absolute inset-0 bg-zynora-gold translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              </Link>

              <Link 
                href="/about" 
                className="w-full sm:w-auto text-center px-8 md:px-10 py-3.5 md:py-4 border border-zynora-emerald/20 text-zynora-emerald text-[12px] md:text-[14px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-zynora-emerald/5 transition-all duration-500"
              >
                {t.common.ourStory}
              </Link>
            </div>
          </motion.div>

          {/* Video Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ y: typeof window !== 'undefined' && window.innerWidth > 1024 ? y : 0 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:col-span-6 relative flex justify-center lg:justify-end rtl:lg:justify-start"
          >
            <div className="relative w-full max-w-[500px] lg:max-w-[600px] aspect-[4/5] md:aspect-[14/16] rounded-[24px] md:rounded-[36px] overflow-hidden border border-zynora-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-white/5 backdrop-blur-sm">
              <div className="absolute inset-0 z-20 pointer-events-none select-none" draggable={false} />
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover pointer-events-none select-none"
                draggable={false}
              >
                <source src="/videos/zynora-hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-tr from-zynora-cream/10 via-transparent to-zynora-gold/5 z-10 pointer-events-none" />
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(247,241,231,0.2)] md:shadow-[inset_0_0_80px_rgba(247,241,231,0.2)] z-10 pointer-events-none" />
            </div>
            {/* Soft decorative glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-zynora-gold/5 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
