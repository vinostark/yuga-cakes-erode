import { useScrollAnimation } from "@/hooks/use-scroll-animation";

import cake1 from "@/assets/gallery/cake1.jpg";
import cake2 from "@/assets/gallery/cake2.jpg";
import cake3 from "@/assets/gallery/cake3.jpg";
import cake4 from "@/assets/gallery/cake4.jpg";
import cake5 from "@/assets/gallery/cake5.jpg";
import cake6 from "@/assets/gallery/cake6.jpg";
import cake7 from "@/assets/gallery/cake7.jpg";
import cake8 from "@/assets/gallery/cake8.jpg";
import cake9 from "@/assets/gallery/cake9.jpg";

const row1 = [cake1, cake2, cake3, cake4, cake5, cake6, cake7, cake8, cake9];
const row2 = [cake5, cake9, cake1, cake7, cake3, cake6, cake2, cake8, cake4];
const row3 = [cake8, cake4, cake6, cake2, cake9, cake1, cake7, cake5, cake3];

const GalleryRow = ({ images, direction }: { images: string[]; direction: "left" | "right" }) => {
  // Duplicate for seamless loop
  const doubled = [...images, ...images];
  return (
    <div className="overflow-hidden py-2">
      <div
        className={`flex gap-4 ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}
        style={{ width: "max-content" }}
      >
        {doubled.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Yuga Cakes gallery"
            loading="lazy"
            width={220}
            height={220}
            className="w-[220px] h-[220px] object-cover rounded-2xl flex-shrink-0 hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </div>
  );
};

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-2">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Our Creations
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div
          className={`bg-card border border-border rounded-3xl overflow-hidden p-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          <GalleryRow images={row1} direction="left" />
          <GalleryRow images={row2} direction="right" />
          <GalleryRow images={row3} direction="left" />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
