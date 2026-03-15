import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PageLayout from "@/components/layout/PageLayout";
import { useToast } from "@/hooks/use-toast";
import { sendQuoteRequest } from "@/lib/email";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
    frequency: "",
    hearAboutUs: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await sendQuoteRequest({
        formType: "Residential Contact",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        services: formData.services,
        frequency: formData.frequency,
        hearAboutUs: formData.hearAboutUs,
        message: formData.message,
      });

      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours.",
      });

      setFormData(initialFormData);
    } catch (error) {
      console.error("Failed to send residential quote request:", error);
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
      value: "taylordwilliams11@gmail.com",
      link: "mailto:taylordwilliams11@gmail.com",
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

  const frequencyOptions = [
    "One Time",
    "Biannual - Save 10% on Every Cleaning",
    "Quarterly - Save 15% on Every Cleaning + Free Hard Water Removal",
    "Biannual - Save 25% on Every Cleaning + Free Hard Water Removal",
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
      <section className="bg-primary pt-28 pb-10 md:pt-32 md:pb-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-4">
            <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Get Your Quote
            </h1>
            <p className="text-lg leading-relaxed text-white/85 md:text-xl">
              We'll work with you to find the perfect solution for your needs.
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
                      <Label
                        htmlFor="frequency"
                        className="text-foreground font-medium"
                      >
                        Frequency of Service
                      </Label>
                      <select
                        id="frequency"
                        name="frequency"
                        value={formData.frequency}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select a frequency</option>
                        {frequencyOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
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
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="w-full">
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
                <Card className="mt-6 p-6 bg-white/95 backdrop-blur-sm border-2 border-white/20">
                  <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.18em] text-primary font-semibold">
                      License Number
                    </p>
                    <p className="mt-2 text-lg font-semibold text-foreground">
                      11258030-0160
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
          <Card className="mt-8 p-6 bg-white/95 backdrop-blur-sm border-2 border-white/20 md:p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold heading-caps text-foreground md:text-3xl">
                Proudly Serving
              </h2>
              <p className="mt-3 text-muted-foreground">
                PiNE Cleaning serves homeowners and businesses across the
                Wasatch Front and beyond.
              </p>
            </div>

            <div className="mt-8 grid gap-6 text-sm md:grid-cols-2 lg:grid-cols-5">
              {serviceAreas.map((area) => (
                <div key={area.county} className="text-left">
                  <p className="mb-3 font-semibold text-foreground">
                    {area.county}
                  </p>
                  <ul className="space-y-1 text-muted-foreground">
                    {area.cities.map((city) => (
                      <li key={city}>{city}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

    </PageLayout>
  );
};

export default Contact;
