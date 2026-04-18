import { Link } from "react-router-dom";
import { Instagram, Star, Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  useBackground?: boolean;
}

const Footer = ({ useBackground = true }: FooterProps) => {
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
      label: "Building & Concrete Pressure Washing",
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
      label: "Auto Detailing",
    },
    {
      href: "/services#solar-panel-cleaning",
      label: "Solar Panel Cleaning",
    },
  ];

  const serviceAreas = [
    {
      county: "Salt Lake County",
      cities: [
        "Alta",
        "Bluffdale",
        "Brighton",
        "Cottonwood Heights",
        "Draper",
        "Herriman",
        "Holladay",
        "Midvale",
        "Millcreek",
        "Murray",
        "Riverton",
        "Salt Lake City",
        "Sandy",
        "South Jordan",
        "South Salt Lake",
        "Taylorsville",
        "West Jordan",
        "West Valley City",
      ],
    },
    {
      county: "Utah County",
      cities: [
        "Alpine",
        "American Fork",
        "Cedar Fort",
        "Cedar Hills",
        "Eagle Mountain",
        "Elk Ridge",
        "Fairfield",
        "Genola",
        "Goshen",
        "Highland",
        "Lehi",
        "Lindon",
        "Mapleton",
        "Orem",
        "Payson",
        "Pleasant Grove",
        "Provo",
        "Salem",
        "Santaquin",
        "Saratoga Springs",
        "Spanish Fork",
        "Springville",
        "Vineyard",
        "Woodland Hills",
      ],
    },
    {
      county: "Weber County",
      cities: [
        "Farr West",
        "Harrisville",
        "Huntsville",
        "Hooper",
        "Marriott-Slaterville",
        "North Ogden",
        "Ogden",
        "Plain City",
        "Pleasant View",
        "Riverdale",
        "Roy",
        "South Ogden",
        "Uintah",
        "Washington Terrace",
        "West Haven",
      ],
    },
    {
      county: "Summit County",
      cities: ["Coalville", "Francis", "Henefer", "Kamas", "Oakley", "Park City"],
    },
    {
      county: "Davis County",
      cities: [
        "Bountiful",
        "Centerville",
        "Clearfield",
        "Clinton",
        "Farmington",
        "Fruit Heights",
        "Kaysville",
        "Layton",
        "North Salt Lake",
        "South Weber",
        "Sunset",
        "Syracuse",
        "West Bountiful",
        "West Point",
        "Woods Cross",
      ],
    },
  ];

  return (
    <footer
      className={`relative overflow-hidden ${
        useBackground ? "border-t border-white/10" : "border-t border-white/20 bg-transparent"
      }`}
    >
      {useBackground && (
        <div className="absolute inset-0">
          <img
            src="/new-images/8 - pine trees.webp"
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,16,10,0.78)_0%,rgba(10,22,13,0.7)_45%,rgba(9,18,12,0.82)_100%)]" />
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center">
          {/* Company Info */}
          <div className="w-full space-y-4 lg:max-w-[220px]">
            <div className="flex items-center space-x-2">
              <img
                src="/white-nav-logo.png"
                alt="Pine Cleaning logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-white/80">
              Local experts with an unwavering commitment to our clients.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/uintawindow/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </a>
              <a
                href="https://share.google/cCJTWRb87w9yFVjJi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-primary"
                aria-label="Reviews"
              >
                <Star className="h-4 w-4" />
                <span>Reviews</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="w-full space-y-4 lg:max-w-[220px]">
            <h3 className="font-semibold heading-caps text-white">Our Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div className="w-full space-y-4 lg:max-w-[220px]">
            <h3 className="font-semibold heading-caps text-white">
              Proudly Serving
            </h3>
            <div className="space-y-2 text-sm">
              {serviceAreas.map((area) => (
                <details
                  key={area.county}
                  className="rounded-lg border border-white/15 bg-white/10 px-3 py-2"
                >
                  <summary className="cursor-pointer font-medium text-white">
                    {area.county}
                  </summary>
                  <div className="mt-2 leading-relaxed text-white/75">
                    {area.cities.map((city, index) => (
                      <span key={`${area.county}-${city}`}>
                        <Link
                          to="/contact#quote-request"
                          className="transition-colors duration-200 hover:text-white hover:underline"
                        >
                          {city}
                        </Link>
                        {index < area.cities.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="w-full space-y-4 lg:max-w-[220px]">
            <h3 className="font-semibold heading-caps text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="pt-2 font-semibold heading-caps text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                <div>
                  <span className="text-white/80 transition-colors hover:text-white">
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
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                <div>
                  <span className="text-white/80 transition-colors hover:text-white">
                    <a
                      href="mailto:management@uintawindowwashing.com"
                      className="hover:underline"
                    >
                      management@uintawindowwashing.com
                    </a>
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-white" />
                <div>
                  <span className="text-sm text-white/80">
                    Serving all of Utah
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-white/15 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/70">
              <div>© {currentYear} PiNE Cleaning. All rights reserved.</div>
              <div className="mt-1">License Number: 11258030-0160</div>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-white/80 transition-colors duration-200 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-white/80 transition-colors duration-200 hover:text-white"
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