import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "./button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/color-samples", label: "Color Samples" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">QC</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg heading-caps text-foreground">
                Quality Coatings
              </span>
              <span className="text-xs text-muted-foreground -mt-1">LLC</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(801) 555-0123</span>
            </div>
            <Button variant="default" size="sm" className="btn-primary">
              Free Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-primary bg-accent/50"
                      : "text-foreground hover:text-primary hover:bg-accent/30"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <div className="flex items-center space-x-2 px-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>(801) 555-0123</span>
                </div>
                <div className="flex items-center space-x-2 px-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>info@qualitycoatingsllc.com</span>
                </div>
                <div className="px-3">
                  <Button variant="default" size="sm" className="btn-primary w-full">
                    Get Free Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;