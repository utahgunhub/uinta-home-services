import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageLayout from "@/components/layout/PageLayout";
import {
  CheckCircle,
  Phone,
  Droplets,
  Hand,
  Shield,
  Sparkles,
  Paintbrush,
  Home,
  Building2,
  Car,
  Monitor,
  ArrowRight,
  FileText,
  Star,
} from "lucide-react";

const About = () => {
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

  const faqs = [
    {
      question: "What makes PiNE Cleaning different from other window & home cleaning companies?",
      answer: "At PiNE Cleaning, we pride ourselves on our meticulous attention to detail. After 7 years in the business, we know how to get your windows crystal clear. Our licensed crews are punctual and professional, and our pricing is transparent and competitive.",
    },
    {
      question: "Are your cleaning services insured?",
      answer: "Yes! All PiNE Cleaning services and crews are fully insured, protecting your home and property for full peace of mind. Our crews are experts in their craft and will treat your home like their own.",
    },
    {
      question: "What is included in your automotive cleaning service?",
      answer: "At PiNE Cleaning, our auto cleaning service entails a thorough interior and exterior cleaning, including a detailed vacuum of all seats, a deep shampoo of carpets, floor mats, and trunk/cargo area, a meticulous cleaning of all interior surfaces, buttons, cracks, and a gentle exterior PH neutral snow foam contact wash with a hand dry finish.",
    },
    {
      question: "What is included in your window cleaning service?",
      answer: "At PiNE Cleaning, our window cleaning service entails a thorough interior and exterior cleaning, including exterior hard water removal, screen cleaning, and RainShield technology, to keep your windows crystal clear for longer.",
    },
    {
      question: "What is RainShield Technology?",
      answer: "RainShield is a hydrophobic coating applied to the exterior of your windows during each cleaning. This clear protective layer works to keep your windows cleaner for longer as it sheets water and repels dirt after we're gone.",
    },
    {
      question: "How often should my home be cleaned?",
      answer: "We recommend our recurring service, which typically ranges from monthly to quarterly. Regular cleaning keeps hard water buildup off your windows and keeps your views crystal clear.",
    },
    {
      question: "Can you clean my high, hard-to-reach windows?",
      answer: "Absolutely! We use the latest equipment allowing our crews to reach even your tallest windows.",
    },
    {
      question: "How do I book your services?",
      answer: "booking-cta", // Special flag for custom content
    },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold heading-caps text-foreground mb-6">
              About{" "}
              <span className="text-primary text-glow">
                Us
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Local experts with an unwavering commitment to our clients.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="tel:8015207948">
                <Button
                  size="lg"
                  className="btn-primary glow-primary text-lg px-8 py-4 inline-flex items-center"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/team-photo.png"
                alt="PiNE Cleaning team"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold heading-caps text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded in Salt Lake City, PiNE Home Services has been delivering
                5-star service to Utah families and businesses for more than 7
                years. While we started as a window cleaning company, after more
                than 100,000 windows cleaned we've grown into a one-stop home and
                commercial cleaning service provider. Our licensed and insured
                technicians are experts at their craft and pride themselves on
                being on time, providing excellent service, and brightening your
                home.
              </p>

              <div className="space-y-3">
                {[
                  "Licensed and Insured",
                  "Transparent Pricing",
                  "Punctual and Professional Service",
                  "Quality Guaranteed",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center space-x-3 text-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
              The details that make our window cleaning different—and why our work
              looks better and lasts longer.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                icon: Droplets,
                title: "Hard Water Buildup Removal",
                description:
                  "We guarantee we can restore the original clarity of your windows.",
                details:
                  "Using specialized solutions and techniques, we safely remove stubborn hard water deposits, mineral buildup, and oxidation that other cleaners leave behind. Your windows will look brand new again.",
              },
              {
                icon: Hand,
                title: "Hand Washing Windows",
                description:
                  "Still doing it the right way to ensure a perfect finish.",
                details:
                  "No shortcuts. Every window is carefully hand-washed using professional-grade tools and solutions. This traditional method guarantees streak-free, crystal-clear results that automated systems simply can't match.",
              },
              {
                icon: Shield,
                title: "Screen Cleaning",
                description: "Included in every service.",
                details:
                  "We don't skip the screens. Each screen is removed, gently cleaned to remove dirt and debris, and reinstalled—all included at no extra charge. It's part of our commitment to complete window care.",
              },
              {
                icon: Sparkles,
                title: "RainShield Technology",
                description:
                  "Our rain-shield coating ensures your windows stay spotless for longer.",
                details:
                  "Our advanced hydrophobic coating causes water to bead and roll off your windows, taking dirt and debris with it. Enjoy cleaner windows for longer between services and better visibility even in rain.",
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
                      <p className="text-lg text-primary font-semibold mb-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-base text-muted-foreground leading-relaxed pl-[84px]">
                    {item.details}
                  </p>
                </CardContent>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
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

      {/* FAQs Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold heading-caps text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our services. Can't find the answer you're looking for? Reach out to our team.
            </p>
          </div>

          <Card className="border-2 border-border/50 shadow-xl rounded-3xl overflow-hidden">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-border/50 last:border-0"
                  >
                    <AccordionTrigger className="px-6 md:px-8 py-6 text-left hover:bg-primary/5 transition-colors duration-200">
                      <span className="text-lg font-semibold text-foreground pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 md:px-8 pb-6 pt-2">
                      {faq.answer === "booking-cta" ? (
                        <div className="space-y-4">
                          <p className="text-base text-muted-foreground leading-relaxed mb-4">
                            We make it easy to get started with PiNE Cleaning:
                          </p>
                          <div className="flex flex-col sm:flex-row gap-4">
                            <a href="tel:8015207948" className="flex-1">
                              <Button
                                size="lg"
                                className="w-full btn-primary glow-primary"
                              >
                                <Phone className="mr-2 w-5 h-5" />
                                Call Us Now
                              </Button>
                            </a>
                            <Link to="/contact" className="flex-1">
                              <Button
                                size="lg"
                                variant="outline"
                                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
                              >
                                Request a Quote
                                <ArrowRight className="ml-2 w-5 h-5" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Still have questions? We're here to help!
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-primary">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
              See What Our Customers Are Saying
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
      </section>
    </PageLayout>
  );
};

export default About;
