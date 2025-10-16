import { Service, Testimonial, GalleryImage, BusinessHours, SocialLink } from '@/types';

export const services: Service[] = [
  {
    id: 'box-braids',
    name: 'Box Braids',
    description: 'Classic African box braids with premium synthetic or human hair extensions. Perfect for protective styling and low maintenance.',
    price: 120,
    duration: '4-6 hours',
    category: 'braids',
    features: [
      'Premium hair extensions included',
      'Scalp protection treatment',
      'Styling tips included',
      '2-week follow-up consultation'
    ],
    popular: true,
  },
  {
    id: 'boho-braids',
    name: 'Boho Braids',
    description: 'Trendy boho-style braids with loose, natural waves and effortless beauty for a free-spirited look.',
    price: 140,
    duration: '5-7 hours',
    category: 'braids',
    features: [
      'Boho hair extensions included',
      'Custom wave pattern',
      'Natural styling techniques',
      'Maintenance guide included'
    ],
    popular: true,
  },
  {
    id: 'cornrows',
    name: 'Cornrows',
    description: 'Traditional African cornrow braids in various patterns and designs for a timeless, cultural look.',
    price: 80,
    duration: '2-3 hours',
    category: 'braids',
    features: [
      'Custom pattern design',
      'Scalp massage included',
      'Protective styling tips',
      'Touch-up recommendations'
    ],
  },
  {
    id: 'goddess-braids',
    name: 'Goddess Braids',
    description: 'Elegant goddess braids with added curls and waves for a stunning, versatile look.',
    price: 150,
    duration: '5-7 hours',
    category: 'braids',
    features: [
      'Premium curly hair extensions',
      'Custom curl pattern',
      'Heat protection treatment',
      'Maintenance guide included'
    ],
  },
  {
    id: 'faux-locs',
    name: 'Faux Locs',
    description: 'Beautiful faux locs that mimic natural dreadlocks without the commitment.',
    price: 180,
    duration: '6-8 hours',
    category: 'braids',
    features: [
      'Premium loc hair included',
      'Custom length and thickness',
      'Installation care guide',
      '3-week follow-up included'
    ],
  },
  {
    id: 'braid-maintenance',
    name: 'Braid Maintenance',
    description: 'Professional maintenance service to keep your braids looking fresh and healthy.',
    price: 60,
    duration: '2-3 hours',
    category: 'maintenance',
    features: [
      'Scalp cleansing and conditioning',
      'Loose braid repair',
      'Edge touch-ups',
      'Styling refresh'
    ],
  },
  {
    id: 'consultation',
    name: 'Hair Consultation',
    description: 'Personalized consultation to determine the best braiding style for your hair type and lifestyle.',
    price: 25,
    duration: '30 minutes',
    category: 'consultation',
    features: [
      'Hair health assessment',
      'Style recommendations',
      'Maintenance planning',
      'Product recommendations'
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Giana Chavis',
    service: 'Artistic Hair Style',
    rating: 5,
    comment: 'I had a great experience at Niki\'s she was very professional and understanding. Talented with fast work getting the job done. Everything turned out perfect just how I wanted it I couldn\'t thank Niki enough for helping me with my artistic hair style. I will be back thanks Niki!!!!',
    date: '2024-01-15',
  },
  {
    id: '2',
    name: 'Keane Clarke',
    service: 'Box Braids',
    rating: 5,
    comment: 'After my first appointment, I knew I had to return. Niki is amazing. She understood how to braid my hair, hiding my flaws. I\'m skeptical about trying new hairstylists, but Niki did an amazing job in covering them. After a month and 2wks, my hair still looked great…I returned and "she ate it up"…GREAT Job Niki…I\'ll keep coming.',
    date: '2023-10-15',
  },
  {
    id: '3',
    name: 'Isabel Ajibare',
    service: 'Hair Styling',
    rating: 5,
    comment: 'Nikki is absolutely amazing, I am stuck with her because I love the way she makes my hair.',
    date: '2024-01-15',
  },
  {
    id: '4',
    name: 'G Taylor',
    service: 'Crochet Hair',
    rating: 5,
    comment: 'Niki has been doing my crochet hair for a while now. She\'s a very nice and polite lady. Niki does an excellent job and she\'s very fast. I will continue to go to her. Thanks Niki!',
    date: '2023-06-15',
  },
  {
    id: '5',
    name: 'Seun Matthias',
    service: 'Braids',
    rating: 5,
    comment: 'Wonderful stylist with the best touch. Her braids are very neat, painless and just well done.',
    date: '2024-01-15',
  },
  {
    id: '6',
    name: 'Hilda Iyasele',
    service: 'Braids',
    rating: 5,
    comment: 'I moved down here last year and met Niki. I started making my hair and my daughter\'s with Niki for over a year now. She makes very neat braids and the braids are not painful, which is why my daughter loves making her hair with her.',
    date: '2023-01-15',
  },
  {
    id: '7',
    name: 'Theresa S',
    service: 'Boho Braids',
    rating: 5,
    comment: 'She did an amazing job on my hair, I got boho braids for the first time, and they came out really nice. They were not painful at all, and they were a reasonable price. My mom got cornrows and they came out really nice.',
    date: '2023-01-15',
  },
  {
    id: '8',
    name: 'Tiffany Collins',
    service: 'Braids',
    rating: 5,
    comment: 'Not only is Niki a fast braider, but she\'s also very detailed. Every time I get my hair braided, I get so many compliments. My braids last for a long time, and she offers retouching appointments. I highly recommend Niki for any types of braid styles.',
    date: '2023-01-15',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: '/images/gallery/box-braids-1.jpg',
    alt: 'Beautiful box braids styling',
    category: 'box-braids',
    featured: true,
  },
  {
    id: '2',
    src: '/images/gallery/goddess-braids-1.jpg',
    alt: 'Elegant goddess braids with curls',
    category: 'goddess-braids',
    featured: true,
  },
  {
    id: '3',
    src: '/images/gallery/cornrows-1.jpg',
    alt: 'Traditional cornrow patterns',
    category: 'cornrows',
  },
  {
    id: '4',
    src: '/images/gallery/faux-locs-1.jpg',
    alt: 'Stylish faux locs',
    category: 'faux-locs',
    featured: true,
  },
  {
    id: '5',
    src: '/images/gallery/box-braids-2.jpg',
    alt: 'Medium length box braids',
    category: 'box-braids',
  },
  {
    id: '6',
    src: '/images/gallery/goddess-braids-2.jpg',
    alt: 'Long goddess braids',
    category: 'goddess-braids',
  },
];

export const businessHours: BusinessHours[] = [
  { day: 'Monday', open: '9:00 AM', close: '7:00 PM' },
  { day: 'Tuesday', open: '9:00 AM', close: '5:00 PM' },
  { day: 'Wednesday', open: '9:00 AM', close: '7:00 PM' },
  { day: 'Thursday', open: '9:00 AM', close: '7:00 PM' },
  { day: 'Friday', open: '8:00 AM', close: '9:00 PM' },
  { day: 'Saturday', open: '8:00 AM', close: '9:00 PM' },
  { day: 'Sunday', open: '9:00 AM', close: '7:00 PM' },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/nikisafricanbraiding',
    icon: 'instagram',
  },
  {
    platform: 'Nextdoor',
    url: 'https://nextdoor.com/business/nikis-african-hair-braiding',
    icon: 'nextdoor',
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/nikisafricanbraiding',
    icon: 'facebook',
  },
];

export const contactInfo = {
  phone: '(281) 408-3091',
  email: 'info@nikisafricanbraiding.com',
  address: '5303 S Mason Rd, Katy, TX 77450',
  location: 'Located in: The Brodie at Cinco Ranch Apartments',
  hours: businessHours,
};
