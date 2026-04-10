import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Order", href: "#order" },
  { label: "Reviews", href: "#reviews" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-foreground/90 backdrop-blur-md border-b border-cream/10">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display text-xl font-bold text-cream">
          Yuga Cakes
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-cream/70 hover:text-cream font-body text-sm transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
        <button className="md:hidden text-cream" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-foreground/95 border-t border-cream/10 px-6 py-4 space-y-3">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="block text-cream/70 hover:text-cream font-body text-sm"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
