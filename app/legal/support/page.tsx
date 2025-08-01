'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeInSection, SlideInLeft } from "@/components/smooth-scroll";
import { Phone, Mail, Clock, MapPin, MessageCircle, Book } from "lucide-react";
import Link from "next/link";

export default function Support() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-soft-white to-warm-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-6 leading-tight">
              We're Here to <span className="font-semibold text-sage">Help</span>
            </h1>
            <p className="text-xl text-warm-gray mb-8 max-w-3xl mx-auto leading-relaxed">
              Have questions about classes, memberships, or need assistance? 
              Our friendly team is ready to support your yoga journey.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <SlideInLeft>
              <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Phone className="w-12 h-12 text-sage mx-auto mb-4" />
                  <CardTitle className="text-charcoal">Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-gray mb-4">
                    Speak directly with our team for immediate assistance
                  </p>
                  <p className="text-sage font-semibold text-lg">(555) 123-YOGA</p>
                  <p className="text-sm text-warm-gray mt-2">Available during studio hours</p>
                </CardContent>
              </Card>
            </SlideInLeft>

            <SlideInLeft delay={0.1}>
              <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <Mail className="w-12 h-12 text-sage mx-auto mb-4" />
                  <CardTitle className="text-charcoal">Email Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-gray mb-4">
                    Send us your questions and we'll respond within 24 hours
                  </p>
                  <p className="text-sage font-semibold">info@iyogaasana.com</p>
                  <p className="text-sm text-warm-gray mt-2">Detailed responses guaranteed</p>
                </CardContent>
              </Card>
            </SlideInLeft>

            <SlideInLeft delay={0.2}>
              <Card className="text-center border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <MessageCircle className="w-12 h-12 text-sage mx-auto mb-4" />
                  <CardTitle className="text-charcoal">Live Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-gray mb-4">
                    Quick questions? Chat with us in real-time
                  </p>
                  <Button className="bg-sage hover:bg-sage/90 text-white rounded-full">
                    Start Chat
                  </Button>
                  <p className="text-sm text-warm-gray mt-2">Available 9 AM - 6 PM</p>
                </CardContent>
              </Card>
            </SlideInLeft>
          </div>

          {/* Support Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-charcoal">
                    <Clock className="w-6 h-6 text-sage mr-3" />
                    Support Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-warm-gray">Monday - Friday</span>
                    <span className="text-charcoal font-medium">6:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-warm-gray">Saturday</span>
                    <span className="text-charcoal font-medium">7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-warm-gray">Sunday</span>
                    <span className="text-charcoal font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-warm-gray">
                      Emergency support available 24/7 for urgent matters
                    </p>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection>
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-charcoal">
                    <MapPin className="w-6 h-6 text-sage mr-3" />
                    Visit Our Studio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-warm-gray mb-4">
                    Prefer to speak in person? Visit us at our peaceful studio location.
                  </p>
                  <div className="space-y-2 text-charcoal">
                    <p>123 Wellness Street</p>
                    <p>Mindful City, MC 12345</p>
                  </div>
                  <Button 
                    asChild
                    variant="outline" 
                    className="mt-4 border-sage text-sage hover:bg-sage hover:text-white rounded-full"
                  >
                    <Link href="/contact">Get Directions</Link>
                  </Button>
                </CardContent>
              </Card>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-6">
                Frequently Asked <span className="font-semibold text-sage">Questions</span>
              </h2>
              <p className="text-xl text-warm-gray max-w-3xl mx-auto">
                Find quick answers to common questions about our classes, memberships, and policies.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SlideInLeft>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">
                    What should I bring to my first class?
                  </h3>
                  <p className="text-warm-gray">
                    Just bring yourself and comfortable clothing! We provide mats, blocks, straps, 
                    and all other equipment. A water bottle is recommended.
                  </p>
                </CardContent>
              </Card>
            </SlideInLeft>

            <SlideInLeft delay={0.1}>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">
                    Can I cancel my membership anytime?
                  </h3>
                  <p className="text-warm-gray">
                    Monthly memberships can be cancelled with 30 days notice. Class packages 
                    are non-refundable but can be paused for medical reasons.
                  </p>
                </CardContent>
              </Card>
            </SlideInLeft>

            <SlideInLeft delay={0.2}>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">
                    Do you offer beginner-friendly classes?
                  </h3>
                  <p className="text-warm-gray">
                    Absolutely! We have dedicated beginner classes and all our instructors 
                    provide modifications for different skill levels.
                  </p>
                </CardContent>
              </Card>
            </SlideInLeft>

            <SlideInLeft delay={0.3}>
              <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold text-charcoal mb-3">
                    How do I book classes?
                  </h3>
                  <p className="text-warm-gray">
                    You can book through our mobile app, website, or call the studio directly. 
                    We recommend booking in advance as classes fill up quickly.
                  </p>
                </CardContent>
              </Card>
            </SlideInLeft>
          </div>

          <div className="text-center mt-12">
            <FadeInSection>
              <Button 
                asChild
                className="bg-sage hover:bg-sage/90 text-white rounded-full px-8 py-4"
              >
                <Link href="/contact">Still Have Questions?</Link>
              </Button>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}