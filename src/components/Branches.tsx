import { MapPin, Phone, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Branches() {
  return (
    <section id="branches" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-4">
            Visit Kabul Jaan
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Branch Card */}
          <div className="bg-white rounded-xl shadow-lg border border-secondary/10 overflow-hidden">
            <div className="h-48 bg-secondary/10 relative">
              {/* Map Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="text-gray-500 font-medium">Interactive Map Placeholder</span>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Airport Road Branch</h3>
              
              <ul className="space-y-4 mb-8 text-text/80">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{siteConfig.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{siteConfig.phone}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{siteConfig.openingHours}</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
                  className="flex-1 text-center py-3 bg-primary text-white font-bold rounded hover:bg-secondary transition-colors"
                >
                  Call Now
                </a>
                <button className="flex-1 py-3 border border-primary text-primary font-bold rounded hover:bg-primary/5 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Hudda / Secondary Branch Card - Placeholder */}
          <div className="bg-white rounded-xl shadow-lg border border-secondary/10 overflow-hidden opacity-90">
            <div className="h-48 bg-secondary/10 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <span className="text-gray-500 font-medium">Interactive Map Placeholder</span>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Main Branch (Demo)</h3>
              
              <ul className="space-y-4 mb-8 text-text/80">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>Branch address placeholder</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>Phone number placeholder</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{siteConfig.openingHours}</span>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 py-3 bg-primary text-white font-bold rounded hover:bg-secondary transition-colors cursor-not-allowed opacity-80">
                  Call Now
                </button>
                <button className="flex-1 py-3 border border-primary text-primary font-bold rounded hover:bg-primary/5 transition-colors cursor-not-allowed opacity-80">
                  Get Directions
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
