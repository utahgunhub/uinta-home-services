import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import {
  Award,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Phone,
  Mail,
} from "lucide-react";
import heroImage from "@/assets/hero-coating.jpg";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "A Tradition of Excellence",
      description:
        "Our company was founded on a tradition of pride and excellence. While much has changed about us over the years, that legacy remains with us at every turn. It's what governs our business practices—and what lets our services shine.",
      details: [
        "Up-to-date training and regular professional development",
        "Continual organizational improvements",
        "Commitment to meeting the highest industry standards",
        "Spare no expense in upholding our reputation",
      ],
    },
    {
      icon: Users,
      title: "Leaders in Our Field",
      description:
        "Years of training, years of experience, and a commitment to excellence have earned us a leading position in our field. We are a skilled team of experts, possessing an impeccable record of success and a reputation that precedes us.",
      details: [
        "Skilled team of experts with impeccable record",
        "Diligence, persistence, and highest standards",
        "Professional conduct in all operations",
        "Stand head and shoulders above the competition",
      ],
    },
    {
      icon: Shield,
      title: "Honesty and Integrity",
      description:
        "Honesty and integrity define our business model. It is at the very core of our operations. We maintain a strong company ethos based on transparency and respect for our clients.",
      details: [
        "Transparency and respect for all clients",
        "No-nonsense, unbiased professional opinion",
        "Pride, passion, and utmost care in all work",
        "Founded on culture of professionalism and dedication",
      ],
    },
  ];

  const stats = [
    { number: "15+", label: "Years of Excellence" },
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Happy Customers" },
    { number: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold heading-caps text-foreground mb-6">
              About{" "}
              <span className="text-primary text-glow">
                PiNE Cleaning
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A name that means excellence. A name you can trust. Founded on a
              tradition of pride, excellence, and unwavering commitment to our
              clients.
            </p>
          </div>
        </div>
      </section>

      {/* Tradition of Excellence Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold heading-caps text-foreground">
                A Tradition of Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our company was founded on a tradition of pride and excellence.
                While much has changed about us over the years, that legacy
                remains with us at every turn. It's what governs our business
                practices—and what lets our services shine.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to meeting the highest of industry standards.
                Up-to-date training, regular professional development, continual
                organizational improvements: We spare no expense in upholding
                our reputation and staying at the peak of our craft.
              </p>

              <div className="space-y-4">
                {[
                  "Up-to-date training and certifications",
                  "Regular professional development",
                  "Continual organizational improvements",
                  "Highest industry standards compliance",
                  "Peak performance in our craft",
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
                    Get in Touch Today
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <img
                src={heroImage}
                alt="PiNE Cleaning team at work"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide every decision, every project, and every
              interaction with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-service group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <value.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold heading-caps text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {value.description}
                  </p>
                  <ul className="space-y-2">
                    {value.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-start space-x-2 text-sm text-muted-foreground"
                      >
                        <Star className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Numbers that speak to our commitment, experience, and the trust
              our clients place in us.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="p-6 text-center bg-primary/5 border-primary/20"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold heading-caps text-foreground mb-6">
            A Name You Can Trust
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Our clients have come to expect the very best from us, and we think
            you should be able to as well. PiNE Cleaning: It's a name that
            means excellence. It's a name you can trust.
          </p>

          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Our Promise to You
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              As a service provider, we take our responsibilities to you
              seriously. Everything that we do, we do it with pride, passion,
              and the utmost care. We know our clients have come to appreciate
              our no-nonsense, unbiased professional opinion. Rest assured when
              you work with us you'll get to appreciate it too.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                size="lg"
                className="btn-primary glow-primary text-lg px-8 py-4"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:8015207948">
              <Button
                variant="default"
                size="lg"
                className="group w-full sm:w-auto px-8"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call 801-520-7948
              </Button>
            </a>
          </div>

          <div className="mt-8 text-muted-foreground">
            <p>
              PiNE Cleaning: Founded on a culture of professionalism,
              dedication, and excellence.
            </p>
            <p className="mt-2">Founded on honesty, integrity, and respect.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
