import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Cake, Heart, Star, Cookie, Leaf, Coffee } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface MenuItem {
  name: string;
  price: string;
  description: string;
  icon: typeof Cake;
  popular?: boolean;
}

const menuCategories: Record<string, MenuItem[]> = {
  "Flavor Cakes": [
    { name: "Classic Vanilla", price: "₹450", description: "Rich vanilla sponge with buttercream frosting", icon: Cake, popular: true },
    { name: "Chocolate Truffle", price: "₹550", description: "Decadent chocolate layers with ganache", icon: Heart, popular: true },
    { name: "Black Forest", price: "₹600", description: "Cherry-filled chocolate cake with cream", icon: Cake },
    { name: "Red Velvet", price: "₹650", description: "Velvety cake with cream cheese frosting", icon: Heart, popular: true },
    { name: "Pineapple Delight", price: "₹500", description: "Fresh pineapple cake with whipped cream", icon: Cake },
    { name: "Butterscotch Crunch", price: "₹500", description: "Caramel butterscotch with crunchy praline", icon: Star },
  ],
  "Brownies": [
    { name: "Classic Fudge Brownie", price: "₹250", description: "Rich, dense fudge brownie with a crackly top", icon: Heart, popular: true },
    { name: "Walnut Brownie", price: "₹300", description: "Loaded with crunchy walnuts and dark chocolate", icon: Star },
    { name: "Cream Cheese Brownie", price: "₹320", description: "Swirled cream cheese over fudgy chocolate base", icon: Heart },
    { name: "Salted Caramel Brownie", price: "₹350", description: "Drizzled with homemade salted caramel sauce", icon: Star, popular: true },
  ],
  "Healthy Brownies": [
    { name: "Oats & Dark Chocolate", price: "₹280", description: "Made with rolled oats and 70% dark chocolate", icon: Leaf, popular: true },
    { name: "Ragi Brownie", price: "₹270", description: "Finger millet based brownie, naturally sweetened", icon: Leaf },
    { name: "Date & Walnut Brownie", price: "₹300", description: "Sweetened with dates, no refined sugar", icon: Leaf, popular: true },
    { name: "Almond Flour Brownie", price: "₹350", description: "Gluten-free, protein-rich almond brownie", icon: Leaf },
  ],
  "Tea Cake": [
    { name: "Lemon Tea Cake", price: "₹350", description: "Light and zesty lemon cake, perfect with tea", icon: Coffee, popular: true },
    { name: "Marble Tea Cake", price: "₹320", description: "Swirled vanilla and chocolate loaf cake", icon: Coffee },
    { name: "Banana Walnut Cake", price: "₹380", description: "Moist banana cake with toasted walnuts", icon: Coffee, popular: true },
    { name: "Cardamom Butter Cake", price: "₹340", description: "Fragrant elaichi-infused buttery cake", icon: Coffee },
  ],
  "Cookies": [
    { name: "Chocolate Chip Cookies", price: "₹180", description: "Classic soft-baked cookies loaded with chips", icon: Cookie, popular: true },
    { name: "Oatmeal Raisin Cookies", price: "₹160", description: "Chewy oat cookies with plump raisins", icon: Cookie },
    { name: "Double Chocolate Cookies", price: "₹200", description: "Rich cocoa cookies with chocolate chunks", icon: Cookie, popular: true },
    { name: "Butter Cookies", price: "₹150", description: "Melt-in-your-mouth traditional butter cookies", icon: Cookie },
  ],
};

const tabIcons: Record<string, typeof Cake> = {
  "Flavor Cakes": Cake,
  "Brownies": Heart,
  "Healthy Brownies": Leaf,
  "Tea Cake": Coffee,
  "Cookies": Cookie,
};

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

        <div ref={gridRef} className={`max-w-5xl mx-auto transition-all duration-700 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <Tabs defaultValue="Flavor Cakes" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8 p-0">
              {Object.keys(menuCategories).map((category) => {
                const Icon = tabIcons[category];
                return (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-background font-body text-sm text-muted-foreground transition-all duration-300 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-md hover:border-primary/50"
                  >
                    <Icon className="w-4 h-4" />
                    {category}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(menuCategories).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item, i) => (
                    <Card
                      key={item.name}
                      className="bg-background border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <item.icon className="w-8 h-8 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
                          {item.popular && (
                            <span className="bg-primary/10 text-primary text-xs font-body font-medium px-2 py-1 rounded-full">
                              Popular
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-display font-semibold text-foreground mb-1">{item.name}</h3>
                        <p className="text-muted-foreground font-body text-sm mb-3">{item.description}</p>
                        <p className="text-2xl font-display font-bold text-primary">{item.price}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Highlight banners */}
        <div className={`mt-10 space-y-4 text-center transition-all duration-700 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: gridVisible ? "400ms" : "0ms" }}>
          <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/20 rounded-full px-6 py-3">
            <span className="text-2xl">🎂</span>
            <p className="text-foreground font-body text-sm md:text-base font-medium">
              We bake <span className="text-primary font-semibold">fresh to order</span> — every cake is made only after your order is received!
            </p>
          </div>
          <div className="block">
            <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
              <span className="text-2xl">🧈</span>
              <p className="text-foreground font-body text-sm md:text-base font-medium">
                Made with <span className="text-accent font-semibold">fresh whipping cream</span> and <span className="text-accent font-semibold">real butter</span> — no shortcuts, only quality!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
