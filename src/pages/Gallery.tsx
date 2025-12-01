import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PageLayout from "@/components/layout/PageLayout";
import { useToast } from "@/hooks/use-toast";
import {
  Send,
  Droplets,
  Hand,
  Shield,
  Sparkles,
  Paintbrush,
  Home,
  Building2,
  Car,
  Monitor,
  CheckCircle,
} from "lucide-react";

const Gallery = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        message: "",
      });
    }, 1000);
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
      title: "Exterior & Concrete Pressure Washing",
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

  const projectTypes = [
    "Window Cleaning",
    "Pressure Washing",
    "Gutter Cleaning",
    "Christmas Lights",
    "Solar Panel Cleaning",
    "Multiple Services",
    "Other",
  ];

  const portfolioImages = [
    "/images/gallery/willow-springs-tooele-exterior-web-1-1024x576.jpg",
    "/images/gallery/TSA-Architects_Rocky-Mountain-Care-The-Lodge_Front-Entrance.jpg",
    "/images/gallery/exteior window cleaning.png",
    "/images/gallery/building-outside-haven creek.jpg",
    "/images/gallery/Abbington-Murray-38-REV2-scaled.jpg",
    "/images/gallery/Abbington-Murray-36-REV1-scaled.jpg",
    "/images/gallery/abbington murray exterior.jpg",
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-6xl font-bold heading-caps text-foreground mb-6">
              <span className="text-primary text-glow">
                Commercial Cleaning Services
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional cleaning solutions for businesses, office buildings, and commercial properties throughout Utah.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/commercial-form-bg.png"
            alt="Commercial cleaning background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold heading-caps text-white">
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
                  <Label
                    htmlFor="projectType"
                    className="text-lg font-semibold text-foreground"
                  >
                    Service Needed
                  </Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full h-12 px-4 text-base border-2 border-input bg-background rounded-md focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select a service</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
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
      <section className="py-20 bg-gradient-subtle">
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
                icon: Shield,
                title: "Screen Cleaning",
                description: "Included in every service.",
              },
              {
                icon: Sparkles,
                title: "RainShield Technology",
                description:
                  "Our rain-shield coating ensures your windows stay spotless for longer.",
              },
            ].map((item, index) => (
              <Card
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border-2 border-border/50 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30"
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
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold heading-caps text-foreground mb-6">
              Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Commercial properties we've serviced throughout Utah.
            </p>
          </div>

          {/* Scrolling Portfolio Grid */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              {portfolioImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-96 snap-center group"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={image}
                      alt={`Commercial property ${index + 1}`}
                      className="w-full h-72 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                </div>
              ))}
              </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20 overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/services-section-bg.png"
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
    </PageLayout>
  );
};

export default Gallery;
