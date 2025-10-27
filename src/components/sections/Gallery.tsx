'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  EyeIcon 
} from '@heroicons/react/24/outline';

// Gallery images data
const galleryImages = [
  {
    id: 1,
    src: '/images/3AC920CF-4725-4C2A-978F-DC8CA411B4ED-removebg-preview.png',
    alt: 'Beautiful box braids styling',
    category: 'Box Braids',
    description: 'Classic box braids with perfect parting'
  },
  {
    id: 2,
    src: '/images/about-niki.png',
    alt: 'Professional hair braiding work',
    category: 'Professional Work',
    description: 'Expert hair braiding techniques'
  },
  {
    id: 3,
    src: '/images/F0D9487E-480C-4C51-B1FE-3DB72B3E6BBA-removebg-preview.png',
    alt: 'Elegant braid styling',
    category: 'Elegant Styles',
    description: 'Sophisticated braid designs'
  },
  {
    id: 4,
    src: '/images/F0D9487E-480C-4C51-B1FE-3DB72B3E6BBA.png',
    alt: 'Professional hair work',
    category: 'Professional Work',
    description: 'High-quality hair braiding services'
  },
  {
    id: 5,
    src: '/images/Screenshot 2025-10-14 at 12.51.27 AM.png',
    alt: 'Hair styling showcase',
    category: 'Showcase',
    description: 'Beautiful hair transformation'
  },
  {
    id: 6,
    src: '/images/Screenshot 2025-10-27 at 1.00.39 PM.png',
    alt: 'Box braids transformation',
    category: 'Box Braids',
    description: 'Stunning box braids before and after'
  },
  {
    id: 7,
    src: '/images/Screenshot 2025-10-27 at 1.00.52 PM.png',
    alt: 'Professional braiding work',
    category: 'Professional Work',
    description: 'Expert craftsmanship in action'
  },
  {
    id: 8,
    src: '/images/Screenshot 2025-10-27 at 1.01.27 PM.png',
    alt: 'Elegant braid styles',
    category: 'Elegant Styles',
    description: 'Sophisticated braid designs'
  },
  {
    id: 9,
    src: '/images/Screenshot 2025-10-27 at 1.16.56 PM.png',
    alt: 'Hair braiding showcase',
    category: 'Showcase',
    description: 'Beautiful hair transformations'
  },
  {
    id: 10,
    src: '/images/Screenshot 2025-10-27 at 1.17.19 PM.png',
    alt: 'Professional styling work',
    category: 'Professional Work',
    description: 'High-quality hair services'
  },
  {
    id: 11,
    src: '/images/Screenshot 2025-10-27 at 1.17.44 PM.png',
    alt: 'Box braids portfolio',
    category: 'Box Braids',
    description: 'Classic box braids styling'
  },
  {
    id: 12,
    src: '/images/Screenshot 2025-10-27 at 1.18.04 PM.png',
    alt: 'Hair styling gallery',
    category: 'Gallery',
    description: 'Portfolio of beautiful work'
  },
  {
    id: 13,
    src: '/images/Screenshot 2025-10-27 at 1.18.25 PM.png',
    alt: 'Professional braiding',
    category: 'Professional Work',
    description: 'Expert hair braiding techniques'
  },
  {
    id: 14,
    src: '/images/Screenshot 2025-10-27 at 1.18.38 PM.png',
    alt: 'Elegant hair styles',
    category: 'Elegant Styles',
    description: 'Sophisticated hair designs'
  },
  {
    id: 15,
    src: '/images/Screenshot 2025-10-27 at 1.18.56 PM.png',
    alt: 'Hair transformation showcase',
    category: 'Showcase',
    description: 'Amazing hair transformations'
  },
  {
    id: 16,
    src: '/images/Screenshot 2025-10-27 at 1.19.20 PM.png',
    alt: 'Box braids styling',
    category: 'Box Braids',
    description: 'Beautiful box braids work'
  },
  {
    id: 17,
    src: '/images/Screenshot 2025-10-27 at 1.19.38 PM.png',
    alt: 'Professional hair work',
    category: 'Professional Work',
    description: 'High-quality hair services'
  },
  {
    id: 18,
    src: '/images/Screenshot 2025-10-27 at 1.19.59 PM.png',
    alt: 'Hair styling portfolio',
    category: 'Portfolio',
    description: 'Stunning hair styling work'
  },
  {
    id: 19,
    src: '/images/Screenshot 2025-10-27 at 1.20.39 PM.png',
    alt: 'Elegant braid designs',
    category: 'Elegant Styles',
    description: 'Sophisticated braid work'
  },
  {
    id: 20,
    src: '/images/Screenshot 2025-10-27 at 1.21.16 PM.png',
    alt: 'Hair braiding showcase',
    category: 'Showcase',
    description: 'Beautiful hair braiding results'
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-secondary-900 mb-4">
            Our Gallery
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Explore our stunning portfolio of hair braiding work. Click on any image to view it in full size.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-3">
                      <EyeIcon className="w-6 h-6 text-secondary-900" />
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {image.category}
                  </span>
                </div>
              </div>

              {/* Image Info */}
              <div className="p-4">
                <h3 className="font-semibold text-secondary-900 mb-1">
                  {image.alt}
                </h3>
                <p className="text-sm text-secondary-600">
                  {image.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
              >
                <ChevronLeftIcon className="w-8 h-8 text-white" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
              >
                <ChevronRightIcon className="w-8 h-8 text-white" />
              </button>

              {/* Image Container */}
              <div className="relative max-w-7xl max-h-[90vh] mx-4">
                <motion.img
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  className="max-w-full max-h-full object-contain rounded-lg"
                />

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {galleryImages[currentIndex].alt}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {galleryImages[currentIndex].description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                      {galleryImages[currentIndex].category}
                    </span>
                    <span className="text-white/60 text-sm">
                      {currentIndex + 1} of {galleryImages.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-primary-600 scale-125'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-4">
            Ready to Transform Your Look?
          </h3>
          <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
            Book your appointment today and let us create a beautiful, long-lasting style just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
            >
              View Our Services
            </a>
            <a
              href="/contact"
              className="border-2 border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-600 hover:text-white transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
