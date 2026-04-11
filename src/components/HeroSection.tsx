import { Suspense, lazy } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, ChevronDown } from "lucide-react";

const CakeScene = lazy(() => import("@/components/CakeScene"));

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-foreground">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-80">
        <Suspense fallback={<div className="w-full h-full bg-foreground" />}>
          <CakeScene />
        </Suspense>
      </div>
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-xl">
          <div className="flex items-center gap-2 mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-cream font-body text-sm tracking-widest uppercase">
              Erode, Tamil Nadu
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-cream leading-tight mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            Yuga Cakes
          </h1>
          <p className="text-xl md:text-2xl text-cream/80 font-body font-light mb-2 opacity-0 animate-fade-in" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
            Homemade with Love, Delivered to Your Door
          </p>
          <p className="text-cream/60 font-body mb-8 text-base opacity-0 animate-fade-in" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
            Freshly baked artisan cakes crafted at home with the finest ingredients.
            Available for delivery across Erode.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in" style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-body text-base px-8 py-3 rounded-lg transition-transform duration-200 hover:scale-105 shadow-lg"
              onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
            >
              Order Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-cream text-primary border-cream hover:bg-cream/90 font-body text-base px-8 py-3 rounded-lg transition-transform duration-200 hover:scale-105 shadow-lg"
              onClick={() => document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-0 animate-fade-in" style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}>
        <ChevronDown className="w-6 h-6 text-cream/50 animate-float" />
      </div>
    </section>
  );
};

export default HeroSection;
