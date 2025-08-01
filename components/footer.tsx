import Link from "next/link";
import { Flower, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Flower className="w-8 h-8 text-sage" />
              <span className="text-2xl font-semibold">iYogaasana</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform your mind, body, and soul through authentic yoga
              practices. Join our community and discover your inner peace.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center hover:bg-sage transition-colors duration-200"
              >
                <Facebook className="w-5 h-5 text-sage hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center hover:bg-sage transition-colors duration-200"
              >
                <Instagram className="w-5 h-5 text-sage hover:text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-sage/20 rounded-full flex items-center justify-center hover:bg-sage transition-colors duration-200"
              >
                <Youtube className="w-5 h-5 text-sage hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-sage transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-sage transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="hover:text-sage transition-colors duration-200"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-sage transition-colors duration-200"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-sage transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/legal/terms"
                  className="hover:text-sage transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/support"
                  className="hover:text-sage transition-colors duration-200"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/legal/disclaimer"
                  className="hover:text-sage transition-colors duration-200"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/testimonials"
                  className="hover:text-sage transition-colors duration-200"
                >
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 iYogaasana. All rights reserved. | Privacy Policy |
            Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
}
