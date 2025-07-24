import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import { 
  Shield, 
  Award, 
  Users, 
  CheckCircle, 
  Star,
  ArrowRight,
  Palette,
  Home,
  Building2
} from "lucide-react";
import heroImage from "@/assets/hero-coating.jpg";

const Index = () => {
  const features = [
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully licensed contractors with comprehensive insurance coverage for your peace of mind."
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Over 15 years of experience delivering premium coating solutions across Utah."
    },
    {
      icon: Users,
      title: "Insurance Coordination",
      description: "We handle all the paperwork and work directly with your insurance company."
    }
  ];

  const services = [
    {
      icon: Palette,
      title: "Epoxy & Polyurea Coatings",
      description: "Durable, beautiful floor coatings for garages, basements, and commercial spaces."
    },
    {
      icon: Home,
      title: "Stucco & Exterior Work",
      description: "Complete exterior renovations including stucco, gutters, and window replacement."
    },
    {
      icon: Building2,
      title: "Commercial Projects",
      description: "Large-scale coating solutions for warehouses, retail spaces, and industrial facilities."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero min-h-[90vh] flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={heroImage} 
            alt="Professional coating work"
            className="w-full h-full object-cover opacity-20"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold heading-caps text-foreground">
                  Utah's Trusted{" "}
                  <span className="text-primary text-glow">Coating Experts</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  From patios to warehouses, we coat it all. Professional quality, 
                  insurance coordination, and results that last.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary glow-primary text-lg px-8 py-4">
                    Get a Free Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/gallery">
                  <Button variant="outline" size="lg" className="btn-ghost text-lg px-8 py-4">
                    View Our Work
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  Rated 5/5 by 200+ satisfied customers
                </span>
              </div>
            </div>
            
            <div className="lg:flex justify-center hidden">
              <div className="relative">
                <img 
                  src={heroImage}
                  alt="Professional epoxy coating work" 
                  className="rounded-2xl shadow-2xl max-w-lg"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
              Why Choose Quality Coatings LLC?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine expert craftsmanship with exceptional service to deliver 
              coating solutions that exceed expectations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-service text-center group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <feature.icon className="w-12 h-12 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold heading-caps text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
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
                Experience You Can Trust
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For over 15 years, Quality Coatings LLC has been Utah's go-to 
                choice for professional coating and restoration services. We pride 
                ourselves on quality workmanship, transparent pricing, and 
                exceptional customer service.
              </p>
              
              <div className="space-y-4">
                {[
                  "Licensed and fully insured contractors",
                  "Direct insurance company coordination",
                  "Free estimates and competitive pricing", 
                  "Garage floors, driveways, pool decks, and more",
                  "Complete exterior renovations and repairs"
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
                  <div className="text-muted-foreground">Projects Completed</div>
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
    </PageLayout>
  );
};

export default Index;
