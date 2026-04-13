import { useScrollAnimation } from "@/hooks/use-scroll-animation";

import real1 from "@/assets/gallery/real1.jpg";
import real2 from "@/assets/gallery/real2.jpg";
import real3 from "@/assets/gallery/real3.jpg";
import real4 from "@/assets/gallery/real4.jpg";
import real5 from "@/assets/gallery/real5.jpg";
import real6 from "@/assets/gallery/real6.jpg";
import real7 from "@/assets/gallery/real7.jpg";
import real8 from "@/assets/gallery/real8.jpg";
import real9 from "@/assets/gallery/real9.jpg";
import real10 from "@/assets/gallery/real10.jpg";
import real11 from "@/assets/gallery/real11.jpg";
import real12 from "@/assets/gallery/real12.jpg";
import real13 from "@/assets/gallery/real13.jpg";
import real14 from "@/assets/gallery/real14.jpg";
import real15 from "@/assets/gallery/real15.jpg";
import real16 from "@/assets/gallery/real16.jpg";

const row1 = [real1, real2, real3, real4, real5, real11, real12, real13, real14, real15, real16];
const row2 = [real6, real10, real2, real8, real4, real14, real1, real7, real3, real16, real5];
const row3 = [real9, real5, real13, real7, real1, real10, real3, real15, real8, real11, real6];

const GalleryRow = ({ images, direction }: { images: string[]; direction: "left" | "right" }) => {
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
            className="w-[220px] h-[220px] object-cover rounded-2xl flex-shrink-0 opacity-50 hover:opacity-90 transition-all duration-500 hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
};

const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-[hsl(0,0%,5%)] relative">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-10 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-primary font-body text-sm tracking-widest uppercase mb-2">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Our Creations
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div
          className={`relative bg-[hsl(0,0%,8%)] border border-[hsl(0,0%,15%)] rounded-3xl overflow-hidden p-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          <GalleryRow images={row1} direction="left" />
          <GalleryRow images={row2} direction="right" />
          <GalleryRow images={row3} direction="left" />

          {/* Overlay text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full scale-150" />
              <h3 className="relative text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white drop-shadow-[0_0_30px_hsl(var(--primary)/0.6)] tracking-wide text-center">
                Pure Homemade Happiness
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
