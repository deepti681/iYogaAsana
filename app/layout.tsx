import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'iYogaasana - Transform Your Mind, Body & Soul',
  description: 'Discover inner peace and physical wellness through authentic yoga practices. Join our community of mindful practitioners on a journey to holistic well-being.',
  openGraph: {
    title: 'iYogaasana - Transform Your Mind, Body & Soul',
    description: 'Discover inner peace and physical wellness through authentic yoga practices.',
    images: ['https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}