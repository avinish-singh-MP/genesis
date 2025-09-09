import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
  {
    text: "Genesis has been our go-to transportation service for over 10 years. Their professionalism and reliability are unmatched. Every chauffeur is courteous and the vehicles are always immaculate.",
    author: "Sarah M.",
    role: "Corporate Executive",
    rating: 5,
    service: "Corporate Travel"
  },
  {
    text: "Used Genesis for our wedding transportation and they exceeded expectations. The stretch limo was beautiful, the driver was professional, and everything ran perfectly on schedule.",
    author: "Michael & Jennifer R.",
    role: "Wedding Clients",
    rating: 5,
    service: "Wedding Service"
  },
  {
    text: "I travel frequently for business and Genesis airport service is exceptional. They track my flights and are always waiting when I land. The vehicles are luxury quality.",
    author: "David L.",
    role: "Business Traveler",
    rating: 5,
    service: "Airport Transfer"
  },
  {
    text: "Fantastic service from start to finish. Easy booking, fair pricing, and the Escalade was perfect for our group. Will definitely use Genesis again for our next Houston visit.",
    author: "Amanda K.",
    role: "Event Coordinator",
    rating: 5,
    service: "Group Transportation"
  },
  {
    text: "Genesis handled transportation for our corporate event with 50+ executives. Flawless coordination, professional drivers, and luxury vehicles. Highly recommended.",
    author: "Robert T.",
    role: "VP Operations",
    rating: 5,
    service: "Corporate Events"
  },
  {
    text: "Been using Genesis for airport runs for 5 years. They're always on time, vehicles are clean and comfortable, and rates are fair. Excellent service every time.",
    author: "Lisa H.",
    role: "Frequent Flyer",
    rating: 5,
    service: "Airport Service"
  }
];

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState(3);

  // Auto-rotate reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle responsive display
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleReviews(1);
      } else if (window.innerWidth < 1024) {
        setVisibleReviews(2);
      } else {
        setVisibleReviews(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleReviews = () => {
    const result = [];
    for (let i = 0; i < visibleReviews; i++) {
      const index = (currentIndex + i) % reviews.length;
      result.push(reviews[index]);
    }
    return result;
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-soft-gold fill-current' : 'text-silver/50'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-off-white to-silver/10" role="region" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 id="reviews-heading" className="text-charcoal mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have to say about 
            their experience with Genesis Transportation.
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getVisibleReviews().map((review, index) => (
              <Card key={index} className="border-silver/30 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-8 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6">
                    <Quote className="h-6 w-6 text-soft-gold/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {renderStars(review.rating)}
                  </div>

                  {/* Service Badge */}
                  <Badge className="mb-4 bg-soft-gold/20 text-soft-gold border-soft-gold/30 text-xs">
                    {review.service}
                  </Badge>

                  {/* Review Text */}
                  <blockquote className="text-charcoal/80 mb-6 leading-relaxed italic">
                    "{review.text}"
                  </blockquote>

                  {/* Author */}
                  <div className="border-t border-silver/30 pt-4">
                    <div className="font-semibold text-charcoal">{review.author}</div>
                    <div className="text-sm text-charcoal/70">{review.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-soft-gold scale-110'
                    : 'bg-silver/40 hover:bg-silver/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Overall Rating */}
        <div className="text-center mt-16">
          <Card className="max-w-md mx-auto border-silver/30 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                {renderStars(5)}
              </div>
              <div className="text-3xl font-bold text-charcoal mb-2" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                5.0 Average Rating
              </div>
              <p className="text-charcoal/70">
                Based on 200+ verified reviews
              </p>
              <div className="mt-4 text-sm text-charcoal/60">
                Google Reviews • Yelp • Better Business Bureau
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}