import { Metadata } from 'next';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact Us - Braids by Shisha | Book Your Appointment in Katy, Texas',
  description: 'Contact Braids by Shisha to book your hair braiding appointment. Located in Katy, Texas. Call (281) 515-1173 or send us a message.',
  keywords: 'contact braids by shisha, book appointment, Katy Texas, hair braiding salon contact',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
