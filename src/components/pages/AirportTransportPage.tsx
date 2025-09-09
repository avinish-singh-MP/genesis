import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Plane, 
  CheckCircle, 
  Phone, 
  Mail,
  MapPin,
  Clock,
  Shield,
  Star,
  Wifi,
  Users,
  Luggage
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AirportTransportPage({ onNavigate }: { onNavigate?: (page: string) => void } = {}) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwbGltb3VzaW5lfGVufDF8fHx8MTc1NjgyNzk5NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Houston Airport Transportation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/20 backdrop-blur-sm rounded-2xl border border-soft-gold/30">
                  <Plane className="h-8 w-8 text-soft-gold" />
                </div>
                <Badge className="bg-soft-gold/20 text-soft-gold border-soft-gold/30 px-4 py-2">
                  Professional Airport Service
                </Badge>
              </div>
              
              <h1 className="text-off-white mb-6">
                Houston Airport Transport
              </h1>
              <h2 className="text-2xl text-off-white/90 mb-8 font-light">
                World-Class Airport Transportation for IAH & HOU
              </h2>
              <p className="text-xl text-off-white/80 leading-relaxed max-w-3xl mb-8">
                Genesis Limo serves all international and private airports including George Bush Intercontinental Airport (IAH) & William P. Hobby Airport (HOU). We provide world-class airport limousine, mini coach and car service with competitive rates and a complete fleet of late model sedans, SUVs, mini buses and more.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-8 py-4"
                  onClick={() => onNavigate?.('contact')}
                >
                  Book Airport Transfer
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

      {/* Service Features */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-6">Complete Airport Transportation Service</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We offer affordable, reliable door-to-door ground transportation to and from all airports in our service area, 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Plane className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Airport Specialists</h4>
                <p className="text-charcoal/70">Expert service for IAH, HOU, and private airports across Houston</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Clock className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">24/7 Availability</h4>
                <p className="text-charcoal/70">Round-the-clock service with staffed offices for support and monitoring</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Users className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Professional Service</h4>
                <p className="text-charcoal/70">Prompt, flexible, and accommodating to individual passenger needs</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Star className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Competitive Rates</h4>
                <p className="text-charcoal/70">Very competitive pricing so you always have the right car for your needs</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-charcoal mb-6">Why Choose Genesis for Airport Transport</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Whether you need an airport shuttle ride, an executive SUV transfer or private airport sedan, Genesis Limo will transfer you to or from any airport in affordable, reliable comfort. We strive to always be prompt, flexible, and accommodating to the individual needs of our passengers.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-8">
                Our limousine, car, bus, and SUV prices are also very competitive so you know you can always have the right car for your traveling needs. Best of all, our offices are staffed 24 hours a day. So, no matter your destination, no matter the time of day, you can always count on Genesis Limo as our support and trip monitoring staff is trained with the logistical capabilities needed to ensure your safe and on-time arrivals.
              </p>

              <div className="space-y-4">
                {[
                  "Complete fleet of late model sedans, SUVs, mini buses",
                  "Professional chauffeurs available 24/7",
                  "Competitive rates and flexible service options",
                  "Door-to-door ground transportation service",
                  "Flight monitoring and tracking capabilities",
                  "Trained support staff for trip coordination"
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
                  <h4 className="text-charcoal mb-4">Service Areas</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">George Bush Intercontinental Airport (IAH)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">William P. Hobby Airport (HOU)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Private and International Airports</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">All Houston Metro Area</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-rich-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-off-white mb-6">
            Ready for Professional Airport Service?
          </h2>
          <p className="text-xl text-off-white/70 mb-10 max-w-3xl mx-auto">
            For more information and current rates for George Bush Intercontinental Airport (IAH) & William P. Hobby Airport (HOU) airport ground transportation, contact us today.
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
                <span>Email Us</span>
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-12 text-off-white/60">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-soft-gold" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-soft-gold" />
              <span>24/7 Service Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-soft-gold" />
              <span>Serving Houston Since 1990</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}