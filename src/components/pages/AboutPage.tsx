import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { 
  Shield, 
  Award, 
  Users, 
  Clock, 
  CheckCircle, 
  Star,
  Phone,
  Heart,
  Target,
  Briefcase
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const companyValues = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Every vehicle is meticulously maintained and every chauffeur undergoes comprehensive background checks and training."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We maintain the highest standards of service, from our luxury fleet to our professional chauffeurs."
  },
  {
    icon: Heart,
    title: "Customer Care",
    description: "Your comfort and satisfaction are our top priorities. We go above and beyond to exceed expectations."
  },
  {
    icon: Target,
    title: "Reliability",
    description: "On-time service and consistent quality have made us Houston's most trusted transportation company."
  }
];

const safetyStandards = [
  "DOT certified and TCP licensed operations",
  "Comprehensive background checks for all chauffeurs",
  "Regular vehicle inspections and maintenance",
  "Commercial insurance coverage exceeding state requirements",
  "GPS tracking and real-time monitoring",
  "Emergency response protocols",
  "Drug and alcohol testing programs",
  "Continuous safety training and education"
];

const chauffeurTraining = [
  "Professional driving certification",
  "Customer service excellence training", 
  "Houston area geography and traffic patterns",
  "VIP and executive service protocols",
  "Emergency and first aid procedures",
  "Vehicle maintenance and safety checks",
  "Cultural sensitivity and discretion training",
  "Ongoing performance evaluations"
];

const certifications = [
  { name: "Department of Transportation (DOT)", description: "Federal transportation safety compliance" },
  { name: "Texas Transportation Code (TCP)", description: "State-level commercial transportation licensing" },
  { name: "Commercial Insurance", description: "Comprehensive liability and vehicle coverage" },
  { name: "Better Business Bureau", description: "A+ rating for customer satisfaction" }
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaGF1ZmZldXJ8ZW58MXx8fHwxNzU2ODI3OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Genesis professional chauffeur service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/50"></div>
        
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-soft-gold/20 text-soft-gold border-soft-gold/30">
                Established 1990
              </Badge>
              
              <h1 className="text-off-white mb-6">
                About Genesis
              </h1>
              <p className="text-xl text-off-white/90 leading-relaxed">
                Over three decades of exceptional service, safety, and professionalism in Houston's luxury transportation industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-charcoal mb-6">Our Story</h2>
              <div className="space-y-6 text-charcoal/80 leading-relaxed">
                <p>
                  Founded in 1990, Genesis began with a simple mission: to provide Houston with the most reliable, 
                  professional, and luxurious transportation service available. What started as a small family business 
                  has grown into Houston's premier chauffeured transportation company.
                </p>
                <p>
                  Over 35 years later, we've maintained our commitment to excellence while adapting to the evolving 
                  needs of our clients. From corporate executives to wedding parties, from airport transfers to 
                  special events, Genesis has been there for Houston's most important moments.
                </p>
                <p>
                  Our success is built on three fundamental principles: unwavering safety standards, exceptional 
                  customer service, and a fleet of meticulously maintained luxury vehicles. These principles have 
                  earned us the trust of thousands of satisfied clients and established us as Houston's transportation leader.
                </p>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-soft-gold/10 to-soft-gold/5 rounded-2xl border border-soft-gold/20">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl font-bold text-soft-gold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    35+
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Years of Excellence</div>
                    <div className="text-sm text-charcoal/70">Serving Houston since 1990</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="border-silver/30 shadow-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmbGVldHxlbnwxfHx8fDE3NTY4Mjc5OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Genesis luxury fleet"
                  className="w-full h-96 object-cover"
                />
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-gradient-to-b from-off-white to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-6">Our Values</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 group text-center">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-xl mb-6 mx-auto group-hover:bg-soft-gold/20 transition-colors">
                      <IconComponent className="h-8 w-8 text-soft-gold" />
                    </div>
                    <h3 className="text-charcoal mb-4 group-hover:text-soft-gold transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-charcoal/70 leading-relaxed text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-charcoal mb-6">Safety Standards</h2>
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                Your safety is our highest priority. We maintain industry-leading safety standards 
                and exceed all regulatory requirements.
              </p>

              <div className="space-y-4">
                {safetyStandards.map((standard, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-soft-gold mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal/80">{standard}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-charcoal mb-6">Chauffeur Training</h2>
              <p className="text-xl text-charcoal/80 mb-8 leading-relaxed">
                Our professional chauffeurs undergo comprehensive training to ensure the highest 
                standards of service, safety, and professionalism.
              </p>

              <div className="space-y-4">
                {chauffeurTraining.map((training, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="h-5 w-5 text-soft-gold mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal/80">{training}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing & Insurance */}
      <section className="py-20 bg-gradient-to-b from-off-white to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-charcoal mb-6">Licensing & Insurance</h2>
            <p className="text-xl text-charcoal/80 max-w-3xl mx-auto">
              We maintain all required certifications and carry comprehensive insurance coverage 
              for your complete peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-silver/30 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-soft-gold/10 rounded-xl flex-shrink-0">
                      <Shield className="h-6 w-6 text-soft-gold" />
                    </div>
                    <div>
                      <h3 className="text-charcoal mb-2">{cert.name}</h3>
                      <p className="text-charcoal/70 text-sm">{cert.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Card className="border-silver/30 shadow-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBleGVjdXRpdmV8ZW58MXx8fHwxNzU2ODI3OTk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Genesis leadership team"
                  className="w-full h-96 object-cover"
                />
              </Card>
            </div>

            <div>
              <h2 className="text-charcoal mb-6">Leadership & Experience</h2>
              <div className="space-y-6 text-charcoal/80 leading-relaxed">
                <p>
                  Genesis is led by a team of transportation industry veterans with decades of combined 
                  experience. Our leadership team brings together expertise in operations, safety, 
                  customer service, and business management.
                </p>
                <p>
                  This experienced leadership ensures that Genesis continues to set the standard for 
                  luxury transportation in Houston while maintaining the personal touch and attention 
                  to detail that has defined our service since 1990.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-soft-gold/10 rounded-xl">
                  <div className="text-2xl font-bold text-soft-gold mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    50+
                  </div>
                  <div className="text-sm text-charcoal/70">Professional Chauffeurs</div>
                </div>
                <div className="text-center p-4 bg-soft-gold/10 rounded-xl">
                  <div className="text-2xl font-bold text-soft-gold mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                    98%
                  </div>
                  <div className="text-sm text-charcoal/70">Customer Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-charcoal to-rich-black">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-off-white mb-4">
            Experience the Genesis Difference
          </h2>
          <p className="text-xl text-off-white/80 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust Genesis for their transportation needs. 
            Discover why we've been Houston's premier choice for over 35 years.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Button 
              size="lg" 
              className="bg-soft-gold hover:bg-soft-gold/90 text-rich-black font-semibold text-xl px-12 py-6"
              asChild
            >
              <a href="#" onClick={(e) => { e.preventDefault(); /* handled globally to contact */ }}>Book Your Ride</a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-3 border-off-white text-off-white hover:bg-off-white hover:text-rich-black font-semibold text-xl px-12 py-6"
              asChild
            >
              <a href="tel:713-227-2582" className="flex items-center space-x-3">
                <Phone className="h-6 w-6" />
                <span>Call 713-CAR-CLUB</span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}