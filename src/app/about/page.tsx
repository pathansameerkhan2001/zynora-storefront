"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function AboutPage() {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-[#F7F1E7] pt-40 pb-20">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`max-w-4xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}
        >
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-[#0B2E26] mb-8">
            {t.common.ourStory}
          </h1>
          <p className="text-xl text-[#0B2E26]/70 leading-relaxed font-light mb-12">
            {t.whyZynora.subtext}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.whyZynora.reasons.map((reason, idx) => (
              <div key={idx} className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-2 h-2 rounded-full bg-[#D4B06A]" />
                <span className="text-lg text-[#0B2E26]">{reason}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
