'use client';

import React from 'react';
import Link from 'next/link';
import { services } from '@/lib/data';
import { formatPrice } from '@/lib/utils';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { StarIcon, ClockIcon } from '@heroicons/react/24/solid';

export const Services: React.FC = () => {

  return (
    <section id="services" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-4xl md:text-5xl text-secondary-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Professional hair braiding services tailored to your unique style and needs. 
            Each service includes premium materials and expert craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card hover className="h-full flex flex-col">
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <StarIcon className="w-4 h-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardContent className="flex-1 pt-8">
                  <h3 className="font-display font-semibold text-2xl text-secondary-900 mb-3">
                    {service.name}
                  </h3>
                  
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-secondary-500">
                      <ClockIcon className="w-5 h-5 mr-2" />
                      <span className="text-sm">{service.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-primary-600">
                      {formatPrice(service.price)}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-secondary-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter>
                  <Link href="/services">
                    <Button 
                      className="w-full"
                    >
                      Book This Service
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-secondary-600 mb-6">
            Not sure which service is right for you?
          </p>
          <Link href="/services">
            <Button 
              variant="outline"
            >
              Schedule a Consultation
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
