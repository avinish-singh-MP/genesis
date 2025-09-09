import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, Shield, Users, Award, CheckCircle, Star, MapPin } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const keyPoints = [
  "35+ Years in Houston (Est. 1990)",
  "Pro Chauffeurs (vetted, trained, insured)",
  "On-Time Promise & Flight Tracking",
  "Clean, Late-Model Vehicles",
  "Transparent Quotes"
];

const trustBadges = [
  { label: "DOT Certified", verified: true },
  { label: "TCP Licensed", verified: true },
  { label: "Fully Insured", verified: true },
  { label: "Background Checked", verified: true }
];

export function WhyChooseGenesis() {
  return (
    <section id="why-choose" className="py-20 bg-gradient-to-br from-off-white via-silver/5 to-off-white" role="region" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4 bg-soft-gold/20 text-soft-gold border-soft-gold/30 px-4 py-2">
                Houston's Most Trusted
              </Badge>
              <h2 id="why-heading" className="text-charcoal mb-6">
                Why Choose Genesis
              </h2>
            </div>

            <p className="text-xl text-charcoal/80 leading-relaxed">
              For over three decades, Genesis has been Houston's premier choice for luxury transportation. 
              Our commitment to excellence, safety, and professionalism sets us apart.
            </p>

            {/* Key Points */}
            <div className="space-y-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-soft-gold mt-0.5 flex-shrink-0" />
                  <span className="text-charcoal/80 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="pt-6">
              <h4 className="text-charcoal font-semibold mb-4">Our Certifications:</h4>
              <div className="grid grid-cols-2 gap-3">
                {trustBadges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-soft-gold rounded-full flex-shrink-0"></div>
                    <span className="text-charcoal/70">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <a 
                  href="tel:713-227-2582" 
                  className="inline-flex items-center text-soft-gold hover:text-soft-gold/80 font-semibold text-lg group"
                >
                  Experience the Difference
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="border-silver/30 shadow-2xl overflow-hidden">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaGF1ZmZldXJ8ZW58MXx8fHwxNzU2ODI3OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional chauffeur with luxury vehicle"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="h-5 w-5 text-soft-gold" />
                    <span className="font-semibold">Since 1990</span>
                  </div>
                  <p className="text-white/80 text-sm">
                    Over 35 years of exceptional service
                  </p>
                </div>
              </div>
            </Card>

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -right-6 bg-soft-gold rounded-2xl p-6 shadow-2xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-rich-black mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                  35+
                </div>
                <div className="text-rich-black/80 text-sm font-medium">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}