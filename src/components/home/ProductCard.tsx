"use client";

import Image from "next/image";
import { Heart, Star, Plus, Minus } from "lucide-react";
import { useState } from "react";

interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  badge?: string;
}

export default function ProductCard({
  name,
  description,
  price,
  originalPrice,
  rating,
  reviewsCount,
  image,
  badge
}: ProductProps) {
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div 
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-premium transition-shadow duration-500 relative group flex flex-col h-full border border-zynora-gold/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges & Wishlist */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-10">
        {badge ? (
          <span className="bg-zynora-gold text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
            {badge}
          </span>
        ) : <div />}
        <button className="text-zynora-emerald/30 hover:text-zynora-gold transition-colors bg-white/80 backdrop-blur p-2 rounded-full shadow-sm">
          <Heart className="w-5 h-5" />
        </button>
      </div>

      {/* Cinematic Image Interaction */}
      <div className="relative w-full aspect-square mb-6 rounded-xl bg-gradient-to-b from-zynora-beige/20 to-zynora-beige/5 overflow-visible flex items-center justify-center group-hover:shadow-[inset_0_0_40px_rgba(200,164,93,0.05)] transition-all duration-700">
        
        {/* Ambient Glow behind the whole product */}
        <div className={`absolute inset-0 bg-zynora-gold/10 blur-[40px] rounded-full transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

        <div className="relative w-full h-full">
          
          {/* 1. Jar Body (Bottom 70%) */}
          <div className="absolute inset-0 z-10" style={{ clipPath: 'inset(28% 0 0 0)' }}>
            <Image 
              src={image} 
              alt={`${name} Body`}
              fill
              className="object-contain p-8 drop-shadow-xl"
            />
          </div>

          {/* 2. Magical Escaping Glow (Between Lid and Body) */}
          <div 
            className={`absolute top-[28%] left-1/2 -translate-x-1/2 w-24 h-6 bg-gradient-to-b from-[#FFD700] to-[#C8A45D] blur-[12px] z-15 rounded-full mix-blend-screen transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHovered ? 'opacity-80 scale-125 translate-y-[-5px]' : 'opacity-0 scale-50 translate-y-0'}`}
          />

          {/* 3. Jar Lid (Top 28%) - Lifts up and tilts slightly */}
          <div 
            className={`absolute inset-0 z-20 origin-bottom-right transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHovered ? '-translate-y-4 rotate-2 drop-shadow-2xl' : 'translate-y-0 rotate-0 drop-shadow-md'}`}
            style={{ clipPath: 'inset(0 0 72% 0)' }}
          >
            <Image 
              src={image} 
              alt={`${name} Lid`}
              fill
              className="object-contain p-8"
            />
          </div>

        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex text-zynora-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? "fill-current" : "opacity-30"}`} />
            ))}
          </div>
          <span className="text-xs text-zynora-emerald/60 font-medium ml-1">({reviewsCount})</span>
        </div>

        <h3 className="font-playfair text-xl font-bold text-zynora-emerald mb-2 leading-tight">
          {name}
        </h3>
        <p className="text-sm text-zynora-emerald/70 mb-4 line-clamp-2">
          {description}
        </p>

        <div className="mt-auto">
          <div className="flex items-end gap-3 mb-6">
            <span className="text-2xl font-bold text-zynora-emerald">₹{price}</span>
            {originalPrice && (
              <span className="text-sm text-zynora-emerald/40 line-through mb-1">₹{originalPrice}</span>
            )}
          </div>

          <div className="flex items-center gap-4">
            {/* Quantity Selector */}
            <div className="flex items-center bg-zynora-beige/20 rounded-full border border-zynora-gold/20 p-1">
              <button onClick={decrease} className="p-1.5 text-zynora-emerald hover:text-zynora-gold transition-colors">
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-6 text-center text-sm font-medium">{quantity}</span>
              <button onClick={increase} className="p-1.5 text-zynora-emerald hover:text-zynora-gold transition-colors">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Add to Cart */}
            <button className="flex-1 bg-zynora-emerald text-white py-3 rounded-full text-sm font-medium tracking-wide hover:bg-zynora-gold transition-colors duration-300 shadow-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
