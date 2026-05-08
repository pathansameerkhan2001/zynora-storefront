"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart, Star, Leaf, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Product Data - Updated with EXACT double-extension filenames currently on your disk
const productsData = [
  {
    id: 1,
    name: "Talbina",
    category: "Wellness Blends",
    price: 249,
    description: "Traditional barley-based nourishment for heart and soul.",
    image: "/images/products/talbina.png.png",
    badge: "Bestseller",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Desi Panjeeri Blend",
    category: "Wellness Blends",
    price: 449,
    description: "Authentic energy-boosting blend with nuts and premium ghee.",
    image: "/images/products/desi-panjeeri.png.png",
    badge: "Premium",
    rating: 5.0,
  },
  {
    id: 3,
    name: "Instant Oats & Nuts",
    category: "Wellness Blends",
    price: 399,
    description: "Rich fiber and protein-packed breakfast for the modern professional.",
    image: "/images/products/oats-nuts.png.png",
    badge: "New",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Roasted Makhana",
    category: "Snacks",
    price: 299,
    description: "Crispy fox nuts seasoned with gourmet salt and pepper.",
    image: "/images/products/makhana.png.png",
    badge: "Natural",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Pumpkin Seeds",
    category: "Seeds",
    price: 379,
    description: "Gourmet roasted pumpkin seeds for plant-based protein.",
    image: "/images/products/pumpkin-seeds.png.png",
    badge: "Bestseller",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Chia Seeds",
    category: "Seeds",
    price: 349,
    description: "Premium omega-3 rich seeds for smoothies and wellness jars.",
    image: "/images/products/chia-seeds.png.png",
    badge: "Premium",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Flax Seeds",
    category: "Seeds",
    price: 279,
    description: "Organic brown flax seeds for daily nutritional balance.",
    image: "/images/products/flax-seeds.png.png",
    badge: "Natural",
    rating: 4.6,
  },
  {
    id: 8,
    name: "Sunflower Seeds",
    category: "Seeds",
    price: 259,
    description: "Handpicked sunflower seeds rich in vitamin E and antioxidants.",
    image: "/images/products/sunflower-seeds.png.png",
    badge: "Natural",
    rating: 4.8,
  },
];

export default function ShopPage() {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { id: "All", label: t.common.all },
    { id: "Wellness Blends", label: t.common.wellnessBlends },
    { id: "Seeds", label: t.common.seeds },
    { id: "Snacks", label: t.common.snacks }
  ];

  const filteredProducts = productsData.filter(
    (product) => activeCategory === "All" || product.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#F7F1E7] pt-32 pb-20 relative overflow-hidden">
      
      {/* Floating Background Elements (Cinematic) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, 50, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 end-[-5%] w-[600px] h-[600px] bg-[#D4B06A]/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            y: [0, -40, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 start-[-10%] w-[500px] h-[500px] bg-[#0B2E26]/5 rounded-full blur-[100px]" 
        />
      </div>

      {/* SHOP HERO SECTION */}
      <section className="relative py-24 px-6 z-10">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-zynora-gold" />
              <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-zynora-gold rtl:tracking-normal">
                {t.common.theRitualCollection}
              </span>
              <Sparkles className="w-4 h-4 text-zynora-gold" />
            </div>
            <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-zynora-emerald mb-8 leading-[1.1] rtl:tracking-normal">
              {isRTL ? (
                <>إتقان<br />للفخامة اليومية.</>
              ) : (
                <>Crafted For<br />Everyday Luxury.</>
              )}
            </h1>
            <p className="text-lg md:text-xl text-zynora-emerald/60 font-light max-w-2xl mx-auto leading-relaxed">
              {t.shop.heroSubtext}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="container mx-auto px-6 mb-20 z-10 relative">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative px-10 py-3.5 rounded-full text-[12px] font-bold tracking-[0.25em] uppercase transition-all duration-700 overflow-hidden ${
                activeCategory === category.id
                  ? "text-zynora-cream"
                  : "text-zynora-emerald bg-white/30 backdrop-blur-md border border-zynora-emerald/5 hover:border-zynora-gold/40"
              }`}
            >
              <span className="relative z-10">{category.label}</span>
              {activeCategory === category.id && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-zynora-emerald z-0"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="container mx-auto px-6 lg:px-12 z-10 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-x-12 lg:gap-y-20">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, index) => {
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.1, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  whileHover={{ y: -12 }}
                  className="group relative flex flex-col"
                >
                  {/* Product Card Container */}
                  <div className="relative rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/20 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.03)] group-hover:shadow-[0_40px_80px_rgba(212,176,106,0.12)] transition-all duration-700 p-4">
                    
                    {/* Premium Tag */}
                    <div className="absolute top-8 start-8 z-20">
                      <span className="px-5 py-2 bg-zynora-emerald text-zynora-cream text-[10px] font-bold tracking-[0.25em] uppercase rounded-full shadow-lg">
                        {product.badge}
                      </span>
                    </div>

                    {/* Wishlist Heart */}
                    <button className="absolute top-8 end-8 z-20 p-3 rounded-full bg-white/60 backdrop-blur-md border border-white/20 text-zynora-emerald hover:text-zynora-gold hover:bg-white transition-all duration-500 shadow-sm group/heart">
                      <Heart className="w-4 h-4 stroke-[1.5] group-hover/heart:fill-zynora-gold transition-all" />
                    </button>

                    {/* IMAGE CONTAINER */}
                    <div className="relative h-[420px] w-full overflow-hidden flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-contain p-4"
                      />
                    </div>

                    {/* Add to Cart Overlay */}
                    <div className="absolute inset-x-8 bottom-8 translate-y-[130%] group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] z-30">
                      <button className="w-full py-4 bg-zynora-emerald text-zynora-cream text-[12px] font-bold tracking-[0.3em] uppercase rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-zynora-emerald/20 hover:bg-zynora-gold transition-colors duration-500">
                        <ShoppingBag className="w-4 h-4" />
                        {t.common.addToCart}
                      </button>
                    </div>

                    {/* Gold Hover Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,176,106,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </div>

                  {/* Product Info */}
                  <div className="mt-10 flex flex-col gap-4 px-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-zynora-gold" />
                        <span className="text-[11px] font-bold text-zynora-gold tracking-[0.25em] uppercase">
                          {product.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/50 px-3 py-1 rounded-full border border-zynora-emerald/5">
                        <Star className="w-3 h-3 fill-zynora-gold text-zynora-gold" />
                        <span className="text-[11px] font-bold text-zynora-emerald">{product.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-playfair text-3xl font-bold text-zynora-emerald transition-colors duration-500 group-hover:text-zynora-gold">
                      {product.name}
                    </h3>

                    <p className="text-[15px] text-zynora-emerald/50 font-light leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    <div className="mt-2 flex items-center justify-between pt-4 border-t border-zynora-emerald/5">
                      <div className="flex flex-col items-start">
                        <span className="text-[10px] text-zynora-emerald/40 uppercase tracking-widest font-bold mb-1">
                          {isRTL ? 'السعر المميز' : 'Premium Price'}
                        </span>
                        <span className="text-2xl font-bold text-zynora-emerald">₹{product.price}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="flex items-center gap-1.5 text-[10px] font-bold text-zynora-emerald/60 uppercase tracking-widest">
                          <Leaf className="w-3 h-3" />
                          {t.common.natural}
                        </span>
                        <span className="text-[9px] text-zynora-emerald/30 uppercase tracking-tighter mt-1">
                          {t.common.labTested}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="container mx-auto px-6 mt-40 z-10 relative">
        <div className="relative rounded-[50px] bg-zynora-emerald p-16 lg:p-28 overflow-hidden text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(212,176,106,0.1)_0%,transparent_70%)] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="relative z-10 font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-zynora-cream mb-10 leading-tight">
              {t.shop.experiencePremium.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </h2>
            <p className="relative z-10 text-zynora-cream/60 font-light max-w-2xl mx-auto mb-16 text-lg">
              {t.shop.joinCircle}
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder={t.shop.enterEmail} 
                className="w-full px-10 py-5 bg-white/5 border border-white/10 rounded-full text-zynora-cream placeholder:text-zynora-cream/30 focus:outline-none focus:border-zynora-gold transition-all text-lg"
              />
              <button className="w-full sm:w-auto px-12 py-5 bg-zynora-gold text-zynora-emerald text-[14px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-zynora-cream transition-all duration-700 shadow-xl shadow-zynora-gold/10 whitespace-nowrap">
                {t.shop.subscribe}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
