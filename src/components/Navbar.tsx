"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Phone, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: "-100%", opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300",
          isScrolled ? "mt-4 md:mt-2" : "mt-6"
        )}
      >
        {/* Desktop Navbar */}
        <div 
          className={cn(
            "hidden md:flex items-center justify-between w-full max-w-[1600px] mx-auto px-6 md:px-12 py-3 transition-all duration-500 relative rounded-full",
            isScrolled 
              ? "bg-[#0A0908]/95 backdrop-blur-xl border border-[#E5C07B]/20 shadow-[0_10px_40px_rgba(0,0,0,0.8)]" 
              : "bg-[#1A1814]/80 backdrop-blur-md border border-[#E5C07B]/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          )}
        >
          {/* Logo Section */}
          <div className="flex items-center gap-6 relative z-10">
            <Link href="/" className="flex items-center gap-5 group">
              <div className="relative w-[5.5rem] h-[5.5rem] rounded-full overflow-hidden border border-[#E5C07B]/50 bg-black/50 shadow-[0_0_15px_rgba(229,192,123,0.15)]">
                <Image 
                  src="/logo.png" 
                  alt="Kabul Jaan Logo" 
                  fill 
                  className="object-contain p-1.5"
                  priority
                />
              </div>
              <div className="flex flex-col mt-1">
                <span className="text-[2.5rem] font-serif font-bold tracking-wide text-white leading-none mb-2">
                  Kabul <span className="text-[#E5C07B]">Jaan</span>
                </span>
                <span className="text-[0.75rem] tracking-[0.25em] text-[#E5C07B]">
                  AFGHANI FOOD - QUETTA
                </span>
              </div>
            </Link>

            {/* Left Diamond Separator */}
            <div className="flex flex-col items-center justify-center h-10 ml-4">
               <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#E5C07B]/50 to-transparent relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-[#E5C07B]"></div>
               </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="flex items-center gap-8 text-[0.95rem] font-medium text-white/80 relative z-10">
            {["Home", "Our Story", "Menu", "Gallery", "Branches", "Catering", "Contact"].map((item) => (
              <Link 
                key={item} 
                href={item === "Home" ? "/" : `#${item.toLowerCase().replace(" ", "-")}`} 
                className="relative flex flex-col items-center group py-2"
              >
                <span className={item === "Home" ? "text-[#E5C07B]" : "group-hover:text-[#E5C07B] transition-colors"}>
                  {item}
                </span>
                {item === "Home" && (
                  <div className="absolute bottom-0 w-6 h-[2px] bg-[#E5C07B]"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Right Diamond Separator */}
          <div className="flex flex-col items-center justify-center h-10 relative z-10">
             <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#E5C07B]/50 to-transparent relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rotate-45 bg-[#E5C07B]"></div>
             </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="flex items-center gap-5 relative z-10 pr-4">
            <a
              href={`tel:+923311234567`}
              className="flex items-center gap-2 text-[#E5C07B] border border-[#E5C07B] px-6 py-2.5 rounded-full font-medium hover:bg-[#E5C07B]/10 transition-colors text-base"
            >
              <Phone className="w-5 h-5" />
              +92 331 1234567
            </a>
            <a
              href="#order"
              className="flex items-center gap-2 bg-gradient-to-r from-[#F0D59B] to-[#D4A853] text-black px-7 py-2.5 rounded-full font-bold hover:brightness-110 transition-all text-base shadow-[0_0_15px_rgba(229,192,123,0.3)]"
            >
              Order Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mobile Navbar (Mockup Style) */}
        <div className="md:hidden absolute left-0 right-0 top-0 px-6 flex justify-between items-center w-full">
          {/* Top Left: Golden Mandala Icon */}
          <div className="text-[#D4A853]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M12 2L14.5 9L21.5 12L14.5 15L12 22L9.5 15L2.5 12L9.5 9L12 2Z" strokeLinejoin="round" />
              <path d="M12 5L13.5 10.5L19 12L13.5 13.5L12 19L10.5 13.5L5 12L10.5 10.5L12 5Z" strokeLinejoin="round" opacity="0.5" />
              <circle cx="12" cy="12" r="2.5" />
            </svg>
          </div>

          {/* Top Right: Hamburger Menu */}
          <button 
            className="flex items-center justify-center w-10 h-10 border border-[#E5C07B]/40 rounded-full text-white/90 hover:text-[#E5C07B] hover:border-[#E5C07B] transition-colors bg-[#0A0908]/30 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu strokeWidth={1.2} className="w-5 h-5" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-primary/95 backdrop-blur-xl flex flex-col p-6"
        >
          <div className="flex justify-between items-center mb-12">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent bg-white">
              <Image src="/logo.png" alt="Logo" fill className="object-contain p-1" />
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-accent p-2">
              <X className="h-8 w-8" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6 text-2xl font-serif text-white">
            {["Home", "Our Story", "Menu", "Gallery", "Branches"].map((item) => (
              <Link 
                key={item} 
                href={item === "Home" ? "/" : `#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-accent transition-colors border-b border-white/10 pb-4"
              >
                {item}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </>
  );
}
