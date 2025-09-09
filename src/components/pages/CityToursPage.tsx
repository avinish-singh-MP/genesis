import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Camera, 
  CheckCircle, 
  Phone, 
  Mail,
  MapPin,
  Clock,
  Shield,
  Star,
  Users,
  Route,
  Sparkles,
  Navigation
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function CityToursPage({ onNavigate }: { onNavigate?: (page: string) => void } = {}) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzdG9uJTIwY2l0eSUyMHNreWxpbmV8ZW58MXx8fHwxNzU2ODI3OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Houston City Tours"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/20 backdrop-blur-sm rounded-2xl border border-soft-gold/30">
                  <Camera className="h-8 w-8 text-soft-gold" />
                </div>
                <Badge className="bg-soft-gold/20 text-soft-gold border-soft-gold/30 px-4 py-2">
                  Private Sightseeing Tours
                </Badge>
              </div>
              
              <h1 className="text-off-white mb-6">
                Houston City Tours
              </h1>
              <h2 className="text-2xl text-off-white/90 mb-8 font-light">
                Discover Houston in Luxury and Comfort
              </h2>
              <p className="text-xl text-off-white/80 leading-relaxed max-w-3xl mb-8">
                Enjoy a private sightseeing tour of Houston in a luxurious, professionally chauffeured limousine or bus. Avoid the inconveniences of traffic, parking, and figuring out how to get around. We'll show you all the best highlights of the city and welcome customized tours for any size group to see all the beautiful landmarks Houston has to offer.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-8 py-4"
                  onClick={() => onNavigate?.('contact')}
                >
                  Book City Tour
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

      {/* Tour Features */}
      <section className="py-20 bg-gradient-to-br from-off-white via-silver/5 to-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-6">Explore Houston in Style</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Genesis Limo offers a complete fleet of late-model stretch limousines, luxury sedans, executive SUVs and buses of various sizes to choose from for your Houston tour experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Route className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Custom Routes</h4>
                <p className="text-charcoal/70">Personalized tours showing Houston's best highlights and landmarks</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Users className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Any Group Size</h4>
                <p className="text-charcoal/70">Accommodating tours for any size group with appropriate vehicles</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Navigation className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">No Parking Hassles</h4>
                <p className="text-charcoal/70">Avoid traffic, parking, and navigation while we handle everything</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Premium Fleet</h4>
                <p className="text-charcoal/70">Top of the line vehicles for the best Houston tour experience</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-charcoal mb-6">Professional Tour Coordination</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                If you are looking to do a city tour limo service and want to use a party bus or a limo, depending on the size of your party, we can easily help you choose the perfect vehicle. Our fleet is one of the top of the line in the nation, and we understand that having the best vehicles available gives you the best experience for your Houston tour, be it with a city tour limo service, wine tour, or even a brewery tour.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-8">
                We can organize all types of private day and night trips from start to finish. We are happy to arrange all day transportation, whether it's a corporate or a private tour. Our relationships with local activity providers enables us to coordinate all of the details to make your tour as pleasant and as smooth as possible.
              </p>

              <div className="space-y-4">
                {[
                  "Private sightseeing tours in luxury vehicles",
                  "Professional chauffeur and tour guidance",
                  "Customized routes for any group size",
                  "City tours, wine tours, and brewery tours",
                  "Day and night trip coordination",
                  "Corporate and private tour arrangements"
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
                  <h4 className="text-charcoal mb-4">Tour Options</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Houston city highlights and landmarks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Camera className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Wine country excursions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Brewery tours and tastings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Day and night tour options</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tour Benefits */}
          <Card className="border-silver/30 shadow-xl bg-white">
            <CardContent className="p-12">
              <h3 className="text-charcoal mb-8 text-center">Why Choose Genesis for City Tours</h3>
              <p className="text-charcoal/80 leading-relaxed text-center mb-8 max-w-4xl mx-auto">
                Our complete fleet of late-model stretch limousines, luxury sedans, executive SUVs and buses ensures we have the perfect vehicle for your tour. Our relationships with local activity providers enable us to coordinate all the details to make your tour as pleasant and smooth as possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Complete fleet of luxury vehicles",
                  "Late-model stretch limousines available",
                  "Executive SUVs and luxury sedans",
                  "Party buses for larger groups",
                  "Professional tour coordination",
                  "Local activity provider relationships",
                  "Customized tour experiences",
                  "Top-of-the-line vehicle quality",
                  "Complete trip planning from start to finish"
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
            Ready to Explore Houston?
          </h2>
          <p className="text-xl text-off-white/70 mb-10 max-w-3xl mx-auto">
            For more information, availability of vehicles and current specials and package deals for your Houston city tour, contact Genesis Limo today.
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
              <Camera className="h-5 w-5 text-soft-gold" />
              <span>Custom Tour Specialists</span>
            </div>
            <div className="flex items-center space-x-2">
              <Route className="h-5 w-5 text-soft-gold" />
              <span>Local Activity Partnerships</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-soft-gold" />
              <span>Top-Quality Fleet</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}