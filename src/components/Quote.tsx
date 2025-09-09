import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Phone, Mail, Clock, MapPin, Users, Star, MessageSquare } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    primary: "713-CAR-CLUB",
    secondary: "(713) 227-2582",
    description: "Speak directly with our reservation specialists",
    action: "tel:713-227-2582",
    available: "24/7 for reservations"
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@genesishouston.com",
    secondary: "quotes@genesishouston.com",
    description: "Get detailed quotes and information",
    action: "mailto:info@genesishouston.com",
    available: "Response within 1 hour"
  },
  {
    icon: MessageSquare,
    title: "Text Us",
    primary: "(713) 227-2582",
    secondary: "Quick questions & confirmations",
    description: "Fast responses for urgent requests",
    action: "sms:713-227-2582",
    available: "Mon-Fri 7AM-10PM"
  }
];

const serviceRates = [
  {
    service: "Airport Transfer",
    vehicle: "Executive Sedan",
    rate: "Starting at $85",
    description: "One-way to/from Houston airports",
    features: ["Flight monitoring", "Meet & greet", "30 min wait time"]
  },
  {
    service: "Hourly Service",
    vehicle: "Luxury SUV",
    rate: "$95/hour",
    description: "Minimum 2 hours",
    features: ["Professional chauffeur", "Flexible schedule", "Premium amenities"]
  },
  {
    service: "Special Events",
    vehicle: "Stretch Limousine",
    rate: "Starting at $150/hour",
    description: "Weddings, proms, celebrations",
    features: ["Red carpet service", "Champagne service", "Decorations available"]
  }
];

export function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    vehicle: "",
    date: "",
    time: "",
    pickup: "",
    dropoff: "",
    passengers: "",
    details: ""
  });

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert("Thank you for your quote request! We'll contact you within 15 minutes during business hours.");
  };

  return (
    <section id="quote" className="py-20 bg-gradient-to-br from-off-white to-silver/10" role="region" aria-labelledby="quote-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="quote-heading" className="text-charcoal mb-6">
            Get Your Instant Quote
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Experience luxury transportation tailored to your needs. Get a personalized quote in minutes, 
            or call us directly for immediate assistance.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-soft-gold/10 rounded-xl mb-6 mx-auto group-hover:bg-soft-gold/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-soft-gold" />
                  </div>
                  
                  <h3 className="text-charcoal mb-4 group-hover:text-soft-gold transition-colors">
                    {method.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="font-semibold text-charcoal">{method.primary}</div>
                    <div className="text-charcoal/70">{method.secondary}</div>
                  </div>
                  
                  <p className="text-charcoal/70 text-sm mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  
                  <div className="text-xs text-soft-gold font-medium mb-6">
                    {method.available}
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-soft-gold text-soft-gold hover:bg-soft-gold hover:text-rich-black"
                    asChild
                  >
                    <a href={method.action}>Contact Now</a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>


      </div>
    </section>
  );
}