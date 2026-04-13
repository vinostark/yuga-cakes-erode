import { Button } from "@/components/ui/button";
import { MapPin, ChevronDown } from "lucide-react";
import heroCake from "@/assets/hero-cake.png";

const floatingItems = [
  { emoji: "🍓", top: "8%", left: "5%", delay: "0s", size: "text-4xl", wiggle: "wiggle1" },
  { emoji: "🫐", top: "20%", right: "8%", delay: "0.5s", size: "text-3xl", wiggle: "wiggle2" },
  { emoji: "🥜", top: "55%", right: "5%", delay: "1s", size: "text-3xl", wiggle: "wiggle3" },
  { emoji: "🍫", top: "75%", left: "60%", delay: "1.5s", size: "text-4xl", wiggle: "wiggle1" },
  { emoji: "🌰", top: "35%", right: "12%", delay: "0.8s", size: "text-3xl", wiggle: "wiggle2" },
  { emoji: "🍒", top: "10%", right: "25%", delay: "1.2s", size: "text-3xl", wiggle: "wiggle3" },
  { emoji: "🫒", top: "80%", right: "18%", delay: "0.3s", size: "text-2xl", wiggle: "wiggle1" },
  { emoji: "🍇", top: "45%", left: "58%", delay: "1.8s", size: "text-3xl", wiggle: "wiggle2" },
  { emoji: "🥥", top: "5%", left: "30%", delay: "0.2s", size: "text-3xl", wiggle: "wiggle3" },
  { emoji: "🍑", top: "70%", left: "8%", delay: "0.7s", size: "text-4xl", wiggle: "wiggle1" },
  { emoji: "🫘", top: "30%", left: "15%", delay: "1.3s", size: "text-2xl", wiggle: "wiggle2" },
  { emoji: "🍋", top: "60%", left: "25%", delay: "0.4s", size: "text-3xl", wiggle: "wiggle3" },
  { emoji: "🥝", top: "15%", left: "45%", delay: "1.6s", size: "text-2xl", wiggle: "wiggle1" },
  { emoji: "🍊", top: "85%", left: "40%", delay: "0.9s", size: "text-3xl", wiggle: "wiggle2" },
  { emoji: "🏵️", top: "90%", right: "8%", delay: "1.1s", size: "text-2xl", wiggle: "wiggle3" },
  { emoji: "🥭", top: "50%", left: "3%", delay: "1.4s", size: "text-3xl", wiggle: "wiggle1" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-foreground">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-[hsl(32,40%,15%)]" />

      {/* Floating fruit & nut particles */}
      {floatingItems.map((item, i) => (
        <div
          key={i}
          className={`absolute ${item.size} animate-${item.wiggle} opacity-70 pointer-events-none z-[5]`}
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            animationDelay: item.delay,
            animationDuration: "3s",
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* Realistic cake image */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] h-[80%] hidden md:flex items-center justify-center z-[2]">
        <img
          src={heroCake}
          alt="Yuga Cakes - Realistic three-tier artisan cake with fruits and nuts"
          width={1024}
          height={1024}
          className="w-full max-w-lg object-contain drop-shadow-2xl animate-fade-in"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards", opacity: 0 }}
        />
      </div>

      {/* Subtle overlay on text side */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-transparent z-[3]" />

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
