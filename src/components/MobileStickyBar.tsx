import { Phone, MessageCircle, Menu, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 z-50 w-full bg-primary border-t border-secondary/20 shadow-lg text-white">
      <div className="flex items-center justify-around h-16 px-2">
        <a 
          href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`}
          className="flex flex-col items-center justify-center w-full h-full gap-1 hover:text-accent transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
        </a>
        
        <div className="w-px h-8 bg-secondary/50"></div>
        
        <a 
          href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center w-full h-full gap-1 hover:text-green-400 transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">WhatsApp</span>
        </a>
        
        <div className="w-px h-8 bg-secondary/50"></div>
        
        <a 
          href="#menu"
          className="flex flex-col items-center justify-center w-full h-full gap-1 hover:text-accent transition-colors"
        >
          <Menu className="h-5 w-5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Menu</span>
        </a>
        
        <div className="w-px h-8 bg-secondary/50"></div>
        
        <a 
          href="#branches"
          className="flex flex-col items-center justify-center w-full h-full gap-1 hover:text-accent transition-colors"
        >
          <MapPin className="h-5 w-5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Directions</span>
        </a>
      </div>
    </div>
  );
}
