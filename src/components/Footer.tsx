"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const reviews = [
    {
      name: "Ahmed K.",
      text: "The most authentic Kabuli Pulao I've ever had outside of Kabul. Absolutely incredible flavors!",
      rating: 5,
    },
    {
      name: "Sarah M.",
      text: "The Mutton Karahi is so tender it falls off the bone. Perfect atmosphere and amazing hospitality.",
      rating: 5,
    },
    {
      name: "Omar F.",
      text: "A hidden gem in Quetta. The Chapli Kabab was spicy, juicy, and exactly how it should be.",
      rating: 5,
    }
  ];

  return (
    <footer className="relative w-full bg-[#050505] min-h-[600px] md:min-h-[800px] flex flex-col justify-end pb-[10%] xl:pb-[5%] pt-10">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat bg-[url('/footer_phone_size_bg.png')] md:bg-[url('/footer_bg.png')]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1400px] flex flex-col h-full">
        
        {/* Premium review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-24 pt-[15vw] md:pt-[15%]">
          {reviews.map((review, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-center justify-center text-center px-6 py-10 lg:px-10 lg:py-12 bg-black/60 backdrop-blur-md rounded-2xl border border-[#E5C07B]/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#E5C07B]/40 hover:shadow-[0_8px_32px_rgba(229,192,123,0.1)] transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 text-[#E5C07B]">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 lg:w-6 lg:h-6 fill-current" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-white text-sm md:text-base font-medium italic leading-relaxed mb-6 drop-shadow-md">
                &quot;{review.text}&quot;
              </p>
              <span className="text-[#E5C07B] font-serif font-bold tracking-wider drop-shadow-md">
                - {review.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Actual Footer Content */}
        <div className="border-t border-[#E5C07B]/20 pt-12 mt-auto bg-black/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand */}
            <div className="col-span-1 lg:col-span-1">
              <Link href="/" className="inline-block mb-4">
                <div className="text-3xl font-serif font-bold tracking-wider text-white">
                  KABUL <span className="text-[#E5C07B]">JAAN</span>
                </div>
              </Link>
              <p className="mt-4 leading-relaxed font-light italic text-gray-300 text-sm">
                Authentic Afghan Flavors in Quetta. Prepared with traditional methods, authentic spices, and absolute passion.
              </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-[#E5C07B] hover:text-white transition-colors bg-white/5 p-2 rounded-full">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                </a>
                <a href="#" className="text-[#E5C07B] hover:text-white transition-colors bg-white/5 p-2 rounded-full">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.85 3.9 2.31 7.15 2.16 8.42 2.1 8.8 2.1 12 2.16m0-2.16C8.74 0 8.33.01 7.05.07 2.76.26.26 2.76.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.19 4.28 2.69 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.28-.19 6.78-2.69 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.19-4.28-2.69-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.83a6.17 6.17 0 100 12.34 6.17 6.17 0 000-12.34zm0 10.16a3.99 3.99 0 110-7.98 3.99 3.99 0 010 7.98zm3.96-11.45a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[#E5C07B] font-bold tracking-wider uppercase mb-6 text-sm">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><a href="#our-story" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-2">
              <h4 className="text-[#E5C07B] font-bold tracking-wider uppercase mb-6 text-sm">Contact Us</h4>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex items-start gap-4">
                  <span className="text-[#E5C07B] shrink-0 mt-0.5">📍</span>
                  <span>Airport Road, Quetta, Pakistan</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#E5C07B] shrink-0 mt-0.5">📞</span>
                  <span>+92 331 1234567</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#E5C07B] shrink-0 mt-0.5">🕒</span>
                  <span>Mon - Sun: 12:00 PM - 12:00 AM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#E5C07B]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Kabul Jaan Restaurant. All rights reserved.</p>
            <p>Designed with ❤️ for Quetta</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
