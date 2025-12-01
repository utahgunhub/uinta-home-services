import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PageLayout from "@/components/layout/PageLayout";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
    hearAboutUs: "",
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
        services: [],
        hearAboutUs: "",
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

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "801-520-7948",
      link: "tel:8015207948",
    },
    {
      icon: Mail,
      title: "Email",
      value: "marketing@uintawindowwashing.com",
      link: "mailto:marketing@uintawindowwashing.com",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Sandy, UT, 84081-4020",
      link: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Sat: 7AM-7PM",
      link: null,
    },
  ];

  const serviceTypes = [
    "Window Cleaning",
    "Gutter Cleaning",
    "Power Washing",
    "Christmas Lights",
    "Car Detailing",
    "Screen Replacement",
    "Solar Panel Cleaning",
    "Other",
  ];

  const hearAboutUsOptions = [
    "Yard Sign",
    "Poster Card/Door Hanger",
    "Family or Friend",
    "Google",
    "Local Company",
    "KSL",
    "Billboard",
    "Facebook",
    "Instagram",
  ];

  const serviceAreas: {
    county: string;
    cities: string[];
  }[] = [
    {
      county: "Salt Lake County",
      cities: [
        "Salt Lake City",
        "Sandy",
        "Draper",
        "South Jordan",
        "West Jordan",
        "Herriman",
        "Riverton",
      ],
    },
    {
      county: "Utah County",
      cities: ["Provo", "Orem", "Lehi", "American Fork", "Pleasant Grove"],
    },
    {
      county: "Weber County",
      cities: ["Ogden", "Roy", "South Ogden", "North Ogden"],
    },
    {
      county: "Summit County",
      cities: ["Park City", "Kamas", "Oakley"],
    },
    {
      county: "Davis County",
      cities: ["Layton", "Bountiful", "Kaysville", "Farmington"],
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold heading-caps text-foreground mb-6">
              Get Your{" "}
              <span className="text-primary text-glow">Quote</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your project? Contact us today for a free,
              no-obligation estimate. We'll work with you to find the perfect
              solution for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/contact-bg.png"
            alt="Utah mountain landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-2 border-white/20">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold heading-caps text-foreground mb-4">
                      Request Your Free Estimate
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="name"
                          className="text-foreground font-medium"
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
                          className="focus:ring-primary focus:border-primary"
                          placeholder="Your full name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-foreground font-medium"
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
                          className="focus:ring-primary focus:border-primary"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="phone"
                          className="text-foreground font-medium"
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
                          className="focus:ring-primary focus:border-primary"
                          placeholder="(801) 520-7948"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label
                          htmlFor="hearAboutUs"
                          className="text-foreground font-medium"
                        >
                          How did you hear about us?
                        </Label>
                        <select
                          id="hearAboutUs"
                          name="hearAboutUs"
                          value={formData.hearAboutUs}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:ring-primary focus:border-primary"
                        >
                          <option value="">Select an option</option>
                          {hearAboutUsOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-foreground font-medium">
                        Service Needed *
                      </Label>
                      <div className="grid grid-cols-2 gap-3">
                        {serviceTypes.map((service) => (
                          <div key={service} className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id={service}
                              checked={formData.services.includes(service)}
                              onChange={() => handleServiceChange(service)}
                              className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <label
                              htmlFor={service}
                              className="text-sm text-foreground cursor-pointer"
                            >
                              {service}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="message"
                        className="text-foreground font-medium"
                      >
                        Project Details
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="focus:ring-primary focus:border-primary"
                        placeholder="Tell us about your project, including size, timeline, and any specific requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="btn-primary w-full glow-primary"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Request Quote
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="p-6 bg-white/95 backdrop-blur-sm border-2 border-white/20 hover:border-primary/30 transition-colors duration-200"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-primary hover:text-primary-glow transition-colors duration-200 font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-foreground font-medium">
                              {info.value}
                            </p>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold heading-caps text-foreground mb-3">
              Proudly Serving
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              PiNE Cleaning serves homeowners and businesses across the Wasatch
              Front and beyond.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            {serviceAreas.map((area) => (
              <div
                key={area.county}
                className="bg-background border border-border rounded-lg p-4 text-left"
              >
                <p className="font-semibold text-foreground mb-1">
                  {area.county}
                </p>
                <p className="text-muted-foreground">
                  {area.cities.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Contact;
