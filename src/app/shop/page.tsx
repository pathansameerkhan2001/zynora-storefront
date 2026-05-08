"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Heart, Star, Leaf, Sparkles } from "lucide-react";

// Product Data - Updated with EXACT double-extension filenames currently on your disk
const products = [
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

const categories = ["All", "Wellness Blends", "Seeds", "Snacks"];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = products.filter(
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
          className="absolute top-1/4 right-[-5%] w-[600px] h-[600px] bg-[#D4B06A]/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            y: [0, -40, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-[-10%] w-[500px] h-[500px] bg-[#0B2E26]/5 rounded-full blur-[100px]" 
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
              <Sparkles className="w-4 h-4 text-[#D4B06A]" />
              <span className="text-[12px] font-bold tracking-[0.4em] uppercase text-[#D4B06A]">The Ritual Collection</span>
              <Sparkles className="w-4 h-4 text-[#D4B06A]" />
            </div>
            <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold text-[#0B2E26] mb-8 leading-[1.1]">
              Crafted For<br />Everyday Luxury.
            </h1>
            <p className="text-lg md:text-xl text-[#06231D]/60 font-light max-w-2xl mx-auto leading-relaxed">
              Discover premium wellness blends made with real ingredients, traditional nutrition, and modern refinement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="container mx-auto px-6 mb-20 z-10 relative">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-10 py-3.5 rounded-full text-[12px] font-bold tracking-[0.25em] uppercase transition-all duration-700 overflow-hidden ${
                activeCategory === category
                  ? "text-[#F7F1E7]"
                  : "text-[#0B2E26] bg-white/30 backdrop-blur-md border border-[#0B2E26]/5 hover:border-[#D4B06A]/40"
              }`}
            >
              <span className="relative z-10">{category}</span>
              {activeCategory === category && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-[#0B2E26] z-0"
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
                    <div className="absolute top-8 left-8 z-20">
                      <span className="px-5 py-2 bg-[#0B2E26] text-[#F7F1E7] text-[10px] font-bold tracking-[0.25em] uppercase rounded-full shadow-lg">
                        {product.badge}
                      </span>
                    </div>

                    {/* Wishlist Heart */}
                    <button className="absolute top-8 right-8 z-20 p-3 rounded-full bg-white/60 backdrop-blur-md border border-white/20 text-[#0B2E26] hover:text-[#D4B06A] hover:bg-white transition-all duration-500 shadow-sm group/heart">
                      <Heart className="w-4 h-4 stroke-[1.5] group-hover/heart:fill-[#D4B06A] transition-all" />
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
                      <button className="w-full py-4 bg-[#0B2E26] text-[#F7F1E7] text-[12px] font-bold tracking-[0.3em] uppercase rounded-2xl flex items-center justify-center gap-3 shadow-xl shadow-[#0B2E26]/20 hover:bg-[#D4B06A] transition-colors duration-500">
                        <ShoppingBag className="w-4 h-4" />
                        Add to Cart
                      </button>
                    </div>

                    {/* Gold Hover Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,176,106,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </div>

                  {/* Product Info */}
                  <div className="mt-10 flex flex-col gap-4 px-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-[#D4B06A]" />
                        <span className="text-[11px] font-bold text-[#D4B06A] tracking-[0.25em] uppercase">
                          {product.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/50 px-3 py-1 rounded-full border border-[#0B2E26]/5">
                        <Star className="w-3 h-3 fill-[#D4B06A] text-[#D4B06A]" />
                        <span className="text-[11px] font-bold text-[#0B2E26]">{product.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-playfair text-3xl font-bold text-[#0B2E26] transition-colors duration-500 group-hover:text-[#D4B06A]">
                      {product.name}
                    </h3>

                    <p className="text-[15px] text-[#06231D]/50 font-light leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    <div className="mt-2 flex items-center justify-between pt-4 border-t border-[#0B2E26]/5">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-[#0B2E26]/40 uppercase tracking-widest font-bold mb-1">Premium Price</span>
                        <span className="text-2xl font-bold text-[#0B2E26]">₹{product.price}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#0B2E26]/60 uppercase tracking-widest">
                          <Leaf className="w-3 h-3" />
                          100% Natural
                        </span>
                        <span className="text-[9px] text-[#0B2E26]/30 uppercase tracking-tighter mt-1">Lab Tested Quality</span>
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
        <div className="relative rounded-[50px] bg-[#0B2E26] p-16 lg:p-28 overflow-hidden text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(212,176,106,0.1)_0%,transparent_70%)] pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <h2 className="relative z-10 font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-[#F7F1E7] mb-10 leading-tight">
              Experience Premium<br />Wellness Delivered.
            </h2>
            <p className="relative z-10 text-[#F7F1E7]/60 font-light max-w-2xl mx-auto mb-16 text-lg">
              Join our exclusive wellness circle. Get early access to limited edition seasonal blends and organic harvests.
            </p>
            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 max-w-xl mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-10 py-5 bg-white/5 border border-white/10 rounded-full text-[#F7F1E7] placeholder:text-[#F7F1E7]/30 focus:outline-none focus:border-[#D4B06A] transition-all text-lg"
              />
              <button className="w-full sm:w-auto px-12 py-5 bg-[#D4B06A] text-[#0B2E26] text-[14px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-[#F7F1E7] transition-all duration-700 shadow-xl shadow-[#D4B06A]/10">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
