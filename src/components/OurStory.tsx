"use client";

import { motion } from "framer-motion";
import { Users, Armchair, Flame } from "lucide-react";

export function OurStory() {
  return (
    <section id="our-story" className="w-full bg-[#F7F1E5]">
      
      {/* ========================================== */}
      {/* MOBILE LAYOUT                              */}
      {/* ========================================== */}
      <div className="w-full md:hidden flex flex-col bg-gradient-to-b from-[#EAE0D0] via-[#E6D8C2] to-[#E2CEB1]">
        
        {/* Top Image: Dining Room Frame (Shows top 75% of image) */}
        <div 
          className="w-full aspect-[3/4] bg-top bg-no-repeat relative z-10"
          style={{ 
            backgroundImage: "url('/page2_phone_size_bg.png')", 
            backgroundSize: "100% auto",
            WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)"
          }}
        ></div>
        
        {/* Text Container: Pushes down naturally with no overlap */}
        <div className="w-full flex flex-col justify-center items-center px-5 py-2 relative z-20 -mt-2 mb-4">
           
           {/* Top Subtitle (Asymmetrical separator matching mockup) */}
           <div className="flex items-center justify-center gap-3 mb-4">
             <span className="uppercase tracking-[0.2em] text-[#916A46] font-bold text-[0.65rem] ml-12">
               OUR AMBIANCE
             </span>
             <div className="flex items-center opacity-80">
               <div className="h-[1px] w-6 bg-[#916A46]"></div>
               <div className="w-1.5 h-1.5 rotate-45 border border-[#916A46] mx-1 rounded-[1px]"></div>
               <div className="h-[1px] w-6 bg-[#916A46]"></div>
             </div>
           </div>
           
           {/* Main Title */}
           <h2 className="text-[3rem] font-serif font-bold leading-[0.95] mb-6 text-[#0F2841] text-center tracking-tight">
             A Dining <br />
             Experience <br />
             <span className="text-[#916A46]">Like No Other</span>
           </h2>
           
           {/* Paragraph */}
           <p className="text-[0.7rem] text-[#4A4A4A] leading-[1.7] text-center max-w-[320px] mb-10 font-medium">
             Step into a space inspired by Afghan heritage — with traditional decor, warm lighting, and a welcoming atmosphere. Whether it's a family dinner, a get-together with friends, or a special occasion, Kabul Jaan offers an unforgettable dining experience.
           </p>
           
           {/* Features Grid */}
           <div className="flex justify-between items-start w-full max-w-[340px] px-1">
             
             {/* Feature 1 */}
             <div className="flex flex-col items-center text-center w-[30%]">
               <div className="w-11 h-11 rounded-full border-[1.5px] border-[#916A46] flex items-center justify-center mb-3">
                 <Flame className="w-5 h-5 text-[#916A46]" strokeWidth={1.5} />
               </div>
               <h4 className="font-serif font-bold text-[#0F2841] text-[0.6rem] mb-1 leading-tight">Traditional Decor</h4>
               <p className="text-[#666] text-[0.5rem] leading-tight">Authentic Afghan ambiance</p>
             </div>
             
             {/* Separator */}
             <div className="flex flex-col justify-center h-12">
                <div className="w-[3px] h-[3px] rotate-45 border border-[#916A46] opacity-60"></div>
             </div>

             {/* Feature 2 */}
             <div className="flex flex-col items-center text-center w-[30%]">
               <div className="w-11 h-11 rounded-full border-[1.5px] border-[#916A46] flex items-center justify-center mb-3">
                 <Users className="w-5 h-5 text-[#916A46]" strokeWidth={1.5} />
               </div>
               <h4 className="font-serif font-bold text-[#0F2841] text-[0.6rem] mb-1 leading-tight">Family Friendly</h4>
               <p className="text-[#666] text-[0.5rem] leading-tight">A perfect place for everyone</p>
             </div>

             {/* Separator */}
             <div className="flex flex-col justify-center h-12">
                <div className="w-[3px] h-[3px] rotate-45 border border-[#916A46] opacity-60"></div>
             </div>
             
             {/* Feature 3 */}
             <div className="flex flex-col items-center text-center w-[30%]">
               <div className="w-11 h-11 rounded-full border-[1.5px] border-[#916A46] flex items-center justify-center mb-3">
                 <Armchair className="w-5 h-5 text-[#916A46]" strokeWidth={1.5} />
               </div>
               <h4 className="font-serif font-bold text-[#0F2841] text-[0.6rem] mb-1 leading-tight">Comfortable<br/>Seating</h4>
               <p className="text-[#666] text-[0.5rem] leading-tight">Relax and enjoy your meal</p>
             </div>
             
           </div>
        </div>

        {/* Bottom Image: Mountains (Shows bottom 25% of image) */}
        <div 
          className="w-full aspect-[3/1] bg-bottom bg-no-repeat relative z-10 -mt-8"
          style={{ 
            backgroundImage: "url('/page2_phone_size_bg.png')", 
            backgroundSize: "100% auto",
            WebkitMaskImage: "linear-gradient(to top, black 70%, transparent 100%)",
            maskImage: "linear-gradient(to top, black 70%, transparent 100%)"
          }}
        ></div>
      </div>

      {/* ========================================== */}
      {/* DESKTOP LAYOUT                             */}
      {/* ========================================== */}
      <div 
        className="hidden md:flex relative min-h-[800px] w-full items-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: "url('/page2_background.png')" }}
      >
        <div className="container mx-auto px-12 relative z-10 flex flex-row">
          {/* Left side spacer - assuming the background image has the arch/restaurant image on the left */}
          <div className="w-1/2"></div>
          
          {/* Right side content */}
          <div className="w-1/2 flex flex-col justify-center py-32 pl-12 items-start text-left">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-start gap-4 mb-6 w-full"
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
              className="text-[4.5rem] font-serif font-bold leading-[1.1] mb-8 text-[#0B2341]"
            >
              A Dining Experience <br />
              <span className="text-[#8C6239]">Like No Other</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-700 leading-relaxed font-light mb-12 max-w-xl"
            >
              Step into a space inspired by Afghan heritage — with traditional decor, warm lighting, and a welcoming atmosphere. Whether it's a family dinner, a get-together with friends, or a special occasion, Kabul Jaan offers an unforgettable dining experience.
            </motion.p>
            
            {/* Features Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 mb-4 relative flex items-center justify-center">
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
      </div>
    </section>
  );
}
