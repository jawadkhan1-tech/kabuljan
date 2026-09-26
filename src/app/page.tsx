import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { OurStory } from "@/components/OurStory";
import { SignatureDishes } from "@/components/SignatureDishes";
import { Footer } from "@/components/Footer";
import { MobileStickyBar } from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <OurStory />
        <SignatureDishes />
      </main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}
