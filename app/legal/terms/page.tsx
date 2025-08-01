'use client';

import { FadeInSection } from "@/components/smooth-scroll";

export default function TermsOfService() {
  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeInSection>
          <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-8 leading-tight">
            Terms of <span className="font-semibold text-sage">Service</span>
          </h1>
          <p className="text-lg text-warm-gray mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </FadeInSection>

        <div className="prose prose-lg max-w-none">
          <FadeInSection>
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">1. Acceptance of Terms</h2>
              <p className="text-warm-gray leading-relaxed mb-4">
                By accessing and using iYogaasana's services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do not 
                use this service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">2. Studio Policies</h2>
              <div className="space-y-4 text-warm-gray">
                <p><strong>Class Attendance:</strong> Please arrive 10-15 minutes before class begins. Late entry may be denied to maintain the peaceful environment for other students.</p>
                <p><strong>Cancellation Policy:</strong> Classes must be cancelled at least 4 hours in advance to receive credit. No-shows will result in loss of class credit.</p>
                <p><strong>Health & Safety:</strong> Please inform instructors of any injuries or health conditions. Practice at your own level and listen to your body.</p>
                <p><strong>Equipment:</strong> Yoga mats and props are provided. You're welcome to bring your own equipment if preferred.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">3. Membership & Payments</h2>
              <div className="space-y-4 text-warm-gray">
                <p><strong>Membership Fees:</strong> All fees are due in advance and are non-refundable unless otherwise specified.</p>
                <p><strong>Class Packages:</strong> Unused classes expire 6 months from purchase date. Extensions may be granted for medical reasons with documentation.</p>
                <p><strong>Auto-Renewal:</strong> Monthly memberships automatically renew unless cancelled with 30 days notice.</p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">4. Liability & Assumption of Risk</h2>
              <p className="text-warm-gray leading-relaxed mb-4">
                Yoga practice involves physical activity and inherent risk of injury. By participating in classes, 
                you acknowledge that you are physically fit and able to participate. You assume all risks and 
                hold iYogaasana harmless from any claims, injuries, or damages arising from your participation.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">5. Privacy & Personal Information</h2>
              <p className="text-warm-gray leading-relaxed mb-4">
                We respect your privacy and are committed to protecting your personal information. We collect 
                only necessary information for providing our services and will not share your information with 
                third parties without your consent.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">6. Code of Conduct</h2>
              <div className="space-y-4 text-warm-gray">
                <p>We maintain a respectful, inclusive environment for all practitioners. Please:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respect fellow students and instructors</li>
                  <li>Maintain silence in practice rooms</li>
                  <li>Keep personal belongings secure</li>
                  <li>Practice good hygiene</li>
                  <li>Turn off mobile devices during class</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">7. Contact Information</h2>
              <p className="text-warm-gray leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
                <br />
                Email: info@iyogaasana.com
                <br />
                Phone: (555) 123-YOGA
              </p>
            </section>
          </FadeInSection>
        </div>
      </div>
    </div>
  );
}