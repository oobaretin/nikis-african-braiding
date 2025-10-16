import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookingProvider } from '@/components/booking/BookingProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Niki\'s African Hair Braiding & Boho Hair Seller - Professional Hair Services in Katy, Texas',
  description: 'Transform your look with expert African hair braiding and boho hair styles at Niki\'s. Located in Katy, Texas. Book your appointment today for stunning braids and boho styles that last.',
  keywords: 'African hair braiding, boho hair, braids, Katy Texas, hair salon, professional braiding, protective styles, boho hair seller',
  authors: [{ name: 'Niki\'s African Hair Braiding' }],
  creator: 'Niki\'s African Hair Braiding',
  publisher: 'Niki\'s African Hair Braiding',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.nikisafricanbraiding.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Niki\'s African Hair Braiding & Boho Hair Seller - Professional Hair Services',
    description: 'Transform your look with expert African hair braiding and boho hair styles at Niki\'s. Located in Katy, Texas.',
    url: 'https://www.nikisafricanbraiding.com',
    siteName: 'Niki\'s African Hair Braiding',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Niki\'s African Hair Braiding & Boho Hair Seller - Professional Hair Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Niki\'s African Hair Braiding & Boho Hair Seller - Professional Hair Services',
    description: 'Transform your look with expert African hair braiding and boho hair styles at Niki\'s. Located in Katy, Texas.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <BookingProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </BookingProvider>
      </body>
    </html>
  );
}
