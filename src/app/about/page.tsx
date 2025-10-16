import { Metadata } from 'next';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'About Us - Braids by Shisha | Professional Hair Braiding in Katy, Texas',
  description: 'Learn about Braids by Shisha, our mission, and our commitment to providing exceptional hair braiding services in Katy, Texas.',
  keywords: 'about braids by shisha, hair braiding salon, Katy Texas, professional braiding',
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About />
      <Testimonials />
    </div>
  );
}
