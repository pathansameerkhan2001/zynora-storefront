import { Leaf, Droplet, Sun, ShieldCheck } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#0A1A14] text-[#C8A45D] py-4 px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 font-inter">
      
      {/* Left Section */}
      <div className="flex items-center gap-6 flex-1">
        <div className="flex items-center gap-4 border border-[#C8A45D]/20 rounded-xl p-3">
          <div className="text-[10px] uppercase tracking-wider text-[#F8F4EA] leading-relaxed">
            Premium Nutrition.<br/>
            Real Ingredients.<br/>
            For Real Life.
          </div>
          <div className="w-[1px] h-10 bg-[#C8A45D]/30" />
          <div className="text-[10px] text-right text-[#C8A45D] leading-relaxed font-sans" dir="rtl">
            تغذية فاخرة.<br/>
            مكونات حقيقية.<br/>
            لحياة حقيقية.
          </div>
        </div>
        
        {/* Gold Seal Badge */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#C8A45D] rounded-full opacity-20" />
          <div className="absolute inset-1 border border-dashed border-[#C8A45D] rounded-full animate-spin-slow" style={{ animationDuration: '20s' }} />
          <div className="text-center">
            <span className="block text-[8px] font-bold tracking-widest text-[#C8A45D]">PREMIUM</span>
            <span className="block text-[8px] font-bold tracking-widest text-[#C8A45D]">QUALITY</span>
            <span className="block text-[7px] mt-0.5 text-[#C8A45D]">جودة عالية</span>
          </div>
        </div>
      </div>

      {/* Center Section - Logo */}
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="flex flex-col items-center">
          <div className="text-[#C8A45D] mb-1">
             <Leaf className="w-6 h-6 fill-current" />
          </div>
          <h1 className="font-playfair text-3xl lg:text-4xl font-bold tracking-widest text-[#C8A45D] mb-1">
            ZYNORA
          </h1>
          <p className="text-[9px] font-medium tracking-[0.3em] text-[#C8A45D] uppercase">
            Made For How You Live.
          </p>
        </div>
      </div>

      {/* Right Section - Trust Icons */}
      <div className="flex flex-col items-end flex-1 gap-3">
        <div className="flex items-center gap-8">
          <div className="flex flex-col items-center">
            <Leaf className="w-5 h-5 mb-1 stroke-[1.5]" />
            <span className="text-[8px] uppercase tracking-widest text-[#F8F4EA]">Natural</span>
            <span className="text-[8px]">طبيعي</span>
          </div>
          <div className="w-[1px] h-6 bg-[#C8A45D]/30" />
          <div className="flex flex-col items-center">
            <Droplet className="w-5 h-5 mb-1 stroke-[1.5]" />
            <span className="text-[8px] uppercase tracking-widest text-[#F8F4EA]">Pure</span>
            <span className="text-[8px]">نقي</span>
          </div>
          <div className="w-[1px] h-6 bg-[#C8A45D]/30" />
          <div className="flex flex-col items-center">
            <Sun className="w-5 h-5 mb-1 stroke-[1.5]" />
            <span className="text-[8px] uppercase tracking-widest text-[#F8F4EA]">Daily</span>
            <span className="text-[8px]">يومياً</span>
          </div>
          <div className="w-[1px] h-6 bg-[#C8A45D]/30" />
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-5 h-5 mb-1 stroke-[1.5]" />
            <span className="text-[8px] uppercase tracking-widest text-[#F8F4EA]">Clean & Safe</span>
            <span className="text-[8px]">نظيف وآمن</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-[9px] text-[#F8F4EA]/80 pt-2 border-t border-[#C8A45D]/20">
          <span>No Added Preservatives | <span className="text-[#C8A45D]">بدون مواد حافظة</span></span>
          <div className="w-[1px] h-3 bg-[#C8A45D]/30" />
          <span>No Artificial Colours | <span className="text-[#C8A45D]">بدون ألوان صناعية</span></span>
          <div className="w-[1px] h-3 bg-[#C8A45D]/30" />
          <span className="text-[#C8A45D]">100% Natural | ۱۰۰٪ طبيعي</span>
        </div>
      </div>

    </div>
  );
}
