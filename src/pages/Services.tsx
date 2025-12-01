import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import {
  Droplets,
  Home,
  Building2,
  Zap,
  RectangleHorizontal,
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Car,
  Monitor,
  Gauge,
  Shield,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "exterior-window-cleaning",
      icon: Droplets,
      title: "Exterior Window Cleaning",
      features: [
        "Residential Window Cleaning",
        "Commercial Window Cleaning",
        "Hard Water Removal",
        "RainGuard Technology",
      ],
      bgImage: "/exterior-window-cleaning-card.png",
    },
    {
      id: "interior-window-cleaning",
      icon: Droplets,
      title: "Interior Window Cleaning",
      features: [
        "Hand Detailed Cleaning",
        "Screen Cleaning",
        "Window Track Detailing",
      ],
      bgImage: "/interior-window-cleaning-card.png",
    },
    {
      id: "home-concrete-pressure-washing",
      icon: Zap,
      title: "Home & Concrete Pressure Washing",
      features: [
        "Residential Pressure Washing",
        "Commercial Pressure Washing",
        "Stucco & Siding Cleaning",
        "Driveway & Walkway Cleaning",
        "Deck & Patio Cleaning",
      ],
      bgImage: "/pressure-washing-card.png",
    },
    {
      id: "screen-repair-replacement",
      icon: Monitor,
      title: "Screen Repair & Replacement",
      features: [
        "Window Screens",
        "Patio Door Screens",
        "Solar Screen Fabric",
        "Frame Repair",
        "Professional Installation",
      ],
      bgImage: "/window-screen-replacing-card.png",
    },
    {
      id: "christmas-light-installation",
      icon: Sparkles,
      title: "Christmas Light Fitting & Installation",
      features: [
        "Annual Install & Removal",
        "Custom Fitted Lights",
        "Permanent Home Lights",
        "Custom Color Patterns",
      ],
      bgImage: "/christmas-lights-card.png",
    },
    {
      id: "gutter-cleaning",
      icon: Gauge,
      title: "Gutter Cleaning",
      features: [
        "Residential Gutter Service",
        "Commercial Gutter Service",
        "Downspout Cleaning",
        "Dirt & Gravel Removal",
      ],
      bgImage: "/gutter-cleaning-card.png",
    },
    {
      id: "automotive-detailing",
      icon: Car,
      title: "Automotive Detailing",
      features: [
        "Leather Treatment & Conditioning",
        "Pet Hair Removal",
        "PH Neutral Exterior Wash",
        "Under Carriage Detailing",
        "Ceramic Coating",
      ],
      bgImage: "/automotive-detailing-card.png",
    },
    {
      id: "solar-panel-cleaning",
      icon: Home,
      title: "Solar Panel Cleaning",
      features: [
        "Residential Solar Panel Cleaning",
        "Commercial Solar Panel Cleaning",
        "RainGuard Technology",
      ],
      bgImage: "/solar-panel-card.png",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold heading-caps text-foreground mb-6">
              <span className="text-primary text-glow">
                One-Stop Shop for Home Cleaning Services
              </span>
            </h1>
          </div>

          <div className="flex justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="btn-primary glow-primary text-lg px-8 py-4"
              >
                Get Your Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="block group"
              >
                <Card
                  id={service.id}
                  className="card-service group overflow-hidden relative h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <img
                      src={service.bgImage}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
                  </div>

                  <CardContent className="relative p-8 h-full flex flex-col">
                    <div className="space-y-4 flex-1">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300 border border-white/30">
                            <service.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold heading-caps text-white leading-tight flex items-center flex-1">
                          {service.title}
                        </h3>
                      </div>

                      <div className="space-y-2 pt-4">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                            <span className="text-white text-sm font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover indicator */}
                    <div className="mt-6 flex items-center text-white font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-service text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold heading-caps text-foreground mb-4">
                  Licensed and Insured
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fully licensed contractors with comprehensive insurance
                  coverage. Your project is protected from start to finish.
                </p>
              </CardContent>
            </Card>

            <Card className="card-service text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold heading-caps text-foreground mb-4">
                  Punctual and Professional Service
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We respect your time and property with on-time arrivals,
                  courteous service, and meticulous attention to detail.
                </p>
              </CardContent>
            </Card>

            <Card className="card-service text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold heading-caps text-foreground mb-4">
                  Quality Guaranteed
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every service is backed by our commitment to excellence and
                  customer satisfaction. We don't leave until you're happy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold heading-caps text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Get a free, no-obligation estimate for your home maintenance or cleaning
            project. We'll work with you to find the perfect solution for your
            needs and budget.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="btn-primary glow-primary text-lg px-8 py-4"
              >
                Get Your Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/commercial-cleaning-utah">
              <Button
                variant="outline"
                size="lg"
                className="btn-ghost text-lg px-8 py-4"
              >
                View Our Work
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-muted-foreground">
            <p>
              Call us today:{" "}
              <span className="text-primary font-semibold">801-520-7948</span>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;
