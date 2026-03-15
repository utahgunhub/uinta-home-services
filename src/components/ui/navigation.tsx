import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Mail } from "lucide-react";
import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/commercial-cleaning-utah", label: "Commercial" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isAboutActive = location.pathname === "/about";
  const navTextClass = isScrolled ? "text-foreground" : "text-white";
  const navMutedTextClass = isScrolled
    ? "text-muted-foreground"
    : "text-white/80";
  const activeNavClass = isScrolled
    ? "border-primary text-primary"
    : "border-white text-white";
  const activeMobileNavClass = isScrolled
    ? "bg-white/10 text-primary"
    : "bg-white/10 text-white";
  const navPanelClass = isScrolled
    ? "border-border/80 bg-background/90 shadow-xl backdrop-blur-xl"
    : "border-white/15 bg-black/20 shadow-lg backdrop-blur-md";
  const logoSrc = isScrolled ? "/nav-logo.png" : "/white-nav-logo.png";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                  : `border-transparent ${navTextClass} hover:text-primary`
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
                      : `border-transparent ${navTextClass} hover:text-primary`
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
                  <a href="/about#reviews">Testimonials</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`border-b-2 px-2 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
                  isActive(link.href)
                    ? activeNavClass
                    : `border-transparent ${navTextClass} hover:text-primary`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/contact">
              <Button variant="default" size="sm" className="btn-primary">
                Get Your Quote
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors hover:text-primary ${navTextClass}`}
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
          <div
            className={`border-t md:hidden ${
              isScrolled ? "border-border/80" : "border-white/10"
            }`}
          >
            <div className="space-y-1 px-3 pb-4 pt-3">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-xl px-3 py-3 text-base font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                  isActive("/")
                    ? activeMobileNavClass
                    : `${navTextClass} hover:bg-white/10 hover:text-primary`
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
                    : `${navTextClass} hover:bg-white/10 hover:text-primary`
                }`}
              >
                About Us
              </Link>
              <a
                href="/about#reviews"
                onClick={() => setIsMenuOpen(false)}
                className={`block rounded-xl px-6 py-2 text-sm font-medium uppercase tracking-[0.12em] transition-colors duration-200 ${
                  navMutedTextClass
                }`}
              >
                Testimonials
              </a>
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-xl px-3 py-3 text-base font-semibold uppercase tracking-[0.14em] transition-colors duration-200 ${
                    isActive(link.href)
                      ? activeMobileNavClass
                      : `${navTextClass} hover:bg-white/10 hover:text-primary`
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
                  <span>taylordwilliams11@gmail.com</span>
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
