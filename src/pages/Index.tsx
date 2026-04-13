import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <ReviewsSection />
      <GallerySection />
      <OrderSection />
      <Footer />
    </div>
  );
};

export default Index;
