import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  GraduationCap, 
  CheckCircle, 
  Phone, 
  Mail,
  Users,
  Clock,
  Shield,
  Star,
  Heart,
  Music,
  ShieldCheck,
  PartyPopper
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function PromGraduationPage({ onNavigate }: { onNavigate?: (page: string) => void } = {}) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9tJTIwbGltb3VzaW5lfGVufDF8fHx8MTc1NjgyNzk5M3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Houston Prom and Graduation Transportation"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/20 backdrop-blur-sm rounded-2xl border border-soft-gold/30">
                  <GraduationCap className="h-8 w-8 text-soft-gold" />
                </div>
                <Badge className="bg-soft-gold/20 text-soft-gold border-soft-gold/30 px-4 py-2">
                  Safe & Stylish Transportation
                </Badge>
              </div>
              
              <h1 className="text-off-white mb-6">
                Houston Prom Transport
              </h1>
              <h2 className="text-2xl text-off-white/90 mb-8 font-light">
                Making Prom & Graduation Nights Unforgettable
              </h2>
              <p className="text-xl text-off-white/80 leading-relaxed max-w-3xl mb-8">
                A Prom & Graduation are two of the most important events for any student, and the right limousine or party bus rental makes all the difference! Our highly reputable staff will help plan the evening and our trained chauffeurs will get you to these events safely and in style, while saving you the most with our everyday low rates and multiple specials and package deals in place.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-8 py-4"
                  onClick={() => onNavigate?.('contact')}
                >
                  Book Prom Transportation
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

      {/* Prom Features */}
      <section className="py-20 bg-gradient-to-br from-off-white via-silver/5 to-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-6">Safe, Reliable, and Memorable</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              We take pride in our prom limo and party bus services, and will always strive to please our clients by being reliable, friendly and focused on safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Shield className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Professional Safety</h4>
                <p className="text-charcoal/70">Experienced, courteous chauffeurs act as chaperones for safety</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <PartyPopper className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Multiple Packages</h4>
                <p className="text-charcoal/70">Several package types with variety of features and limo models</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Users className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Group Coordination</h4>
                <p className="text-charcoal/70">Multiple stops for pick-ups and drop offs accommodated</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Star className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Luxury Experience</h4>
                <p className="text-charcoal/70">Late-model stretch limousines and party buses</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-charcoal mb-6">Houston Graduation Transportation</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                If you're looking for a prom limousine, a graduation limo, or a party bus for a larger group, we offer several types of packages with a variety of features including different limo models. As a parent, you can rest assured that your kids will be in good hands with our experienced and courteous chauffeurs, they are punctual and willing to accommodate any reasonable request, including multiple stops for pick-ups and drop offs.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-8">
                Check out our fleet of late-model stretch limousines, party buses and party limos and ride in luxury to your prom or graduation. We also offer exclusive after party transportation for those seeking a fun filled night. Let us transport you and your guests safely and comfortably.
              </p>

              <div className="space-y-4">
                {[
                  "Highly reputable staff for event planning",
                  "Trained chauffeurs for safe transportation",
                  "Everyday low rates with special packages",
                  "Reliable, friendly, and focused service",
                  "Multiple vehicle options available",
                  "Parent-approved safety standards"
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
                  <h4 className="text-charcoal mb-4">Parent Peace of Mind</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Experienced chauffeurs as chaperones</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Punctual and reliable service</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Multiple pick-up/drop-off coordination</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Professional supervision throughout</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Fleet & Services */}
          <Card className="border-silver/30 shadow-xl bg-white">
            <CardContent className="p-12">
              <h3 className="text-charcoal mb-8 text-center">Complete Prom & Graduation Services</h3>
              <p className="text-charcoal/80 leading-relaxed text-center mb-8 max-w-4xl mx-auto">
                Our fleet of late-model stretch limousines, party buses and party limos ensures you ride in luxury to your prom or graduation. We provide comprehensive transportation solutions including exclusive after party transportation for those seeking a fun-filled night.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Late-model stretch limousines",
                  "Spacious party buses for larger groups",
                  "Party limos with premium amenities",
                  "Professional event planning assistance",
                  "Safe and comfortable transportation",
                  "Multiple package options available",
                  "Experienced and courteous chauffeurs",
                  "Flexible pick-up and drop-off scheduling",
                  "After party transportation services"
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
            Make Their Special Night Perfect
          </h2>
          <p className="text-xl text-off-white/70 mb-10 max-w-3xl mx-auto">
            For more information, availability of vehicles and current specials and package deals for prom and graduation transportation, contact Genesis Limo today.
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
              <span>Parent-Approved Safety</span>
            </div>
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-5 w-5 text-soft-gold" />
              <span>Prom & Graduation Specialists</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-soft-gold" />
              <span>Special Package Deals</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}