"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function HeritageSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);

  return (
    <section ref={ref} className="relative py-40 bg-primary overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0 w-full h-[140%] -top-[20%]">
        <Image
          src={siteConfig.images.heritage}
          alt="Pashtun Heritage and Hospitality"
          fill
          className="object-cover mix-blend-luminosity opacity-40"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <div className="inline-flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent"></div>
            <span className="uppercase tracking-[0.3em] text-accent font-bold text-sm">
              Rooted in Tradition
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-10 leading-tight drop-shadow-2xl">
            Food is more than a meal. <br />
            <span className="text-gradient-gold italic font-light">It is hospitality.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto mb-16">
            Our culinary journey is deeply intertwined with the cultural fabric of Quetta. We honor the craftsmanship of traditional cooking, the warmth of shared meals, and a heritage that brings people together.
          </p>
          
          {/* Decorative cultural element */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="mx-auto w-24 h-24 border border-accent/20 rotate-45 flex items-center justify-center relative before:absolute before:inset-2 before:border before:border-accent/40 before:-rotate-12 after:absolute after:inset-4 after:border after:border-accent/60 after:rotate-12"
          >
            <div className="w-2 h-2 bg-accent rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
