import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Plane, 
  Building2, 
  Heart, 
  Clock, 
  CheckCircle, 
  Phone, 
  MapPin,
  Users,
  Shield,
  Star
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface ServicePageProps {
  serviceType?: 'airport' | 'corporate' | 'events' | 'hourly';
}

const serviceData = {
  airport: {
    title: "Airport Transportation",
    subtitle: "Professional IAH & HOU Airport Service",
    description: "Reliable, professional airport transfers with flight monitoring and meet-and-greet service for seamless arrivals and departures.",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwb3J0JTIwbGltb3VzaW5lfGVufDF8fHx8MTc1NjgyNzk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Plane,
    whatsIncluded: [
      "Professional chauffeur service",
      "Flight monitoring and tracking",
      "Meet and greet at baggage claim",
      "30-minute complimentary wait time",
      "Assistance with luggage",
      "Child safety seats (upon request)",
      "Bottled water and amenities",
      "Text notifications and updates"
    ],
    timing: [
      "Book 2+ hours in advance for guaranteed availability",
      "Last-minute bookings accepted when possible",
      "24/7 dispatch and customer service",
      "Real-time flight tracking and adjustments"
    ],
    coverage: [
      "Houston Intercontinental Airport (IAH)",
      "William P. Hobby Airport (HOU)",
      "All Greater Houston metro destinations",
      "Galveston cruise terminals",
      "Surrounding counties (additional fees may apply)"
    ],
    specialOptions: [
      "VIP meet and greet inside terminal",
      "Wheelchair accessible vehicles",
      "Executive vehicle upgrades",
      "Group transportation coordination",
      "Corporate billing arrangements",
      "Multiple destination stops"
    ]
  },
  corporate: {
    title: "Corporate & Executive Travel",
    subtitle: "Professional Business Transportation",
    description: "Executive transportation for business meetings, corporate events, and professional travel with discretion and reliability.",
    heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNoYXVmZmV1cnxlbnwxfHx8fDE3NTY4Mjc5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Building2,
    whatsIncluded: [
      "Executive-level vehicles",
      "Professional, uniformed chauffeurs",
      "Business-appropriate service",
      "Privacy and discretion",
      "Wi-Fi enabled vehicles",
      "Phone charging capabilities",
      "Refreshments available",
      "Corporate billing and receipts"
    ],
    timing: [
      "Advance reservations recommended",
      "Same-day service available",
      "Flexible scheduling for meetings",
      "Multi-stop itineraries coordinated"
    ],
    coverage: [
      "Downtown Houston business district",
      "Energy Corridor offices",
      "Westchase business area",
      "The Woodlands corporate centers",
      "Katy and Sugar Land offices",
      "All major Houston business locations"
    ],
    specialOptions: [
      "Executive protection services",
      "Corporate event coordination",
      "Multiple vehicle dispatching",
      "Client entertainment packages",
      "Conference and convention support",
      "VIP services for executives"
    ]
  },
  events: {
    title: "Weddings & Special Events",
    subtitle: "Elegant Transportation for Life's Important Moments",
    description: "Elegant transportation for your most important moments, from weddings to galas, ensuring every detail is perfect.",
    heroImage: "https://images.unsplash.com/photo-1519305124423-1aea4e8b8b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbGltb3VzaW5lfGVufDF8fHx8MTc1NjgyNzk5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Heart,
    whatsIncluded: [
      "Luxury decorated vehicles",
      "Red carpet service",
      "Professional photography coordination",
      "Champagne service (where appropriate)",
      "Bridal party coordination",
      "Timeline management",
      "Special occasion amenities",
      "Backup vehicle availability"
    ],
    timing: [
      "Book 3-6 months in advance for peak season",
      "Detailed timeline planning",
      "Day-of coordination services",
      "Flexible scheduling for photo sessions"
    ],
    coverage: [
      "Houston metro wedding venues",
      "Church and ceremony locations",
      "Reception halls and hotels",
      "Outdoor and destination venues",
      "Galveston wedding locations",
      "Hill Country venues (additional fees)"
    ],
    specialOptions: [
      "Vintage and specialty vehicles",
      "Multi-vehicle wedding packages",
      "Getaway car decorations",
      "Bachelor/bachelorette party transportation",
      "Guest shuttle services",
      "Honeymoon departure coordination"
    ]
  },
  hourly: {
    title: "Hourly & As-Directed Service",
    subtitle: "Flexible Transportation for Any Need",
    description: "Flexible hourly service for shopping, dining, city tours, or any personal transportation needs throughout Houston.",
    heroImage: "https://images.unsplash.com/photo-1573288609890-8b74fe04a53c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VybHklMjBjaGF1ZmZldXJ8ZW58MXx8fHwxNzU2ODI3OTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Clock,
    whatsIncluded: [
      "Dedicated vehicle and chauffeur",
      "Flexible itinerary changes",
      "Multiple stops included",
      "Waiting time at each location",
      "Assistance with packages/shopping",
      "Local area expertise",
      "Refreshments and amenities",
      "No mileage restrictions within metro"
    ],
    timing: [
      "Minimum 3-hour booking",
      "Available 24/7 with advance notice",
      "Same-day availability when possible",
      "Extended day rates available"
    ],
    coverage: [
      "Greater Houston metropolitan area",
      "Shopping centers and malls",
      "Entertainment districts",
      "Restaurants and venues",
      "Tourist attractions",
      "Medical appointments"
    ],
    specialOptions: [
      "Personal shopping assistance",
      "City tour packages",
      "Wine country excursions",
      "Medical appointment transportation",
      "Multi-generational family outings",
      "Custom itinerary planning"
    ]
  }
};

export function ServicesPage({ serviceType = 'airport' }: ServicePageProps) {
  const service = serviceData[serviceType];
  const IconComponent = service.icon;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <ImageWithFallback
          src={service.heroImage}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 bg-soft-gold/20 backdrop-blur-sm rounded-xl border border-soft-gold/30">
                  <IconComponent className="h-6 w-6 text-soft-gold" />
                </div>
                <Badge className="bg-soft-gold/20 text-soft-gold border-soft-gold/30">
                  Premium Service
                </Badge>
              </div>
              
              <h1 className="text-off-white mb-4">
                {service.title}
              </h1>
              <h2 className="text-xl text-off-white/90 mb-6">
                {service.subtitle}
              </h2>
              <p className="text-lg text-off-white/80 leading-relaxed max-w-2xl">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* What's Included */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-charcoal mb-4">What's Included</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              Every detail is handled with professionalism and care
            </p>
          </div>

          <Card className="border-silver/30 shadow-lg mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.whatsIncluded.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-soft-gold mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal/80">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg" 
                className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black font-semibold text-lg px-8 py-4"
                asChild
              >
                <a href="#" onClick={(e) => { e.preventDefault(); /* handled globally to contact */ }}>Book This Service</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white font-semibold text-lg px-8 py-4"
                asChild
              >
                <a href="tel:713-227-2582" className="flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Call 713-CAR-CLUB
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Service Details Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Timing */}
            <Card className="border-silver/30 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-charcoal">Timing & Scheduling</h3>
                </div>
                <div className="space-y-4">
                  {service.timing.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Coverage */}
            <Card className="border-silver/30 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-charcoal">Service Coverage</h3>
                </div>
                <div className="space-y-4">
                  {service.coverage.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Special Options */}
            <Card className="border-silver/30 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Star className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-charcoal">Special Options</h3>
                </div>
                <div className="space-y-4">
                  {service.specialOptions.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-soft-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-charcoal/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conversion Section */}
        <section className="bg-gradient-to-r from-charcoal to-rich-black rounded-2xl p-12 text-center text-white">
          <h2 className="text-off-white mb-4">
            Ready to Experience {service.title}?
          </h2>
          <p className="text-xl text-off-white/80 mb-8 max-w-2xl mx-auto">
            Let our experienced team handle your transportation needs with professionalism and style.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Button 
              size="lg" 
              className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black font-semibold text-xl px-12 py-6"
              asChild
            >
              <a href="#" onClick={(e) => { e.preventDefault(); /* handled globally to contact */ }}>Get Instant Quote</a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-3 border-off-white text-off-white hover:bg-off-white hover:text-rich-black font-semibold text-xl px-12 py-6"
              asChild
            >
              <a href="tel:713-227-2582" className="flex items-center space-x-3">
                <Phone className="h-6 w-6" />
                <span>Call Now</span>
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-off-white/70 text-sm">
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-soft-gold" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-soft-gold" />
              <span>Professional Chauffeurs</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-soft-gold" />
              <span>24/7 Service Available</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}