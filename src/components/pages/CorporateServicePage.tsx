import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Building2, 
  CheckCircle, 
  Phone, 
  MapPin,
  Users,
  Shield,
  Star,
  Clock,
  Wifi,
  Briefcase,
  Coffee,
  Calendar
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function CorporateServicePage({ onNavigate }: { onNavigate?: (page: string) => void } = {}) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNoYXVmZmV1cnxlbnwxfHx8fDE3NTY4Mjc5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Corporate Transportation Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/20 backdrop-blur-sm rounded-2xl border border-soft-gold/30">
                  <Building2 className="h-8 w-8 text-soft-gold" />
                </div>
                <Badge className="bg-soft-gold/20 text-soft-gold border-soft-gold/30 px-4 py-2">
                  Executive Transportation
                </Badge>
              </div>
              
              <h1 className="text-off-white mb-6">
                Corporate & Executive Travel
              </h1>
              <h2 className="text-2xl text-off-white/90 mb-8 font-light">
                Professional Business Transportation for Houston's Corporate Community
              </h2>
              <p className="text-xl text-off-white/80 leading-relaxed max-w-3xl mb-8">
                Elevate your business travel with our executive transportation services. Professional, discrete, and reliable service for meetings, events, and corporate travel throughout Houston.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-8 py-4"
                  onClick={() => onNavigate?.('contact')}
                >
                  Book Executive Service
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

      {/* Executive Features */}
      <section className="py-20 bg-gradient-to-br from-off-white to-silver/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-6">Executive-Level Service Standards</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Delivering professional transportation solutions that reflect your business standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Briefcase className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Business Privacy</h4>
                <p className="text-charcoal/70">Discrete, professional service with complete confidentiality</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Wifi className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Mobile Office</h4>
                <p className="text-charcoal/70">Wi-Fi enabled vehicles with charging and workspace amenities</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Flexible Scheduling</h4>
                <p className="text-charcoal/70">Adaptable service for changing business schedules</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Coffee className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Executive Amenities</h4>
                <p className="text-charcoal/70">Refreshments, newspapers, and luxury comfort features</p>
              </CardContent>
            </Card>
          </div>

          {/* Service Inclusions */}
          <Card className="border-silver/30 shadow-xl bg-white">
            <CardContent className="p-12">
              <h3 className="text-charcoal mb-8 text-center">Corporate Service Package</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Executive-level luxury vehicles",
                  "Professional uniformed chauffeurs",
                  "Business-appropriate discretion",
                  "Complete privacy and confidentiality",
                  "Wi-Fi enabled vehicles",
                  "Phone charging capabilities",
                  "Complimentary refreshments",
                  "Corporate billing and receipts",
                  "Multi-stop itinerary coordination",
                  "Airport meet and greet service",
                  "Event and meeting transportation",
                  "24/7 dispatch and support"
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

      {/* Business Districts Coverage */}
      <section className="py-20 bg-gradient-to-br from-charcoal via-rich-black to-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-off-white mb-6">Houston Business District Coverage</h2>
            <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
              Comprehensive coverage of Houston's major business and corporate centers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Business Districts */}
            <Card className="bg-white/10 backdrop-blur-lg border-soft-gold/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Building2 className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-off-white">Business Districts</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Downtown Houston CBD",
                    "Energy Corridor",
                    "Westchase business area",
                    "The Woodlands corporate centers",
                    "Katy & Sugar Land offices",
                    "Galleria & Uptown District"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-off-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Meeting Venues */}
            <Card className="bg-white/10 backdrop-blur-lg border-soft-gold/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-off-white">Meeting Venues</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Convention centers",
                    "Corporate headquarters",
                    "Business hotels",
                    "Conference facilities",
                    "Executive airports",
                    "Private clubs"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-off-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Corporate Services */}
            <Card className="bg-white/10 backdrop-blur-lg border-soft-gold/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Star className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-off-white">Executive Services</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Executive protection coordination",
                    "Corporate event transportation",
                    "Multiple vehicle dispatching",
                    "Client entertainment packages",
                    "Conference support services",
                    "VIP airport terminal access"
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

      {/* Corporate Benefits */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-6">Why Houston Executives Choose Genesis</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Trusted by Houston's leading corporations for professional transportation services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-silver/30 shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-full mx-auto mb-6">
                  <Clock className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Punctual Service</h4>
                <p className="text-charcoal/70">On-time arrivals for critical business meetings and appointments</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-full mx-auto mb-6">
                  <Shield className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Confidential Service</h4>
                <p className="text-charcoal/70">Professional discretion and confidentiality for all business travel</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-full mx-auto mb-6">
                  <Users className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Dedicated Account Management</h4>
                <p className="text-charcoal/70">Personal service with dedicated corporate account management</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-rich-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-off-white mb-6">
            Elevate Your Business Transportation
          </h2>
          <p className="text-xl text-off-white/70 mb-10 max-w-3xl mx-auto">
            Join Houston's leading corporations who trust Genesis for their executive transportation needs. Professional service, discrete handling, and exceptional reliability.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Button 
              size="lg" 
              className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-12 py-6 text-lg"
              asChild
            >
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }}>Book Corporate Service</a>
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

          {/* Corporate Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-12 text-off-white/60">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-soft-gold" />
              <span>Corporate Accounts Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Briefcase className="h-5 w-5 text-soft-gold" />
              <span>Professional Service Since 1990</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-soft-gold" />
              <span>24/7 Executive Support</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}