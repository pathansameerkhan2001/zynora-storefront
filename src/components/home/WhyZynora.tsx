"use client";

import { CheckCircle2, Sparkles, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyZynora() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="bg-zynora-cream py-24 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <motion.div 
          animate={{ rotate: isRTL ? -360 : 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] end-[-5%] w-[600px] h-[600px] bg-zynora-gold/5 rounded-full blur-[100px]" 
        />
        <div className="absolute bottom-[-10%] start-[-5%] w-[500px] h-[500px] bg-zynora-emerald/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16 flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Video Side - Order 2 on mobile to show text first */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full order-2 lg:order-1"
        >
          {/* Leaves Decor - Hidden on small mobile */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              x: isRTL ? [0, -10, 0] : [0, 10, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:block absolute -top-10 start-[-1.5rem] z-20 text-zynora-gold/40"
          >
            <Leaf className={`w-8 h-8 ${isRTL ? '-rotate-12' : 'rotate-12'}`} />
          </motion.div>

          {/* Video Container */}
          <motion.div
            animate={{ translateY: [-6, 6] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="relative w-full max-w-[450px] lg:max-w-none mx-auto aspect-[14/16] rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-[#EADCC5]/30 backdrop-blur-sm"
          >
            <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover pointer-events-none">
              <source src="/videos/zynora-story.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-zynora-emerald/5 via-transparent to-zynora-gold/10 pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Content Side - Order 1 on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 md:gap-10 order-1 lg:order-2 text-center lg:text-start items-center lg:items-start"
        >
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <span className="hidden lg:block w-12 h-[1px] bg-zynora-gold"></span>
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-zynora-gold rtl:tracking-normal">
                {t.whyZynora.badge}
              </span>
              <span className="lg:hidden w-8 h-[1px] bg-zynora-gold"></span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 text-zynora-emerald leading-[1.2] lg:leading-[1.1] rtl:tracking-normal">
              {t.whyZynora.headingPart1}
              <span className="text-zynora-gold italic">{t.whyZynora.headingPart2}</span>
            </h2>
            <p className="text-zynora-emerald/70 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              {t.whyZynora.subtext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-6 w-full text-start">
            {t.whyZynora.reasons.map((reason, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center border border-zynora-gold/20 shadow-sm group-hover:bg-zynora-emerald group-hover:border-zynora-emerald transition-all flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-zynora-gold group-hover:text-zynora-cream" />
                </div>
                <span className="text-sm md:text-base font-medium text-zynora-emerald/90 tracking-tight">{reason}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto group relative px-10 md:px-12 py-4 md:py-5 border border-zynora-emerald/20 text-zynora-emerald text-[11px] md:text-[12px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase rounded-full overflow-hidden transition-all duration-700 hover:text-zynora-cream">
              <span className="relative z-10">{t.common.ourStory}</span>
              <div className="absolute inset-0 bg-zynora-emerald translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
