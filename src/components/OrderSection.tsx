import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const OrderSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    cake: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Received! 🎂",
      description: "We'll contact you shortly to confirm your order. Thank you!",
    });
    setForm({ name: "", phone: "", address: "", cake: "", message: "" });
  };

  return (
    <section id="order" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-primary font-body text-sm tracking-widest uppercase mb-2">
              Place Your Order
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Order Your Cake
            </h2>
            <p className="text-muted-foreground font-body mt-3">
              Delivery available across Erode only
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-card font-body"
            />
            <Input
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="bg-card font-body"
            />
            <Input
              placeholder="Delivery Address (Erode only)"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              required
              className="bg-card font-body"
            />
            <Input
              placeholder="Cake Type (e.g., Chocolate Truffle - 1kg)"
              value={form.cake}
              onChange={(e) => setForm({ ...form, cake: e.target.value })}
              required
              className="bg-card font-body"
            />
            <Textarea
              placeholder="Special instructions or message on the cake..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-card font-body"
              rows={3}
            />
            <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body text-base gap-2">
              <Send className="w-4 h-4" />
              Place Order
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
