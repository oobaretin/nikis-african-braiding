'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { useBooking } from '@/components/booking/BookingProvider';
import { SALON_DATA } from '@/lib/salonData';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceItem {
  id: string;
  category: string;
  subcategory: string;
  variation: {
    name: string;
    duration: string;
  };
  description: string;
}

const ServiceCarousel: React.FC = () => {
  const { openBookingModal } = useBooking();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Flatten all services into a single array for carousel
  const allServices: ServiceItem[] = [];
  Object.entries(SALON_DATA).forEach(([category, subcategories]) => {
    Object.entries(subcategories).forEach(([subcategory, data]) => {
      data.variations.forEach((variation) => {
        allServices.push({
          id: `${category}-${subcategory}-${variation.name}`,
          category,
          subcategory,
          variation,
          description: data.description,
        });
      });
    });
  });

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const [itemsToShow, setItemsToShow] = useState(itemsPerView.desktop);

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(itemsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(itemsPerView.tablet);
      } else {
        setItemsToShow(itemsPerView.desktop);
      }
    };

    updateItemsToShow();
    window.addEventListener('resize', updateItemsToShow);
    return () => window.removeEventListener('resize', updateItemsToShow);
  }, [itemsPerView.desktop, itemsPerView.mobile, itemsPerView.tablet]);

  const maxIndex = Math.max(0, allServices.length - itemsToShow);

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleBookingClick = (service: ServiceItem) => {
    const serviceIdentifier = `${service.category} - ${service.subcategory} - ${service.variation.name}`;
    openBookingModal(serviceIdentifier);
  };

  const visibleServices = allServices.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-secondary-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Professional hair braiding services tailored to your unique style and needs. 
            Expert craftsmanship with attention to detail and comfort.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Previous services"
          >
            <ChevronLeftIcon className="w-6 h-6 text-primary-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Next services"
          >
            <ChevronRightIcon className="w-6 h-6 text-primary-600" />
          </button>

          {/* Carousel Track */}
          <div 
            ref={carouselRef}
            className="overflow-hidden rounded-2xl"
          >
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * (100 / itemsToShow) + '%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {allServices.map((service, index) => (
                <div
                  key={service.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsToShow}%` }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full"
                  >
                    <div className="p-6 h-full flex flex-col">
                      {/* Service Header */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                            {service.category}
                          </span>
                          <div className="flex items-center text-secondary-500 text-sm">
                            <ClockIcon className="w-4 h-4 mr-1" />
                            {service.variation.duration}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-secondary-900 mb-1">
                          {service.subcategory}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary-600 mb-2">
                          {service.variation.name}
                        </h4>
                      </div>

                      {/* Service Description */}
                      <p className="text-secondary-600 text-sm mb-6 flex-grow">
                        {service.description}
                      </p>

                      {/* Book Button */}
                      <button
                        onClick={() => handleBookingClick(service)}
                        className="w-full bg-primary-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center group"
                      >
                        <CalendarIcon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Book This Service
                      </button>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(allServices.length / itemsToShow) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsToShow) === index
                    ? 'bg-primary-600 scale-125'
                    : 'bg-secondary-300 hover:bg-secondary-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                isAutoPlaying
                  ? 'bg-primary-600 text-white'
                  : 'bg-secondary-200 text-secondary-700 hover:bg-secondary-300'
              }`}
            >
              {isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll
            </button>
          </div>
        </div>

        {/* Service Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {allServices.length}+
            </div>
            <div className="text-secondary-600">Service Options</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {Object.keys(SALON_DATA).length}
            </div>
            <div className="text-secondary-600">Service Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              Expert
            </div>
            <div className="text-secondary-600">Professional Styling</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCarousel;
