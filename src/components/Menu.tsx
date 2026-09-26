"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Menu() {
  const categories = [
    "Signatures",
    "BBQ & Tikka",
    "Karahi",
    "Pulao",
  ];

  const [activeTab, setActiveTab] = useState("Signatures");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // We will just use signatures data to mock all categories for this demo
  const displayItems = siteConfig.menu.signatures;

  return (
    <section id="menu" className="py-32 bg-secondary relative overflow-hidden text-white">
      {/* Dynamic Background Image based on hovered item */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
          >
            <Image 
              src={siteConfig.images.dishes.pulao} // Using pulao as a placeholder for all hovers for demo
              alt="Menu Background"
              fill
              className="object-cover"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
              Explore Our <span className="text-accent italic">Menu</span>
            </h2>
            <div className="h-1 w-24 bg-accent"></div>
          </div>
          
          {/* Interactive Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
                  activeTab === cat 
                    ? 'bg-accent text-primary shadow-[0_0_15px_rgba(199,163,90,0.5)]' 
                    : 'glass text-white/80 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Menu Items List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6"
            >
              {displayItems.map((item, idx) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className="flex flex-col border-b border-white/10 pb-6 group cursor-pointer"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-xl font-serif font-bold text-white uppercase tracking-wide group-hover:text-accent transition-colors duration-300">
                      {item.name}
                    </h4>
                    <div className="flex-1 border-b border-dashed border-white/20 mx-4 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="text-accent font-bold text-lg shrink-0">{item.price}</span>
                  </div>
                  <p className="text-white/60 text-sm font-light max-w-sm group-hover:text-white/80 transition-colors">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <button className="relative overflow-hidden px-10 py-4 glass text-white font-bold tracking-widest uppercase rounded-full hover:bg-white hover:text-primary transition-all duration-300 group">
            <span className="relative z-10 flex items-center gap-2">
              Download Full Menu
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
