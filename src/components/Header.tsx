import { useState } from "react";
import { Button } from "./ui/button";
import { Phone, Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  page?: string;
  href?: string;
}

interface HeaderProps {
  onNavigate?: (page: string) => void;
  currentPage?: string;
}

export function Header({ onNavigate, currentPage }: HeaderProps = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "Home", page: "home" },
    { name: "Services", href: "#services" },
    { name: "Fleet", href: "#fleet" },
    { name: "FAQ", href: "#faq" },
    { name: "Rates & Quote", href: "#quote" },
    { name: "About", page: "about" },
    { name: "Contact", page: "contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-silver">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button
              aria-label="Go to home"
              onClick={() => onNavigate?.('home')}
              className="flex items-center focus-visible:ring-2 focus-visible:ring-soft-gold rounded"
            >
              <img
                src="https://img1.wsimg.com/isteam/ip/9f3f78b0-0d9e-422a-bac2-90fa16f6f2be/Genesis%20Logo.png/:/rs=w:147,h:75,cg:true,m/cr=w:147,h:75/qt=q:95"
                alt="Genesis Limo Houston logo"
                className="h-10 w-auto"
                loading="eager"
                decoding="async"
              />
              <span className="sr-only">Genesis Limo Houston</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              link.page ? (
                <button
                  key={index}
                  onClick={() => {
                    onNavigate?.(link.page);
                    setIsMenuOpen(false);
                  }}
                  className={`text-charcoal hover:text-soft-gold transition-colors font-medium px-1 ${
                    currentPage === link.page ? 'text-soft-gold' : ''
                  }`}
                  aria-current={currentPage === link.page ? 'page' : undefined}
                >
                  {link.name}
                </button>
              ) : (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-charcoal hover:text-soft-gold transition-colors font-medium px-1"
                  onClick={() => {
                    // Only navigate to home first if we're not already on home page
                    if (currentPage !== 'home') {
                      onNavigate?.('home');
                      // Small delay to ensure home page loads before scrolling
                      setTimeout(() => {
                        const element = document.querySelector(link.href!);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              )
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="flex items-center gap-2 text-charcoal hover:text-soft-gold border border-silver hover:border-soft-gold"
              asChild
            >
              <a href="tel:713-227-2582">
                <Phone className="h-4 w-4" />
                <span>713-CAR-CLUB</span>
              </a>
            </Button>
            <Button 
              className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black font-medium"
              onClick={() => onNavigate?.('contact')}
            >
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black font-medium px-3 py-2 text-sm"
              onClick={() => onNavigate?.('contact')}
            >
              Quote
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-charcoal hover:text-soft-gold"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-silver/30">
            <nav className="flex flex-col gap-2 pt-4">
              {navLinks.map((link, index) => (
                link.page ? (
                  <button
                    key={index}
                    onClick={() => {
                      onNavigate?.(link.page);
                      setIsMenuOpen(false);
                    }}
                    className={`text-left text-charcoal hover:text-soft-gold transition-colors font-medium py-2 px-1 ${
                      currentPage === link.page ? 'text-soft-gold' : ''
                    }`}
                    aria-current={currentPage === link.page ? 'page' : undefined}
                  >
                    {link.name}
                  </button>
                ) : (
                  <a 
                    key={index}
                    href={link.href} 
                    className="text-charcoal hover:text-soft-gold transition-colors font-medium py-2 px-1"
                    onClick={() => {
                      // Only navigate to home first if we're not already on home page
                      if (currentPage !== 'home') {
                        onNavigate?.('home');
                        // Small delay to ensure home page loads before scrolling
                        setTimeout(() => {
                          const element = document.querySelector(link.href!);
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }
                      setIsMenuOpen(false);
                    }}
                  >
                    {link.name}
                  </a>
                )
              ))}
              <div className="pt-4 border-t border-silver/30">
                <a 
                  href="tel:713-227-2582"
                  className="flex items-center space-x-2 text-soft-gold font-semibold py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="h-5 w-5" />
                  <span>Call 713-CAR-CLUB</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}