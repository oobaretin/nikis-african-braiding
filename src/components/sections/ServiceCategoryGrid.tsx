'use client';

import React, { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';
import { useBooking } from '@/components/booking/BookingProvider';
import { SALON_DATA } from '@/lib/salonData';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceCategoryGrid: React.FC = () => {
  const { openBookingModal } = useBooking();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [expandedVariations, setExpandedVariations] = useState<Record<string, boolean>>({});

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

  // Calculate total services count for each category (count subcategories, not variations)
  const getCategoryServiceCount = (category: string) => {
    const subcategories = SALON_DATA[category];
    return Object.keys(subcategories).length;
  };

  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-secondary-900 mb-4">
            Service Menu
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Professional hair braiding services with transparent pricing. Click on any service to see detailed options and pricing.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {Object.keys(SALON_DATA).map((category) => {
            const serviceCount = getCategoryServiceCount(category);
            const isSelected = selectedCategory === category;
            
            return (
              <motion.button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 ${
                  isSelected
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white'
                    : 'bg-white text-secondary-800 hover:shadow-xl'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-bold mb-2">{category}</h3>
                <p className="text-sm opacity-80">
                  {serviceCount} Service{serviceCount !== 1 ? 's' : ''}
                </p>
              </motion.button>
            );
          })}
        </div>

        {/* Expanded Category Details */}
        <AnimatePresence>
          {selectedCategory && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8"
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6 flex items-center">
                <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-lg mr-3">
                  {selectedCategory}
                </span>
              </h2>

              <div className="space-y-4">
                {Object.entries(SALON_DATA[selectedCategory]).map(([subcategory, data]) => {
                  const isExpanded = selectedSubcategory === subcategory;

                  return (
                    <div key={subcategory} className="border-2 border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleSubcategory(subcategory)}
                        className={`w-full p-5 flex items-center justify-between transition-colors ${
                          isExpanded ? 'bg-primary-100' : 'bg-secondary-50 hover:bg-secondary-100'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          {isExpanded ? (
                            <ChevronDownIcon className="w-6 h-6 text-primary-600" />
                          ) : (
                            <ChevronRightIcon className="w-6 h-6 text-secondary-600" />
                          )}
                          <div className="text-left">
                            <h3 className="text-xl font-bold text-secondary-900">{subcategory}</h3>
                            <p className="text-sm text-secondary-600">
                              {data.variations.length} option{data.variations.length > 1 ? 's' : ''}
                            </p>
                            <p className="text-sm text-secondary-500 italic">
                              {data.description || 'Professional hair service'}
                            </p>
                          </div>
                        </div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-5"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {data.variations.map((variation, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="border-2 border-primary-200 rounded-lg p-4 transition-all duration-200 hover:border-primary-400 hover:shadow-md"
                                >
                                  <div className="flex justify-between items-start mb-3">
                                    <h4 className="font-semibold text-secondary-900 flex-1">
                                      {variation.name}
                                    </h4>
                                  </div>
                                  <div className="flex items-center text-sm text-secondary-600 mb-3">
                                    <ClockIcon className="w-4 h-4 mr-2" />
                                    {variation.duration}
                                  </div>
                                  <button 
                                    onClick={() => handleBookingClick(subcategory, variation)}
                                    className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 text-sm flex items-center justify-center"
                                  >
                                    <CalendarIcon className="w-4 h-4 mr-2" />
                                    Click to Book
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

        {/* Service Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {Object.values(SALON_DATA).reduce((total, subcategories) => 
                total + Object.keys(subcategories).length, 0
              )}+
            </div>
            <div className="text-secondary-600">Service Types</div>
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

export default ServiceCategoryGrid;
