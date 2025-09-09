import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Plane, 
  CheckCircle, 
  Phone, 
  MapPin,
  Users,
  Shield,
  Star,
  Clock,
  Wifi,
  Baby
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function AirportServicePage({ onNavigate }: { onNavigate?: (page: string) => void } = {}) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwbGltb3VzaW5lfGVufDF8fHx8MTc1NjgyNzk5NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Airport Transportation Service"
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
                  Premium Airport Service
                </Badge>
              </div>
              
              <h1 className="text-off-white mb-6">
                Houston Airport Transportation
              </h1>
              <h2 className="text-2xl text-off-white/90 mb-8 font-light">
                Professional IAH & HOU Airport Transfers with Flight Monitoring
              </h2>
              <p className="text-xl text-off-white/80 leading-relaxed max-w-3xl mb-8">
                Experience seamless airport transfers with our professional chauffeur service. We monitor your flights, provide meet-and-greet service, and ensure you arrive on time, every time.
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
                    Call 713-CAR-CLUB
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
            <h2 className="text-charcoal mb-6">Complete Airport Service Package</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Every detail is handled with precision and professionalism for a stress-free airport experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Plane className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Flight Monitoring</h4>
                <p className="text-charcoal/70">Real-time flight tracking and automatic schedule adjustments</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Users className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Meet & Greet</h4>
                <p className="text-charcoal/70">Personal meet and greet service at baggage claim area</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Shield className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">30-Min Wait</h4>
                <p className="text-charcoal/70">Complimentary 30-minute wait time for arrival delays</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Wifi className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Premium Amenities</h4>
                <p className="text-charcoal/70">Wi-Fi, bottled water, and luxury vehicle amenities</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Inclusions */}
          <Card className="border-silver/30 shadow-xl">
            <CardContent className="p-12">
              <h3 className="text-charcoal mb-8 text-center">What's Included in Every Airport Transfer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Professional uniformed chauffeur",
                  "Flight monitoring and tracking",
                  "Meet and greet at baggage claim",
                  "30-minute complimentary wait time",
                  "Assistance with luggage handling",
                  "Child safety seats (upon request)",
                  "Bottled water and refreshments",
                  "Text notifications and updates",
                  "Door-to-door service",
                  "24/7 dispatch support",
                  "Corporate billing available",
                  "All taxes and gratuities included"
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

      {/* Service Coverage */}
      <section className="py-20 bg-gradient-to-br from-charcoal via-rich-black to-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Airports */}
            <Card className="bg-white/10 backdrop-blur-lg border-soft-gold/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Plane className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-off-white">Airport Coverage</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Houston Intercontinental (IAH)",
                    "William P. Hobby Airport (HOU)",
                    "Private jet terminals",
                    "Cargo and freight facilities"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-off-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Destinations */}
            <Card className="bg-white/10 backdrop-blur-lg border-soft-gold/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-off-white">Service Areas</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Downtown Houston",
                    "The Woodlands & Spring",
                    "Katy & Sugar Land",
                    "Galveston cruise terminals",
                    "All Greater Houston metro",
                    "Surrounding counties"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-off-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Special Services */}
            <Card className="bg-white/10 backdrop-blur-lg border-soft-gold/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Star className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-off-white">Special Options</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "VIP terminal meet service",
                    "Wheelchair accessible vehicles",
                    "Executive vehicle upgrades",
                    "Group transportation",
                    "Multiple destination stops",
                    "Corporate billing arrangements"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-off-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-off-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-charcoal mb-6">
            Ready for Stress-Free Airport Transportation?
          </h2>
          <p className="text-xl text-charcoal/70 mb-10 max-w-3xl mx-auto">
            Book your Houston airport transfer today and experience the Genesis difference. Our professional team is standing by 24/7 to serve you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Button 
              size="lg" 
              className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-12 py-6 text-lg"
              asChild
            >
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }}>Book Airport Transfer Now</a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-charcoal/30 text-charcoal hover:bg-charcoal hover:text-white px-12 py-6 text-lg"
              asChild
            >
              <a href="tel:713-227-2582" className="flex items-center space-x-3">
                <Phone className="h-6 w-6" />
                <span>Call 713-CAR-CLUB</span>
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-12 text-charcoal/60">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-soft-gold" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-soft-gold" />
              <span>24/7 Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-soft-gold" />
              <span>Professional Chauffeurs</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}