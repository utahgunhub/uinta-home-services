import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const pineCleaningImage = "/new-images/4 - suds.webp";
const windowCleaningImage = "/new-images/12 - RMC.webp";
const christmasLightsImage = "/new-images/2 - christmas lights.webp";
const gutterCleaningImage = "/images/hero-images/gutter-cleaning.png";
const carDetailImage = "/new-images/13 - car detailing.webp";

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const RotatingHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const slides: HeroSlide[] = [
    {
      id: 1,
      image: pineCleaningImage,
      title: "PiNE Cleaning",
      ctaText: "Get Your Quote",
      ctaLink: "/contact",
      secondaryCtaText: "View Our Work",
      secondaryCtaLink: "/commercial-cleaning-utah#portfolio",
    },
    {
      id: 2,
      image: windowCleaningImage,
      title: "Window Cleaning",
      ctaText: "Get Your Quote",
      ctaLink: "/contact",
      secondaryCtaText: "View Our Work",
      secondaryCtaLink: "/commercial-cleaning-utah#portfolio",
    },
    {
      id: 3,
      image: christmasLightsImage,
      title: "Christmas Light Fitting and Installation",
      ctaText: "Get Your Quote",
      ctaLink: "/contact",
      secondaryCtaText: "View Our Work",
      secondaryCtaLink: "/commercial-cleaning-utah#portfolio",
    },
    {
      id: 4,
      image: gutterCleaningImage,
      title: "Gutter Cleaning",
      ctaText: "Get Your Quote",
      ctaLink: "/contact",
      secondaryCtaText: "View Our Work",
      secondaryCtaLink: "/commercial-cleaning-utah#portfolio",
    },
    {
      id: 5,
      image: carDetailImage,
      title: "Auto Detailing",
      ctaText: "Get Your Quote",
      ctaLink: "/contact",
      secondaryCtaText: "View Our Work",
      secondaryCtaLink: "/commercial-cleaning-utah#portfolio",
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length, autoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoPlay(false);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 pointer-events-auto z-10"
              : "opacity-0 pointer-events-none z-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.title}
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
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,14,8,0.62)_0%,rgba(7,14,8,0.18)_28%,rgba(7,14,8,0.52)_100%)]" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
              <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/20 shadow-2xl space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold heading-caps animate-fade-in">
                    {slide.title}
                  </h1>
                  {slide.id === 1 && (
                    <p className="mx-auto max-w-3xl text-lg text-white/90 sm:text-xl">
                      Top-rated window cleaning and exterior building maintenance
                      in Utah. Licensed and insured technicians delivering
                      spotless results.
                    </p>
                  )}
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

                <div className="flex items-center justify-center pt-2">
                  <div className="inline-flex flex-wrap items-center justify-center gap-2 text-white">
                    <div className="flex items-center gap-1 rounded-full bg-gray-700/70 px-2.5 py-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-[#fbbc04] text-[#fbbc04]"
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-white sm:text-base">
                      5 Stars on Google
                    </span>
                    <img
                      src="/Google__G__logo.svg.png"
                      alt="Google logo"
                      className="h-6 w-6"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Hidden on mobile */}
      <button
        onClick={goToPrevSlide}
        className="hidden md:block absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
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
        className="hidden md:block absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
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
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 z-20 w-full h-1 bg-black/20">
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
