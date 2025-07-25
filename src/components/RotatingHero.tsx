import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-coating.jpg";

// Hero background images
const concreteWaterproofingImage =
  "/images/hero-images/concrete-waterproofing.png";
const epoxyFloorImage = "/images/hero-images/epoxy-floor.png";
const housePaintingImage = "/images/hero-images/house-painting.png";
const insulationImage = "/images/hero-images/insulation.png";

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const RotatingHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: HeroSlide[] = [
    {
      id: 1,
      image: heroImage,
      title: "Welcome to",
      subtitle: "Quality Coatings LLC",
      description:
        "Utah's premier coating and restoration specialists. From residential to commercial, we deliver professional quality with exceptional service.",
      ctaText: "Get a Free Quote",
      ctaLink: "/contact",
      secondaryCtaText: "View Our Work",
      secondaryCtaLink: "/gallery",
    },
    {
      id: 2,
      image: concreteWaterproofingImage,
      title: "Concrete",
      subtitle: "Waterproof Coating",
      description:
        "Protect your concrete surfaces with our advanced waterproof coating solutions. Prevent damage from moisture, chemicals, and weather.",
      ctaText: "Learn More",
      ctaLink: "/services",
      secondaryCtaText: "Get Estimate",
      secondaryCtaLink: "/contact",
    },
    {
      id: 3,
      image: housePaintingImage,
      title: "Professional",
      subtitle: "Painting Services",
      description:
        "Interior and exterior painting with premium materials and expert craftsmanship. Transform your space with lasting beauty.",
      ctaText: "View Gallery",
      ctaLink: "/gallery",
      secondaryCtaText: "Get Quote",
      secondaryCtaLink: "/contact",
    },
    {
      id: 4,
      image: insulationImage,
      title: "Insulation",
      subtitle: "Installation",
      description:
        "Energy-efficient insulation solutions for homes and businesses. Reduce energy costs and improve comfort year-round.",
      ctaText: "Learn More",
      ctaLink: "/services",
      secondaryCtaText: "Contact Us",
      secondaryCtaLink: "/contact",
    },
    {
      id: 5,
      image: epoxyFloorImage,
      title: "Epoxy",
      subtitle: "Flooring",
      description:
        "Durable, beautiful epoxy floor coatings for garages, basements, and commercial spaces. Long-lasting protection and style.",
      ctaText: "View Color Samples",
      ctaLink: "/color-samples",
      secondaryCtaText: "Get Estimate",
      secondaryCtaLink: "/contact",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-[calc(100vh-4rem)] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={`${slide.title} ${slide.subtitle}`}
              className={`w-full h-full object-cover transition-all duration-1000 ${
                index === 0
                  ? "brightness-90"
                  : index === 1
                  ? "brightness-85 contrast-110"
                  : index === 2
                  ? "brightness-90 saturate-110"
                  : index === 3
                  ? "brightness-85 hue-rotate-10"
                  : "brightness-90 contrast-105 saturate-105"
              }`}
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20 shadow-2xl space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold heading-caps animate-fade-in">
                    {slide.title}{" "}
                    <span className="text-primary text-glow">
                      {slide.subtitle}
                    </span>
                  </h1>
                  <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto animate-fade-in">
                    {slide.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                  <Link to={slide.ctaLink}>
                    <Button
                      size="lg"
                      className="btn-primary glow-primary text-lg px-8 py-4 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                    >
                      {slide.ctaText}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to={slide.secondaryCtaLink}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="btn-ghost text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 bg-black/20 backdrop-blur-sm"
                    >
                      {slide.secondaryCtaText}
                    </Button>
                  </Link>
                </div>

                {/* Rating - Only show on first slide */}
                {index === 0 && (
                  <div className="flex items-center justify-center space-x-6 pt-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <span className="text-gray-200">
                      Rated 5/5 by 200+ satisfied customers
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black/20">
        <div
          className="h-full bg-primary transition-all duration-5000 ease-linear"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
};

export default RotatingHero;
