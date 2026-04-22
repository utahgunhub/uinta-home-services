import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PageLayout from "@/components/layout/PageLayout";
import PageHero from "@/components/PageHero";
import { useToast } from "@/hooks/use-toast";
import { sendQuoteRequest } from "@/lib/email";
import {
  Send,
  Droplets,
  Hand,
  Shield,
  Sparkles,
  Paintbrush,
  Home,
  Building2,
  Monitor,
  CheckCircle,
  ArrowRight,
  Phone,
  X,
  Star,
} from "lucide-react";

const Gallery = () => {
  const { toast } = useToast();
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    company: "",
    services: [] as string[],
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendQuoteRequest({
        formType: "Commercial Quote",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        services: formData.services,
        message: formData.message,
      });

      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData(initialFormData);
    } catch (error) {
      console.error("Failed to send commercial quote request:", error);
      toast({
        title: "Unable to send request",
        description: "Please try again or call us directly at 801-520-7948.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((item) => item !== service)
        : [...prev.services, service],
    }));
  };

  const services = [
    {
      id: "exterior-window-cleaning",
      icon: Droplets,
      title: "Exterior Window Cleaning",
      bgImage: "/new-images/11 - exteior window cleaning.webp",
    },
    {
      id: "interior-window-cleaning",
      icon: Droplets,
      title: "Interior Window Cleaning",
      bgImage: "/new-images/3 - interior window washing.webp",
    },
    {
      id: "home-concrete-pressure-washing",
      icon: Paintbrush,
      title: "Building & Concrete Pressure Washing",
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
      bgImage: "/new-images/2 - christmas lights.webp",
    },
    {
      id: "gutter-cleaning",
      icon: Building2,
      title: "Gutter Cleaning",
      bgImage: "/new-images/7 - gutter.webp",
    },
    {
      id: "automotive-detailing",
      icon: Home,
      title: "Auto Detailing",
      bgImage: "/new-images/13 - car detailing.webp",
    },
    {
      id: "solar-panel-cleaning",
      icon: Home,
      title: "Solar Panel Cleaning",
      bgImage: "/new-images/9 - solar.webp",
    },
  ];

  const serviceOptions = [
    "Window Cleaning",
    "Screen Repair & Replacement",
    "Pressure Washing",
    "Gutter Cleaning",
    "Christmas Lights",
    "Solar Panel Cleaning",
    "Other",
  ];

  const portfolioImages = [
    "/images/commercial-portfolio/commercial-portfolio4.webp",
    "/images/commercial-portfolio/commercial-portfolio5.webp",
    "/images/commercial-portfolio/commercial-portfolio6.webp",
    "/new-gallery-1.jpg",
    "/new-gallery-2.webp",
    "/new-gallery-3.jpg",
    "/new-gallery-4.png",
    "/new-gallery-5.jpg",
    "/images/commercial-portfolio/commercial-portfolio3.webp",
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
      <section className="relative min-h-[320px] overflow-hidden pt-36 pb-20 md:min-h-[380px] md:pt-48 md:pb-24">
        <div className="absolute inset-0">
          <img
            src="/commercial-form-bg.png"
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,18,12,0.68)_0%,rgba(17,32,20,0.58)_35%,rgba(17,32,20,0.72)_100%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-4">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Your Commercial Exterior Building Maintenance Provider
            </h1>
            <p className="text-lg leading-relaxed text-white/85 md:text-xl">
              Professional cleaning solutions for businesses, office buildings,
              and commercial properties throughout Utah.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold heading-caps text-foreground">
              Request a Quote
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="max-w-6xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-2 border-white/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Contact Info */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <Label
                    htmlFor="name"
                    className="text-lg font-semibold text-foreground"
                  >
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="h-12 text-base focus:ring-primary focus:border-primary border-2"
                    placeholder="Your full name"
                  />
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="company"
                    className="text-lg font-semibold text-foreground"
                  >
                    Company Name
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-12 text-base focus:ring-primary focus:border-primary border-2"
                    placeholder="Your company name"
                  />
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="email"
                    className="text-lg font-semibold text-foreground"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="h-12 text-base focus:ring-primary focus:border-primary border-2"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="phone"
                    className="text-lg font-semibold text-foreground"
                  >
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-12 text-base focus:ring-primary focus:border-primary border-2"
                    placeholder="(801) 520-7948"
                  />
                </div>
              </div>

              {/* Right Column - Project Info */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <Label className="text-lg font-semibold text-foreground">
                    Services Needed
                  </Label>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {serviceOptions.map((service) => (
                      <label
                        key={service}
                        className="flex items-center space-x-3 rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground"
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Label
                    htmlFor="message"
                    className="text-lg font-semibold text-foreground"
                  >
                    Project Details
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={10}
                    value={formData.message}
                    onChange={handleChange}
                    className="text-base focus:ring-primary focus:border-primary border-2 resize-none"
                    placeholder="Tell us about your commercial property, size, timeline, and any specific requirements..."
                  />
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="btn-primary glow-primary w-full py-6 text-lg"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Request
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
                </div>
              </CardContent>
            </Card>
          </form>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold heading-caps text-foreground mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The details that make our commercial window cleaning different—and why our work looks better and lasts longer.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Droplets,
                title: "Hard Water Buildup Removal",
                description:
                  "We guarantee we can restore the original clarity of your windows.",
              },
              {
                icon: Hand,
                title: "Hand Washing Windows",
                description:
                  "Still doing it the right way to ensure a perfect finish.",
              },
              {
                icon: Sparkles,
                title: "Screen Cleaning",
                description: "Included in every service.",
              },
              {
                icon: Shield,
                title: "RainShield Technology",
                description:
                  "Our rain-shield coating ensures your windows stay spotless for longer.",
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border-2 border-primary/20 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardContent className="relative p-8 space-y-4">
                  <div className="flex items-start space-x-5">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-2xl font-bold heading-caps text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-lg text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold heading-caps text-foreground mb-6">
              Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Commercial Properties Serviced
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {portfolioImages.map((image, index) => (
                <div key={index} className="group">
                  <div className="overflow-hidden rounded-3xl shadow-xl transition-transform duration-300 group-hover:scale-[1.02]">
                    <img
                      src={image}
                      alt={`Commercial property ${index + 1}`}
                      className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/new-images/8 - pine trees.webp"
            alt="PiNE Cleaning commercial services background"
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
              Comprehensive commercial cleaning services for businesses and properties throughout Utah.
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

      {/* Cleaning Plans Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
              Cleaning Plans
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Lock in sparkling windows and a polished property with discounted
              recurring service plans tailored to your commercial schedule.
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

      {/* Reviews Section */}
      <section id="reviews" className="pt-20 pb-8 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
                  See what our customers are saying
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
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
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Gallery;
