'use client';

import { Button } from "@/components/ui/button";
import { FadeInSection, SlideInLeft, SlideInRight } from "@/components/smooth-scroll";
import Link from "next/link";
import { Heart, Users, Award, Leaf } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-6 leading-tight">
                Our <span className="font-semibold text-sage">Journey</span>
                <br />
                to Wellness
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded with the vision of making authentic yoga accessible to everyone,
                iYogaasana has been a sanctuary for mindful living and holistic wellness
                since our beginning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-sage hover:bg-sage/90 text-white rounded-full px-8 py-4"
                >
                  <Link href="/contact">Join Our Community</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-sage text-sage hover:bg-sage hover:text-white rounded-full px-8 py-4"
                >
                  <Link href="/schedule">View Classes</Link>
                </Button>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Peaceful yoga studio interior with natural lighting"
                className="rounded-3xl shadow-xl w-full h-auto"
              />
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-16">
            <h2 className="text-4xl font-light text-charcoal mb-6">
              Our Mission & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe yoga is more than physical exercise—it's a path to inner peace,
              community connection, and personal transformation.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInSection className="text-center">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Compassion</h3>
              <p className="text-gray-600">
                Creating a supportive space where everyone feels welcome and valued.
              </p>
            </FadeInSection>

            <FadeInSection className="text-center">
              <div className="w-16 h-16 bg-terracotta/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-terracotta" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Community</h3>
              <p className="text-gray-600">
                Building meaningful connections through shared practice and growth.
              </p>
            </FadeInSection>

            <FadeInSection className="text-center">
              <div className="w-16 h-16 bg-warm-beige/70 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Excellence</h3>
              <p className="text-gray-600">
                Maintaining the highest standards in teaching and practice.
              </p>
            </FadeInSection>

            <FadeInSection className="text-center">
              <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-sage" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-3">Growth</h3>
              <p className="text-gray-600">
                Supporting continuous learning and personal development.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <SlideInLeft>
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Yoga instructor teaching in a peaceful setting"
                className="rounded-3xl shadow-xl w-full h-auto"
              />
            </SlideInLeft>

            <SlideInRight>
              <h2 className="text-3xl font-light text-charcoal mb-6">
                Where It All <span className="font-semibold text-sage">Began</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  iYogaasana was born from a simple yet profound realization: that yoga's
                  ancient wisdom holds the keys to modern wellness challenges. Our founders,
                  both experienced practitioners and teachers, wanted to create a space where
                  traditional yoga meets contemporary life.
                </p>
                <p>
                  What started as a small studio with a handful of dedicated students has
                  grown into a thriving community of practitioners from all walks of life.
                  We've maintained our core commitment to authenticity while embracing
                  innovation in our teaching methods.
                </p>
                <p>
                  Today, we're proud to offer a diverse range of classes, workshops, and
                  retreats that honor yoga's rich heritage while making it accessible and
                  relevant for today's practitioners.
                </p>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl font-light text-charcoal mb-6">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our welcoming community and discover the transformative power of yoga.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-sage hover:bg-sage/90 text-white rounded-full px-8 py-4 text-lg"
              >
                <Link href="/schedule">View Our Classes</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-sage text-sage hover:bg-sage hover:text-white rounded-full px-8 py-4 text-lg"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}