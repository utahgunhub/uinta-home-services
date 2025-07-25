# Rotating Hero Section - Adding Images

## Current Setup

The rotating hero section currently uses 5 slides with different content but the same background image. Each slide has:

1. **Slide 1**: "Welcome to Quality Coatings LLC" - Main company introduction
2. **Slide 2**: "Concrete Waterproof Coating" - Focus on waterproofing services
3. **Slide 3**: "Professional Painting Services" - Focus on painting services
4. **Slide 4**: "Insulation Installation" - Focus on insulation services
5. **Slide 5**: "Epoxy Flooring" - Focus on epoxy floor coatings

## Adding New Images

To add different background images for each slide:

### Step 1: Add Images to Assets

1. Place your new images in the `src/assets/` folder
2. Recommended image specifications:
   - **Resolution**: 1920x1080 or higher
   - **Format**: JPG or PNG
   - **File size**: Optimize for web (under 500KB each)
   - **Content**: High-quality photos of coating work, epoxy floors, or construction sites

### Step 2: Import Images

Add imports at the top of `src/components/RotatingHero.tsx`:

```typescript
import heroImage from "@/assets/hero-coating.jpg";
import waterproofImage from "@/assets/waterproof-coating.jpg"; // New image
import paintingImage from "@/assets/painting-services.jpg"; // New image
import insulationImage from "@/assets/insulation-work.jpg"; // New image
import epoxyImage from "@/assets/epoxy-flooring.jpg"; // New image
```

### Step 3: Update Slide Configuration

In the `slides` array, update the `image` property for each slide:

```typescript
const slides: HeroSlide[] = [
  {
    id: 1,
    image: heroImage, // Welcome image
    // ... other properties
  },
  {
    id: 2,
    image: waterproofImage, // Waterproof coating image
    // ... other properties
  },
  {
    id: 3,
    image: paintingImage, // Painting services image
    // ... other properties
  },
  {
    id: 4,
    image: insulationImage, // Insulation installation image
    // ... other properties
  },
  {
    id: 5,
    image: epoxyImage, // Epoxy flooring image
    // ... other properties
  },
];
```

## Visual Effects

Each slide currently has different visual treatments:

- **Slide 1**: Standard brightness (90%) with subtle image enhancement
- **Slide 2**: Slightly reduced brightness (85%) with increased contrast
- **Slide 3**: Standard brightness (90%) with increased saturation
- **Slide 4**: Reduced brightness (85%) with hue rotation
- **Slide 5**: Standard brightness (90%) with enhanced contrast and saturation

**Text Container**: All slides feature a semi-transparent dark container with backdrop blur around the text content for optimal readability.

## Customization Options

### Changing Slide Duration

Modify the interval in the `useEffect` hook:

```typescript
setInterval(() => {
  setCurrentSlide((prev) => (prev + 1) % slides.length);
}, 5000); // Change this value (in milliseconds)
```

### Adding More Slides

Simply add more objects to the `slides` array. The component will automatically handle the rotation.

### Modifying Visual Effects

Each slide can have different:

- Image filters (brightness, contrast, saturation)
- Overlay opacity
- Gradient directions and colors

## Performance Considerations

- Use `loading="eager"` only for the first slide
- Use `loading="lazy"` for subsequent slides
- Optimize images for web use
- Consider using WebP format for better compression
