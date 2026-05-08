"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-zynora-emerald text-zynora-cream pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 text-center sm:text-start flex flex-col items-center sm:items-start">
            <Link href="/" className="font-playfair text-3xl md:text-4xl font-bold tracking-tight mb-4 md:mb-6 block">
              ZYNORA
            </Link>
            <p className="text-sm leading-relaxed text-zynora-cream/80 mb-6 max-w-sm">
              {t.hero.subtext}
            </p>
            <div className="flex items-center gap-6 sm:gap-4 justify-center sm:justify-start">
              <a href="#" className="hover:text-zynora-gold transition-all duration-300 hover:scale-110 p-1"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-zynora-gold transition-all duration-300 hover:scale-110 p-1"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-zynora-gold transition-all duration-300 hover:scale-110 p-1"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Shop */}
          <div className="text-center sm:text-start">
            <h4 className="font-playfair text-lg font-semibold mb-5 md:mb-6 text-zynora-gold">{t.common.shop}</h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-zynora-cream/80">
              <li><Link href="/shop" className="hover:text-white transition-colors py-1 inline-block">{t.common.all}</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors py-1 inline-block">{t.common.bestseller}</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors py-1 inline-block">Daily Wellness</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors py-1 inline-block">Bundles</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="text-center sm:text-start">
            <h4 className="font-playfair text-lg font-semibold mb-5 md:mb-6 text-zynora-gold">Support</h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-zynora-cream/80">
              <li><Link href="#" className="hover:text-white transition-colors py-1 inline-block">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors py-1 inline-block">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors py-1 inline-block">Track Order</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors py-1 inline-block">{t.common.contact}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-start">
            <h4 className="font-playfair text-lg font-semibold mb-5 md:mb-6 text-zynora-gold">{t.common.contact}</h4>
            <ul className="space-y-3 md:space-y-4 text-sm text-zynora-cream/80 flex flex-col items-center sm:items-start">
              <li>hello@zynora.com</li>
              <li>+91 98765 43210</li>
              <li className="pt-2">
                <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-zynora-gold/30 rounded-full hover:bg-zynora-gold hover:text-zynora-emerald transition-all duration-500 text-xs font-bold uppercase tracking-widest">
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zynora-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 text-xs text-zynora-cream/60">
          <p dir="ltr">&copy; {new Date().getFullYear()} ZYNORA. All rights reserved.</p>
          <div className="flex gap-6 md:gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
