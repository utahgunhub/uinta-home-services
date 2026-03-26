import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Shield,
  X,
  Phone,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const Services = () => {
  const services = [
    {
      id: "exterior-window-cleaning",
      title: "Exterior Window Cleaning",
      features: [
        "Residential Window Cleaning",
        "Commercial Window Cleaning",
        "Hard Water Removal",
        "RainGuard Technology",
      ],
      bgImage: "/new-images/11 - exteior window cleaning.webp",
    },
    {
      id: "interior-window-cleaning",
      title: "Interior Window Cleaning",
      features: [
        "Hand Detailed Cleaning",
        "Screen Cleaning",
        "Window Track Detailing",
      ],
      bgImage: "/new-images/3 - interior window washing.webp",
    },
    {
      id: "home-concrete-pressure-washing",
      title: "Home & Concrete Pressure Washing",
      features: [
        "Residential Pressure Washing",
        "Commercial Pressure Washing",
        "Stucco & Siding Cleaning",
        "Driveway & Walkway Cleaning",
        "Deck & Patio Cleaning",
      ],
      bgImage: "/images/gallery/Abbington-Murray-36-REV1-scaled.jpg",
    },
    {
      id: "screen-repair-replacement",
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
      title: "Christmas Light Fitting & Installation",
      features: [
        "Annual Install & Removal",
        "Custom Fitted Lights",
        "Permanent Home Lights",
        "Custom Color Patterns",
      ],
      bgImage: "/new-images/2 - christmas lights.webp",
    },
    {
      id: "gutter-cleaning",
      title: "Gutter Cleaning",
      features: [
        "Residential Gutter Service",
        "Commercial Gutter Service",
        "Downspout Cleaning",
        "Dirt & Gravel Removal",
      ],
      bgImage: "/new-images/7 - gutter.webp",
    },
    {
      id: "automotive-detailing",
      title: "Automotive Detailing",
      features: [
        "Leather Treatment & Conditioning",
        "Pet Hair Removal",
        "PH Neutral Exterior Wash",
        "Under Carriage Detailing",
        "Ceramic Coating",
      ],
      bgImage: "/new-images/13 - car detailing.webp",
    },
    {
      id: "solar-panel-cleaning",
      title: "Solar Panel Cleaning",
      features: [
        "Residential Solar Panel Cleaning",
        "Commercial Solar Panel Cleaning",
        "RainGuard Technology",
      ],
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

  return (
    <PageLayout>
      <PageHero
        title={<span className="text-white">One-Stop Shop for Home Cleaning Services</span>}
        description="Professional exterior cleaning, detailing, and home care services built for Utah homes."
        backgroundImage="/new-images/8 - pine trees.webp"
        className="min-h-[220px] pt-28 pb-10 md:min-h-[260px] md:pt-32 md:pb-12"
        titleClassName="mx-auto max-w-5xl text-3xl leading-tight sm:text-4xl lg:text-5xl"
      >
        <Link to="/contact">
          <Button
            size="lg"
            className="btn-primary glow-primary px-6 py-3 text-base"
          >
            Get Your Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </Link>
      </PageHero>

      {/* Services Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className="group relative h-full overflow-hidden rounded-3xl border-0 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute inset-0">
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/85" />
                </div>

                <CardContent className="relative flex h-full flex-col p-8">
                  <div className="flex-1 space-y-5">
                    <h3 className="text-2xl font-bold heading-caps leading-tight text-white">
                      {service.title}
                    </h3>

                    <div className="space-y-2 pt-2">
                      {service.features.map((feature, featureIndex) => (
                        <p
                          key={featureIndex}
                          className="text-sm font-medium text-white/90"
                        >
                          {feature}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link to="/contact" className="flex-1">
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Get Your Quote
                      </Button>
                    </Link>
                    <a href="tel:8015207948" className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-white/40 bg-white/10 text-white hover:bg-white hover:text-black"
                      >
                        <Phone className="mr-2 h-4 w-4" />
                        Schedule Now
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cleaning Plans Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
              Cleaning Plans
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Lock in sparkling windows and a spotless home with discounted
              recurring service plans tailored to how often you like things
              cleaned.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`flex h-full flex-col rounded-3xl border border-primary transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl ${
                  plan.highlight
                    ? "bg-white shadow-2xl"
                    : "bg-white/95 shadow-xl"
                }`}
              >
                <CardContent className="flex h-full flex-col space-y-6 p-8">
                  <div className="space-y-2 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                      {plan.name}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {plan.saveText}
                    </p>
                    <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">
                      Per Cleaning
                    </p>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-foreground">
                        Free PiNE Rainguard Tech
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      {plan.includesHardWater ? (
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary" />
                      ) : (
                        <X className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
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

                  <div className="mt-auto pt-4">
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-primary/30 bg-white shadow-xl">
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

            <Card className="text-center border-primary/30 bg-white shadow-xl">
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

            <Card className="text-center border-primary/30 bg-white shadow-xl">
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
            <Link to="/commercial-cleaning-utah#portfolio">
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
