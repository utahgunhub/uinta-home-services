import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import { 
  Shield, 
  FileText, 
  Users, 
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  Award
} from "lucide-react";

const Insurance = () => {
  const insuranceProviders = [
    "State Farm",
    "Allstate", 
    "Farmers Insurance",
    "USAA",
    "Progressive",
    "Liberty Mutual",
    "Nationwide",
    "American Family"
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "We inspect the damage and document everything with detailed photos and measurements."
    },
    {
      step: "02", 
      title: "Insurance Contact",
      description: "We contact your insurance company directly and provide all necessary documentation."
    },
    {
      step: "03",
      title: "Claims Processing",
      description: "We handle all paperwork and communicate with adjusters throughout the process."
    },
    {
      step: "04",
      title: "Project Completion", 
      description: "Once approved, we complete your project with quality materials and expert craftsmanship."
    }
  ];

  const benefits = [
    {
      icon: FileText,
      title: "Paperwork Handled",
      description: "We manage all insurance paperwork, claims, and documentation so you don't have to."
    },
    {
      icon: Users,
      title: "Direct Communication",
      description: "We work directly with your insurance adjuster to ensure proper coverage and approval."
    },
    {
      icon: Clock,
      title: "Faster Processing",
      description: "Our experience with insurance claims helps expedite the approval and payment process."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "All work meets or exceeds insurance requirements and industry standards."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold heading-caps text-foreground">
                  <span className="text-primary text-glow">Insurance Help</span><br />
                  Made Simple
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  We handle the paperwork. You enjoy the results. Let our insurance 
                  specialists coordinate with your provider for a seamless claims experience.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary glow-primary text-lg px-8 py-4">
                    Get Insurance Help
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:8015550123">
                  <Button variant="outline" size="lg" className="btn-ghost text-lg px-8 py-4">
                    <Phone className="mr-2 w-5 h-5" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="lg:flex justify-center hidden">
              <Card className="max-w-md p-8 bg-primary/5 border-primary/20">
                <CardContent className="space-y-6 p-0">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Fully Insured</h3>
                      <p className="text-muted-foreground text-sm">Licensed & bonded contractors</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Claims Expert</h3>
                      <p className="text-muted-foreground text-sm">15+ years insurance experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">Guaranteed Work</h3>
                      <p className="text-muted-foreground text-sm">Quality guarantee on all projects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
              How Our Insurance Process Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've streamlined the insurance claims process to make it as easy 
              as possible for you. Here's how we handle everything from start to finish.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="card-service text-center group relative">
                <CardContent className="p-8">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h3 className="text-xl font-bold heading-caps text-foreground mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
              Why Choose Our Insurance Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our insurance coordination services save you time, reduce stress, 
              and ensure you get the coverage you deserve.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-service text-center group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <benefit.icon className="w-12 h-12 text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold heading-caps text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Providers */}
      <section className="py-20 bg-surface-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold heading-caps text-foreground mb-4">
              We Work With All Major Insurers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our team has experience working with all major insurance providers. 
              We know their processes and requirements inside and out.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {insuranceProviders.map((provider, index) => (
              <Card key={index} className="p-6 text-center bg-background border-border hover:border-primary/30 transition-colors duration-200">
                <div className="text-foreground font-semibold">{provider}</div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Don't see your insurance provider? We work with many more companies. 
              Contact us to discuss your specific situation.
            </p>
            <Link to="/contact">
              <Button size="lg" className="btn-primary">
                Contact Us About Your Insurer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold heading-caps text-foreground mb-6">
            Let Us Handle Your Insurance Claim
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Don't let insurance paperwork delay your project. Our experienced team 
            will coordinate everything with your insurance company, so you can focus 
            on what matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-primary glow-primary text-lg px-8 py-4">
                Get Insurance Help
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:8015550123">
              <Button variant="outline" size="lg" className="btn-ghost text-lg px-8 py-4">
                <Phone className="mr-2 w-5 h-5" />
                (801) 555-0123
              </Button>
            </a>
          </div>
          
          <div className="mt-8 text-muted-foreground">
            <p>Available 24/7 for emergency claims assistance</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Insurance;