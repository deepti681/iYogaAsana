'use client';

import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/smooth-scroll";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20 bg-soft-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <FadeInSection>
          <div className="mb-8">
            <span className="text-8xl">🧘‍♀️</span>
          </div>
          <h1 className="text-6xl font-light text-charcoal mb-6">404</h1>
          <h2 className="text-3xl font-light text-charcoal mb-6">
            Page Not <span className="font-semibold text-sage">Found</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            It seems like this page has found its inner peace and wandered off. 
            Let's guide you back to your practice.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-sage hover:bg-sage/90 text-white rounded-full px-8 py-4 text-lg"
            >
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-sage text-sage hover:bg-sage hover:text-white rounded-full px-8 py-4 text-lg"
              onClick={() => window.history.back()}
            >
              <span>
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </span>
            </Button>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}