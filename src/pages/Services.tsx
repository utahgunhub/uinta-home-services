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
      id: "exterior-window-cleaning",
      icon: Droplets,
      title: "Exterior Window Cleaning",
      description:
        "Crystal-clear exterior glass that lets natural light in and boosts curb appeal. We safely clean everything from ground-level windows to upper stories.",
      features: [
        "Residential exterior window cleaning",
        "Multi-story and hard-to-reach windows",
        "Streak-free professional finish",
        "Frames and sills wiped down",
        "Safe ladders and equipment",
      ],
      image: "🏠",
    },
    {
      id: "interior-window-cleaning",
      icon: Droplets,
      title: "Interior Window Cleaning",
      description:
        "Smudge-free interior glass so your home feels brighter and cleaner. We treat your home with care while restoring every pane.",
      features: [
        "Interior window and glass door cleaning",
        "Removal of fingerprints and smudges",
        "Careful protection of floors and furnishings",
        "Detailed edge and track wipe-down",
        "Flexible scheduling to fit your day",
      ],
      image: "🏡",
    },
    {
      id: "home-concrete-pressure-washing",
      icon: Zap,
      title: "Home & Concrete Pressure Washing",
      description:
        "Professional pressure washing for siding, driveways, walkways, and patios to remove grime, mildew, and buildup.",
      features: [
        "House exterior soft-wash and pressure wash",
        "Driveways, sidewalks, and patios",
        "Oil stain and mildew reduction",
        "Proper pressure for each surface type",
        "Helps protect and extend surface life",
      ],
      image: "🧼",
    },
    {
      id: "screen-repair-replacement",
      icon: Monitor,
      title: "Screen Repair & Replacement",
      description:
        "Fresh, functional window and door screens that keep bugs out and breezes in.",
      features: [
        "Window screen repair and replacement",
        "Patio and sliding door screens",
        "Custom sizes to fit your openings",
        "Tear and damage repair",
        "Durable materials for long-term use",
      ],
      image: "🪟",
    },
    {
      id: "christmas-light-installation",
      icon: Sparkles,
      title: "Christmas Light Fitting & Installation",
      description:
        "Professional holiday lighting design, installation, and takedown so you can enjoy the season without the hassle.",
      features: [
        "Custom holiday light design",
        "Safe roofline and tree installation",
        "Timers and professional-grade materials",
        "In-season maintenance and bulb replacement",
        "Takedown and packing after the holidays",
      ],
      image: "🎄",
    },
    {
      id: "gutter-cleaning",
      icon: Gauge,
      title: "Gutter Cleaning",
      description:
        "Clear, free-flowing gutters that help protect your roof, foundation, and landscaping from water damage.",
      features: [
        "Full debris removal from gutters",
        "Downspout flushing and flow check",
        "Visual inspection for issues",
        "Protection from overflow and ice dams",
        "Fast, tidy, and reliable service",
      ],
      image: "🏘️",
    },
    {
      id: "automotive-detailing",
      icon: Car,
      title: "Automotive Detailing",
      description:
        "Comprehensive interior and exterior detailing to keep your vehicle looking and feeling like new.",
      features: [
        "Exterior wash, wax, and wheel cleaning",
        "Interior vacuuming and wipe-down",
        "Glass and mirror cleaning",
        "Pet hair and odor reduction",
        "Flexible packages for every vehicle",
      ],
      image: "🚗",
    },
    {
      id: "solar-panel-cleaning",
      icon: Home,
      title: "Solar Panel Cleaning",
      description:
        "Gentle solar panel cleaning to improve efficiency and protect your investment.",
      features: [
        "Non-abrasive cleaning methods",
        "Removal of dust, pollen, and buildup",
        "Improved panel performance",
        "Safe access and equipment",
        "Ideal for residential and small commercial arrays",
      ],
      image: "☀️",
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
              <Card
                key={service.id}
                id={service.id}
                className="card-service group overflow-hidden"
              >
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
                Get Your Quote
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
