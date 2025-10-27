import { Metadata } from 'next';
import Gallery from '@/components/sections/Gallery';

export const metadata: Metadata = {
  title: 'Gallery - Niki\'s African Hair Braiding | Hair Braiding Portfolio in Katy, Texas',
  description: 'View our stunning portfolio of African hair braiding work. See before and after photos, different braid styles, and our professional hair braiding results in Katy, Texas.',
  keywords: 'hair braiding gallery, braid styles portfolio, African hair braiding photos, Katy Texas hair gallery',
};

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <Gallery />
    </div>
  );
}
