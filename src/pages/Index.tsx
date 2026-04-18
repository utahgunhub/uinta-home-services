import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import RotatingHero from "@/components/RotatingHero";
import {
  Shield,
  Award,
  Users,
  CheckCircle,
  Star,
  Phone,
  X,
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "White-glove Service",
      description: [
        "5-star rated by our customers",
        "7+ years in business",
        "100,000+ windows cleaned",
        "Licensed & insured technicians",
        "Punctual, honest, and professional service",
      ],
      buttonText: "Reviews",
      buttonLink: "#reviews",
      image: "/new-images/11 - exteior window cleaning.webp",
    },
    {
      icon: Award,
      title: "Comprehensive Care",
      description: [
        "Interior & exterior window cleaning",
        "Home & concrete pressure washing",
        "Screen repair & replacement",
        "Christmas light fitting & installation",
        "Auto detailing",
      ],
      buttonText: "View Our Services",
      buttonLink: "/services",
      image: "/images/gallery/TSA-Architects_Rocky-Mountain-Care-The-Lodge_Front-Entrance.jpg",
    },
    {
      icon: Users,
      title: "Service Plans for All Situations",
      description: [
        "Biannual – save 10% on every cleaning",
        "Quarterly – save 15% on every cleaning",
        "Bimonthly – save 25% on every cleaning",
      ],
      buttonText: "View Service Plans",
      buttonLink: "#plans",
      image: "/new-images/6 - cabin overhead.webp",
    },
  ];

  const services = [
    {
      id: "exterior-window-cleaning",
      title: "Exterior Window Cleaning",
      bgImage: "/new-images/11 - exteior window cleaning.webp",
    },
    {
      id: "interior-window-cleaning",
      title: "Interior Window Cleaning",
      bgImage: "/new-images/3 - interior window washing.webp",
    },
    {
      id: "home-concrete-pressure-washing",
      title: "Building & Concrete Pressure Washing",
      bgImage: "/pressure-washing-card.png",
    },
    {
      id: "screen-repair-replacement",
      title: "Screen Repair & Replacement",
      bgImage: "/window-screen-replacing-card.png",
    },
    {
      id: "christmas-light-installation",
      title: "Christmas Light Fitting & Installation",
      bgImage: "/new-images/2 - christmas lights.webp",
    },
    {
      id: "gutter-cleaning",
      title: "Gutter Cleaning",
      bgImage: "/new-images/7 - gutter.webp",
    },
    {
      id: "automotive-detailing",
      title: "Auto Detailing",
      bgImage: "/new-images/13 - car detailing.webp",
    },
    {
      id: "solar-panel-cleaning",
      title: "Solar Panel Cleaning",
      bgImage: "/new-images/9 - solar.webp",
    },
  ];

  const plans = [
    {
      name: "Biannual",
      saveText: "Save 10% on Every Cleaning",
      highlight: false,
      includesHardWater: false,
    },
    {
      name: "Quarterly",
      saveText: "Save 15% on Every Cleaning",
      highlight: true,
      includesHardWater: true,
    },
    {
      name: "Bimonthly",
      saveText: "Save 25% on Every Cleaning",
      highlight: false,
      includesHardWater: true,
    },
  ];

  const instagramPosts = [
    "https://placehold.co/300x300?text=Instagram+1",
    "https://placehold.co/300x300?text=Instagram+2",
    "https://placehold.co/300x300?text=Instagram+3",
    "https://placehold.co/300x300?text=Instagram+4",
    "https://placehold.co/300x300?text=Instagram+5",
    "https://placehold.co/300x300?text=Instagram+6",
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <RotatingHero />

      {/* Features Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
              Why Choose PiNE Home Services?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative h-80 rounded-xl overflow-hidden group"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center items-center p-8">
                  <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-2xl text-center text-white max-w-sm">
                    <h3 className="text-xl font-bold heading-caps mb-4">
                      {feature.title}
                    </h3>
                    {Array.isArray(feature.description) ? (
                      <ul className="text-gray-200 leading-relaxed mb-6 space-y-1">
                        {feature.description.map((item, index) => (
                          <li key={index} className="text-sm">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-200 leading-relaxed mb-6 text-sm">
                        {feature.description}
                      </p>
                    )}
                    {feature.buttonLink.startsWith("#") ? (
                      <a href={feature.buttonLink}>
                        <Button
                          size="sm"
                          className="bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                        >
                          {feature.buttonText}
                        </Button>
                      </a>
                    ) : (
                      <Link to={feature.buttonLink}>
                        <Button
                          size="sm"
                          className="bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                        >
                          {feature.buttonText}
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image with gaussian-style overlay similar to hero cards */}
        <div className="absolute inset-0">
          <img
            src="/new-images/8 - pine trees.webp"
            alt="PiNE Cleaning core services background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-caps text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive home maintenance and cleaning services for residential,
              commercial, and industrial properties throughout Utah.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services#${service.id}`}
                className="group block h-full"
              >
                <Card className="h-full overflow-hidden rounded-2xl border-0 shadow-2xl transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <CardContent className="relative flex h-full min-h-[360px] items-center justify-center p-0">
                    <img
                      src={service.bgImage}
                      alt={service.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative w-full px-6 text-center">
                      <h3 className="mx-auto max-w-[14ch] text-xl font-bold leading-tight text-white md:text-2xl">
                        {service.title}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link to="/services">
              <Button size="lg" className="btn-primary">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Savings Plans Section */}
      <section id="plans" className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
              SAVE with PiNE Home Cleaning Plans
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Lock in sparkling windows and a spotless home with discounted
              recurring service plans tailored to how often you like things
              cleaned.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex h-full flex-col rounded-3xl border border-primary transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${
                  plan.highlight
                    ? "bg-white shadow-2xl"
                    : "bg-white/95 shadow-xl"
                }`}
              >
                <CardContent className="flex flex-col h-full p-8 space-y-6">
                  <div className="text-center space-y-2">
                    <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                      {plan.name}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {plan.saveText}
                    </p>
                    <p className="text-sm font-medium tracking-[0.25em] text-muted-foreground uppercase">
                      Per Cleaning
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">
                        Free PiNE Rainguard Tech
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      {plan.includesHardWater ? (
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      )}
                      <span
                        className={
                          plan.includesHardWater
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }
                      >
                        FREE Hard Water Removal
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 mt-auto">
                    <Link to="/contact">
                      <Button
                        size="lg"
                        className={`w-full text-base font-semibold ${
                          plan.highlight
                            ? "btn-primary"
                            : "bg-primary/90 text-primary-foreground hover:bg-primary"
                        }`}
                      >
                        Get Your Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews & Instagram Feed Section */}
      <section id="reviews" className="pt-20 pb-8 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Reviews Section */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
                  See what our customers are saying
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Review 1 - Nate */}
                <Card className="p-6 bg-primary/5 border-primary/20 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">
                        Nate Braack
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Local Guide · 19 reviews · 14 photos
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-foreground mb-3 italic">
                    "Paid to have the windows, screens, and tracks cleaned—the
                    works. Very happy with the service. Owner and management are
                    top notch. My house was built in 2014."
                  </p>
                </Card>

                {/* Review 2 - Krista */}
                <Card className="p-6 bg-primary/5 border-primary/20 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">
                        Krista Woodward
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Local Guide · 28 reviews · 2 photos
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-foreground mb-3 italic">
                    "Connor and McKay were incredible young men. They were
                    extremely friendly and courteous. We have nightmare windows
                    with the panes on the outside and they never complained—just
                    kept working with a smile and we have over thirty-six
                    windows. We will always go with PiNE. Their employees are
                    the best."
                  </p>
                </Card>

                {/* Review 3 - Marilyn */}
                <Card className="p-6 bg-primary/5 border-primary/20 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">
                        Marilyn Watt
                      </p>
                      <p className="text-xs text-muted-foreground">
                        1 review
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-foreground mb-3 italic">
                    "Excellent service. On time, polite, clean-cut, friendly.
                    Thorough and exact. Best window washing ever."
                  </p>
                </Card>

                {/* Review 4 - Marsha */}
                <Card className="p-6 bg-primary/5 border-primary/20 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">
                        Marsha Jensen
                      </p>
                      <p className="text-xs text-muted-foreground">
                        4 reviews · Edited 6 years ago
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-foreground mb-3 italic">
                    "Very happy with the windows. Employees are wonderful. Will
                    definitely use this company again."
                  </p>
                </Card>

                {/* Review 5 - Josie */}
                <Card className="p-6 bg-primary/5 border-primary/20 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">
                        Josie Williams
                      </p>
                      <p className="text-xs text-muted-foreground">
                        2 reviews · 20 hours ago
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-foreground mb-3 italic">
                    "I've been using this company for years. They are great at
                    what they do and are very professional."
                  </p>
                </Card>

                {/* Review 6 - Lucy */}
                <Card className="p-6 bg-primary/5 border-primary/20 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold text-foreground">
                        Lucy Vasquez
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Local Guide · 3 reviews · 2 years ago
                      </p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-foreground mb-3 italic">
                    "Positive: Punctuality, Professionalism, Value."
                  </p>
                </Card>
              </div>
            </div>

            {/* Instagram Feed Section - below reviews */}
            {/* <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
                  Follow Our Work
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  See our latest projects and transformations on Instagram.
                </p>
                <span className="inline-flex items-center space-x-2 text-primary">
                  <span className="font-semibold">@uintahomeservices</span>
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {instagramPosts.map((image, index) => (
                  <div
                    key={index}
                    className="group relative aspect-square rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`Instagram post ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className="text-center">
                <span className="inline-flex items-center space-x-2 text-primary font-semibold">
                  <span>Follow Our Work</span>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:8015207948">
              <Button
                size="lg"
                className="btn-primary glow-primary text-lg px-8 py-4"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </Button>
            </a>
            <a
              href="https://www.google.com/search?sca_esv=7a3e106727178f17&sxsrf=ANbL-n4EjdW2OgqjqSLQ-lJaUhnea0jFRw:1776527124160&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOU5V7h6BcFVioeMMrDE0DiwNi0AoZ-ML-WhR2se-UGBsPeVQh75Zy_4ZlxuPWrZIz9h68BkNdfUwqwmSC8c1Y_gg0ruFU23KAzUHJd5rKmTuafk58w%3D%3D&q=Uinta+Window+Washing,+LLC+Reviews&sa=X&ved=2ahUKEwjcmK2h3_eTAxVPmO4BHegXGZEQ0bkNegQINBAF&biw=1598&bih=947&dpr=2"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-4"
              >
                <img
                  src="/google-white-icon.webp"
                  alt="Google icon"
                  className="mr-2 h-5 w-5"
                  loading="lazy"
                />
                Share your review
              </Button>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
