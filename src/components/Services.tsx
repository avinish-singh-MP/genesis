import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Plane, Building2, Heart, GraduationCap, Music, Clock, Camera, Crown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    icon: Plane,
    title: "Airport Transportation (IAH & Hobby)",
    description: "Skip the stress of rideshares and taxi lines. Our professional chauffeurs provide on-time airport transfers to and from George Bush Intercontinental (IAH) and William P. Hobby Airport (HOU). We track flight times in real-time, assist with luggage, and ensure you arrive relaxed and on schedule — day or night.",
    image: "https://img1.wsimg.com/isteam/ip/9f3f78b0-0d9e-422a-bac2-90fa16f6f2be/Airport%20Transportation%20(IAH%20%26%20Hobby)%20-%20Genesis.jpg/:/cr=t:4.06%25,l:0%25,w:100%25,h:74.94%25/rs=w:388,h:194,cg:true",
    page: "airport-transport"
  },
  {
    icon: Building2,
    title: "Executive & Corporate Travel",
    description: "Need dependable ground transportation for your business? Genesis offers executive black car service, SUVs, and shuttles for corporate meetings, airport runs, team travel, and VIP guests. Last-minute booking? No problem — we're ready 24/7 with competitive business rates and dedicated support.",
    image: "https://img1.wsimg.com/isteam/ip/9f3f78b0-0d9e-422a-bac2-90fa16f6f2be/Executive%20%26%20Corporate%20Travel%20-%20Genesis%20Limo.jpg/:/cr=t:12.55%25,l:0%25,w:100%25,h:74.9%25/rs=w:388,h:194,cg:true",
    page: "executive-travel"
  },
  {
    icon: Heart,
    title: "Wedding Transportation",
    description: "Celebrate your big day in style with Genesis. From elegant stretch limos to spacious party buses, we provide wedding transportation for bride & groom, bridal parties, guest shuttles, and even airport/hotel transfers. Ask us about our wedding packages and custom routes — we'll help your day go smoothly.",
    image: "https://img1.wsimg.com/isteam/ip/9f3f78b0-0d9e-422a-bac2-90fa16f6f2be/Wedding%20Transportation%20-%20Genesis%20Limo.jpg/:/cr=t:12.53%25,l:0%25,w:100%25,h:74.94%25/rs=w:388,h:194,cg:true",
    page: "wedding-limo"
  },
  {
    icon: Camera,
    title: "Houston City Tours",
    description: "Enjoy a private sightseeing tour of Houston in a luxurious, professionally chauffeured limousine or bus. Avoid the inconveniences of traffic, parking, and figuring out how to get around. We'll show you all the best highlights of the city and welcome customized tours for any size group.",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3VzdG9uJTIwY2l0eSUyMHNreWxpbmV8ZW58MXx8fHwxNzU2ODI3OTkzfDA&ixlib=rb-4.1.0&q=80&w=388",
    page: "city-tours"
  },
  {
    icon: Music,
    title: "Night Out & Special Events",
    description: "Whether it's a birthday party, anniversary, concert, sporting event, or just a night on the town, Genesis offers a fun, safe, and stylish way to get around. Our party buses and stretch limos come equipped with lights, sound systems, and all the space you need to celebrate — without worrying about parking or driving.",
    image: "https://img1.wsimg.com/isteam/ip/9f3f78b0-0d9e-422a-bac2-90fa16f6f2be/Night%20Out%20%26%20Special%20Events%20-%20Genesis%20Limo.jpg/:/cr=t:12.53%25,l:0%25,w:100%25,h:74.94%25/rs=w:388,h:194,cg:true",
    page: "night-out"
  },
  {
    icon: GraduationCap,
    title: "Proms & Graduations",
    description: "Make prom night or graduation unforgettable. Our fleet of super stretch limousines and party buses includes premium lighting, sound systems, and more. Parents can rest easy knowing their teens are in safe hands with experienced, fully licensed chauffeurs. Multi-vehicle discounts available for large groups.",
    image: "https://img1.wsimg.com/isteam/ip/9f3f78b0-0d9e-422a-bac2-90fa16f6f2be/%20Proms%20%26%20Graduations%20-%20Genesis%20Limo.jpg/:/cr=t:12.51%25,l:0%25,w:100%25,h:74.99%25/rs=w:388,h:194,cg:true",
    page: "prom-graduation"
  },
  {
    icon: Crown,
    title: "Quinceañera Transportation",
    description: "Genesis provides personalized Quinceañera limousine service that will have you thinking about your celebration for years to come! This right of passage marks a turning point in a young girl's life, and we treat it with the special care and attention it deserves.",
    image: "https://images.unsplash.com/photo-1464207687429-7505649dae38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWluY2VhbmVyYSUyMGxpbW91c2luZXxlbnwxfHx8fDE3NTY4Mjc5OTN8MA&ixlib=rb-4.1.0&q=80&w=388",
    page: "quinceanera"
  },
  {
    icon: Clock,
    title: "Hourly/As Directed",
    description: "Flexible hourly service for shopping, dining, city tours, or any personal transportation needs throughout Houston. Perfect for those who need reliable transportation with the freedom to change plans as the day unfolds.",
    image: "https://img1.wsimg.com/isteam/ip/9f3f78b0-0d9e-422a-bac2-90fa16f6f2be/Limousine%20_%20Genesis%20Limo.jpg/:/cr=t:22.94%25,l:0%25,w:100%25,h:74.99%25/rs=w:388,h:194,cg:true",
    page: "services-hourly"
  }
];

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps = {}) {
  return (
    <section id="services" className="py-20 bg-white" role="region" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="services-heading" className="text-charcoal mb-6">
            Our Services
          </h2>
          <p className="text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed mb-6">
            Houston Limousine Services
          </p>
          <p className="text-lg text-charcoal/70 max-w-4xl mx-auto leading-relaxed">
            Genesis Limo is proud to be one of the top-rated limousine companies in Houston, offering a wide range of luxury vehicles for all occasions. From stretch limousines to sleek sedans and party buses, we provide clean, modern vehicles with courteous chauffeurs — available 24/7.
          </p>
        </div>

        {/* Service Tiles */}
        <div className="space-y-8">
          {/* First 6 services - Regular 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                  {/* Subtle Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-soft-gold/20 backdrop-blur-sm rounded-xl border border-soft-gold/30">
                        <IconComponent className="h-6 w-6 text-soft-gold" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    {/* Title */}
                    <h3 className="text-charcoal mb-3 group-hover:text-soft-gold transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-charcoal/70 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <Button 
                      variant="outline" 
                      className="w-full border-soft-gold/30 text-soft-gold hover:bg-soft-gold hover:text-rich-black text-sm"
                      onClick={() => onNavigate?.(service.page)}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Last 2 services - Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {services.slice(6, 8).map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <Card key={index + 6} className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                    {/* Subtle Image */}
                    <div className="relative h-48 overflow-hidden">
                      <ImageWithFallback
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/40 to-transparent"></div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center justify-center w-12 h-12 bg-soft-gold/20 backdrop-blur-sm rounded-xl border border-soft-gold/30">
                          <IconComponent className="h-6 w-6 text-soft-gold" />
                        </div>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      {/* Title */}
                      <h3 className="text-charcoal mb-3 group-hover:text-soft-gold transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-charcoal/70 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* CTA */}
                      <Button 
                        variant="outline" 
                        className="w-full border-soft-gold/30 text-soft-gold hover:bg-soft-gold hover:text-rich-black text-sm"
                        onClick={() => onNavigate?.(service.page)}
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-charcoal/60 mb-6">
            Need custom transportation solutions? We tailor our services to meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => onNavigate?.('contact')}
              className="inline-flex items-center text-soft-gold hover:text-soft-gold/80 font-semibold text-lg group"
            >
              Get Custom Quote
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <span className="text-charcoal/40">or</span>
            <a 
              href="tel:713-227-2582" 
              className="inline-flex items-center text-soft-gold hover:text-soft-gold/80 font-semibold text-lg group"
            >
              Speak with Our Specialists
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}