"use client";

import { motion } from "framer-motion";
import { Users, Armchair, Flame } from "lucide-react";

export function OurStory() {
  return (
    <section 
      id="our-story" 
      className="relative min-h-[600px] md:min-h-[800px] w-full flex items-center bg-[#F7F1E5] bg-contain lg:bg-cover bg-top lg:bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/page2_background.png')" }}
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row pt-[60vw] md:pt-0">
        {/* Left side spacer - assuming the background image has the arch/restaurant image on the left */}
        <div className="hidden lg:block lg:w-1/2"></div>
        
        {/* Right side content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center py-20 lg:py-32 lg:pl-12 items-center lg:items-start text-center lg:text-left">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center lg:justify-start gap-4 mb-6 w-full"
          >
            <span className="uppercase tracking-[0.2em] text-[#8C6239] font-bold text-sm">
              OUR AMBIANCE
            </span>
            <div className="h-[2px] w-16 bg-[#8C6239]"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-[4.5rem] font-serif font-bold leading-[1.1] mb-8 text-[#0B2341]"
          >
            A Dining Experience <br />
            <span className="text-[#8C6239]">Like No Other</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-12 max-w-xl"
          >
            Step into a space inspired by Afghan heritage — with traditional decor, warm lighting, and a welcoming atmosphere. Whether it&apos;s a family dinner, a get-together with friends, or a special occasion, Kabul Jaan offers an unforgettable dining experience.
          </motion.p>
          
          {/* Features Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                {/* Decorative border could go here, using an icon for now */}
                <Flame className="w-8 h-8 text-[#8C6239]" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif font-bold text-[#0B2341] text-lg mb-2">Traditional Decor</h4>
              <p className="text-gray-600 text-sm font-light">Authentic Afghan ambiance</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                <Users className="w-8 h-8 text-[#8C6239]" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif font-bold text-[#0B2341] text-lg mb-2">Family Friendly</h4>
              <p className="text-gray-600 text-sm font-light">A perfect place for everyone</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
                <Armchair className="w-8 h-8 text-[#8C6239]" strokeWidth={1.5} />
              </div>
              <h4 className="font-serif font-bold text-[#0B2341] text-lg mb-2">Comfortable Seating</h4>
              <p className="text-gray-600 text-sm font-light">Relax and enjoy your meal</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
