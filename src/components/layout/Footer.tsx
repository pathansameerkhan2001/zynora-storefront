import Link from "next/link";
import { Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zynora-emerald text-zynora-cream pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-playfair text-4xl font-bold tracking-tight mb-6 block">
              ZYNORA
            </Link>
            <p className="text-sm leading-relaxed text-zynora-cream/80 mb-6 max-w-sm">
              Premium nutrition crafted with intention. Made for how you live, with real ingredients and absolute transparency.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-zynora-gold transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-zynora-gold transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-zynora-gold transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6 text-zynora-gold">Shop</h4>
            <ul className="space-y-4 text-sm text-zynora-cream/80">
              <li><Link href="#" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Best Sellers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Daily Wellness</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Bundles</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6 text-zynora-gold">Support</h4>
            <ul className="space-y-4 text-sm text-zynora-cream/80">
              <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-6 text-zynora-gold">Contact</h4>
            <ul className="space-y-4 text-sm text-zynora-cream/80">
              <li>hello@zynora.com</li>
              <li>+91 98765 43210</li>
              <li>
                <a href="#" className="inline-flex items-center gap-2 mt-4 px-4 py-2 border border-zynora-gold/30 rounded-full hover:bg-zynora-gold hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zynora-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zynora-cream/60">
          <p>&copy; {new Date().getFullYear()} ZYNORA. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
