'use client';

import { FadeInSection } from "@/components/smooth-scroll";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ImageIcon } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Peaceful yoga meditation in natural setting",
    category: "Practice"
  },
  {
    src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Modern yoga studio interior",
    category: "Studio"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Yoga instructor teaching class",
    category: "Classes"
  },
  {
    src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Group yoga session outdoors",
    category: "Community"
  },
  {
    src: "https://images.unsplash.com/photo-1545389336-cf090694435e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Sunrise yoga by the beach",
    category: "Practice"
  },
  {
    src: "https://images.unsplash.com/photo-1588286840104-8957b019727f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "Meditation corner with plants",
    category: "Studio"
  }
];

export default function Gallery() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
              Our <span className="font-semibold text-sage">Gallery</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Take a glimpse into our beautiful studio spaces, inspiring classes,
              and the vibrant community that makes iYogaasana special.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <FadeInSection key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <span className="inline-block bg-sage px-3 py-1 rounded-full text-sm font-medium">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h2 className="text-3xl font-light text-charcoal mb-6">
              Experience It <span className="font-semibold text-sage">Yourself</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Ready to become part of our inspiring yoga community? 
              Join us for a class and discover your own transformation.
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
                <Link href="/contact">Visit Our Studio</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}