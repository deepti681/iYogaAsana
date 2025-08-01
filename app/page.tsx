'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FadeInSection, SlideInLeft, SlideInRight } from "@/components/smooth-scroll";
import Link from "next/link";
import { ChevronDown, Star, Quote } from "lucide-react";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center hero-gradient relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
                Transform Your
                <br />
                <span className="font-semibold">Mind, Body & Soul</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover inner peace and physical wellness through authentic
                yoga practices. Join our community of mindful practitioners on a
                journey to holistic well-being.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  asChild
                  className="bg-white text-sage hover:bg-white/90 rounded-full px-8 py-6 text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contact">Start Your Journey</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-sage rounded-full px-8 py-6 text-lg font-semibold transition-all duration-300"
                >
                  <Link href="/schedule">View Classes</Link>
                </Button>
              </div>
            </SlideInLeft>

            <SlideInRight className="text-center">
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Peaceful yoga meditation in serene natural setting"
                className="rounded-3xl shadow-2xl w-full h-auto max-w-md mx-auto"
              />
            </SlideInRight>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-4xl font-light text-charcoal mb-6">
              Why Choose iYogaasana?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience the perfect blend of traditional yoga wisdom and modern
              wellness practices in a supportive, inclusive community.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection className="text-center">
              <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🧘‍♀️</span>
              </div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4">
                Expert Guidance
              </h3>
              <p className="text-gray-600">
                Learn from certified instructors with years of experience in
                various yoga traditions and modern wellness techniques.
              </p>
            </FadeInSection>

            <FadeInSection className="text-center">
              <div className="w-20 h-20 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🌟</span>
              </div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4">
                All Levels Welcome
              </h3>
              <p className="text-gray-600">
                Whether you're a complete beginner or advanced practitioner, our
                classes are designed to meet you exactly where you are.
              </p>
            </FadeInSection>

            <FadeInSection className="text-center">
              <div className="w-20 h-20 bg-warm-beige/50 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🕉️</span>
              </div>
              <h3 className="text-2xl font-semibold text-charcoal mb-4">
                Holistic Approach
              </h3>
              <p className="text-gray-600">
                Experience the complete benefits of yoga through physical
                postures, breathwork, meditation, and philosophical teachings.
              </p>
            </FadeInSection>
          </div>

          <FadeInSection className="text-center mt-12">
            <Button
              asChild
              className="bg-sage hover:bg-sage/90 text-white rounded-full px-8 py-4 text-lg"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-4xl font-light text-charcoal mb-6">
              What Our <span className="font-semibold text-sage">Community</span> Says
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real experiences from our yoga family who have found transformation through practice.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <SlideInLeft>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-soft-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face" alt="Sarah Chen" />
                      <AvatarFallback className="bg-sage text-white">SC</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-charcoal">Sarah Chen</h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-terracotta text-terracotta" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-sage mb-3 opacity-50" />
                  <p className="text-warm-gray leading-relaxed italic">
                    "iYogaasana has completely transformed my approach to wellness. The instructors create such a peaceful, welcoming environment."
                  </p>
                </CardContent>
              </Card>
            </SlideInLeft>

            <SlideInLeft delay={0.1}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-soft-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face" alt="Michael Rodriguez" />
                      <AvatarFallback className="bg-sage text-white">MR</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-charcoal">Michael Rodriguez</h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-terracotta text-terracotta" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-sage mb-3 opacity-50" />
                  <p className="text-warm-gray leading-relaxed italic">
                    "As someone new to yoga, I was nervous about starting. The beginner classes here are perfect - no judgment, just support."
                  </p>
                </CardContent>
              </Card>
            </SlideInLeft>

            <SlideInLeft delay={0.2}>
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-white to-soft-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&w=150&h=150&fit=crop&crop=face" alt="Emily Thompson" />
                      <AvatarFallback className="bg-sage text-white">ET</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-charcoal">Emily Thompson</h3>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-terracotta text-terracotta" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-sage mb-3 opacity-50" />
                  <p className="text-warm-gray leading-relaxed italic">
                    "The variety of classes is amazing. From gentle restorative sessions to challenging power yoga, there's something for every mood."
                  </p>
                </CardContent>
              </Card>
            </SlideInLeft>
          </div>

          <FadeInSection className="text-center">
            <Button
              asChild
              className="bg-terracotta hover:bg-terracotta/90 text-white rounded-full px-8 py-4 text-lg"
            >
              <Link href="/testimonials">Read More Reviews</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}