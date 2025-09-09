import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Phone, Shield, Clock, Plane } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps = {}) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" role="region" aria-labelledby="home-heading">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzdG9uJTIwbmlnaHQlMjBjaXR5c2NhcGV8ZW58MXx8fHwxNzU2ODI3OTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Houston night cityscape with luxury vehicle"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60"></div>
      </div>

      {/* Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow Badge */}
          <Badge className="mb-6 bg-soft-gold/20 text-soft-gold border-soft-gold/30 px-4 py-2 text-sm font-medium">
            Established 1990
          </Badge>

          {/* H1 - Large Serif */}
          <h1 id="home-heading" className="text-off-white mb-6 leading-tight" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
            Houston's Premier Chauffeured Service
          </h1>

          {/* Subline */}
          <p className="text-xl text-off-white/90 mb-8 leading-relaxed">
            Professional, licensed, and on-time—every ride.
          </p>

          {/* Primary & Secondary CTAs */}
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-10">
            <Button 
              size="lg" 
              className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black font-semibold text-lg px-8 py-4 shadow-2xl"
              onClick={() => onNavigate?.('contact')}
            >
              Get a Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-off-white text-off-white hover:bg-off-white hover:text-rich-black font-semibold text-lg px-8 py-4"
              asChild
            >
              <a href="tel:713-227-2582" className="flex items-center text-rich-black">
                <Phone className="h-5 w-5 mr-2" />
                Call 713-CAR-CLUB
              </a>
            </Button>
          </div>

          {/* Micro-Trust Row */}
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-8 text-off-white/80">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-soft-gold flex-shrink-0" />
              <span className="font-medium text-sm">24/7 Dispatch</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-soft-gold flex-shrink-0" />
              <span className="font-medium text-sm">Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Plane className="h-5 w-5 text-soft-gold flex-shrink-0" />
              <span className="font-medium text-sm">Airport Specialists</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-off-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-off-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}