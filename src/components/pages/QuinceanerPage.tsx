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
  Crown,
  Sparkles,
  PartyPopper
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function QuinceanerPage({ onNavigate }: { onNavigate?: (page: string) => void } = {}) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1464207687429-7505649dae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWluY2VhbmVyYSUyMGxpbW91c2luZXxlbnwxfHx8fDE3NTY4Mjc5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Houston Quinceañera Limousine Service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/20 backdrop-blur-sm rounded-2xl border border-soft-gold/30">
                  <Crown className="h-8 w-8 text-soft-gold" />
                </div>
                <Badge className="bg-soft-gold/20 text-soft-gold border-soft-gold/30 px-4 py-2">
                  Traditional Celebration Transportation
                </Badge>
              </div>
              
              <h1 className="text-off-white mb-6">
                Houston Quinceañera Limo
              </h1>
              <h2 className="text-2xl text-off-white/90 mb-8 font-light">
                Celebrating a Right of Passage with Elegance
              </h2>
              <p className="text-xl text-off-white/80 leading-relaxed max-w-3xl mb-8">
                Genesis Limo provides Quinceañera limousine service in Houston and we provide a personalized service that will have you thinking about your Quinceañera for years to come! Quinceañera is a right of passage. It marks a turning point in a young girl's life. Quince (Keen-say) means fifteen in Spanish. This event is the celebration of a young girl's fifteenth birthday.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg" 
                  className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black px-8 py-4"
                  onClick={() => onNavigate?.('contact')}
                >
                  Plan Quinceañera Transportation
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

      {/* Quinceañera Features */}
      <section className="py-20 bg-gradient-to-br from-off-white via-silver/5 to-off-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-6">Honoring Tradition with Luxury</h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Part of how to plan a Quinceañera is transporting all your beloved guests to and from areas of festivities, and we make planning a celebration day that much easier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Crown className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Royal Treatment</h4>
                <p className="text-charcoal/70">Personalized service for this once-in-a-lifetime celebration</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Shield className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Professional Chaperoning</h4>
                <p className="text-charcoal/70">Highly trained chauffeurs capable of acting as chaperones</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Heart className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Cultural Understanding</h4>
                <p className="text-charcoal/70">Rich appreciation for Latino and Mexican cultural traditions</p>
              </CardContent>
            </Card>

            <Card className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-2xl mx-auto mb-6">
                  <Sparkles className="h-8 w-8 text-soft-gold" />
                </div>
                <h4 className="text-charcoal mb-4">Perfect Day</h4>
                <p className="text-charcoal/70">Making sure everything is perfect for this special milestone</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-charcoal mb-6">A Celebration to Remember</h3>
              <p className="text-charcoal/80 leading-relaxed mb-6">
                Although they may be coming of age, these youngsters are still under age and will need supervision. Our Houston Quinceañera limousine service chauffeurs are highly trained and professionally capable to act as chaperones for your kids and their guests. In Texas, there is a rich Latino and Mexican culture that embraces this traditional birthday celebration.
              </p>
              <p className="text-charcoal/80 leading-relaxed mb-8">
                Involving parents, grandparents, godparents along with friends and family there is wishes of goodwill and life to this special young girl. Every Quinceañera is a special day, to be cherished in memories for a lifetime, and on this special day it only makes sense to make sure everything is perfect. This includes Houston Quinceañera limousine service, and is one of the many reasons to use Genesis Limo.
              </p>

              <div className="space-y-4">
                {[
                  "Personalized Quinceañera transportation service",
                  "Professional chauffeurs trained as chaperones",
                  "Cultural sensitivity and tradition respect",
                  "Family-friendly celebration coordination",
                  "Perfect day planning assistance",
                  "Multi-generational group accommodation"
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
                  <h4 className="text-charcoal mb-4">Cultural Celebration</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Traditional fifteenth birthday celebration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Multi-generational family involvement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Gift className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Wishes of goodwill and life celebration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="h-5 w-5 text-soft-gold" />
                    <span className="text-charcoal/80">Right of passage milestone marking</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cultural Significance */}
          <Card className="border-silver/30 shadow-xl bg-white">
            <CardContent className="p-12">
              <h3 className="text-charcoal mb-8 text-center">Understanding the Quinceañera Tradition</h3>
              <p className="text-charcoal/80 leading-relaxed text-center mb-8 max-w-4xl mx-auto">
                Quinceañera stands for the event and is also the name of the young girl herself. This celebration marks a turning point in a young girl's life, transitioning from childhood to young womanhood. In Texas, there is a rich Latino and Mexican culture that embraces this traditional birthday celebration with deep meaning and joy.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Personalized service creating lasting memories",
                  "Professional supervision for young celebrants",
                  "Transportation coordination for all guests",
                  "Cultural tradition respect and understanding",
                  "Family celebration planning assistance",
                  "Perfect day coordination services",
                  "Multi-location transportation management",
                  "Professional chauffeur chaperoning",
                  "Celebration day perfection assurance"
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
            Make Her Quinceañera Perfect
          </h2>
          <p className="text-xl text-off-white/70 mb-10 max-w-3xl mx-auto">
            Let Genesis Limo help make your daughter's Quinceañera celebration a day to remember forever. Contact us today to discuss your transportation needs for this special milestone.
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
              <Crown className="h-5 w-5 text-soft-gold" />
              <span>Quinceañera Specialists</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-soft-gold" />
              <span>Cultural Tradition Experts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-soft-gold" />
              <span>Professional Chaperoning</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}