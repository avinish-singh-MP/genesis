import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Heart, 
  CheckCircle, 
  Phone, 
  Mail,
  Users,
  Clock,
  Shield,
  Star,
  Gift,
  Camera,
  Sparkles,
  Music
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function WeddingLimoPage({ onNavigate }: { onNavigate?: (page: string) => void } = {}) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1519305124423-1aea4e8b8b22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbGltb3VzaW5lfGVufDF8fHx8MTc1NjgyNzk5NHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Houston Wedding Limo Service"
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
                  Luxury Wedding Transportation
                </Badge>
              </div>
              
              <h1 className="text-off-white mb-6">
                Houston Wedding Limo
              </h1>
              <h2 className="text-2xl text-off-white/90 mb-8 font-light">
                Once in a Lifetime Elegance for Your Special Day
              </h2>
              <p className="text-xl text-off-white/80 leading-relaxed max-w-3xl mb-8">
                Weddings should be treated as a once in a lifetime experience, therefore, choosing the right wedding limousine and transportation service is absolutely crucial to the success of your special day. With Genesis Limo, you can be sure that the day you have spent months planning for will be treated with just as much care and focus.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-8 py-4"
                  onClick={() => onNavigate?.('contact')}
                >
                  Plan Wedding Transportation
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

      {/* Wedding Features */}
      <section className="py-20 bg-gradient-to-br from-off-white via-silver/5 to-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-6">Making Your Wedding Day Perfect</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Our top-notch wedding limousine service will get you and your guests from the ceremony to the reception in class, while saving you a bundle with our wedding specials and package deals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Luxury Fleet</h4>
                <p className="text-charcoal/70">Stretch limousines and limo buses with premium amenities</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Music className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Premium Amenities</h4>
                <p className="text-charcoal/70">Plasma TVs, surround sound, mood lights, and bars</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Gift className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Package Deals</h4>
                <p className="text-charcoal/70">Wedding specials and package deals to save you money</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Star className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">First-Class Service</h4>
                <p className="text-charcoal/70">Comfort, courtesy, safety, reliability, and dependability</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-charcoal mb-6">Complete Wedding Transportation Solutions</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                At Genesis Limo, we can cater to all of your wishes throughout your memorable day. From the ceremony to the reception and everything in between including airport transfers and guests transportation. Genesis Limo provides the highest quality wedding limousine services throughout Houston and surrounding counties.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-8">
                We are devoted to providing first-class Houston wedding limo service and feature the ultimate in comfort, courtesy, safety, reliability and dependability. Our wedding fleet of stretch limousines and limo buses consists of late-models, fully equipped with amenities such as plasma TVs, surround sound, mood lights, bars and plush, comfortable interiors.
              </p>

              <div className="space-y-4">
                {[
                  "Ceremony to reception transportation",
                  "Bridal party coordination services",
                  "Guest shuttle transportation",
                  "Airport transfers for wedding guests",
                  "Late-model luxury vehicles",
                  "Professional wedding coordination"
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
                  <h4 className="text-charcoal mb-4">Vehicle Amenities</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Music className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Plasma TVs and surround sound systems</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Elegant mood lighting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Gift className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Premium bar areas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Plush, comfortable interiors</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Promise */}
          <Card className="border-silver/30 shadow-xl bg-white">
            <CardContent className="p-12">
              <h3 className="text-charcoal mb-8 text-center">Our Wedding Service Promise</h3>
              <p className="text-charcoal/80 leading-relaxed text-center mb-8 max-w-4xl mx-auto">
                If you require additional information or would like to stop by and see our vehicles, we would be happy to show them to you by appointment. It would be our pleasure to answer your questions and assist you in making your arrangements for your Wedding Transportation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Personal vehicle viewings by appointment",
                  "Detailed wedding transportation planning",
                  "Houston and surrounding counties service",
                  "First-class professional service",
                  "Ultimate comfort and safety standards",
                  "Reliable and dependable service",
                  "Wedding specials and package deals",
                  "Late-model luxury fleet vehicles",
                  "Complete wedding day coordination"
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
            Make Your Wedding Day Unforgettable
          </h2>
          <p className="text-xl text-off-white/70 mb-10 max-w-3xl mx-auto">
            For more information, availability of vehicles and current specials and package deals for your wedding transportation, contact Genesis Limo today.
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
              <Heart className="h-5 w-5 text-soft-gold" />
              <span>Wedding Specialists Since 1990</span>
            </div>
            <div className="flex items-center space-x-2">
              <Camera className="h-5 w-5 text-soft-gold" />
              <span>Vehicle Viewings Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Gift className="h-5 w-5 text-soft-gold" />
              <span>Special Package Deals</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}