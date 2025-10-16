import { Metadata } from 'next';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact Us - Niki\'s African Hair Braiding | Book Your Appointment in Katy, Texas',
  description: 'Contact Niki\'s African Hair Braiding to book your hair braiding appointment. Located in Katy, Texas. Call (281) 408-3091 or send us a message.',
  keywords: 'contact nikis african hair braiding, book appointment, Katy Texas, hair braiding salon contact',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
