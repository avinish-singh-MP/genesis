import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, Clock, Users, Award, CheckCircle, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { number: "30+", label: "Years of Excellence" },
  { number: "10,000+", label: "Safe Miles Driven" },
  { number: "500+", label: "Corporate Clients" },
  { number: "24/7", label: "Service Available" }
];

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed transportation company with comprehensive insurance coverage for your peace of mind."
  },
  {
    icon: Users,
    title: "Professional Chauffeurs",
    description: "Experienced, background-checked drivers who prioritize safety, punctuality, and exceptional service."
  },
  {
    icon: Clock,
    title: "Punctual Service",
    description: "We pride ourselves on timeliness, with real-time flight monitoring and proactive scheduling."
  },
  {
    icon: Award,
    title: "Luxury Fleet",
    description: "Meticulously maintained premium vehicles equipped with modern amenities for your comfort."
  }
];

const certifications = [
  "DOT Certified",
  "TCP Licensed",
  "Fully Insured",
  "Background Checked Drivers",
  "Drug & Alcohol Testing Program",
  "Vehicle Safety Inspections"
];

interface AboutProps {
  onNavigate?: (page: string) => void;
}

export function About({ onNavigate }: AboutProps = {}) {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-off-white via-silver/5 to-off-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-soft-gold/20 text-soft-gold border-soft-gold/30 px-4 py-2">
            Since 1990
          </Badge>
          <h2 className="text-charcoal mb-6">
            Houston's Most Trusted Transportation Service
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            For over three decades, Genesis has set the standard for luxury chauffeured transportation in Houston. 
            Our commitment to excellence, safety, and professionalism has made us the preferred choice for discerning clients.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-soft-gold mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                {stat.number}
              </div>
              <div className="text-charcoal/70 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Professional chauffeur opening door of luxury black car"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-charcoal">
              Uncompromising Standards
            </h3>
            <p className="text-charcoal/80 leading-relaxed">
              Genesis was founded on the principle that luxury transportation should be more than just a ride—it should be an experience. 
              Our founder recognized the need for a transportation service that combined the elegance of luxury vehicles with the 
              reliability and professionalism that Houston's business community demanded.
            </p>
            <p className="text-charcoal/80 leading-relaxed">
              Today, we continue that tradition with a fleet of meticulously maintained vehicles, professional chauffeurs who undergo 
              extensive background checks and training, and a commitment to punctuality that has earned us the trust of Houston's 
              most discerning clients.
            </p>

            {/* Certifications */}
            <div className="space-y-3">
              <h4 className="text-charcoal font-semibold">Our Certifications & Standards:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2 text-charcoal/70">
                    <CheckCircle className="h-4 w-4 text-soft-gold flex-shrink-0" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-xl mb-4 mx-auto group-hover:bg-soft-gold/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-soft-gold" />
                  </div>
                  <h4 className="text-charcoal mb-3 group-hover:text-soft-gold transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>


      </div>
    </section>
  );
}