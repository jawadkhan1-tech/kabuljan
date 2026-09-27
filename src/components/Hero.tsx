"use client";

import { ArrowRight, MapPin, Utensils, Leaf, Users, Mountain, Soup } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section ref={ref} id="home" className="relative w-full h-screen min-h-[850px] flex flex-col justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 w-full h-full">
        {/* Mobile Background Image (phone_size_bg.png) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat md:hidden"
          style={{ backgroundImage: "url('/phone_size_bg.png')" }}
        />
        
        {/* Desktop Background Image (page1_bg_final.png) */}
        <div 
          className="hidden md:block absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/page1_bg_final.png')" }}
        />
        
        {/* Animated Smoke Effect */}
        <div className="absolute inset-0 pointer-events-none z-10 flex items-end justify-center pb-[10%] md:translate-x-[15%]">
           <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 0.15, 0], y: -60 }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[200px] h-[150px] md:w-[400px] md:h-[200px] bg-white/30 rounded-full blur-[50px]"
           />
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: [0, 0.12, 0], y: -80 }}
              transition={{ duration: 5, repeat: Infinity, delay: 2, ease: "easeInOut" }}
              className="absolute w-[150px] h-[100px] md:w-[300px] md:h-[150px] bg-white/30 rounded-full blur-[40px]"
           />
        </div>

        {/* Subtle dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1814]/90 via-[#1A1814]/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
      </div>

      {/* Main Content */}
      <motion.div 
        style={{ opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 md:px-12 lg:px-24 mt-16 md:mt-24 flex-1 flex flex-col justify-center items-center md:items-start"
      >
        {/* ========================================== */}
        {/* MOBILE LAYOUT (Centered, Stacked, Ornate)  */}
        {/* ========================================== */}
        <div className="w-full flex flex-col items-center md:hidden">
          {/* Top Decorative Diamond & Subtitle */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 mb-4">
            <div className="w-2 h-2 rotate-45 border border-[#E5C07B] bg-transparent"></div>
            <span className="text-[#E5C07B] uppercase tracking-[0.3em] text-[0.65rem] font-bold">
              AUTHENTIC AFGHANI CUISINE
            </span>
          </motion.div>
          
          {/* Main Title Stacked */}
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-6 relative">
            <h1 className="flex flex-col items-center text-[4.5rem] sm:text-[5.5rem] font-serif font-bold leading-[0.85] tracking-tight drop-shadow-2xl">
              <span className="text-white">Kabul</span>
              <span className="text-[#E5C07B]">Jaan</span>
            </h1>
            
            {/* Bottom Decorative Diamond */}
            <div className="mt-4 flex items-center justify-center gap-2 w-full opacity-60">
               <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#E5C07B]"></div>
               <div className="w-1.5 h-1.5 rotate-45 bg-[#E5C07B]"></div>
               <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#E5C07B]"></div>
            </div>
            
            {/* Cursive Text */}
            <div className="relative mt-2 rotate-[-8deg]">
              <span className="text-white text-3xl font-light" style={{ fontFamily: "'Brush Script MT', 'Comic Sans MS', cursive" }}>
                Quetta <br/>
                <span className="ml-4">Ka Swaad</span>
              </span>
              <svg className="absolute -bottom-2 -left-2 w-32 text-[#E5C07B]" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15Q40 0 95 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>
          
          {/* Tagline */}
          <motion.h2 variants={itemVariants} className="text-[1.8rem] text-white text-center font-serif font-semibold mt-4 mb-3 leading-[1.2] drop-shadow-xl">
            The True Taste of <br/>Afghanistan
          </motion.h2>
          
          {/* Description */}
          <motion.p variants={itemVariants} className="text-white/90 text-center max-w-[320px] text-[0.8rem] mb-10 leading-[1.6] font-light drop-shadow-md">
            Experience rich Afghan and Pashtun flavors, traditional recipes and warm hospitality at Kabul Jaan Restaurant.
          </motion.p>
          
          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 w-full max-w-[280px]">
            <a href="#menu" className="group relative flex items-center justify-center gap-3 px-8 py-3.5 bg-gradient-to-r from-[#D4A853] via-[#E5C07B] to-[#D4A853] text-black font-bold tracking-wide rounded-full hover:brightness-110 transition-all text-sm w-full">
              <Utensils className="w-4 h-4" /> Explore Our Menu <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#branches" className="group flex items-center justify-center gap-3 px-8 py-3.5 border border-[#E5C07B]/60 bg-[#0A0908]/60 backdrop-blur-md text-white font-medium tracking-wide rounded-full hover:bg-white hover:text-black transition-all text-sm w-full">
              <MapPin className="w-4 h-4 text-white group-hover:text-black" /> Visit Us in Quetta
            </a>
          </motion.div>
        </div>


        {/* ========================================== */}
        {/* DESKTOP LAYOUT (Left-aligned, Original)    */}
        {/* ========================================== */}
        <div className="hidden md:flex max-w-[42rem] flex-col items-start text-left mx-0">
          <motion.div variants={itemVariants} className="flex items-center justify-start gap-4 mb-3 w-full">
            <span className="text-[#E5C07B] uppercase tracking-[0.25em] text-[0.7rem] font-bold">
              AUTHENTIC AFGHANI CUISINE
            </span>
            <div className="h-[1px] w-16 bg-[#E5C07B]"></div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="relative mb-6 w-fit flex flex-col items-start text-left">
            <h1 className="text-[6.5rem] lg:text-[7.5rem] font-serif font-bold text-white leading-[0.9] tracking-tight">
              Kabul <span className="text-[#E5C07B]">Jaan</span>
            </h1>
            <div className="absolute left-full ml-6 lg:ml-12 -top-6 rotate-[-12deg] w-[220px]">
              <span className="text-white text-4xl font-light block" style={{ fontFamily: "'Brush Script MT', 'Comic Sans MS', cursive" }}>
                Quetta <br/>
                <span className="ml-8">Ka Swaad</span>
              </span>
              <svg className="absolute -bottom-1 left-4 w-32 text-[#E5C07B]" viewBox="0 0 100 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 15Q40 0 95 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-[2.2rem] text-white font-serif font-bold max-w-lg mb-4 leading-[1.2]">
            The True Taste of Afghanistan <br/>
            in the Heart of Quetta
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-white/80 max-w-md text-sm mb-8 leading-relaxed font-light">
            Experience rich Afghan and Pashtun flavors, traditional recipes and warm hospitality at Kabul Jaan Restaurant — where every meal tells a story.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-row gap-4 w-auto mt-4">
            <a href="#menu" className="group flex items-center justify-center gap-3 px-8 py-3 bg-[#E5C07B] text-black font-semibold rounded-full hover:brightness-110 transition-all text-sm w-auto">
              <Utensils className="w-4 h-4" />
              Explore Our Menu <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#branches" className="group flex items-center justify-center gap-3 px-8 py-3 border border-white/40 bg-black/50 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all text-sm w-auto">
              <MapPin className="w-4 h-4 text-white group-hover:text-black" />
              Visit Us in Quetta
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Info Banner - Hidden on Mobile */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden md:block relative z-20 w-full max-w-[1200px] mx-auto px-4 pb-8"
      >
        <div className="bg-[#1A1814]/80 backdrop-blur-xl border border-[#E5C07B]/20 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 p-6 md:p-8 divide-y md:divide-y-0 md:divide-x divide-[#E5C07B]/10 shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
          
          <div className="flex items-center justify-center md:justify-start gap-4 w-full md:w-1/4">
            <div className="text-[#E5C07B]">
              <Soup className="w-7 h-7 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs md:text-sm tracking-wide">Traditional Recipes</h4>
              <p className="text-white/50 text-[0.65rem] md:text-xs">Authentic Afghan taste</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-4 pt-4 md:pt-0 pl-0 md:pl-8 w-full md:w-1/4">
            <div className="text-[#E5C07B]">
              <Leaf className="w-7 h-7 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs md:text-sm tracking-wide">Fresh Ingredients</h4>
              <p className="text-white/50 text-[0.65rem] md:text-xs">Premium quality</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-4 pt-4 md:pt-0 pl-0 md:pl-8 w-full md:w-1/4">
            <div className="text-[#E5C07B]">
              <Users className="w-7 h-7 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs md:text-sm tracking-wide">Warm Hospitality</h4>
              <p className="text-white/50 text-[0.65rem] md:text-xs">Feel at home</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-4 pt-4 md:pt-0 pl-0 md:pl-8 w-full md:w-1/4">
            <div className="text-[#E5C07B]">
              <Mountain className="w-7 h-7 stroke-[1.5]" />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs md:text-sm tracking-wide">Proudly in Quetta</h4>
              <p className="text-white/50 text-[0.65rem] md:text-xs">Serving the community</p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
