import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Garages", "Commercial", "Homes", "Patios"];

  // Mock gallery data - in a real app, these would be actual project images
  const projects = [
    {
      id: 1,
      title: "Modern Garage Epoxy Floor",
      category: "Garages",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
      description: "Metallic epoxy flooring with decorative flakes"
    },
    {
      id: 2,
      title: "Commercial Warehouse Coating",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&h=600&fit=crop",
      description: "Heavy-duty polyurea coating for industrial use"
    },
    {
      id: 3,
      title: "Residential Stucco Renovation",
      category: "Homes",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      description: "Complete exterior stucco restoration and painting"
    },
    {
      id: 4,
      title: "Pool Deck Coating",
      category: "Patios",
      image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?w=800&h=600&fit=crop",
      description: "Non-slip decorative concrete coating"
    },
    {
      id: 5,
      title: "Luxury Home Garage",
      category: "Garages",
      image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
      description: "Premium epoxy with custom color scheme"
    },
    {
      id: 6,
      title: "Office Building Exterior",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      description: "Commercial stucco and window replacement"
    },
    {
      id: 7,
      title: "Basement Floor Coating",
      category: "Homes",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      description: "Moisture-resistant basement flooring system"
    },
    {
      id: 8,
      title: "Outdoor Patio Restoration",
      category: "Patios",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
      description: "Decorative stamped concrete overlay"
    },
    {
      id: 9,
      title: "Three-Car Garage Transformation",
      category: "Garages",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop",
      description: "Full garage makeover with storage solutions"
    },
    {
      id: 10,
      title: "Retail Store Front",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      description: "Modern storefront renovation"
    },
    {
      id: 11,
      title: "Custom Home Exterior",
      category: "Homes",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
      description: "Complete exterior coating and stonework"
    },
    {
      id: 12,
      title: "Entertainment Patio",
      category: "Patios",
      image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&h=600&fit=crop",
      description: "Outdoor living space with decorative coatings"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold heading-caps text-foreground mb-6">
              Our <span className="text-primary text-glow">Project Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of completed coating and restoration projects 
              throughout Utah. Quality craftsmanship in every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-background text-foreground hover:bg-accent border border-border"
                }`}
              >
                {category}
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
                    {project.category}
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
              <Button size="lg" className="btn-primary glow-primary text-lg px-8 py-4">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="btn-ghost text-lg px-8 py-4">
                View Services
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-muted-foreground">
            <p>Questions? Call us: <span className="text-primary font-semibold">(801) 555-0123</span></p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Gallery;