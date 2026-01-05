import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@/assets/logo.jpg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#manifesto", label: "המניפסט" },
    { href: "#models", label: "המודלים" },
    { href: "#process", label: "התהליך" },
    { href: "#contact", label: "צור קשר" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border py-2"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-full px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-4 group">
            <div className="relative w-10 h-10 overflow-hidden border border-foreground/10 group-hover:border-primary transition-colors duration-300 rounded-none">
              <img
                src={logoImage}
                alt="Logo"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col leading-none justify-center">
              <span className="font-black text-xl tracking-tighter" dir="ltr">
                &lt;/A.D_VANTAGE&gt;
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-12 items-center">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="nav-link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-lab px-6 py-3 text-xs"
            >
              <span>התחל פרויקט</span>
              <ArrowLeft className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 hover:bg-muted transition-colors rounded-none"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-8 h-8" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-background z-[60] flex flex-col justify-center items-center gap-10 md:hidden"
          >
            <button
              className="absolute top-6 right-6 p-2 hover:bg-muted transition-colors rounded-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                onClick={() => scrollToSection(link.href)}
                className="text-4xl font-black hover:text-primary transition-colors tracking-tight"
              >
                {link.label}
              </motion.button>
            ))}
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="mt-8"
            >
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="btn-lab px-8 py-4"
                >
                  <span>התחל פרויקט</span>
                </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;