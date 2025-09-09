import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Heart, 
  CheckCircle, 
  Phone, 
  MapPin,
  Users,
  Shield,
  Star,
  Clock,
  Camera,
  Gift,
  Calendar,
  Sparkles
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function EventsServicePage({ onNavigate }: { onNavigate?: (page: string) => void } = {}) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1519305124423-1aea4e8b8b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbGltb3VzaW5lfGVufDF8fHx8MTc1NjgyNzk5NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Wedding and Special Events Transportation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/20 backdrop-blur-sm rounded-2xl border border-soft-gold/30">
                  <Heart className="h-8 w-8 text-soft-gold" />
                </div>
                <Badge className="bg-soft-gold/20 text-soft-gold border-soft-gold/30 px-4 py-2">
                  Luxury Event Transportation
                </Badge>
              </div>
              
              <h1 className="text-off-white mb-6">
                Weddings & Special Events
              </h1>
              <h2 className="text-2xl text-off-white/90 mb-8 font-light">
                Elegant Transportation for Life's Most Important Moments
              </h2>
              <p className="text-xl text-off-white/80 leading-relaxed max-w-3xl mb-8">
                Make your special day perfect with our elegant wedding and event transportation. From intimate ceremonies to grand celebrations, we ensure every detail reflects the importance of your occasion.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-8 py-4"
                  onClick={() => onNavigate?.('contact')}
                >
                  Plan Event Transportation
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

      {/* Special Event Features */}
      <section className="py-20 bg-gradient-to-br from-off-white via-silver/10 to-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-6">Creating Magical Moments</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Every detail is crafted to make your special day absolutely perfect
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Red Carpet Service</h4>
                <p className="text-charcoal/70">VIP treatment with red carpet arrival for your special entrance</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Camera className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Photo Coordination</h4>
                <p className="text-charcoal/70">Professional coordination with photographers for perfect shots</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Gift className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Luxury Amenities</h4>
                <p className="text-charcoal/70">Champagne service and special occasion amenities</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Calendar className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Timeline Management</h4>
                <p className="text-charcoal/70">Detailed coordination to ensure perfect timing throughout your event</p>
              </CardContent>
            </Card>
          </div>

          {/* Wedding Package Details */}
          <Card className="border-silver/30 shadow-xl bg-white">
            <CardContent className="p-12">
              <h3 className="text-charcoal mb-8 text-center">Complete Wedding Transportation Package</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Luxury decorated vehicles",
                  "Professional red carpet service",
                  "Photography coordination assistance",
                  "Champagne service (where appropriate)",
                  "Bridal party coordination",
                  "Detailed timeline management",
                  "Special occasion decorations",
                  "Backup vehicle availability",
                  "Getaway car preparation",
                  "Guest shuttle coordination",
                  "Multi-venue transportation",
                  "Day-of event coordination"
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

      {/* Event Types */}
      <section className="py-20 bg-gradient-to-br from-charcoal via-rich-black to-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-off-white mb-6">Perfect for Every Special Occasion</h2>
            <p className="text-xl text-off-white/70 max-w-3xl mx-auto">
              Professional event transportation for all of life's milestone moments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-lg border-soft-gold/30 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Heart className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-off-white">Wedding Services</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Bridal party transportation",
                    "Ceremony to reception transfers",
                    "Guest shuttle services",
                    "Bachelor/bachelorette parties",
                    "Rehearsal dinner transportation",
                    "Honeymoon departure coordination"
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
                  <Sparkles className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-off-white">Special Events</h3>
                </div>
                <div className="space-y-4">
                  {[
                    "Anniversary celebrations",
                    "Birthday parties & milestones",
                    "Prom and graduation events",
                    "Corporate galas & fundraisers",
                    "Holiday parties",
                    "Family reunions & gatherings"
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

          {/* Venue Coverage */}
          <Card className="bg-white/10 backdrop-blur-lg border-soft-gold/30 shadow-2xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <MapPin className="h-6 w-6 text-soft-gold" />
                  <h3 className="text-off-white">Houston Area Venue Coverage</h3>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  "Historic downtown venues",
                  "Luxury hotel ballrooms",
                  "Country clubs & private venues",
                  "Waterfront & outdoor locations",
                  "Church & religious venues",
                  "Galveston wedding destinations",
                  "Hill Country venues",
                  "Museum & cultural centers"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-soft-gold rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-off-white/80 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Planning Timeline */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-6">Planning Your Perfect Day</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Our experienced team guides you through every step of event transportation planning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-silver/30 shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-20 h-20 bg-soft-gold/10 rounded-full mx-auto mb-6">
                  <Calendar className="h-10 w-10 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">3-6 Months Ahead</h4>
                <p className="text-charcoal/70">Reserve your date and discuss your vision. We'll help plan the perfect transportation schedule for your event.</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-20 h-20 bg-soft-gold/10 rounded-full mx-auto mb-6">
                  <Users className="h-10 w-10 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">1-2 Weeks Before</h4>
                <p className="text-charcoal/70">Final coordination meeting to confirm all details, timelines, and special requirements for your event day.</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg bg-white text-center">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-20 h-20 bg-soft-gold/10 rounded-full mx-auto mb-6">
                  <Star className="h-10 w-10 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Your Special Day</h4>
                <p className="text-charcoal/70">Flawless execution with dedicated coordination to ensure every transportation detail is perfect.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-charcoal to-rich-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-off-white mb-6">
            Make Your Special Day Perfect
          </h2>
          <p className="text-xl text-off-white/70 mb-10 max-w-3xl mx-auto">
            Trust Genesis to handle your wedding and event transportation with the elegance and attention to detail your special day deserves. Let us be part of your perfect moment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Button 
              size="lg" 
              className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-12 py-6 text-lg"
              asChild
            >
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('contact'); }}>Plan My Event Transportation</a>
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

          {/* Special Event Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-12 text-off-white/60">
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-soft-gold" />
              <span>Serving Houston Since 1990</span>
            </div>
            <div className="flex items-center space-x-2">
              <Camera className="h-5 w-5 text-soft-gold" />
              <span>Photo-Perfect Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-soft-gold" />
              <span>Backup Plans Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}