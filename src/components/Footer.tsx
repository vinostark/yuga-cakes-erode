import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-14">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-cream">
          <div>
            <h3 className="text-2xl font-display font-bold text-cream mb-3">Yuga Cakes</h3>
            <p className="font-body text-cream/60 text-sm leading-relaxed">
              Homemade cakes crafted with love and the finest ingredients. Serving Erode with fresh, delicious cakes for every occasion.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-cream mb-4">Contact Us</h4>
            <div className="flex items-center gap-3 text-cream/70 font-body text-sm">
              <MapPin className="w-4 h-4 text-gold" />
              <span>Erode, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-3 text-cream/70 font-body text-sm">
              <Phone className="w-4 h-4 text-gold" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3 text-cream/70 font-body text-sm">
              <Instagram className="w-4 h-4 text-gold" />
              <span>@yugacakes</span>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-cream mb-4">Hours</h4>
            <div className="flex items-center gap-3 text-cream/70 font-body text-sm">
              <Clock className="w-4 h-4 text-gold" />
              <span>Mon - Sat: 9 AM - 8 PM</span>
            </div>
            <p className="text-cream/50 font-body text-xs mt-2">
              Orders placed before 6 PM will be delivered the next day.
            </p>
          </div>
        </div>
        <div className="border-t border-cream/10 mt-10 pt-6 text-center">
          <p className="text-cream/40 font-body text-xs">
            © 2026 Yuga Cakes, Erode. All rights reserved. Homemade with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
