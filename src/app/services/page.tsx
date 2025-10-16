import { Metadata } from 'next';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'Services - Niki\'s African Hair Braiding | Professional Hair Braiding in Katy, Texas',
  description: 'Explore our professional hair braiding services including box braids, goddess braids, cornrows, and faux locs. Expert styling in Katy, Texas.',
  keywords: 'hair braiding services, box braids, goddess braids, cornrows, faux locs, Katy Texas',
};

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <Services />
      <Testimonials />
    </div>
  );
}
