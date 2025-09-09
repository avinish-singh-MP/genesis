import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { name: "Home", page: "home" },
  { name: "Services", href: "#services" },
  { name: "Fleet", href: "#fleet" },
  { name: "Why Choose Genesis", href: "#why-choose" },
  { name: "About", page: "about" },
  { name: "Contact", page: "contact" },
  { name: "Get Quote", page: "contact" }
];

const services = [
  { name: "Airport Transportation", href: "#services" },
  { name: "Corporate Travel", href: "#services" },
  { name: "Special Events", href: "#services" },
  { name: "Hourly Service", href: "#services" },
  { name: "Group Transportation", href: "#services" },
  { name: "VIP Protection", href: "#services" }
];

const serviceAreas = [
  "Downtown Houston",
  "The Woodlands",
  "Sugar Land",
  "Memorial City",
  "River Oaks",
  "IAH Airport",
  "Hobby Airport",
  "Galveston"
];

interface QuickLink {
  name: string;
  page?: string;
  href?: string;
}

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps = {}) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-charcoal to-rich-black text-off-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Genesis
            </h3>
            <div className="mb-4">
              <span className="inline-block bg-soft-gold/20 text-soft-gold px-3 py-1 rounded-full text-sm font-medium">
                Established 1990
              </span>
            </div>
            <p className="text-off-white/80 mb-6 leading-relaxed">
              Houston's premier luxury transportation service, providing professional chauffeured vehicles 
              for over three decades.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="tel:713-227-2582" 
                className="flex items-center space-x-3 text-off-white hover:text-soft-gold transition-colors group"
              >
                <Phone className="h-5 w-5 text-soft-gold" />
                <div>
                  <div className="font-semibold">713-CAR-CLUB</div>
                  <div className="text-sm text-off-white/70">(713) 227-2582</div>
                </div>
              </a>
              
              <div className="flex items-center space-x-3 text-off-white/70">
                <Mail className="h-5 w-5 text-soft-gold" />
                <div>
                  <div>info@genesishouston.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-off-white/70">
                <MapPin className="h-5 w-5 text-soft-gold" />
                <div>
                  <div>Houston, Texas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-off-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.page ? (
                    <button
                      onClick={() => onNavigate?.(link.page)}
                      className="text-off-white/70 hover:text-soft-gold transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a 
                      href={link.href} 
                      className="text-off-white/70 hover:text-soft-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-off-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href={service.href} 
                    className="text-off-white/70 hover:text-soft-gold transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold text-off-white mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {serviceAreas.map((area, index) => (
                <li key={index} className="flex items-center text-off-white/70">
                  <div className="w-1.5 h-1.5 bg-soft-gold rounded-full mr-2 flex-shrink-0"></div>
                  {area}
                </li>
              ))}
            </ul>
            <div className="mt-4 text-sm text-off-white/60">
              <p>Serving Greater Houston Metro Area</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-silver/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-off-white/60 text-sm">
              © {currentYear} Genesis Transportation Services. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-off-white/60 hover:text-soft-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-off-white/60 hover:text-soft-gold transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-off-white/60 hover:text-soft-gold transition-colors">
                Cancellation Policy
              </a>
            </div>

            {/* Certifications */}
            <div className="flex items-center space-x-4 text-xs text-off-white/60">
              <span className="bg-soft-gold/20 text-soft-gold px-2 py-1 rounded">
                DOT Certified
              </span>
              <span className="bg-soft-gold/20 text-soft-gold px-2 py-1 rounded">
                TCP Licensed
              </span>
              <span className="bg-soft-gold/20 text-soft-gold px-2 py-1 rounded">
                Fully Insured
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-soft-gold text-rich-black py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="font-semibold">24/7 Emergency Service Available</span>
            <span className="mx-4">•</span>
            <a 
              href="tel:713-227-2582" 
              className="font-bold hover:underline"
            >
              Call 713-CAR-CLUB
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}