import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { 
  Bus, 
  Users, 
  Youtube, 
  Plus,
  ArrowRight,
  Phone
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";


interface SignatureSectionProps {
  onNavigate?: (page: string) => void;
}

export function SignatureSection({ onNavigate }: SignatureSectionProps = {}) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaW1vdXNpbmUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NTY4Mjk1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Genesis Premium Transportation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-off-white mb-8 max-w-4xl mx-auto leading-tight">
              IS MORE THAN JUST A DESTINATION, IT'S OUR SIGNATURE.
            </h2>
            <Button 
              size="lg"
              className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-12 py-6 text-lg uppercase tracking-wider"
              onClick={() => onNavigate?.('contact')}
            >
              Reserve Now
            </Button>
          </div>

          {/* Diamond Service Layout */}
          <div className="relative max-w-6xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden lg:block relative h-96">
              
              {/* Top Left - Luxury Motor Coaches */}
              <div 
                className="absolute top-0 left-0 cursor-pointer group"
                onClick={() => onNavigate?.('fleet-detail')}
              >
                <div className="transform rotate-45 w-48 h-48 bg-gradient-to-br from-charcoal/95 via-charcoal/90 to-rich-black border-2 border-soft-gold/30 shadow-2xl hover:shadow-soft-gold/30 hover:border-soft-gold/60 transition-all duration-500 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 transform -rotate-45 flex flex-col items-center justify-center p-6">
                    <Bus className="h-8 w-8 text-soft-gold mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-off-white text-center text-sm uppercase tracking-wide leading-tight">
                      Luxury Motor Coaches
                    </h4>
                  </div>
                  <div className="absolute inset-0 bg-soft-gold/0 group-hover:bg-soft-gold/10 transition-all duration-300"></div>
                </div>
              </div>

              {/* Top Right - YouTube/Social */}
              <div 
                className="absolute top-0 right-0 cursor-pointer group"
                onClick={() => window.open('https://youtube.com', '_blank')}
              >
                <div className="transform rotate-45 w-48 h-48 bg-gradient-to-br from-charcoal/95 via-charcoal/90 to-rich-black border-2 border-soft-gold/30 shadow-2xl hover:shadow-soft-gold/30 hover:border-soft-gold/60 transition-all duration-500 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 transform -rotate-45 flex flex-col items-center justify-center p-6">
                    <Youtube className="h-8 w-8 text-soft-gold mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-off-white text-center text-sm uppercase tracking-wide leading-tight">
                      See More of Us on YouTube
                    </h4>
                  </div>
                  <div className="absolute inset-0 bg-soft-gold/0 group-hover:bg-soft-gold/10 transition-all duration-300"></div>
                </div>
              </div>

              {/* Bottom Center - Meetings and Groups */}
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 cursor-pointer group"
                onClick={() => onNavigate?.('executive-travel')}
              >
                <div className="transform rotate-45 w-48 h-48 bg-gradient-to-br from-charcoal/95 via-charcoal/90 to-rich-black border-2 border-soft-gold/30 shadow-2xl hover:shadow-soft-gold/30 hover:border-soft-gold/60 transition-all duration-500 overflow-hidden rounded-lg">
                  <div className="absolute inset-0 transform -rotate-45 flex flex-col items-center justify-center p-6">
                    <Users className="h-8 w-8 text-soft-gold mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-off-white text-center text-sm uppercase tracking-wide leading-tight">
                      Meetings and Groups
                    </h4>
                  </div>
                  <div className="absolute inset-0 bg-soft-gold/0 group-hover:bg-soft-gold/10 transition-all duration-300"></div>
                </div>
              </div>

              {/* Center - Interactive Element */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  {/* Central Circle */}
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-soft-gold/90 to-soft-gold border-4 border-off-white/20 shadow-2xl flex items-center justify-center group cursor-pointer hover:scale-110 transition-all duration-300">
                    <div 
                      className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-inner group-hover:shadow-lg transition-all duration-300"
                      onClick={() => onNavigate?.('contact')}
                    >
                      <Plus className="h-8 w-8 text-white group-hover:rotate-90 transition-transform duration-300" />
                    </div>
                  </div>
                  
                  {/* Connecting Lines */}
                  <div className="absolute inset-0">
                    {/* Line to top left */}
                    <div className="absolute w-24 h-px bg-gradient-to-r from-soft-gold/60 to-transparent top-4 -left-20 transform -rotate-45"></div>
                    {/* Line to top right */}
                    <div className="absolute w-24 h-px bg-gradient-to-l from-soft-gold/60 to-transparent top-4 -right-20 transform rotate-45"></div>
                    {/* Line to bottom */}
                    <div className="absolute w-px h-24 bg-gradient-to-b from-soft-gold/60 to-transparent -bottom-20 left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </div>
              </div>

            </div>

            {/* Mobile/Tablet Layout */}
            <div className="lg:hidden space-y-12">
              
              {/* Reserve Now Mobile */}
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-8 py-4 uppercase tracking-wider"
                  onClick={() => onNavigate?.('contact')}
                >
                  Reserve Now
                </Button>
              </div>

              {/* Service Cards Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                
                <Card 
                  className="group cursor-pointer bg-gradient-to-br from-charcoal/95 via-charcoal/90 to-rich-black border-soft-gold/30 p-8 text-center hover:border-soft-gold/60 transition-all duration-300"
                  onClick={() => onNavigate?.('fleet-detail')}
                >
                  <Bus className="h-12 w-12 text-soft-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-off-white uppercase tracking-wide text-sm">
                    Luxury Motor Coaches
                  </h4>
                  <div className="mt-4">
                    <ArrowRight className="h-4 w-4 text-soft-gold mx-auto group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Card>

                <Card 
                  className="group cursor-pointer bg-gradient-to-br from-charcoal/95 via-charcoal/90 to-rich-black border-soft-gold/30 p-8 text-center hover:border-soft-gold/60 transition-all duration-300"
                  onClick={() => onNavigate?.('executive-travel')}
                >
                  <Users className="h-12 w-12 text-soft-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-off-white uppercase tracking-wide text-sm">
                    Meetings and Groups
                  </h4>
                  <div className="mt-4">
                    <ArrowRight className="h-4 w-4 text-soft-gold mx-auto group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Card>

                <Card 
                  className="group cursor-pointer bg-gradient-to-br from-charcoal/95 via-charcoal/90 to-rich-black border-soft-gold/30 p-8 text-center hover:border-soft-gold/60 transition-all duration-300"
                  onClick={() => window.open('https://youtube.com', '_blank')}
                >
                  <Youtube className="h-12 w-12 text-soft-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-off-white uppercase tracking-wide text-sm">
                    See More on YouTube
                  </h4>
                  <div className="mt-4">
                    <ArrowRight className="h-4 w-4 text-soft-gold mx-auto group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Card>

                <Card 
                  className="group cursor-pointer bg-gradient-to-br from-green-500/90 to-green-700/90 border-green-400/30 p-8 text-center hover:border-green-300/60 transition-all duration-300"
                  onClick={() => onNavigate?.('contact')}
                >
                  <div className="w-16 h-16 rounded-full bg-green-400/20 mx-auto mb-4 flex items-center justify-center">
                    <Plus className="h-8 w-8 text-white group-hover:rotate-90 transition-transform duration-300" />
                  </div>
                  <h4 className="text-white uppercase tracking-wide text-sm">
                    Get Started
                  </h4>
                  <div className="mt-4">
                    <ArrowRight className="h-4 w-4 text-white mx-auto group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Card>

              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-20">
            <p className="text-off-white/80 text-lg mb-6">
              Experience the Genesis difference today
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-soft-gold text-soft-gold hover:bg-soft-gold hover:text-rich-black px-8 py-4"
              asChild
            >
              <a href="tel:713-227-2582" className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span>Call 713-CAR-CLUB</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}