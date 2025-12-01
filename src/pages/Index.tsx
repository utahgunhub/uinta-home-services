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
  ArrowRight,
  Palette,
  Home,
  Building2,
  Phone,
  Paintbrush,
  Droplets,
  Sparkles,
  Car,
  Monitor,
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
      buttonLink: "/#reviews",
      image: "/worker.png",
    },
    {
      icon: Award,
      title: "Comprehensive Home Care",
      description: [
        "Interior & exterior window cleaning",
        "Home & concrete pressure washing",
        "Screen repair & replacement",
        "Christmas light fitting & installation",
        "Automotive detailing",
      ],
      buttonText: "View Our Services",
      buttonLink: "/services",
      image: "/mountain-home.png",
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
      buttonLink: "/services",
      image: "/luxury-vehicle.png",
    },
  ];

  const services = [
    {
      id: "exterior-window-cleaning",
      icon: Droplets,
      title: "Exterior Window Cleaning",
      bgImage: "/exterior-window-cleaning-card.png",
    },
    {
      id: "interior-window-cleaning",
      icon: Droplets,
      title: "Interior Window Cleaning",
      bgImage: "/interior-window-cleaning-card.png",
    },
    {
      id: "home-concrete-pressure-washing",
      icon: Paintbrush,
      title: "Home & Concrete Pressure Washing",
      bgImage: "/pressure-washing-card.png",
    },
    {
      id: "screen-repair-replacement",
      icon: Monitor,
      title: "Screen Repair & Replacement",
      bgImage: "/window-screen-replacing-card.png",
    },
    {
      id: "christmas-light-installation",
      icon: Sparkles,
      title: "Christmas Light Fitting & Installation",
      bgImage: "/christmas-lights-card.png",
    },
    {
      id: "gutter-cleaning",
      icon: Building2,
      title: "Gutter Cleaning",
      bgImage: "/gutter-cleaning-card.png",
    },
    {
      id: "automotive-detailing",
      icon: Car,
      title: "Automotive Detailing",
      bgImage: "/automotive-detailing-card.png",
    },
    {
      id: "solar-panel-cleaning",
      icon: Home,
      title: "Solar Panel Cleaning",
      bgImage: "/solar-panel-card.png",
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
              Why Choose PiNE Cleaning?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver exceptional service with expert craftsmanship to care
              for your home and vehicle and exceed expectations.
            </p>
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
                    <Link to={feature.buttonLink}>
                      <Button
                        size="sm"
                        className="bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                      >
                        {feature.buttonText}
                      </Button>
                    </Link>
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
            src="/services-section-bg.png"
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
                <Card className="h-full flex flex-col bg-white border border-border rounded-2xl shadow-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-xl">
                  <CardContent className="flex flex-col h-full p-0">
                    <div
                      className="w-full aspect-[4/3] bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.bgImage})` }}
                    />
                    <div className="flex-1 px-5 py-4 flex items-center space-x-3">
                      <service.icon className="w-7 h-7 text-primary flex-shrink-0" />
                      <h3 className="text-sm md:text-base font-bold heading-caps text-foreground leading-snug">
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
      <section className="py-20 bg-gradient-subtle">
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
                className={`flex flex-col h-full rounded-3xl border ${
                  plan.highlight
                    ? "border-primary shadow-2xl bg-white"
                    : "border-border bg-white/95"
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
                            : "text-muted-foreground line-through"
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

      {/* Quick Intro / Trust Section */}
      <section className="py-20 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold heading-caps text-foreground">
                Outstanding Service
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We combine expertise with the highest standards for customer
                service. Promptness, punctuality, and professionalism are but a
                few of the key tenets of our service model. When you enlist our
                services, you'll experience nothing but our steadfast commitment
                to you.
              </p>



              <div className="space-y-4">
                {[
                  "Free estimates and competitive pricing",
                  "Clear and effective communication",
                  "Promptness, punctuality, and professionalism",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary">
                    Start Your Project Today
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="p-6 text-center bg-primary/5 border-primary/20">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </Card>
                <Card className="p-6 text-center bg-primary/5 border-primary/20">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground">
                    Projects Completed
                  </div>
                </Card>
              </div>
              <div className="space-y-6 pt-8">
                <Card className="p-6 text-center bg-primary/5 border-primary/20">
                  <div className="text-3xl font-bold text-primary">200+</div>
                  <div className="text-muted-foreground">Happy Customers</div>
                </Card>
                <Card className="p-6 text-center bg-primary/5 border-primary/20">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Satisfaction Rate</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Instagram Feed Section */}
      <section id="reviews" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Reviews Section */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
                  What Our Customers Say
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Real feedback from Utah homeowners who trust PiNE Cleaning
                  with their homes and vehicles.
                </p>
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
                  <p className="text-xs text-muted-foreground mt-auto">
                    Positive: Responsiveness, Punctuality, Quality,
                    Professionalism, Value • Services: Interior & exterior
                    window cleaning
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
                  <p className="text-xs text-muted-foreground mt-auto">
                    Positive: Responsiveness, Punctuality, Quality,
                    Professionalism, Value
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
                  <p className="text-xs text-muted-foreground mt-auto">
                    Services: Window washing
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
          <div className="flex justify-center">
            <a href="tel:8015207948">
              <Button
                size="lg"
                className="btn-primary glow-primary text-lg px-8 py-4"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
