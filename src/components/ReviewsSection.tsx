import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, MessageSquare, Quote } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const initialReviews: Review[] = [
  { name: "Priya S.", rating: 5, comment: "The best homemade cake I've ever had! The chocolate truffle was absolutely divine. Will order again!", date: "2 days ago" },
  { name: "Karthik R.", rating: 5, comment: "Ordered for my daughter's birthday. Fresh, tasty, and delivered on time. Thank you Yuga Cakes!", date: "1 week ago" },
  { name: "Meena K.", rating: 4, comment: "Lovely red velvet cake. The cream cheese frosting was perfect. Highly recommend!", date: "2 weeks ago" },
  { name: "Arun M.", rating: 5, comment: "Amazing vanilla cake with beautiful decoration. My family loved it!", date: "3 weeks ago" },
];

const ReviewsSection = () => {
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [showForm, setShowForm] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", rating: 5, comment: "" });
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviews([{ ...newReview, date: "Just now" }, ...reviews]);
    setNewReview({ name: "", rating: 5, comment: "" });
    setShowForm(false);
    toast({ title: "Thank you! ❤️", description: "Your review has been posted." });
  };

  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-primary/5 animate-float" />
      <div className="absolute bottom-20 right-16 w-32 h-32 rounded-full bg-gold/5 animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-6 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-2">Customer Love</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Average rating badge */}
        <div className={`flex items-center justify-center gap-3 mb-10 transition-all duration-700 delay-200 ${headerVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          <div className="bg-card border border-border rounded-full px-6 py-3 flex items-center gap-3 shadow-sm">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-4 h-4 text-gold fill-gold" />
              ))}
            </div>
            <span className="font-display font-bold text-foreground text-lg">{avgRating}</span>
            <span className="text-muted-foreground font-body text-sm">({reviews.length} reviews)</span>
          </div>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {reviews.map((review, i) => (
            <Card
              key={i}
              className={`bg-card border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group ${
                cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: cardsVisible ? `${i * 120}ms` : "0ms" }}
            >
              <CardContent className="p-6 relative">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 transition-transform duration-300 ${j < review.rating ? "text-gold fill-gold" : "text-border"} ${cardsVisible ? "scale-100" : "scale-0"}`}
                      style={{ transitionDelay: cardsVisible ? `${i * 120 + j * 50}ms` : "0ms" }}
                    />
                  ))}
                </div>
                <p className="text-foreground font-body text-sm mb-4 leading-relaxed italic">
                  "{review.comment}"
                </p>
                <div className="flex items-center justify-between">
                  <p className="font-display font-semibold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground font-body">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-md mx-auto text-center">
          {!showForm ? (
            <Button
              onClick={() => setShowForm(true)}
              variant="outline"
              size="lg"
              className="font-body gap-2 border-primary text-primary hover:bg-primary/5 transition-transform duration-200 hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              Write a Review
            </Button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left animate-fade-in">
              <Input
                placeholder="Your Name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                required
                className="bg-card font-body"
              />
              <div>
                <label className="text-sm font-body text-muted-foreground mb-2 block">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((r) => (
                    <button key={r} type="button" onClick={() => setNewReview({ ...newReview, rating: r })}>
                      <Star
                        className={`w-6 h-6 cursor-pointer transition-all duration-200 hover:scale-125 ${
                          r <= newReview.rating ? "text-gold fill-gold" : "text-border"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <Textarea
                placeholder="Share your experience..."
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                required
                className="bg-card font-body"
                rows={3}
              />
              <div className="flex gap-3">
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body flex-1 transition-transform duration-200 hover:scale-[1.02]">
                  Submit Review
                </Button>
                <Button type="button" variant="ghost" onClick={() => setShowForm(false)} className="font-body">
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
