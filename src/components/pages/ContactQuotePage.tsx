import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useEffect } from "react";

export function ContactQuotePage() {
  useEffect(() => {
    const existing = document.querySelector('script[src="https://book.mylimobiz.com/v4/widgets/widget-loader.js"]');
    if (!existing) {
      const script = document.createElement('script');
      script.src = 'https://book.mylimobiz.com/v4/widgets/widget-loader.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-off-white to-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-charcoal to-rich-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-off-white mb-4">
            Contact & Quote Request
          </h1>
          <p className="text-xl text-off-white/80 max-w-3xl mx-auto">
            Get an instant quote or speak with our transportation specialists. 
            We're here to make your journey exceptional.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Online Reservations Embed - Left 2/3 */}
          <div className="lg:col-span-2">
            <Card className="border-silver/30 shadow-lg">
              <CardContent className="p-8">
                <div className="mb-8">
                  <h2 className="text-charcoal mb-4">Online Reservations</h2>
                  <p className="text-charcoal/80">
                    Use our secure booking widget to make reservations instantly.
                  </p>
                </div>

                <div className="prose max-w-none">
                  <a href="https://book.mylimobiz.com/v4/genesistowncar" data-ores-widget="website" data-ores-alias="genesistowncar">Online Reservations</a>
                  </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info - Right 1/3 */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone CTA */}
            <Card className="border-silver/30 shadow-lg bg-gradient-to-br from-charcoal to-rich-black text-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-off-white mb-4">Need Immediate Service?</h3>
                <p className="text-off-white/80 mb-6 text-sm">
                  Call our 24/7 dispatch center for instant booking and immediate assistance.
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-soft-gold hover:bg-soft-gold/90 text-rich-black font-semibold text-xl py-4"
                  asChild
                >
                  <a href="tel:713-227-2582" className="flex items-center justify-center">
                    <Phone className="h-6 w-6 mr-2" />
                    713-CAR-CLUB
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-silver/30 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-charcoal mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-soft-gold/10 rounded-lg">
                      <Phone className="h-5 w-5 text-soft-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal">Phone</div>
                      <div className="text-charcoal/70">713-CAR-CLUB</div>
                      <div className="text-sm text-charcoal/60">(713) 227-2582</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-soft-gold/10 rounded-lg">
                      <Mail className="h-5 w-5 text-soft-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal">Email</div>
                      <div className="text-charcoal/70">info@genesishouston.com</div>
                      <div className="text-sm text-charcoal/60">reservations@genesishouston.com</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-soft-gold/10 rounded-lg">
                      <MapPin className="h-5 w-5 text-soft-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal">Service Area</div>
                      <div className="text-charcoal/70">Greater Houston Metro</div>
                      <div className="text-sm text-charcoal/60">IAH, HOU, Galveston & Surrounding Areas</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-soft-gold/10 rounded-lg">
                      <Clock className="h-5 w-5 text-soft-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal">Hours</div>
                      <div className="text-charcoal/70">24/7 Service Available</div>
                      <div className="text-sm text-charcoal/60">Office: Mon-Fri 8AM-6PM</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Service Areas Map Placeholder */}
            <Card className="border-silver/30 shadow-lg">
              <CardContent className="p-0">
                <div className="relative h-48 bg-silver/20 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzdG9uJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NTY4Mjc5OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Houston service area map"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-charcoal/60 flex items-center justify-center">
                    <div className="text-center text-white">
                      <MapPin className="h-8 w-8 text-soft-gold mx-auto mb-2" />
                      <div className="font-semibold">Houston Metro Area</div>
                      <div className="text-sm text-white/80">Full coverage map available</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <Card className="border-silver/30 shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold text-charcoal mb-4 text-center">Why Choose Genesis</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <Badge className="bg-soft-gold/20 text-soft-gold border-soft-gold/30 text-xs">
                      35+ Years Experience
                    </Badge>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge className="bg-soft-gold/20 text-soft-gold border-soft-gold/30 text-xs">
                      Licensed & Insured
                    </Badge>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Badge className="bg-soft-gold/20 text-soft-gold border-soft-gold/30 text-xs">
                      24/7 Service
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}