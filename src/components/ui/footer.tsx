import { Link } from "react-router-dom";
import { Facebook, Instagram, Star, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/commercial-cleaning-utah", label: "Commercial" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceLinks = [
    {
      href: "/services#exterior-window-cleaning",
      label: "Exterior Window Cleaning",
    },
    {
      href: "/services#interior-window-cleaning",
      label: "Interior Window Cleaning",
    },
    {
      href: "/services#home-concrete-pressure-washing",
      label: "Home & Concrete Pressure Washing",
    },
    {
      href: "/services#screen-repair-replacement",
      label: "Screen Repair & Replacement",
    },
    {
      href: "/services#christmas-light-installation",
      label: "Christmas Light Fitting & Installation",
    },
    {
      href: "/services#gutter-cleaning",
      label: "Gutter Cleaning",
    },
    {
      href: "/services#automotive-detailing",
      label: "Automotive Detailing",
    },
    {
      href: "/services#solar-panel-cleaning",
      label: "Solar Panel Cleaning",
    },
  ];

  return (
    <footer className="bg-surface-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/nav-logo.png"
                alt="Pine Cleaning logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Utah's trusted home service experts. From windows to gutters, we clean it all with
              professional quality and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://yelp.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label="Yelp Reviews"
              >
                <Star className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold heading-caps">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold heading-caps">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-foreground font-semibold heading-caps">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-muted-foreground hover:text-foreground transition-colors">
                    <a
                      href="tel:8015207948"
                      className="hover:underline"
                    >
                      801-520-7948
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-muted-foreground hover:text-foreground transition-colors">
                    <a
                      href="mailto:marketing@uintawindowwashing.com"
                      className="hover:underline"
                    >
                      marketing@uintawindowwashing.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-muted-foreground text-sm">
                    Serving all of Utah
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              <div>© {currentYear} PiNE Cleaning. All rights reserved.</div>
              <div className="mt-1">License Number: 11258030-0160</div>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;