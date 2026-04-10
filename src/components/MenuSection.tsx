import { Card, CardContent } from "@/components/ui/card";
import { Cake, Heart, Star } from "lucide-react";

const cakes = [
  {
    name: "Classic Vanilla",
    price: "₹450",
    description: "Rich vanilla sponge with buttercream frosting",
    icon: Cake,
    popular: true,
  },
  {
    name: "Chocolate Truffle",
    price: "₹550",
    description: "Decadent chocolate layers with ganache",
    icon: Heart,
    popular: true,
  },
  {
    name: "Black Forest",
    price: "₹600",
    description: "Cherry-filled chocolate cake with cream",
    icon: Cake,
    popular: false,
  },
  {
    name: "Red Velvet",
    price: "₹650",
    description: "Velvety cake with cream cheese frosting",
    icon: Heart,
    popular: true,
  },
  {
    name: "Pineapple Delight",
    price: "₹500",
    description: "Fresh pineapple cake with whipped cream",
    icon: Cake,
    popular: false,
  },
  {
    name: "Butterscotch Crunch",
    price: "₹500",
    description: "Caramel butterscotch with crunchy praline",
    icon: Star,
    popular: false,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-2">
            Our Menu
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Freshly Baked Favorites
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {cakes.map((cake) => (
            <Card
              key={cake.name}
              className="bg-background border-border hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <cake.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  {cake.popular && (
                    <span className="bg-primary/10 text-primary text-xs font-body font-medium px-2 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-1">
                  {cake.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-3">
                  {cake.description}
                </p>
                <p className="text-2xl font-display font-bold text-primary">
                  {cake.price}
                </p>
                <p className="text-xs text-muted-foreground font-body mt-1">per 500g</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
