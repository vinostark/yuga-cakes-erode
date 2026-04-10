import heroCakes from "@/assets/hero-cakes.jpg";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroCakes}
          alt="Yuga Cakes homemade cake collection"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-cream font-body text-sm tracking-widest uppercase">
              Erode, Tamil Nadu
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-cream leading-tight mb-4">
            Yuga Cakes
          </h1>
          <p className="text-xl md:text-2xl text-cream/80 font-body font-light mb-2">
            Homemade with Love, Delivered to Your Door
          </p>
          <p className="text-cream/60 font-body mb-8 text-base">
            Freshly baked artisan cakes crafted at home with the finest ingredients. 
            Available for delivery across Erode.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-base px-8"
              onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
            >
              Order Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cream/40 text-cream hover:bg-cream/10 font-body text-base px-8"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
