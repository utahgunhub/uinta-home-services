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
} from "lucide-react";
import heroImage from "@/assets/hero-coating.jpg";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "SERVICES WE PROVIDE",
      description: [
        "Concrete Polishing",
        "Epoxy Garage Floors",
        "Waterproof Decking",
        "Concrete Staining",
        "Concrete Overlays & Repairs",
        "Concrete Sealing",
      ],
      buttonText: "Our Services »",
      buttonLink: "/services",
      image: heroImage,
    },
    {
      icon: Award,
      title: "VIEW OUR WORK",
      description:
        "Looking for a epoxy garage coating specialist in Utah? We've got you covered. Check out our epoxy garage floor coating, waterproof decking, staining, overlays, sealing, and sports court galleries here.",
      buttonText: "View Galleries »",
      buttonLink: "/gallery",
      image: heroImage,
    },
    {
      icon: Users,
      title: "COLOR SAMPLES",
      description:
        "We have products for every taste and budget. From simple and sleek to flashy and elegant our broad range of coatings and finishes allows us to do almost anything you can think up. Browse our gallery to see.",
      buttonText: "Color Samples »",
      buttonLink: "/color-samples",
      image: heroImage,
    },
  ];

  const services = [
    {
      icon: Palette,
      title: "Epoxy Flooring",
      description:
        "If you're looking for trusted epoxy floor coating services, look no further than us. We are local industry leaders, and we provide an unparalleled level of quality and service to every client.",
    },
    {
      icon: Paintbrush,
      title: "Exterior Painting",
      description:
        "If you're looking for exterior painting services, look no further than us. We provide a complete range of services to help homeowners, business owners, and property managers attain the stellar exterior they've always wanted.",
    },
    {
      icon: Paintbrush,
      title: "House Painting",
      description:
        "Quality Coatings LLC is the top house painting company. Our team is licensed, insured, and bonded, and we have the skills, knowledge, and expertise to deliver seamless results for your home.",
    },
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
              Why Choose Quality Coatings LLC?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine expert craftsmanship with exceptional service to
              deliver coating solutions that exceed expectations.
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
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive coating and restoration services for residential,
              commercial, and industrial projects throughout Utah.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} className="card-service group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <service.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold heading-caps text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="text-primary hover:text-primary-glow font-semibold inline-flex items-center transition-colors duration-200"
                  >
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
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

              <p className="text-lg text-muted-foreground leading-relaxed">
                We promise clear and effective communication with everyone who
                comes our way. Whether you have a question for us or a concern
                you'd like to address, you can count on us to give you the
                attention you deserve.
              </p>

              <div className="space-y-4">
                {[
                  "Licensed and fully insured contractors",
                  "Direct insurance company coordination",
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
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Reviews Section */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
                  What Our Customers Say
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Don't just take our word for it - hear from our satisfied
                  customers
                </p>
              </div>

              <div className="relative">
                {/* Review Carousel */}
                <div className="space-y-4">
                  {/* Review 1 */}
                  <Card className="p-4 bg-primary/5 border-primary/20">
                    <div className="flex items-center space-x-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-foreground mb-3 italic">
                      "Quality Coatings LLC did an amazing job on our garage
                      floor. Professional, on-time, and great communication
                      throughout."
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">
                          S
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          Sarah M.
                        </p>
                        <p className="text-xs text-muted-foreground">
                          West Jordan, UT
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Review 2 */}
                  <Card className="p-4 bg-primary/5 border-primary/20">
                    <div className="flex items-center space-x-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-foreground mb-3 italic">
                      "Outstanding service! They handled our insurance claim
                      seamlessly and the exterior painting exceeded
                      expectations."
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">
                          M
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          Mike R.
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Salt Lake City, UT
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Review 3 */}
                  <Card className="p-4 bg-primary/5 border-primary/20">
                    <div className="flex items-center space-x-2 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-foreground mb-3 italic">
                      "The insulation installation was done quickly and
                      professionally. Our energy bills have dropped
                      significantly!"
                    </p>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-sm">
                          J
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          Jennifer L.
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Sandy, UT
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Instagram Feed Section */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
                  Follow Our Work
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  See our latest projects and transformations on Instagram
                </p>
                <a
                  href="https://www.instagram.com/qualitycoatingsutah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <span className="font-semibold">@qualitycoatingsutah</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {/* Instagram Real Images */}
                {[
                  "/images/instagram-samples/instgram-1.jpg",
                  "/images/instagram-samples/instgram-2.jpg",
                  "/images/instagram-samples/instgram-3.jpg",
                  "/images/instagram-samples/instgram-4.jpg",
                  "/images/instagram-samples/instgram-5.jpg",
                  "/images/instagram-samples/instgram-6.jpg",
                ].map((image, index) => (
                  <a
                    key={index}
                    href="https://www.instagram.com/qualitycoatingsutah/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={image}
                      alt={`Epoxy flooring project ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </a>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="https://www.instagram.com/qualitycoatingsutah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                >
                  <span>View More on Instagram</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exceeding Expectations Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold heading-caps text-foreground">
                Exceeding Expectations
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                We know the value of our services, and we think you should too.
                We want you to take advantage without having to feel like you're
                taking a risk. It's for that reason that we guarantee your
                satisfaction.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                In the rare instance we somehow fall short of your expectations,
                then we want to do everything we can to fix the issue. Whatever
                it may entail. Reach out to us, and we'll strive to make sure
                you are happy with our services.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Satisfaction Guaranteed
              </h3>
              <p className="text-muted-foreground">
                Customer service isn't just friendly greetings; it's also a
                commitment to doing right by the client no matter what. We won't
                rest until you're completely satisfied with the end
                result—that's our guarantee to you!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="btn-primary glow-primary text-lg px-8 py-4"
                >
                  Call Us Now!
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:3855286767">
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-ghost text-lg px-8 py-4"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  (385) 528-6767
                </Button>
              </a>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="btn-ghost text-lg px-8 py-4"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <h4 className="text-lg font-bold text-primary mb-2">
                Ask About Our Discounts
              </h4>
              <p className="text-muted-foreground">
                New Customer, Loyalty Program, Seniors and Military Discounts
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
