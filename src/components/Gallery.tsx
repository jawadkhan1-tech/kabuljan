import Image from "next/image";
import { siteConfig } from "@/config/site";

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-4">
            Gallery
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
          <p className="mt-6 text-lg text-text/70 max-w-2xl mx-auto">
            A glimpse into the authentic dining experience at Kabul Jaan.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {siteConfig.images.gallery.map((src, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden rounded-xl group ${
                index === 0 || index === 3 ? "md:col-span-2 aspect-[2/1]" : "aspect-square"
              }`}
            >
              <Image 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 border-2 border-primary text-primary font-bold tracking-wider uppercase rounded-sm hover:bg-primary hover:text-white transition-colors duration-300">
            View More on Instagram
          </button>
        </div>
      </div>
    </section>
  );
}
