import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Mail, Phone } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/commercial-cleaning-utah", label: "Commercial" },
    { href: "/contact", label: "Contact" },
  ];
  const serviceMenuLinks = [
    { href: "/services", label: "All Services" },
    { href: "/services#exterior-window-cleaning", label: "Exterior Window Cleaning" },
    { href: "/services#interior-window-cleaning", label: "Interior Window Cleaning" },
    {
      href: "/services#home-concrete-pressure-washing",
      label: "Building & Concrete Pressure Washing",
    },
    { href: "/services#screen-repair-replacement", label: "Screen Repair & Replacement" },
    {
      href: "/services#christmas-light-installation",
      label: "Christmas Light Installation",
    },
    { href: "/services#gutter-cleaning", label: "Gutter Cleaning" },
    { href: "/services#automotive-detailing", label: "Auto Detailing" },
    { href: "/services#solar-panel-cleaning", label: "Solar Panel Cleaning" },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isAboutActive = location.pathname === "/about";
  const isServicesActive = location.pathname === "/services";
  const navTextClass = "text-white";
  const navMutedTextClass = "text-white/80";
  const activeNavClass = "border-white text-white";
  const activeMobileNavClass = "bg-white/10 text-white";
  const navPanelClass = "border-white/15 bg-black/20 shadow-lg backdrop-blur-md";
  const logoSrc = "/white-nav-logo.png";

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto max-w-7xl rounded-[1.75rem] border transition-all duration-300 ${navPanelClass}`}
      >
        <div className="relative flex items-center justify-between px-5 sm:px-6 lg:px-8 min-h-20">
          <Link
            to="/"
            className="flex items-center transition-transform duration-300 hover:scale-110"
          >
            <img
              src={logoSrc}
              alt="Pine Cleaning logo"
              className="h-14 w-auto drop-shadow-[0_8px_20px_rgba(0,0,0,0.22)] transition-all duration-300 sm:h-16"
            />
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center space-x-6 md:flex">
            <Link
              to="/"
              className={`border-b-2 px-2 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                isActive("/")
                  ? activeNavClass
                  : `border-transparent ${navTextClass} hover:text-gray-200`
              }`}
            >
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className={`flex items-center gap-1 whitespace-nowrap border-b-2 px-2 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                    isAboutActive
                      ? activeNavClass
                      : `border-transparent ${navTextClass} hover:text-gray-200`
                  }`}
                >
                  About Us
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-48 rounded-2xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur-xl"
              >
                <DropdownMenuItem asChild className="rounded-xl px-3 py-2 text-sm font-medium">
                  <Link to="/about">About us</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl px-3 py-2 text-sm font-medium">
                  <a href="/about#faqs">FAQs</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-xl px-3 py-2 text-sm font-medium">
                  <a href="/about#reviews">Testimonials</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className={`flex items-center gap-1 whitespace-nowrap border-b-2 px-2 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                    isServicesActive
                      ? activeNavClass
                      : `border-transparent ${navTextClass} hover:text-gray-200`
                  }`}
                >
                  Services
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-64 rounded-2xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur-xl"
              >
                {serviceMenuLinks.map((link) => (
                  <DropdownMenuItem
                    key={link.href}
                    asChild
                    className="rounded-xl px-3 py-2 text-sm font-medium"
                  >
                    <a href={link.href}>{link.label}</a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`border-b-2 px-2 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                  isActive(link.href)
                    ? activeNavClass
                    : `border-transparent ${navTextClass} hover:text-gray-200`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:8015207948">
              <Button variant="default" size="sm" className="btn-primary">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="default" size="sm" className="btn-primary">
                Get Your Quote
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors hover:text-gray-200 ${navTextClass}`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-white/10 md:hidden">
            <div className="space-y-1 px-3 pb-4 pt-3">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-xl px-3 py-3 text-base font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                  isActive("/")
                    ? activeMobileNavClass
                    : `${navTextClass} hover:bg-white/10 hover:text-gray-200`
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-xl px-3 py-3 text-base font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                  isAboutActive
                    ? activeMobileNavClass
                    : `${navTextClass} hover:bg-white/10 hover:text-gray-200`
                }`}
              >
                About Us
              </Link>
              <a
                href="/about#faqs"
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-xl px-6 py-2 text-sm font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${
                  navMutedTextClass
                }`}
              >
                FAQs
              </a>
              <a
                href="/about#reviews"
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-xl px-6 py-2 text-sm font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${
                  navMutedTextClass
                }`}
              >
                Testimonials
              </a>
              <Link
                to="/services"
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-xl px-3 py-3 text-base font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                  isServicesActive
                    ? activeMobileNavClass
                    : `${navTextClass} hover:bg-white/10 hover:text-gray-200`
                }`}
              >
                Services
              </Link>
              {serviceMenuLinks.slice(1).map((service) => (
                <a
                  key={service.href}
                  href={service.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-xl px-6 py-2 text-sm font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${
                    navMutedTextClass
                  }`}
                >
                  {service.label}
                </a>
              ))}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-xl px-3 py-3 text-base font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                    isActive(link.href)
                      ? activeMobileNavClass
                      : `${navTextClass} hover:bg-white/10 hover:text-gray-200`
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <div
                  className={`flex items-center space-x-2 px-3 text-sm ${navMutedTextClass}`}
                >
                  <Mail className="w-4 h-4" />
                  <span>management@uintawindowwashing.com</span>
                </div>
                <div className="px-3">
                  <Link to="/contact">
                    <Button
                      variant="default"
                      size="sm"
                      className="btn-primary w-full"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Your Quote
                    </Button>
                  </Link>
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
