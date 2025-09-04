import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState("All");

  const services = [
    "All",
    "Window Cleaning",
    "Gutter Cleaning",
    "Power Washing",
    "Christmas Lights",
    "Dryer Vent Cleaning",
    "Car Detailing",
    "Screen Replacement"
  ];

  // Real project gallery data organized by services
  const projects = [
    {
      id: 1,
      title: "Sparkling Window Transformation",
      service: "Window Cleaning",
      image: "/images/gallery/gallery1.png",
      description:
        "Professional window cleaning service that restored crystal-clear views and enhanced natural light throughout this home",
    },
    {
      id: 2,
      title: "Commercial Building Windows",
      service: "Window Cleaning",
      image: "/images/gallery/gallery2.png",
      description:
        "Large-scale commercial window cleaning project, bringing back the shine to this office building",
    },
    {
      id: 3,
      title: "Gutter System Restoration",
      service: "Gutter Cleaning",
      image: "/images/gallery/gallery3.png",
      description:
        "Complete gutter cleaning and maintenance, ensuring proper water flow and preventing water damage",
    },
    {
      id: 4,
      title: "Residential Gutter Maintenance",
      service: "Gutter Cleaning",
      image: "/images/gallery/gallery4.png",
      description:
        "Thorough gutter cleaning service protecting this home's foundation and landscaping",
    },
    {
      id: 5,
      title: "Driveway Power Washing",
      service: "Power Washing",
      image: "/images/gallery/gallery5.png",
      description:
        "High-pressure cleaning restored this driveway to like-new condition, removing years of built-up grime",
    },
    {
      id: 6,
      title: "House Exterior Cleaning",
      service: "Power Washing",
      image: "/images/gallery/gallery6.png",
      description:
        "Complete house exterior power washing, revealing the true beauty of this home's siding and brickwork",
    },
    {
      id: 7,
      title: "Festive Christmas Display",
      service: "Christmas Lights",
      image: "/images/gallery/gallery7.png",
      description:
        "Professional Christmas light installation creating a magical holiday atmosphere for this family home",
    },
    {
      id: 8,
      title: "Commercial Holiday Lighting",
      service: "Christmas Lights",
      image: "/images/gallery/gallery8.png",
      description:
        "Large-scale commercial Christmas light installation bringing holiday cheer to this business district",
    },
    {
      id: 9,
      title: "Dryer Vent Safety Clean",
      service: "Dryer Vent Cleaning",
      image: "/images/gallery/gallery9.png",
      description:
        "Professional dryer vent cleaning service improving safety and efficiency for this family's laundry system",
    },
    {
      id: 10,
      title: "Luxury Car Detailing",
      service: "Car Detailing",
      image: "/images/gallery/gallery10.png",
      description:
        "Premium car detailing service restoring this vehicle to showroom condition with our professional techniques",
    },
    {
      id: 11,
      title: "Screen Door Replacement",
      service: "Screen Replacement",
      image: "/images/gallery/gallery11.png",
      description:
        "Custom screen replacement service providing fresh, durable screens for optimal airflow and insect protection",
    },
    {
      id: 12,
      title: "Window Screen Installation",
      service: "Screen Replacement",
      image: "/images/gallery/gallery12.png",
      description:
        "Professional window screen replacement ensuring proper fit and long-lasting performance",
    },
    {
      id: 13,
      title: "Patio Door Screens",
      service: "Screen Replacement",
      image: "/images/gallery/gallery13.png",
      description:
        "Custom patio door screen replacement enhancing outdoor living space comfort and functionality",
    },
    {
      id: 14,
      title: "Complete Home Exterior",
      service: "Power Washing",
      image: "/images/gallery/gallery14.png",
      description:
        "Comprehensive exterior cleaning service including siding, walkways, and outdoor surfaces",
    },
  ];

  const filteredProjects =
    selectedService === "All"
      ? projects
      : projects.filter((project) => project.service === selectedService);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold heading-caps text-foreground mb-6">
              Our{" "}
              <span className="text-primary text-glow">Project Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of completed coating and restoration
              projects throughout Utah. Quality craftsmanship in every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => setSelectedService(service)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedService === service
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-background text-foreground hover:bg-accent border border-border"
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl bg-card border border-border cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="aspect-w-4 aspect-h-3 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.description}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-primary/20 backdrop-blur-sm rounded-full text-xs">
                    {project.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold heading-caps text-foreground mb-6">
            Ready for Your Own Transformation?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Let's discuss your project and create something amazing together.
            Every project starts with a free consultation and estimate.
          </p>

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
            <Link to="/services">
              <Button
                variant="outline"
                size="lg"
                className="btn-ghost text-lg px-8 py-4"
              >
                View Services
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-muted-foreground">
            <p>
              Questions? Call us:{" "}
              <span className="text-primary font-semibold">(801) 555-0123</span>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Gallery;
