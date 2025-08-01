'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FadeInSection, SlideInLeft, SlideInRight } from "@/components/smooth-scroll";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <h1 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
              Get in <span className="font-semibold text-sage">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to start your yoga journey? Have questions about our classes? 
              We'd love to hear from you and help you find the perfect practice.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <SlideInLeft>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-charcoal">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="rounded-lg"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your yoga experience or ask any questions..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="rounded-lg min-h-[120px]"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-sage hover:bg-sage/90 text-white rounded-full py-3 text-lg"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </SlideInLeft>

            {/* Contact Information */}
            <SlideInRight>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-light text-charcoal mb-6">
                    Visit Our <span className="font-semibold text-sage">Studio</span>
                  </h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Located in the heart of the city, our beautiful studio provides
                    a peaceful sanctuary for your yoga practice. Come experience
                    our welcoming community firsthand.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-sage" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Address</h3>
                      <p className="text-gray-600">
                        123 Serenity Street<br />
                        Mindful District, Zen City 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-terracotta/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-terracotta" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Phone</h3>
                      <p className="text-gray-600">(555) 123-YOGA</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-warm-beige/70 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-sage" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                      <p className="text-gray-600">hello@iyogaasana.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-sage" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">Studio Hours</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                        <p>Saturday: 8:00 AM - 8:00 PM</p>
                        <p>Sunday: 9:00 AM - 7:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                    alt="iYogaasana studio interior"
                    className="w-full h-64 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </SlideInRight>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-soft-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-3xl font-light text-charcoal mb-6">
              Find <span className="font-semibold text-sage">Us</span>
            </h2>
            <p className="text-xl text-gray-600">
              Conveniently located with easy access to public transportation and parking.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-sage" />
                <p className="text-lg">Interactive Map Coming Soon</p>
                <p className="text-sm">123 Serenity Street, Mindful District</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  );
}