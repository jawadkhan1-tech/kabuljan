"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function SignatureDishes() {
  const menuHighlights = [
    {
      name: "Kabuli Pulao",
      description: "Signature Afghan rice with tender meat, raisins & carrots",
      image: "/kabuli_pulao.png",
    },
    {
      name: "Mutton Karahi",
      description: "Traditional Pashtun style mutton karahi",
      image: "/mutton_karahi.png",
    },
    {
      name: "Chapli Kabab",
      description: "Authentic Afghan chapli kabab with rich spices",
      image: "/chapli_kabab.png",
    },
    {
      name: "Afghani Naan",
      description: "Freshly baked in traditional Afghan style",
      image: "/afghni_naan.png", 
    }
  ];

  return (
    <section className="relative w-full aspect-[16/9] min-h-[800px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-[#0A0908] bg-contain lg:bg-cover bg-top lg:bg-center bg-no-repeat z-0"
        style={{ backgroundImage: "url('/page3_bg_final.png')" }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-[1500px] pt-[60vw] md:pt-0">
        
        {/* Menu Items Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0A0908]/90 backdrop-blur-xl border border-[#E5C07B]/20 rounded-[2rem] p-8 md:p-10 shadow-[0_15px_50px_rgba(0,0,0,0.8)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-0 xl:divide-x divide-[#E5C07B]/20">
            {menuHighlights.map((dish, index) => (
              <div key={index} className="flex flex-col items-center text-center xl:px-8 first:xl:pl-0 last:xl:pr-0 group">
                
                {/* Image Container with Gold Border */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#E5C07B]/40 mb-8 p-1 bg-black/40">
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image 
                      src={dish.image} 
                      alt={dish.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  
                  {/* Decorative corner accents */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#E5C07B]"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#E5C07B]"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#E5C07B]"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#E5C07B]"></div>
                </div>

                <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3 tracking-wide">
                  {dish.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
                  {dish.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
