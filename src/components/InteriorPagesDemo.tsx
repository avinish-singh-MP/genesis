import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { 
  Car, 
  Plane, 
  Building2, 
  Heart, 
  Clock, 
  Users, 
  Phone,
  Mail,
  ArrowRight
} from "lucide-react";

interface InteriorPagesDemoProps {
  onNavigate: (page: string) => void;
}

export function InteriorPagesDemo({ onNavigate }: InteriorPagesDemoProps) {
  const demoPages = [
    {
      title: "Fleet Detail Page",
      description: "Detailed vehicle information with specs, features, and booking",
      icon: Car,
      page: "fleet-detail",
      features: ["Vehicle specifications", "Photo gallery", "Instant quote form", "Sticky reserve button"]
    },
    {
      title: "Airport Services",
      description: "Specialized airport transportation with flight monitoring",
      icon: Plane,
      page: "services-airport",
      features: ["Flight tracking", "Meet & greet", "Wait time included", "Both IAH & HOU"]
    },
    {
      title: "Corporate Travel",
      description: "Executive transportation for business needs",
      icon: Building2,
      page: "services-corporate",
      features: ["Executive vehicles", "Professional service", "Corporate billing", "Flexible scheduling"]
    },
    {
      title: "Wedding Services",
      description: "Elegant transportation for special events",
      icon: Heart,
      page: "services-events",
      features: ["Decorated vehicles", "Timeline coordination", "Photo sessions", "Bridal packages"]
    },
    {
      title: "Hourly Service",
      description: "Flexible transportation for any need",
      icon: Clock,
      page: "services-hourly",
      features: ["Dedicated chauffeur", "Multiple stops", "No mileage limits", "3-hour minimum"]
    },
    {
      title: "About Genesis",
      description: "Company story, values, and safety standards",
      icon: Users,
      page: "about",
      features: ["35+ year history", "Safety standards", "Chauffeur training", "Company values"]
    },
    {
      title: "Contact & Quote",
      description: "Comprehensive booking form and contact information",
      icon: Phone,
      page: "contact",
      features: ["Detailed quote form", "Contact information", "Service area map", "24/7 phone support"]
    }
  ];

  return null;
}