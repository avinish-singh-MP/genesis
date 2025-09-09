import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Music, 
  CheckCircle, 
  Phone, 
  Mail,
  Users,
  Clock,
  Shield,
  Star,
  Sparkles,
  Navigation,
  Calendar,
  PartyPopper
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function NightOutPage({ onNavigate }: { onNavigate?: (page: string) => void } = {}) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuaWdodCUyMG91dCUyMGxpbW91c2luZXxlbnwxfHx8fDE3NTY4Mjc5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Houston Night Out Transportation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/20 backdrop-blur-sm rounded-2xl border border-soft-gold/30">
                  <Music className="h-8 w-8 text-soft-gold" />
                </div>
                <Badge className="bg-soft-gold/20 text-soft-gold border-soft-gold/30 px-4 py-2">
                  Premium Night Entertainment
                </Badge>
              </div>
              
              <h1 className="text-off-white mb-6">
                Houston Night Out
              </h1>
              <h2 className="text-2xl text-off-white/90 mb-8 font-light">
                Memorable Nights on the Town in Style
              </h2>
              <p className="text-xl text-off-white/80 leading-relaxed max-w-3xl mb-8">
                Make your night on the town in Houston memorable with one of our late-model stretch limousines, luxury sedans, executive SUVs, party buses and mini coaches. Our vehicles feature every amenity, lighting, TVs, music system and bars in selected vehicles. Of course our stretch and super stretch limousines are also available to take you out in style with our everyday low rates.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-8 py-4"
                  onClick={() => onNavigate?.('contact')}
                >
                  Book Night Out Service
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-off-white text-off-white hover:bg-off-white hover:text-rich-black px-8 py-4"
                  asChild
                >
                  <a href="tel:713-227-2582" className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Call (713) 227-2582
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Night Out Features */}
      <section className="py-20 bg-gradient-to-br from-off-white via-silver/5 to-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-6">Entertainment Transportation at Its Best</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Along with multiple promos and package deals to choose from, you'll always save more with Genesis Limo for your night out transportation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Premium Amenities</h4>
                <p className="text-charcoal/70">Lighting, TVs, music systems, and bars in selected vehicles</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <PartyPopper className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Party Vehicles</h4>
                <p className="text-charcoal/70">Stretch and super stretch limousines, party buses available</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Star className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Low Rates</h4>
                <p className="text-charcoal/70">Everyday low rates with multiple promos and package deals</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Clock className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">24/7 Service</h4>
                <p className="text-charcoal/70">Late night service available with professional support</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-charcoal mb-6">Complete Night Out Transportation</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                While we can't plan your entire night for you we can assist you with your transportation needs for any occasion. Genesis Limo provides the best night on the town limo and bus service in Houston and surrounding counties. With a fleet of late model vehicles and 24/7 customer service, we can suggest a vehicle that matches the type of night that you have planned and the size of the group.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-8">
                If you're looking for a late night limo service to get you around Houston, look no further than Genesis Limo. We can provide a night on the town service anywhere in Houston. Book your night on the town limo today!
              </p>

              <div className="space-y-4">
                {[
                  "Late-model stretch limousines and party buses",
                  "Professional transportation assistance",
                  "Houston and surrounding counties service",
                  "24/7 customer service and support",
                  "Vehicle recommendations based on group size",
                  "Late night service availability"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-soft-gold mt-1 flex-shrink-0" />
                    <span className="text-charcoal/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-silver/30 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h4 className="text-charcoal mb-4">Perfect For</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Birthday parties and anniversaries</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Music className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Concerts and sporting events</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <PartyPopper className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">General night on the town</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Group celebrations and events</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vehicle Features */}
          <Card className="border-silver/30 shadow-xl bg-white">
            <CardContent className="p-12">
              <h3 className="text-charcoal mb-8 text-center">Premium Entertainment Features</h3>
              <p className="text-charcoal/80 leading-relaxed text-center mb-8 max-w-4xl mx-auto">
                Our vehicles feature every amenity you need for an unforgettable night out. From lighting and entertainment systems to comfortable seating and bar areas, we ensure your transportation enhances your entire evening experience.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Premium lighting systems",
                  "High-quality TVs and entertainment",
                  "Professional music systems",
                  "Bar areas in selected vehicles",
                  "Comfortable luxury seating",
                  "Climate controlled interiors",
                  "Late-model vehicle fleet",
                  "Professional chauffeur service",
                  "Multiple vehicle size options"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-soft-gold mt-1 flex-shrink-0" />
                    <span className="text-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-rich-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-off-white mb-6">
            Ready for an Unforgettable Night Out?
          </h2>
          <p className="text-xl text-off-white/70 mb-10 max-w-3xl mx-auto">
            For more information, availability of vehicles and current specials and package deals for your night out transportation, contact Genesis Limo today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Button 
              size="lg" 
              className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-12 py-6 text-lg"
              asChild
            >
              <a href="tel:713-227-2582" className="flex items-center space-x-3">
                <Phone className="h-6 w-6" />
                <span>Call (713) 227-2582</span>
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-off-white text-off-white hover:bg-off-white hover:text-rich-black px-12 py-6 text-lg"
              asChild
            >
              <a href="mailto:info@GenesisLimo.com" className="flex items-center space-x-3">
                <Mail className="h-6 w-6" />
                <span>Email info@GenesisLimo.com</span>
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-12 text-off-white/60">
            <div className="flex items-center space-x-2">
              <Music className="h-5 w-5 text-soft-gold" />
              <span>Entertainment Specialists</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-soft-gold" />
              <span>Late Night Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-soft-gold" />
              <span>Package Deals Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}