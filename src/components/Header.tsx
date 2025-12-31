import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Início", href: "#inicio" },
    { label: "Reboques", href: "#reboques" },
    { label: "Vantagens", href: "#vantagens" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" aria-label="Júlio Reboques — Início" className="flex items-center">
            <img
              src={logo}
              alt="Júlio Reboques"
              className="h-14 w-auto"
              decoding="async"
              loading="eager"
            />
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-primary-foreground/90 hover:text-brand-gold font-medium transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:5130222995" className="flex items-center gap-2 text-brand-gold font-medium">
              <Phone className="h-4 w-4" />
              (51) 3022-2995
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
          {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-foreground/10 animate-fade-in">
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-primary-foreground/90 hover:text-brand-gold font-medium transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="tel:5130222995" 
                className="flex items-center gap-2 text-brand-gold font-medium py-2"
              >
                <Phone className="h-4 w-4" />
                (51) 3022-2995
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
