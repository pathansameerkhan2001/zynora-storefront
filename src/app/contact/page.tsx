"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { MessageCircle, Mail, Phone } from "lucide-react";

export default function ContactPage() {
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
            {t.common.contact}
          </h1>
          <p className="text-xl text-[#0B2E26]/70 leading-relaxed font-light mb-16">
            We're here to help you on your wellness journey. Reach out to us through any of the following channels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-[#D4B06A]/10">
              <Mail className="w-8 h-8 text-[#D4B06A] mb-4" />
              <h3 className="font-bold text-[#0B2E26] mb-2">Email</h3>
              <p className="text-[#0B2E26]/60">hello@zynora.com</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-[#D4B06A]/10">
              <Phone className="w-8 h-8 text-[#D4B06A] mb-4" />
              <h3 className="font-bold text-[#0B2E26] mb-2">Phone</h3>
              <p className="text-[#0B2E26]/60">+91 98765 43210</p>
            </div>
            <div className="flex flex-col items-center p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-[#D4B06A]/10">
              <MessageCircle className="w-8 h-8 text-[#D4B06A] mb-4" />
              <h3 className="font-bold text-[#0B2E26] mb-2">WhatsApp</h3>
              <p className="text-[#0B2E26]/60">Chat with us</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
