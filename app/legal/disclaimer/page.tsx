'use client';

import { FadeInSection } from "@/components/smooth-scroll";
import { AlertTriangle, Heart, Shield } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeInSection>
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-terracotta mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-8 leading-tight">
              Health & Safety <span className="font-semibold text-sage">Disclaimer</span>
            </h1>
            <p className="text-lg text-warm-gray">
              Please read this important information before participating in any yoga classes or activities.
            </p>
          </div>
        </FadeInSection>

        <div className="prose prose-lg max-w-none">
          <FadeInSection>
            <div className="bg-terracotta/10 border-l-4 border-terracotta p-6 mb-12 rounded-r-lg">
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-terracotta mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-charcoal mb-2">Important Health Notice</h3>
                  <p className="text-warm-gray mb-0">
                    Yoga practice involves physical movement and poses that may present risk of injury. 
                    By participating in our classes, you acknowledge these risks and agree to practice safely.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-6 flex items-center">
                <Shield className="w-6 h-6 text-sage mr-3" />
                Medical Consultation
              </h2>
              <div className="space-y-4 text-warm-gray">
                <p>Before beginning any yoga program, we strongly recommend that you:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Consult with your physician, especially if you have any medical conditions</li>
                  <li>Inform your doctor about your intention to begin yoga practice</li>
                  <li>Discuss any injuries, surgeries, or chronic conditions that may affect your practice</li>
                  <li>Get medical clearance if you are pregnant or have recently given birth</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">Conditions Requiring Special Attention</h2>
              <div className="space-y-4 text-warm-gray">
                <p>Please inform your instructor if you have any of the following conditions:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside space-y-2">
                    <li>High or low blood pressure</li>
                    <li>Heart conditions</li>
                    <li>Recent surgeries</li>
                    <li>Pregnancy</li>
                    <li>Joint problems or arthritis</li>
                    <li>Back or neck injuries</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Glaucoma or eye conditions</li>
                    <li>Vertigo or balance issues</li>
                    <li>Chronic pain conditions</li>
                    <li>Recent fractures</li>
                    <li>Breathing difficulties</li>
                    <li>Any other medical concerns</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">Practice Guidelines</h2>
              <div className="space-y-4 text-warm-gray">
                <p><strong>Listen to Your Body:</strong> Only practice poses that feel comfortable. Never force or strain.</p>
                <p><strong>Communicate:</strong> Inform instructors of any discomfort, pain, or concerns during class.</p>
                <p><strong>Modifications:</strong> Always ask for pose modifications if needed. There's no shame in adapting poses.</p>
                <p><strong>Stop if Necessary:</strong> If you feel dizzy, nauseous, or experience pain, stop immediately and rest.</p>
                <p><strong>Hydration:</strong> Stay properly hydrated before, during, and after practice.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">Assumption of Risk</h2>
              <p className="text-warm-gray leading-relaxed mb-4">
                By participating in yoga classes at iYogaasana, you acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-warm-gray ml-4">
                <li>You are voluntarily participating in yoga activities</li>
                <li>You understand the physical demands and risks involved</li>
                <li>You are responsible for your own safety and well-being</li>
                <li>You will practice within your own limits and capabilities</li>
                <li>You assume all risks associated with participation</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">Professional Guidance</h2>
              <div className="space-y-4 text-warm-gray">
                <p>
                  Our certified yoga instructors are trained to provide safe, effective guidance. However, 
                  they are not medical professionals and cannot diagnose, treat, or provide medical advice.
                </p>
                <p>
                  If you experience any injury or adverse effects during or after class, please seek 
                  appropriate medical attention immediately.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">Emergency Procedures</h2>
              <div className="space-y-4 text-warm-gray">
                <p>In case of emergency during class:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Alert the instructor immediately</li>
                  <li>We will call emergency services if necessary</li>
                  <li>Basic first aid is available on-site</li>
                  <li>Emergency contact information should be provided during registration</li>
                </ul>
              </div>
            </section>

            <div className="bg-sage/10 border-l-4 border-sage p-6 rounded-r-lg">
              <h3 className="text-lg font-semibold text-charcoal mb-2">Questions or Concerns?</h3>
              <p className="text-warm-gray mb-0">
                If you have any questions about this disclaimer or concerns about your ability to 
                safely participate in yoga classes, please contact us before attending class.
              </p>
              <p className="text-sage font-medium mt-2">
                Email: info@iyogaasana.com | Phone: (555) 123-YOGA
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}