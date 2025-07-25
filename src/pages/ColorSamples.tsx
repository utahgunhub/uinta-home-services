import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import { Badge } from "@/components/ui/badge";

const ColorSamples = () => {
  const colorSamples = [
    {
      name: "Light Beige Speckled",
      description:
        "Warm light beige base with dense black and dark gray speckles, featuring subtle light brown and gold flecks for depth",
      image: "/images/color-samples/sample-1.jpg",
      category: "Warm",
      finish: "High Gloss",
    },
    {
      name: "Neutral Gray Speckled",
      description:
        "Consistent light gray background with uniform black and dark gray speckles, perfect for professional settings",
      image: "/images/color-samples/sample-2.jpg",
      category: "Neutral",
      finish: "Semi-Gloss",
    },
    {
      name: "Bright White Speckled",
      description:
        "Bright white base with prominent black speckles and distinctive brownish-gold flecks that catch the light beautifully",
      image: "/images/color-samples/sample-3.jpg",
      category: "Neutral",
      finish: "Gloss",
    },
    {
      name: "White Terrazzo Style",
      description:
        "Bright white background with black speckles and prominent brownish-gold flecks creating a luxurious terrazzo appearance",
      image: "/images/color-samples/sample-4.jpg",
      category: "Neutral",
      finish: "Satin",
    },
    {
      name: "Cool Gray Speckled",
      description:
        "Cooler, muted light gray base with dense black and dark gray speckles, offering a sophisticated industrial look",
      image: "/images/color-samples/sample-5.jpg",
      category: "Neutral",
      finish: "Matte",
    },
    {
      name: "Soft Gray Speckled",
      description:
        "Soft light gray background with uniform black and dark gray speckles, providing a clean and professional finish",
      image: "/images/color-samples/sample-6.jpg",
      category: "Neutral",
      finish: "Semi-Gloss",
    },
  ];

  const categories = ["All", "Neutral", "Warm"];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold heading-caps text-foreground">
                <span className="text-primary text-glow">Epoxy Color</span>
                <br />
                Samples
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Explore our extensive collection of premium epoxy coating
                colors. From classic neutrals to bold statement hues, find the
                perfect color for your concrete coating project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Color Categories */}
      <section className="py-12 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant="outline"
                className="px-4 py-2 text-sm cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Color Samples Grid */}
      <section className="py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {colorSamples.map((sample, index) => (
              <Card key={index} className="card-service group overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={sample.image}
                    alt={sample.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold heading-caps text-foreground">
                      {sample.name}
                    </h3>
                    <Badge variant="secondary" className="ml-2">
                      {sample.category}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {sample.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Finish:{" "}
                      <span className="font-medium text-foreground">
                        {sample.finish}
                      </span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Colors CTA */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold heading-caps text-foreground mb-6">
            Don't See Your Perfect Color?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            We offer custom color matching and can create unique blends to match
            your exact vision. Our team can work with any color sample or design
            preference to create the perfect coating for your space.
          </p>

          <div className="space-y-4">
            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border">
              <h3 className="font-bold text-foreground mb-2">
                Custom Color Services Include:
              </h3>
              <ul className="text-muted-foreground space-y-1">
                <li>• Color matching from samples or photos</li>
                <li>• Custom metallic and decorative flake blends</li>
                <li>• Multi-tone and gradient effects</li>
                <li>• Logo and pattern integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ColorSamples;
