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
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "801-520-7948",
      link: "tel:8015207948",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      title: "Email",
      value: "marketing@uintawindowwashing.com",
      link: "mailto:marketing@uintawindowwashing.com",
      description: "Send us a detailed message",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Sandy, UT, 84081-4020",
      link: null,
      description: "Serving all of Utah",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon-Sat: 7AM-7PM, Sun: By Appointment",
      link: null,
      description: "Flexible scheduling available",
    },
  ];

  const projectTypes = [
    "Window Cleaning",
    "Gutter Cleaning",
    "Power Washing",
    "Christmas Lights",
    "Dryer Vent Cleaning",
    "Car Detailing",
    "Screen Replacement",
    "Other",
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold heading-caps text-foreground mb-6">
              Get Your{" "}
              <span className="text-primary text-glow">Free Quote</span>
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
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-service">
                <CardContent className="p-8">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold heading-caps text-foreground mb-4">
                      Request Your Free Estimate
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Fill out the form below and we'll get back to you within
                      24 hours with a detailed estimate for your project.
                    </p>
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
                          htmlFor="projectType"
                          className="text-foreground font-medium"
                        >
                          Project Type
                        </Label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-input bg-background rounded-md focus:ring-primary focus:border-primary"
                        >
                          <option value="">Select a service</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
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
                          Send Message
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
                <h3 className="text-2xl font-bold heading-caps text-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card
                      key={index}
                      className="p-6 bg-background border-border hover:border-primary/30 transition-colors duration-200"
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
                          <p className="text-muted-foreground text-sm mt-1">
                            {info.description}
                          </p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold heading-caps text-foreground mb-6">
            Prefer to Talk? Give Us a Call
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Sometimes it's easier to discuss your project over the phone. Our
            team is standing by to answer your questions and provide expert
            advice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:8015207948">
              <Button
                size="lg"
                className="btn-primary glow-primary text-lg px-8 py-4"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call 801-520-7948
              </Button>
            </a>
            <a href="mailto:marketing@uintawindowwashing.com">
              <Button
                variant="outline"
                size="lg"
                className="btn-ghost text-lg px-8 py-4"
              >
                <Mail className="mr-2 w-5 h-5" />
                Send Email
              </Button>
            </a>
          </div>

          <div className="mt-8 text-muted-foreground">
            <p>Available Monday through Saturday, 7 AM to 7 PM</p>
            <p className="mt-2">Sunday: By Appointment</p>
            <p className="mt-2">License Number: 12398041-5501</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
