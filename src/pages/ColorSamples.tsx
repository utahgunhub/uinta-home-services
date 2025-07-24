import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import { Badge } from "@/components/ui/badge";

const ColorSamples = () => {
  const colorSamples = [
    {
      name: "Classic Gray",
      description: "Timeless neutral perfect for garages and basements",
      image: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=400&h=300&fit=crop",
      category: "Neutral",
      finish: "Satin"
    },
    {
      name: "Ocean Blue",
      description: "Vibrant blue reminiscent of deep ocean waters",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      category: "Blue",
      finish: "Gloss"
    },
    {
      name: "Sunset Orange",
      description: "Warm, energetic orange for bold statement floors",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      category: "Warm",
      finish: "Semi-Gloss"
    },
    {
      name: "Forest Green",
      description: "Rich, natural green perfect for outdoor applications",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      category: "Green",
      finish: "Matte"
    },
    {
      name: "Arctic White",
      description: "Clean, bright white for modern minimalist spaces",
      image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=400&h=300&fit=crop",
      category: "Neutral",
      finish: "High Gloss"
    },
    {
      name: "Charcoal Black",
      description: "Sophisticated black with subtle metallic flecks",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=400&h=300&fit=crop",
      category: "Dark",
      finish: "Satin"
    }
  ];

  const categories = ["All", "Neutral", "Blue", "Warm", "Green", "Dark"];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold heading-caps text-foreground">
                <span className="text-primary text-glow">Epoxy Color</span><br />
                Samples
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Explore our extensive collection of premium epoxy coating colors. 
                From classic neutrals to bold statement hues, find the perfect color 
                for your concrete coating project.
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
                      Finish: <span className="font-medium text-foreground">{sample.finish}</span>
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
              <h3 className="font-bold text-foreground mb-2">Custom Color Services Include:</h3>
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