import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Clock, 
  CheckCircle, 
  Phone, 
  MapPin,
  Users,
  Shield,
  Star,
  ShoppingBag,
  Coffee,
  Camera,
  Navigation,
  Calendar
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function HourlyServicePage({ onNavigate }: { onNavigate?: (page: string) => void } = {}) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1573288609890-8b74fe04a53c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VybHklMjBjaGF1ZmZldXJ8ZW58MXx8fHwxNzU2ODI3OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hourly Chauffeur Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/20 backdrop-blur-sm rounded-2xl border border-soft-gold/30">
                  <Clock className="h-8 w-8 text-soft-gold" />
                </div>
                <Badge className="bg-soft-gold/20 text-soft-gold border-soft-gold/30 px-4 py-2">
                  Flexible Transportation
                </Badge>
              </div>
              
              <h1 className="text-off-white mb-6">
                Hourly & As-Directed Service
              </h1>
              <h2 className="text-2xl text-off-white/90 mb-8 font-light">
                Flexible Luxury Transportation for Any Houston Adventure
              </h2>
              <p className="text-xl text-off-white/80 leading-relaxed max-w-3xl mb-8">
                Experience Houston your way with our flexible hourly service. Whether it's shopping, dining, touring, or personal errands, your dedicated chauffeur and vehicle are at your service.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-8 py-4"
                  onClick={() => onNavigate?.('contact')}
                >
                  Book Hourly Service
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

      {/* Service Flexibility Features */}
      <section className="py-20 bg-gradient-to-br from-off-white via-silver/5 to-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-6">Complete Flexibility & Freedom</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Your dedicated vehicle and chauffeur, ready to adapt to your changing plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Navigation className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Flexible Routing</h4>
                <p className="text-charcoal/70">Change destinations and add stops as your day unfolds</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Clock className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Wait Time Included</h4>
                <p className="text-charcoal/70">Your chauffeur waits while you shop, dine, or attend appointments</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <ShoppingBag className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Package Assistance</h4>
                <p className="text-charcoal/70">Help with packages, shopping bags, and personal items</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Star className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Local Expertise</h4>
                <p className="text-charcoal/70">Recommendations and local knowledge from experienced chauffeurs</p>
              </CardContent>
            </Card>
          </div>

          {/* Service Inclusions */}
          <Card className="border-silver/30 shadow-xl bg-white">
            <CardContent className="p-12">
              <h3 className="text-charcoal mb-8 text-center">Everything Included in Your Hourly Service</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Dedicated vehicle and chauffeur",
                  "Flexible itinerary changes",
                  "Multiple stops included",
                  "Wait time at each location",
                  "Assistance with packages",
                  "Local area expertise and recommendations",
                  "Complimentary refreshments",
                  "No mileage restrictions within metro",
                  "Door-to-door service",
                  "Luxury vehicle amenities",
                  "Professional chauffeur service",
                  "24/7 dispatch support"
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

      {/* Popular Use Cases */}
      <section className="py-20 bg-gradient-to-br from-charcoal via-rich-black to-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-off-white mb-6">Perfect for Every Houston Experience</h2>
            <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
              From shopping adventures to city tours, make the most of your time in Houston
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-lg border-soft-gold/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <ShoppingBag className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-off-white">Shopping & Dining</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Galleria luxury shopping",
                    "Highland Village boutiques",
                    "Rice Village specialty stores",
                    "Fine dining restaurants",
                    "Farmers markets",
                    "Antique shopping districts"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-off-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-soft-gold/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Camera className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-off-white">City Tours & Attractions</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Houston Museum District",
                    "Downtown skyline tours",
                    "Space Center Houston",
                    "Buffalo Bayou Park",
                    "Historic Heights neighborhood",
                    "Custom photography tours"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-off-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-soft-gold/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-off-white">Personal Services</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Medical appointments",
                    "Spa and wellness visits",
                    "Hair and beauty services",
                    "Personal shopping assistance",
                    "Real estate viewings",
                    "Family gatherings"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-off-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-soft-gold/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Coffee className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-off-white">Entertainment & Leisure</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Theater District shows",
                    "Sports events & stadiums",
                    "Wine country excursions",
                    "Night out on the town",
                    "Concert venues",
                    "Festival transportation"
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

      {/* Pricing & Booking Information */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-6">Flexible Rates & Simple Booking</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Transparent hourly rates with no hidden fees or mileage charges within Houston metro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-silver/30 shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-full mx-auto mb-6">
                  <Clock className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Minimum 3 Hours</h4>
                <p className="text-charcoal/70 mb-6">All hourly service bookings require a minimum of 3 hours to ensure availability and service quality.</p>
                <Badge className="bg-soft-gold/10 text-soft-gold">Starting Service</Badge>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-full mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">24/7 Availability</h4>
                <p className="text-charcoal/70 mb-6">Service available around the clock with advance booking. Same-day availability when possible.</p>
                <Badge className="bg-soft-gold/10 text-soft-gold">Always Available</Badge>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-full mx-auto mb-6">
                  <MapPin className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Metro Coverage</h4>
                <p className="text-charcoal/70 mb-6">Complete Greater Houston metropolitan area coverage with no mileage restrictions.</p>
                <Badge className="bg-soft-gold/10 text-soft-gold">No Mileage Fees</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-rich-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-off-white mb-6">
            Experience Houston Your Way
          </h2>
          <p className="text-xl text-off-white/70 mb-10 max-w-3xl mx-auto">
            Book your flexible hourly service and discover Houston with the freedom and luxury you deserve. Your dedicated chauffeur is ready to make your day perfect.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Button 
              size="lg" 
              className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-12 py-6 text-lg"
              asChild
            >
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }}>Book Hourly Service Now</a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-off-white text-off-white hover:bg-off-white hover:text-rich-black px-12 py-6 text-lg"
              asChild
            >
              <a href="tel:713-227-2582" className="flex items-center space-x-3">
                <Phone className="h-6 w-6" />
                <span>Call 713-CAR-CLUB</span>
              </a>
            </Button>
          </div>

          {/* Hourly Service Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-12 text-off-white/60">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-soft-gold" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Navigation className="h-5 w-5 text-soft-gold" />
              <span>Local Area Experts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-soft-gold" />
              <span>Flexible & Reliable</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}