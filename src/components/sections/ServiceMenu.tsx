'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Clock, Calendar } from 'lucide-react';
import { useBooking } from '@/components/booking/BookingProvider';
import { SALON_DATA } from '@/lib/salonData';

const ServiceMenu: React.FC = () => {
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
    // Create a service identifier that includes category, subcategory, and variation
    const serviceIdentifier = `${selectedCategory} - ${serviceName} - ${variation.name}`;
    openBookingModal(serviceIdentifier);
  };


  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl md:text-5xl text-secondary-900 mb-4">
            Service Menu
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Professional hair braiding services tailored to your unique style and needs. Expert craftsmanship with attention to detail and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {Object.keys(SALON_DATA).map((category) => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              className={`p-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white'
                  : 'bg-white text-secondary-800 hover:shadow-xl'
              }`}
            >
              <h3 className="text-xl font-bold">{category}</h3>
              <p className="text-sm mt-1 opacity-80">
                {Object.keys(SALON_DATA[category]).length} styles
              </p>
            </button>
          ))}
        </div>

        {selectedCategory && (
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6 flex items-center">
              <span className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 py-2 rounded-lg mr-3">
                {selectedCategory}
              </span>
            </h2>

            <div className="space-y-4">
              {Object.entries(SALON_DATA[selectedCategory]).map(([subcategory, data]) => {
                const isExpanded = selectedSubcategory === subcategory;
                const variationKey = `${selectedCategory}-${subcategory}`;
                const showVariations = expandedVariations[variationKey];

                return (
                  <div key={subcategory} className="border-2 border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleSubcategory(subcategory)}
                      className={`w-full p-5 flex items-center justify-between transition-colors ${
                        isExpanded ? 'bg-primary-100' : 'bg-secondary-50 hover:bg-secondary-100'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        {isExpanded ? <ChevronDown size={24} /> : <ChevronRight size={24} />}
                        <div className="text-left">
                          <h3 className="text-xl font-bold text-secondary-900">{subcategory}</h3>
                          <p className="text-sm text-secondary-600">
                            {data.variations.length} option{data.variations.length > 1 ? 's' : ''}
                          </p>
                          <p className="text-sm text-secondary-500 italic">{data.description || 'Professional hair service'}</p>
                        </div>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="bg-white p-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {data.variations.map((variation, idx) => (
                            <div
                              key={idx}
                              className="border-2 border-primary-200 rounded-lg p-4 transition-all duration-200 hover:border-primary-400 hover:shadow-md"
                            >
                              <div className="flex justify-between items-start mb-3">
                                <h4 className="font-semibold text-secondary-900 flex-1">
                                  {variation.name}
                                </h4>
                              </div>
                              <div className="flex items-center text-sm text-secondary-600 mb-3">
                                <Clock size={14} className="mr-1" />
                                {variation.duration}
                              </div>
                              <button 
                                onClick={() => handleBookingClick(subcategory, variation)}
                                className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 text-sm flex items-center justify-center"
                              >
                                <Calendar size={14} className="mr-2" />
                                Click to Book
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}


      </div>
    </section>
  );
};

export default ServiceMenu;
