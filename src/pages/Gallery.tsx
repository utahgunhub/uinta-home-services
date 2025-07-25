import { useState } from "react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Garages", "Commercial", "Homes", "Patios"];

  // Real project gallery data
  const projects = [
    {
      id: 1,
      title: "Outdoor Covered Patio",
      category: "Patios",
      image: "/images/gallery/gallery1.png",
      description:
        "Newly finished outdoor patio with light gray textured floor, bordered by red brick walls and warm wooden ceiling",
    },
    {
      id: 2,
      title: "Commercial Walkway Coating",
      category: "Commercial",
      image: "/images/gallery/gallery2.png",
      description:
        "Freshly coated light gray concrete surface with subtle speckled texture, perfect for high-traffic areas",
    },
    {
      id: 3,
      title: "Bass Boat Garage Floor",
      category: "Garages",
      image: "/images/gallery/gallery3.png",
      description:
        "Light gray speckled epoxy floor in a spacious garage, featuring high reflectivity and professional finish",
    },
    {
      id: 4,
      title: "Clean Garage Epoxy",
      category: "Garages",
      image: "/images/gallery/gallery4.png",
      description:
        "Pristine light gray epoxy coating with dense speckled pattern, creating a granite-like appearance",
    },
    {
      id: 5,
      title: "Industrial Epoxy Floor",
      category: "Commercial",
      image: "/images/gallery/gallery5.png",
      description:
        "Light gray epoxy with speckled pattern, featuring expansion joints and highly reflective surface",
    },
    {
      id: 6,
      title: "Floor Preparation Process",
      category: "Commercial",
      image: "/images/gallery/gallery6.png",
      description:
        "Professional floor cleaning and preparation using industrial vacuum equipment for epoxy application",
    },
    {
      id: 7,
      title: "New Epoxy Installation",
      category: "Garages",
      image: "/images/gallery/gallery7.png",
      description:
        "Freshly applied light gray epoxy floor with speckled finish in a clean, empty garage space",
    },
    {
      id: 8,
      title: "Garage Epoxy with Windows",
      category: "Garages",
      image: "/images/gallery/gallery8.png",
      description:
        "Light gray speckled epoxy floor with natural light streaming through windows, creating a bright workspace",
    },
    {
      id: 9,
      title: "Black Speckled Epoxy",
      category: "Garages",
      image: "/images/gallery/gallery9.png",
      description:
        "High-gloss black epoxy floor with dense white and light gray speckles, creating a sophisticated salt-and-pepper effect",
    },
    {
      id: 10,
      title: "Garage with Drywall Prep",
      category: "Garages",
      image: "/images/gallery/gallery10.png",
      description:
        "Light gray speckled epoxy floor with walls prepped for painting, showcasing seamless floor-to-wall transition",
    },
    {
      id: 11,
      title: "Marble Effect Epoxy",
      category: "Commercial",
      image: "/images/gallery/gallery11.png",
      description:
        "Creamy beige epoxy floor with striking dark gray swirls and streaks, creating a luxurious marble-like effect",
    },
    {
      id: 12,
      title: "Metallic Bronze Epoxy",
      category: "Commercial",
      image: "/images/gallery/gallery12.png",
      description:
        "Dark metallic brown epoxy with swirled pattern, creating mirror-like reflections in a spacious commercial setting",
    },
    {
      id: 13,
      title: "Dark Speckled Epoxy",
      category: "Garages",
      image: "/images/gallery/gallery13.png",
      description:
        "Highly reflective dark epoxy floor with dense black, gray, and white speckles, featuring seamless black baseboards",
    },
    {
      id: 14,
      title: "Basement Epoxy Coating",
      category: "Homes",
      image: "/images/gallery/gallery14.png",
      description:
        "Light beige epoxy floor with darker flecks in an unfinished basement, providing moisture-resistant protection",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

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
