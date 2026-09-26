export function CTA() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      {/* Pattern background */}
      <div className="absolute inset-0 pattern-bg opacity-10"></div>
      
      {/* Cultural overlay borders */}
      <div className="absolute top-0 left-0 w-full h-8 bg-[radial-gradient(#C7A35A_2px,_transparent_2px)] bg-[size:16px_16px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-[radial-gradient(#C7A35A_2px,_transparent_2px)] bg-[size:16px_16px] opacity-20"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-md">
          Come Taste the Tradition
        </h2>
        <p className="text-xl md:text-2xl text-card/90 font-light max-w-2xl mx-auto mb-12">
          Gather your family and friends and experience the true flavors of Kabul Jaan.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="#menu"
            className="px-10 py-5 bg-accent text-primary font-bold tracking-widest uppercase rounded-sm hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(199,163,90,0.3)]"
          >
            View Menu
          </a>
          <a 
            href="#branches"
            className="px-10 py-5 border-2 border-white text-white font-bold tracking-widest uppercase rounded-sm hover:bg-white hover:text-primary transition-colors duration-300"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
