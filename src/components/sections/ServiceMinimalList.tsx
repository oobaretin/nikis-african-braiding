'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, ChevronRightIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { useBooking } from '@/components/booking/BookingProvider';
import { SALON_DATA } from '@/lib/salonData';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceMinimalList: React.FC = () => {
  const { openBookingModal } = useBooking();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setSelectedSubcategory(null);
    } else {
      setSelectedCategory(category);
      setSelectedSubcategory(null);
    }
  };

  const toggleSubcategory = (subcategory: string) => {
    if (selectedSubcategory === subcategory) {
      setSelectedSubcategory(null);
    } else {
      setSelectedSubcategory(subcategory);
    }
  };

  const handleBookingClick = (serviceName: string, variation: any) => {
    const serviceIdentifier = `${selectedCategory} - ${serviceName} - ${variation.name}`;
    openBookingModal(serviceIdentifier);
  };

  // Calculate total services count for each category
  const getCategoryServiceCount = (category: string) => {
    const subcategories = SALON_DATA[category];
    return Object.keys(subcategories).length;
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl md:text-4xl text-secondary-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Professional hair braiding services tailored to your unique style and needs.
          </p>
        </div>

        {/* Minimal Category List */}
        <div className="space-y-2 mb-8">
          {Object.keys(SALON_DATA).map((category) => {
            const serviceCount = getCategoryServiceCount(category);
            const isSelected = selectedCategory === category;
            
            return (
              <div key={category} className="border-b border-gray-100">
                <button
                  onClick={() => toggleCategory(category)}
                  className="w-full py-4 px-0 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-3">
                    {isSelected ? (
                      <ChevronDownIcon className="w-5 h-5 text-primary-600" />
                    ) : (
                      <ChevronRightIcon className="w-5 h-5 text-secondary-400" />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900">
                        {category}
                      </h3>
                      <p className="text-sm text-secondary-500">
                        {serviceCount} style{serviceCount !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </button>

                {/* Expanded Category Content */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-8 pb-4 space-y-3">
                        {Object.entries(SALON_DATA[category]).map(([subcategory, data]) => {
                          const isSubExpanded = selectedSubcategory === subcategory;

                          return (
                            <div key={subcategory} className="border-l-2 border-gray-100 pl-4">
                              <button
                                onClick={() => toggleSubcategory(subcategory)}
                                className="w-full text-left flex items-center justify-between py-2 hover:bg-gray-50 rounded transition-colors duration-200"
                              >
                                <div className="flex items-center space-x-2">
                                  {isSubExpanded ? (
                                    <ChevronDownIcon className="w-4 h-4 text-primary-600" />
                                  ) : (
                                    <ChevronRightIcon className="w-4 h-4 text-secondary-400" />
                                  )}
                                  <div>
                                    <h4 className="font-medium text-secondary-800">
                                      {subcategory}
                                    </h4>
                                    <p className="text-xs text-secondary-500">
                                      {data.variations.length} option{data.variations.length > 1 ? 's' : ''}
                                    </p>
                                  </div>
                                </div>
                              </button>

                              {/* Service Variations */}
                              <AnimatePresence>
                                {isSubExpanded && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="pl-6 pt-2 space-y-2">
                                      {data.variations.map((variation, idx) => (
                                        <motion.div
                                          key={idx}
                                          initial={{ opacity: 0, x: -10 }}
                                          animate={{ opacity: 1, x: 0 }}
                                          transition={{ delay: idx * 0.05 }}
                                          className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                                        >
                                          <div className="flex-1">
                                            <div className="flex items-center space-x-3">
                                              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                                              <span className="text-sm font-medium text-secondary-800">
                                                {variation.name}
                                              </span>
                                            </div>
                                            <div className="flex items-center text-xs text-secondary-500 ml-5 mt-1">
                                              <ClockIcon className="w-3 h-3 mr-1" />
                                              {variation.duration}
                                            </div>
                                          </div>
                                          <button
                                            onClick={() => handleBookingClick(subcategory, variation)}
                                            className="ml-4 px-3 py-1 bg-primary-600 text-white text-xs rounded-md hover:bg-primary-700 transition-colors duration-200 flex items-center"
                                          >
                                            <CalendarIcon className="w-3 h-3 mr-1" />
                                            Book
                                          </button>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Minimal Statistics */}
        <div className="border-t border-gray-200 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-600 mb-1">
                {Object.values(SALON_DATA).reduce((total, subcategories) => 
                  total + Object.keys(subcategories).length, 0
                )}+
              </div>
              <div className="text-sm text-secondary-600">Service Types</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600 mb-1">
                {Object.keys(SALON_DATA).length}
              </div>
              <div className="text-sm text-secondary-600">Categories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-600 mb-1">
                Expert
              </div>
              <div className="text-sm text-secondary-600">Professional Care</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-secondary-600 mb-4">
            Ready to book your next appointment?
          </p>
          <Link
            href="/gallery"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
          >
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceMinimalList;
