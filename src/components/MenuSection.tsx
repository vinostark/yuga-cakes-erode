import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Cake, Heart, Leaf, Coffee, Cookie } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface MenuItem {
  name: string;
  price: string;
  description: string;
  icon: typeof Cake;
  popular?: boolean;
}

const menuCategories: Record<string, MenuItem[]> = {
  "Flavour Cakes": [
    { name: "Chocolate Cake", price: "₹450", description: "Rich, moist chocolate sponge with ganache", icon: Cake, popular: true },
    { name: "Choco Truffle Cake", price: "₹550", description: "Decadent truffle layers with dark chocolate", icon: Cake, popular: true },
    { name: "Black Forest Cake", price: "₹600", description: "Cherry-filled chocolate cake with fresh cream", icon: Cake },
    { name: "White Forest Cake", price: "₹600", description: "White chocolate cake with cherries and cream", icon: Cake },
    { name: "Vanilla Cake", price: "₹400", description: "Classic vanilla sponge with buttercream frosting", icon: Cake },
    { name: "Strawberry Cake", price: "₹550", description: "Fresh strawberry layers with whipped cream", icon: Cake, popular: true },
    { name: "Blackcurrant Cake", price: "₹550", description: "Tangy blackcurrant flavour with cream frosting", icon: Cake },
    { name: "Butterscotch Cake", price: "₹500", description: "Caramel butterscotch with crunchy praline", icon: Cake },
    { name: "Mango Cake", price: "₹550", description: "Seasonal fresh mango with cream layers", icon: Cake },
  ],
  "Brownies": [
    { name: "Classic Brownie", price: "₹250", description: "Rich, dense fudge brownie with a crackly top", icon: Heart, popular: true },
    { name: "Double Chocolate Brownie", price: "₹300", description: "Loaded with two layers of premium chocolate", icon: Heart },
    { name: "Triple Chocolate Brownie", price: "₹350", description: "Three kinds of chocolate in every bite", icon: Heart, popular: true },
    { name: "KitKat Brownie", price: "₹320", description: "Topped with crunchy KitKat wafer pieces", icon: Heart },
    { name: "Oreo Brownie", price: "₹320", description: "Crushed Oreo cookies baked into fudgy brownie", icon: Heart },
    { name: "Nutella Brownie", price: "₹350", description: "Swirled with creamy Nutella hazelnut spread", icon: Heart, popular: true },
  ],
  "Healthy Brownies": [
    { name: "Ragi Brownie", price: "₹280", description: "Finger millet based brownie, naturally sweetened", icon: Leaf, popular: true },
    { name: "Karuppu Kavuni Brownie", price: "₹300", description: "Made with black rice, rich in antioxidants", icon: Leaf, popular: true },
    { name: "Kambu Brownie", price: "₹270", description: "Pearl millet brownie, wholesome and nutritious", icon: Leaf },
  ],
  "Tea Cake": [
    { name: "Vanilla Tea Cake", price: "₹350", description: "Light and fluffy vanilla loaf, perfect with tea", icon: Coffee, popular: true },
    { name: "Rose Milk Tea Cake", price: "₹380", description: "Fragrant rose-infused cake with a pink hue", icon: Coffee, popular: true },
  ],
  "Cookies": [
    { name: "Ragi Cookies", price: "₹180", description: "Crunchy finger millet cookies, healthy and tasty", icon: Cookie, popular: true },
    { name: "Wheat Cookies", price: "₹160", description: "Wholesome whole wheat butter cookies", icon: Cookie },
    { name: "Millets & Nuts Cookies", price: "₹200", description: "Multi-millet cookies loaded with mixed nuts", icon: Cookie, popular: true },
  ],
};

const tabIcons: Record<string, typeof Cake> = {
  "Flavour Cakes": Cake,
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
          <Tabs defaultValue="Flavour Cakes" className="w-full">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
