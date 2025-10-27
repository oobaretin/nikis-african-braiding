'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  EyeIcon 
} from '@heroicons/react/24/outline';

// Gallery images data - All hair braiding work screenshots
const galleryImages = [
  {
    id: 1,
    src: '/images/Screenshot_2025-10-14_at_12.51.27AM.png',
    alt: 'Hair styling showcase',
    description: 'Beautiful hair transformation'
  },
  {
    id: 2,
    src: '/images/Screenshot_2025-10-27_at_1.00.39PM.png',
    alt: 'Box braids transformation',
    description: 'Stunning box braids before and after'
  },
  {
    id: 3,
    src: '/images/Screenshot_2025-10-27_at_1.00.52PM.png',
    alt: 'Professional braiding work',
    description: 'Expert craftsmanship in action'
  },
  {
    id: 4,
    src: '/images/Screenshot_2025-10-27_at_1.01.27PM.png',
    alt: 'Elegant braid styles',
    description: 'Sophisticated braid designs'
  },
  {
    id: 5,
    src: '/images/Screenshot_2025-10-27_at_1.16.56PM.png',
    alt: 'Hair braiding showcase',
    description: 'Beautiful hair transformations'
  },
  {
    id: 6,
    src: '/images/Screenshot_2025-10-27_at_1.17.19PM.png',
    alt: 'Professional styling work',
    description: 'High-quality hair services'
  },
  {
    id: 7,
    src: '/images/Screenshot_2025-10-27_at_1.17.44PM.png',
    alt: 'Box braids portfolio',
    description: 'Classic box braids styling'
  },
  {
    id: 8,
    src: '/images/Screenshot_2025-10-27_at_1.18.04PM.png',
    alt: 'Hair styling gallery',
    description: 'Portfolio of beautiful work'
  },
  {
    id: 9,
    src: '/images/Screenshot_2025-10-27_at_1.18.25PM.png',
    alt: 'Professional braiding',
    description: 'Expert hair braiding techniques'
  },
  {
    id: 10,
    src: '/images/Screenshot_2025-10-27_at_1.18.38PM.png',
    alt: 'Elegant hair styles',
    description: 'Sophisticated hair designs'
  },
  {
    id: 11,
    src: '/images/Screenshot_2025-10-27_at_1.18.56PM.png',
    alt: 'Hair transformation showcase',
    description: 'Amazing hair transformations'
  },
  {
    id: 12,
    src: '/images/Screenshot_2025-10-27_at_1.19.20PM.png',
    alt: 'Box braids styling',
    description: 'Beautiful box braids work'
  },
  {
    id: 13,
    src: '/images/Screenshot_2025-10-27_at_1.19.38PM.png',
    alt: 'Professional hair work',
    description: 'High-quality hair services'
  },
  {
    id: 14,
    src: '/images/Screenshot_2025-10-27_at_1.19.59PM.png',
    alt: 'Hair styling portfolio',
    description: 'Stunning hair styling work'
  },
  {
    id: 15,
    src: '/images/Screenshot_2025-10-27_at_1.20.39PM.png',
    alt: 'Elegant braid designs',
    description: 'Sophisticated braid work'
  },
  {
    id: 16,
    src: '/images/Screenshot_2025-10-27_at_1.21.16PM.png',
    alt: 'Hair braiding showcase',
    description: 'Beautiful hair braiding results'
  },
  {
    id: 17,
    src: '/images/Screenshot_2025-10-27_at_1.21.40PM.png',
    alt: 'Professional hair styling',
    description: 'Expert hair braiding techniques'
  },
  {
    id: 18,
    src: '/images/Screenshot_2025-10-27_at_1.21.55PM.png',
    alt: 'Box braids showcase',
    description: 'Classic box braids work'
  },
  {
    id: 19,
    src: '/images/Screenshot_2025-10-27_at_1.22.05PM.png',
    alt: 'Hair transformation work',
    description: 'Beautiful hair transformations'
  },
  {
    id: 20,
    src: '/images/Screenshot_2025-10-27_at_1.22.18PM.png',
    alt: 'Elegant styling work',
    description: 'Sophisticated hair designs'
  },
  {
    id: 21,
    src: '/images/Screenshot_2025-10-27_at_1.22.28PM.png',
    alt: 'Professional braiding showcase',
    description: 'High-quality hair services'
  },
  {
    id: 22,
    src: '/images/Screenshot_2025-10-27_at_1.23.00PM.png',
    alt: 'Hair styling portfolio',
    description: 'Stunning hair styling work'
  },
  {
    id: 23,
    src: '/images/Screenshot_2025-10-27_at_1.23.32PM.png',
    alt: 'Box braids transformation',
    description: 'Beautiful box braids work'
  },
  {
    id: 24,
    src: '/images/Screenshot_2025-10-27_at_1.24.04PM.png',
    alt: 'Hair braiding showcase',
    description: 'Amazing hair braiding results'
  },
  {
    id: 25,
    src: '/images/Screenshot_2025-10-27_at_1.24.23PM.png',
    alt: 'Professional styling work',
    description: 'Expert hair braiding techniques'
  },
  {
    id: 26,
    src: '/images/Screenshot_2025-10-27_at_1.24.48PM.png',
    alt: 'Elegant hair designs',
    description: 'Sophisticated braid work'
  },
  {
    id: 27,
    src: '/images/Screenshot_2025-10-27_at_1.25.06PM.png',
    alt: 'Hair transformation showcase',
    description: 'Beautiful hair transformations'
  },
  {
    id: 28,
    src: '/images/Screenshot_2025-10-27_at_1.25.33PM.png',
    alt: 'Box braids portfolio',
    description: 'Classic box braids styling'
  },
  {
    id: 29,
    src: '/images/Screenshot_2025-10-27_at_12.44.17PM.png',
    alt: 'Professional hair work',
    description: 'High-quality hair services'
  },
  {
    id: 30,
    src: '/images/Screenshot_2025-10-27_at_12.45.52PM.png',
    alt: 'Hair styling gallery',
    description: 'Portfolio of beautiful work'
  },
  {
    id: 31,
    src: '/images/Screenshot_2025-10-27_at_12.47.34PM.png',
    alt: 'Elegant braid styles',
    description: 'Sophisticated hair designs'
  },
  {
    id: 32,
    src: '/images/Screenshot_2025-10-27_at_12.48.33PM.png',
    alt: 'Hair braiding showcase',
    description: 'Beautiful hair braiding results'
  },
  {
    id: 33,
    src: '/images/Screenshot_2025-10-27_at_12.48.46PM.png',
    alt: 'Professional styling work',
    description: 'Expert hair braiding techniques'
  },
  {
    id: 34,
    src: '/images/Screenshot_2025-10-27_at_12.49.21PM.png',
    alt: 'Box braids transformation',
    description: 'Stunning box braids work'
  },
  {
    id: 35,
    src: '/images/Screenshot_2025-10-27_at_12.49.44PM.png',
    alt: 'Hair styling portfolio',
    description: 'Stunning hair styling work'
  },
  {
    id: 36,
    src: '/images/Screenshot_2025-10-27_at_12.50.11PM.png',
    alt: 'Elegant hair designs',
    description: 'Sophisticated braid work'
  },
  {
    id: 37,
    src: '/images/Screenshot_2025-10-27_at_12.51.38PM.png',
    alt: 'Hair transformation showcase',
    description: 'Amazing hair transformations'
  },
  {
    id: 38,
    src: '/images/Screenshot_2025-10-27_at_12.52.00PM.png',
    alt: 'Professional braiding work',
    description: 'Expert craftsmanship in action'
  },
  {
    id: 39,
    src: '/images/Screenshot_2025-10-27_at_12.52.19PM.png',
    alt: 'Box braids styling',
    description: 'Beautiful box braids work'
  },
  {
    id: 40,
    src: '/images/Screenshot_2025-10-27_at_12.52.37PM.png',
    alt: 'Hair styling gallery',
    description: 'Portfolio of beautiful work'
  },
  {
    id: 41,
    src: '/images/Screenshot_2025-10-27_at_12.53.03PM.png',
    alt: 'Elegant hair styles',
    description: 'Sophisticated hair designs'
  },
  {
    id: 42,
    src: '/images/Screenshot_2025-10-27_at_12.53.26PM.png',
    alt: 'Hair braiding showcase',
    description: 'Beautiful hair braiding results'
  },
  {
    id: 43,
    src: '/images/Screenshot_2025-10-27_at_12.54.02PM.png',
    alt: 'Professional styling work',
    description: 'High-quality hair services'
  },
  {
    id: 44,
    src: '/images/Screenshot_2025-10-27_at_12.58.36PM.png',
    alt: 'Box braids portfolio',
    description: 'Classic box braids styling'
  },
  {
    id: 45,
    src: '/images/Screenshot_2025-10-27_at_12.58.57PM.png',
    alt: 'Hair transformation work',
    description: 'Beautiful hair transformations'
  },
  {
    id: 46,
    src: '/images/Screenshot_2025-10-27_at_12.59.11PM.png',
    alt: 'Elegant braid designs',
    description: 'Sophisticated braid work'
  },
  {
    id: 47,
    src: '/images/Screenshot_2025-10-27_at_12.59.24PM.png',
    alt: 'Professional hair work',
    description: 'Expert hair braiding techniques'
  },
  {
    id: 48,
    src: '/images/Screenshot_2025-10-27_at_12.59.38PM.png',
    alt: 'Hair styling portfolio',
    description: 'Stunning hair styling work'
  },
  {
    id: 49,
    src: '/images/Screenshot_2025-10-27_at_12.59.59PM.png',
    alt: 'Box braids showcase',
    description: 'Beautiful box braids work'
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
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.img
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  className="max-w-full max-h-full object-contain"
                />

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {galleryImages[currentIndex].alt}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {galleryImages[currentIndex].description}
                  </p>
                  <div className="flex items-center justify-end mt-2">
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
