import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import { 
  Palette, 
  Home, 
  Building2,
  Droplets,
  RectangleHorizontal,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Epoxy & Polyurea Coatings",
      description: "Transform your floors with durable, chemical-resistant coatings that last for decades.",
      features: [
        "Garage floor epoxy systems",
        "Basement floor coatings", 
        "Commercial & industrial flooring",
        "Decorative flake systems",
        "Anti-slip textures available"
      ],
      image: "🏠"
    },
    {
      icon: Home,
      title: "Full Exterior Stucco Work",
      description: "Complete stucco installation, repair, and renovation services for residential and commercial properties.",
      features: [
        "New stucco installation",
        "Stucco repair & patching",
        "Texture matching & finishing",
        "Color matching services",
        "Weather-resistant systems"
      ],
      image: "🏗️"
    },
    {
      icon: Building2,
      title: "Stonework Installation",
      description: "Expert stone and masonry work that adds timeless beauty and value to your property.",
      features: [
        "Natural stone installation",
        "Cultured stone systems",
        "Stone repair & restoration",
        "Retaining walls",
        "Decorative stonework"
      ],
      image: "🪨"
    },
    {
      icon: Droplets,
      title: "Gutters & Downspouts",
      description: "Protect your property with professional gutter installation and maintenance services.",
      features: [
        "Seamless gutter installation",
        "Gutter repair & cleaning",
        "Downspout installation",
        "Gutter guard systems",
        "Storm damage restoration"
      ],
      image: "🌧️"
    },
    {
      icon: Home,
      title: "Soffit & Fascia",
      description: "Complete soffit and fascia services to protect and enhance your home's exterior.",
      features: [
        "Soffit installation & repair",
        "Fascia board replacement",
        "Ventilation systems",
        "Custom color matching",
        "Storm damage repairs"
      ],
      image: "🏡"
    },
    {
      icon: RectangleHorizontal,
      title: "Window Replacement",
      description: "Energy-efficient window installation and replacement services for improved comfort and savings.",
      features: [
        "Energy-efficient windows",
        "Custom window sizing",
        "Professional installation",
        "Frame repair & replacement",
        "Insurance claim assistance"
      ],
      image: "🪟"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold heading-caps text-foreground mb-6">
              Our <span className="text-primary text-glow">Professional Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive coating and restoration services for residential, commercial, 
              and industrial properties throughout Utah. Every project backed by our 
              quality guarantee.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-primary glow-primary text-lg px-8 py-4">
                Get Free Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-service group overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <service.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold heading-caps text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-foreground text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="pt-4">
                        <Link 
                          to="/contact" 
                          className="text-primary hover:text-primary-glow font-semibold inline-flex items-center transition-colors duration-200"
                        >
                          Request Quote <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
              Quality That Sets Us Apart
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every service we provide is backed by our commitment to excellence, 
              professional expertise, and customer satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-service text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold heading-caps text-foreground mb-4">
                  Premium Materials
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use only the highest quality materials from trusted manufacturers 
                  to ensure long-lasting results that exceed industry standards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-service text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold heading-caps text-foreground mb-4">
                  Licensed & Insured
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fully licensed contractors with comprehensive insurance coverage. 
                  Your project is protected from start to finish.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-service text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Building2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold heading-caps text-foreground mb-4">
                  Insurance Coordination
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We handle all insurance paperwork and work directly with your 
                  insurance company to streamline the claims process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold heading-caps text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Get a free, no-obligation estimate for your coating or restoration project. 
            We'll work with you to find the perfect solution for your needs and budget.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-primary glow-primary text-lg px-8 py-4">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="outline" size="lg" className="btn-ghost text-lg px-8 py-4">
                View Our Work
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-muted-foreground">
            <p>Call us today: <span className="text-primary font-semibold">(801) 555-0123</span></p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Services;