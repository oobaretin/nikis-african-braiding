import { Metadata } from 'next';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'About Us - Niki\'s African Hair Braiding | Professional Hair Braiding in Katy, Texas',
  description: 'Learn about Niki\'s African Hair Braiding, our mission, and our commitment to providing exceptional hair braiding services in Katy, Texas.',
  keywords: 'about nikis african hair braiding, hair braiding salon, Katy Texas, professional braiding',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <Testimonials />
    </div>
  );
}
