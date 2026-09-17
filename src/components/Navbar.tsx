import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "Curriculum", path: "/curriculum" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location.pathname]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 overflow-visible bg-[#000000] transition-all duration-300 ${
          scrolled ? "shadow-md py-2" : "py-2 md:py-3"
        }`}
      >
        <div className="w-full mx-auto flex items-center justify-between px-4 max-w-7xl">
          {/* Logo: small layout box + scale = larger on screen without taller <nav> */}
          <Link to="/" className="flex items-center flex-shrink-0 overflow-visible mr-4 md:mr-8">
            <img
              src={logo}
              alt="GxP IT Solutions"
              className="h-11 w-auto origin-left scale-[1.48] md:h-20 md:scale-[1.22]"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors relative ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-4 right-4 h-[3px] bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex btn-primary text-xs"
            >
              ENROLL NOW
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-foreground/50" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-background shadow-2xl flex flex-col animate-in slide-in-from-right">
            <div className="flex items-center justify-between p-5 border-b border-border">
              <span className="font-heading text-lg font-bold text-foreground">Menu</span>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>
            <div className="flex flex-col p-4 gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3.5 text-sm font-semibold tracking-wide transition-colors ${
                    location.pathname === link.path
                      ? "bg-red-light text-primary border-l-[3px] border-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="p-4 mt-auto">
              <Link to="/contact" className="btn-primary w-full text-center">
                ENROLL NOW
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
