"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import { useLanguage } from "@/context/LanguageContext";

export default function ProductShowcase() {
  const { t, isRTL } = useLanguage();

  const products = [
    {
      id: "1",
      name: isRTL ? "تلبينة فاخرة" : "Premium Talbina",
      description: isRTL ? "تغذية تقليدية تعتمد على الشعير لراحة القلب والروح. مستخرجة من حقول عضوية." : "Traditional barley-based nourishment for heart and soul. Sourced from organic fields.",
      price: 249,
      originalPrice: 350,
      rating: 4.9,
      reviewsCount: 124,
      image: "/images/products/talbina.png.png",
      badge: t.common.bestseller
    },
    {
      id: "2",
      name: isRTL ? "مزيج بنجيري بلدي" : "Desi Panjeeri Blend",
      description: isRTL ? "مزيج أصيل لتعزيز الطاقة مع مكسرات فاخرة وسمن بلدي ممتاز." : "Authentic energy-boosting blend with premium nuts and gourmet ghee.",
      price: 449,
      originalPrice: 550,
      rating: 5.0,
      reviewsCount: 89,
      image: "/images/products/desi-panjeeri.png.png",
      badge: t.common.premium
    },
    {
      id: "3",
      name: isRTL ? "شوفان ومكسرات سريعة" : "Instant Oats & Nuts",
      description: isRTL ? "شوفان غني بالألياف ممزوج بمكسرات مختارة بعناية لفطور عافية عصري." : "Fiber-rich oats blended with handpicked nuts for a modern wellness breakfast.",
      price: 399,
      rating: 4.8,
      reviewsCount: 210,
      image: "/images/products/oats-nuts.png.png",
    },
    {
      id: "4",
      name: isRTL ? "ماخانا محمصة" : "Roasted Makhana",
      description: isRTL ? "بذور اللوتس المقرمشة المحمصة بإتقان مع ملح الهيمالايا الفاخر." : "Crispy fox nuts roasted to perfection with gourmet Himalayan salt.",
      price: 299,
      originalPrice: 400,
      rating: 4.7,
      reviewsCount: 342,
      image: "/images/products/makhana.png.png",
      badge: t.common.natural
    }
  ];

  const marqueeProducts = [...products, ...products, ...products];

  return (
    <section className="py-20 bg-zynora-cream relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 start-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[10%] end-[-5%] w-[400px] h-[400px] bg-zynora-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] start-[-5%] w-[400px] h-[400px] bg-zynora-emerald/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-zynora-emerald mb-4 rtl:tracking-normal">
              {t.showcase.heading}
            </h2>
            <p className="text-zynora-emerald/60 text-base font-light leading-relaxed">
              {t.showcase.subtext}
            </p>
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="text-zynora-gold font-bold uppercase tracking-[0.2em] text-[10px] pb-1.5 border-b-2 border-zynora-gold hover:text-zynora-emerald hover:border-zynora-emerald transition-all duration-500"
          >
            {t.showcase.shopAll}
          </motion.button>
        </div>
      </div>

      {/* Marquee Carousel */}
      <div className="relative w-full flex overflow-hidden py-6">
        <motion.div 
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: isRTL ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }}
          transition={{ 
            duration: 35, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
          style={{ width: "fit-content" }}
        >
          {marqueeProducts.map((product, idx) => (
            <div key={`${product.id}-${idx}`} className="w-[280px] md:w-[320px] flex-shrink-0">
              <ProductCard {...product} />
            </div>
          ))}
        </motion.div>

        {/* Edge Overlays */}
        <div className="absolute top-0 start-0 h-full w-[150px] bg-gradient-to-r from-zynora-cream to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 end-0 h-full w-[150px] bg-gradient-to-l from-zynora-cream to-transparent z-20 pointer-events-none" />
      </div>

    </section>
  );
}
