import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReviews([{ ...newReview, date: "Just now" }, ...reviews]);
    setNewReview({ name: "", rating: 5, comment: "" });
    setShowForm(false);
    toast({ title: "Thank you! ❤️", description: "Your review has been posted." });
  };

  return (
    <section id="reviews" className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-2">
            Customer Love
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {reviews.map((review, i) => (
            <Card key={i} className="bg-background border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-4 h-4 ${j < review.rating ? "text-gold fill-gold" : "text-border"}`}
                    />
                  ))}
                </div>
                <p className="text-foreground font-body text-sm mb-4 leading-relaxed">
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
              className="font-body gap-2 border-primary text-primary hover:bg-primary/5"
            >
              <MessageSquare className="w-4 h-4" />
              Write a Review
            </Button>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <Input
                placeholder="Your Name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                required
                className="bg-background font-body"
              />
              <div>
                <label className="text-sm font-body text-muted-foreground mb-2 block">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setNewReview({ ...newReview, rating: r })}
                    >
                      <Star
                        className={`w-6 h-6 cursor-pointer transition-colors ${
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
                className="bg-background font-body"
                rows={3}
              />
              <div className="flex gap-3">
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 font-body flex-1">
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
