"use client";

import { CheckCircle2, Sparkles, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyZynora() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="bg-[#F7F1E7] py-24 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <motion.div 
          animate={{ rotate: isRTL ? -360 : 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className={`absolute top-[-10%] ${isRTL ? 'left-[-5%]' : 'right-[-5%]'} w-[600px] h-[600px] bg-[#D4B06A]/5 rounded-full blur-[100px]`} 
        />
        <div className={`absolute bottom-[-10%] ${isRTL ? 'right-[-5%]' : 'left-[-5%]'} w-[500px] h-[500px] bg-[#0B2E26]/5 rounded-full blur-[100px]`} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Video Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, x: isRTL ? 40 : -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Leaves Decor */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              x: isRTL ? [0, -10, 0] : [0, 10, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute -top-10 ${isRTL ? '-right-6' : '-left-6'} z-20 text-[#D4B06A]/40`}
          >
            <Leaf className={`w-8 h-8 ${isRTL ? '-rotate-12' : 'rotate-12'}`} />
          </motion.div>

          {/* Video Container */}
          <motion.div
            animate={{ translateY: [-6, 6] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            className="relative w-full aspect-[14/16] lg:max-w-[560px] rounded-[32px] overflow-hidden border border-white/40 shadow-[0_40px_80px_rgba(0,0,0,0.12)] bg-[#EADCC5]/30 backdrop-blur-sm"
          >
            <video autoPlay muted loop playsInline preload="auto" className="w-full h-full object-cover pointer-events-none">
              <source src="/videos/zynora-story.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2E26]/5 via-transparent to-[#D4B06A]/10 pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* Content Side */}
        <motion.div 
          initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-10"
        >
          <div>
            <div className={`flex items-center gap-2 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <span className="w-12 h-[1px] bg-[#D4B06A]"></span>
              <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-[#D4B06A] rtl:tracking-normal">
                {t.whyZynora.badge}
              </span>
            </div>
            <h2 className="font-playfair text-5xl lg:text-7xl font-bold mb-8 text-[#0B2E26] leading-[1.1]">
              {t.whyZynora.headingPart1}
              <span className="text-[#D4B06A] italic">{t.whyZynora.headingPart2}</span>
            </h2>
            <p className="text-[#06231D]/70 text-xl font-light leading-relaxed max-w-xl">
              {t.whyZynora.subtext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {t.whyZynora.reasons.map((reason, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex items-center gap-4 group rtl:flex-row-reverse rtl:justify-end"
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-[#D4B06A]/20 shadow-sm group-hover:bg-[#0B2E26] group-hover:border-[#0B2E26] transition-all">
                  <CheckCircle2 className="w-4 h-4 text-[#D4B06A] group-hover:text-[#F7F1E7]" />
                </div>
                <span className="font-medium text-[#0B2E26]/90 tracking-tight">{reason}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 rtl:text-right">
            <button className="group relative px-12 py-5 border border-[#0B2E26]/20 text-[#0B2E26] text-[12px] font-bold tracking-[0.3em] uppercase rounded-full overflow-hidden transition-all duration-700 hover:text-[#F7F1E7]">
              <span className="relative z-10">{t.common.ourStory}</span>
              <div className="absolute inset-0 bg-[#0B2E26] translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
