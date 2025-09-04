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
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Window Cleaning",
      description:
        "If you're looking for trusted window cleaning services, look no further than us. We are local industry leaders, and we provide an unparalleled level of quality and service to every client.",
      features: [
        "Residential window cleaning",
        "Commercial window cleaning",
        "High-rise window services",
        "Screen cleaning included",
        "Streak-free results",
      ],
      image: "🏠",
    },
    {
      icon: Gauge,
      title: "Gutter Cleaning",
      description:
        "If you're looking for gutter cleaning services, look no further than us. We provide a complete range of services to help homeowners, business owners, and property managers maintain clean and functional gutters. Fast and efficient, friendly and dependable, our team is second to none.",
      features: [
        "Residential gutter cleaning",
        "Commercial building gutters",
        "Downspout cleaning",
        "Gutter inspection services",
        "Fast and efficient service",
      ],
      image: "🏠",
    },
    {
      icon: Zap,
      title: "Power Washing",
      description:
        "Power washing is one of the most effective ways to clean and maintain your property's exterior surfaces. To make sure you get the most value out of your power washing service, you need a contractor who will do it right.",
      features: [
        "House exterior cleaning",
        "Driveway and walkway cleaning",
        "Deck and patio cleaning",
        "Professional equipment",
        "Safe cleaning solutions",
      ],
      image: "🏠",
    },
    {
      icon: Sparkles,
      title: "Christmas Lights",
      description:
        "Uinta Home Services is the top Christmas light installation company. Our team is licensed, insured, and bonded, and we have the skills, knowledge, and expertise to deliver seamless results for your home. When you choose us to brighten your living space, we don't disappoint.",
      features: [
        "Christmas light installation",
        "Holiday decoration setup",
        "Professional installation",
        "Safe electrical work",
        "Quality guarantee",
      ],
      image: "🏡",
    },
    {
      icon: Building2,
      title: "Dryer Vent Cleaning",
      description:
        "If you want to optimize your dryer's efficiency and safety, you need a dryer vent cleaning company that guarantees their service quality and thoroughness. In the surrounding areas, that company is Uinta Home Services. Focusing on competitive pricing, customer experience, and safety, we have established ourselves as the region's premier dryer vent cleaning contractor.",
      features: [
        "Dryer efficiency optimization",
        "Safety and fire prevention",
        "Competitive pricing",
        "Customer experience focus",
        "Thorough cleaning service",
      ],
      image: "🌡️",
    },
    {
      icon: Car,
      title: "Car Detailing",
      description:
        "Perfect for maintaining your vehicle's appearance and value, professional car detailing offers one of the most comprehensive cleaning services on the market. And with good reason: it's thorough, has great results, and is convenient. For many years, we have been providing the surrounding areas with affordable and reliable car detailing services.",
      features: [
        "Interior car cleaning",
        "Exterior car washing",
        "Professional detailing",
        "Convenient service",
        "Years of reliable service",
      ],
      image: "🏘️",
    },
    {
      icon: Monitor,
      title: "Screen Replacement",
      description:
        "We are a team of innovative home service experts that wants to change the way home and business owners maintain their window screens. We are Uinta Home Services, the leading screen replacement contractor in the surrounding areas.",
      features: [
        "Window screen replacement",
        "Patio door screens",
        "Custom screen sizes",
        "Professional installation",
        "Leading contractor expertise",
      ],
      image: "⚡",
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold heading-caps text-foreground mb-6">
              Our{" "}
              <span className="text-primary text-glow">
                Professional Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive home maintenance and cleaning services for residential,
              commercial, and industrial properties throughout Utah. Every
              project backed by our quality guarantee.
            </p>
          </div>

          <div className="flex justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="btn-primary glow-primary text-lg px-8 py-4"
              >
                Get Free Estimate
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
            {services.map((service, index) => (
              <Card key={index} className="card-service group overflow-hidden">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                          <service.icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold heading-caps text-foreground leading-tight min-h-[3rem] flex items-center">
                        {service.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3"
                          >
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-foreground text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4">
                        <Link
                          to="/contact"
                          className="text-primary hover:text-primary-glow font-semibold inline-flex items-center transition-colors duration-200"
                        >
                          Request Quote <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
              Quality That Sets Us Apart
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every service we provide is backed by our commitment to
              excellence, professional expertise, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-service text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold heading-caps text-foreground mb-4">
                  Premium Materials
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use only the highest quality materials from trusted
                  manufacturers to ensure long-lasting results that exceed
                  industry standards.
                </p>
              </CardContent>
            </Card>

            <Card className="card-service text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold heading-caps text-foreground mb-4">
                  Licensed & Insured
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
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold heading-caps text-foreground mb-4">
                  Insurance Coordination
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We handle all insurance paperwork and work directly with your
                  insurance company to streamline the claims process.
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
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/gallery">
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
