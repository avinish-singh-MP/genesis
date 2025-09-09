import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Building2, 
  CheckCircle, 
  Phone, 
  Mail,
  Users,
  Clock,
  Shield,
  Star,
  Briefcase,
  Target,
  Globe,
  Award
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function ExecutiveTravelPage({ onNavigate }: { onNavigate?: (page: string) => void } = {}) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNoYXVmZmV1cnxlbnwxfHx8fDE3NTY4Mjc5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Houston Executive Travel"
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
                Houston Executive Travel
              </h1>
              <h2 className="text-2xl text-off-white/90 mb-8 font-light">
                Professional Corporate Transportation Solutions
              </h2>
              <p className="text-xl text-off-white/80 leading-relaxed max-w-3xl mb-8">
                At Genesis Limo, we understand that as a busy professional, when you have business in Houston, it is important to rely on a professional executive transportation service. That's why we offer professional around the clock service to assist you with all your executive and corporate ground transportation needs.
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
                    Call (713) 227-2582
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Features */}
      <section className="py-20 bg-gradient-to-br from-off-white via-silver/10 to-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-6">Your Business Is Our Business</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Regardless of your corporate travel needs, you can be assured that an experienced account executive will provide you with everything you need to get where you want to go in a timely and efficient manner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Briefcase className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Account Management</h4>
                <p className="text-charcoal/70">Experienced account executives dedicated to your corporate needs</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Target className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Competitive Rates</h4>
                <p className="text-charcoal/70">Saving you the most with our competitive executive rates</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Globe className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Complete Solutions</h4>
                <p className="text-charcoal/70">100% executive ground transportation and travel solutions</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Award className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">VIP Service</h4>
                <p className="text-charcoal/70">Personalized VIP transportation services with every trip</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-charcoal mb-6">Complete Destination Transportation Management</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Genesis Limo offers your business complete destination transportation management solutions. As preferred executive travel specialists, Genesis Limo offers your business a 100% executive ground transportation and travel solution all at competitive pricing.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-8">
                We work with each company to meet their travel needs and provide personalized VIP transportation services with every trip. Genesis Limo gives your business a complete destination ground travel service in Houston and its surrounding counties.
              </p>

              <div className="space-y-4">
                {[
                  "Professional around-the-clock service",
                  "Experienced account executive support",
                  "Timely and efficient transportation",
                  "Complete destination management",
                  "Competitive executive rates",
                  "Personalized VIP services"
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
                  <h4 className="text-charcoal mb-4">Corporate Features</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Dedicated team of professionals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Online reservation system</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Corporate account management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Customized travel expectations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <Card className="border-silver/30 shadow-xl bg-white">
            <CardContent className="p-12">
              <h3 className="text-charcoal mb-8 text-center">Why Choose Genesis for Executive Travel</h3>
              <p className="text-charcoal/80 leading-relaxed text-center mb-8 max-w-4xl mx-auto">
                Our dedicated team of professionals will help you manage all of your business and personal destination ground transportation. Our online reservation system is in place for you to make online reservations, print receipts and more. Genesis Limo offers corporate accounts and we work closely with each company to meet their chauffeured executive transportation expectations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Complete destination ground travel service",
                  "Houston and surrounding counties coverage",
                  "Dedicated professional team",
                  "Business and personal transportation management",
                  "Online reservation system with receipts",
                  "Corporate account options available",
                  "Customized service to meet expectations",
                  "Preferred executive travel specialists",
                  "24/7 professional support available"
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
            Ready to Elevate Your Business Travel?
          </h2>
          <p className="text-xl text-off-white/70 mb-10 max-w-3xl mx-auto">
            Remember your business is our business. Contact us today for more information and current executive transportation rates.
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
              <Shield className="h-5 w-5 text-soft-gold" />
              <span>Corporate Accounts Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-soft-gold" />
              <span>Professional 24/7 Service</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-soft-gold" />
              <span>Executive Travel Specialists</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}