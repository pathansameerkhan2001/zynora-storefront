import Hero from "@/components/home/Hero";
import FeatureHighlights from "@/components/home/FeatureHighlights";
import ProductShowcase from "@/components/home/ProductShowcase";
import WhyZynora from "@/components/home/WhyZynora";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <FeatureHighlights />
      <ProductShowcase />
      <WhyZynora />
    </div>
  );
}
