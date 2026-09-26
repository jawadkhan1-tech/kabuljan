import { Star } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Reviews() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-secondary mb-4">
            Loved By Quetta
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-card p-8 rounded-xl shadow-sm border border-secondary/5 relative"
            >
              {/* Quote Mark */}
              <span className="absolute top-6 right-6 text-6xl text-primary/10 font-serif leading-none">&quot;</span>
              
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              
              <p className="text-text/80 text-lg mb-8 relative z-10 italic">
                &quot;{review.text}&quot;
              </p>
              
              <div className="font-bold text-primary font-serif">
                {review.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
