import { Card, CardContent } from "@/components/ui/card";
import { Cake, Heart, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const cakes = [
  { name: "Classic Vanilla", price: "₹450", description: "Rich vanilla sponge with buttercream frosting", icon: Cake, popular: true },
  { name: "Chocolate Truffle", price: "₹550", description: "Decadent chocolate layers with ganache", icon: Heart, popular: true },
  { name: "Black Forest", price: "₹600", description: "Cherry-filled chocolate cake with cream", icon: Cake, popular: false },
  { name: "Red Velvet", price: "₹650", description: "Velvety cake with cream cheese frosting", icon: Heart, popular: true },
  { name: "Pineapple Delight", price: "₹500", description: "Fresh pineapple cake with whipped cream", icon: Cake, popular: false },
  { name: "Butterscotch Crunch", price: "₹500", description: "Caramel butterscotch with crunchy praline", icon: Star, popular: false },
];

const MenuSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.1);

  return (
    <section id="menu" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-14 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-2">Our Menu</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Freshly Baked Favorites
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cakes.map((cake, i) => (
            <Card
              key={cake.name}
              className={`bg-background border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: gridVisible ? `${i * 100}ms` : "0ms" }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <cake.icon className="w-8 h-8 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                  {cake.popular && (
                    <span className="bg-primary/10 text-primary text-xs font-body font-medium px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">{cake.name}</h3>
                <p className="text-muted-foreground font-body text-sm mb-3">{cake.description}</p>
                <p className="text-2xl font-display font-bold text-primary">{cake.price}</p>
                <p className="text-xs text-muted-foreground font-body mt-1">per 500g</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className={`mt-10 text-center transition-all duration-700 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: gridVisible ? "600ms" : "0ms" }}>
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
            <span className="text-2xl">🎂</span>
            <p className="text-foreground font-body text-sm md:text-base font-medium">
              We bake <span className="text-primary font-semibold">fresh to order</span> — every cake is made only after your order is received!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
