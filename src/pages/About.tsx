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
  Star,
} from "lucide-react";

const About = () => {
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
      icon: Car,
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
      question: "What is included in your auto detailing service?",
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
      {/* Our Story Section */}
      <section className="relative overflow-hidden pt-36 pb-20">
        <div className="absolute inset-0">
          <img
            src="/new-images/8 - pine trees.webp"
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,16,10,0.62)_0%,rgba(10,22,13,0.4)_45%,rgba(9,18,12,0.66)_100%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div className="relative">
              <div className="rounded-3xl bg-white/80 p-4 shadow-2xl">
                <img
                  src="/team-photo.png"
                  alt="PiNE Cleaning team"
                  className="w-full max-h-[640px] rounded-2xl object-contain object-center"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold heading-caps text-white">
                Our Story
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Founded in Salt Lake City, PiNE Home Services has been delivering
                5-star service to Utah families and businesses for more than 7
                years. While we started as a window cleaning company, after more
                than 100,000 windows cleaned we've grown into a one-stop shop
                for home and commercial cleaning. Our licensed and insured
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
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-white">{item}</span>
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
                  "No shortcuts. Every window is carefully hand-washed using professional-grade tools and solutions. This traditional method guarantees streak-free, crystal-clear results that can't be matched.",
              },
              {
                icon: Sparkles,
                title: "Screen Cleaning",
                description: "Included in every service.",
                details:
                  "We don't skip the screens. Each screen is removed, gently cleaned to remove dirt and debris, and reinstalled—all included at no extra charge. It's part of our commitment to complete window care.",
              },
              {
                icon: Shield,
                title: "RainShield Technology",
                description:
                  "Our rain-shield coating ensures your windows stay spotless for longer.",
                details:
                  "An advanced hydrophobic coating applied to your exterior windows works to bead water off your windows, taking dirt and debris with it. Enjoy cleaner windows for longer between services.",
              },
            ].map((item) => (
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
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src="/new-images/8 - pine trees.webp"
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

      {/* FAQs Section */}
      <section id="faqs" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold heading-caps text-foreground mb-4">
              Frequently Asked Questions
            </h2>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
