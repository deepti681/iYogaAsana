'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FadeInSection, SlideInLeft, SlideInRight } from "@/components/smooth-scroll";
import { Star, Quote } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    review: "iYogaasana has completely transformed my approach to wellness. The instructors are incredibly knowledgeable and create such a peaceful, welcoming environment. I've been practicing here for over a year and can't imagine going anywhere else.",
    classes: "Hatha Yoga, Meditation"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    review: "As someone who was completely new to yoga, I was nervous about starting. The beginner classes here are perfect - no judgment, just support and guidance. My flexibility and mental clarity have improved dramatically.",
    classes: "Beginner Yoga, Vinyasa Flow"
  },
  {
    id: 3,
    name: "Emily Thompson",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    review: "The variety of classes offered is amazing. From gentle restorative sessions to challenging power yoga, there's something for every mood and energy level. The studio itself is beautiful and so calming.",
    classes: "Power Yoga, Restorative Yoga"
  },
  {
    id: 4,
    name: "David Park",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    review: "I've been dealing with chronic back pain for years. The therapeutic yoga classes here have been life-changing. The instructors really understand anatomy and provide modifications that work for my specific needs.",
    classes: "Therapeutic Yoga, Yin Yoga"
  },
  {
    id: 5,
    name: "Lisa Wang",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    review: "The meditation sessions have helped me manage stress and anxiety better than I ever thought possible. The teachers create such a supportive community - I've made lifelong friends here.",
    classes: "Meditation, Mindfulness Yoga"
  },
  {
    id: 6,
    name: "James Anderson",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face",
    rating: 5,
    review: "I love how authentic and traditional the approach is here while still being accessible to modern practitioners. The philosophy behind each class really resonates with me, and I always leave feeling centered.",
    classes: "Traditional Yoga, Philosophy Classes"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'fill-terracotta text-terracotta' : 'text-gray-300'}`} 
        />
      ))}
    </div>
  );
};

export default function Testimonials() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-soft-white to-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-6 leading-tight">
              What Our <span className="font-semibold text-sage">Community</span> Says
            </h1>
            <p className="text-xl text-warm-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover the transformative experiences of our yoga community. 
              Real stories from real people who have found their path to wellness with us.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <SlideInLeft key={testimonial.id} delay={index * 0.1}>
                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-soft-white">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <Avatar className="w-16 h-16 mr-4">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback className="bg-sage text-white text-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-charcoal text-lg">{testimonial.name}</h3>
                        <StarRating rating={testimonial.rating} />
                      </div>
                    </div>
                    
                    <Quote className="w-8 h-8 text-sage mb-4 opacity-50" />
                    
                    <p className="text-warm-gray leading-relaxed mb-6 italic">
                      "{testimonial.review}"
                    </p>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-sm text-sage font-medium">
                        Favorite Classes: {testimonial.classes}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </SlideInLeft>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-sage text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join our welcoming community and discover the transformative power of yoga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-sage hover:bg-gray-100 rounded-full px-8 py-4 text-lg"
              >
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-sage rounded-full px-8 py-4 text-lg"
              >
                <Link href="/schedule">View Class Schedule</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}