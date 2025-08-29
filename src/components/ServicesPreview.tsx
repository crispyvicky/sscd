import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, RefreshCw, MessageCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description: 'Complete home transformations from concept to completion',
    features: ['Space Planning', 'Custom Furniture', 'Color Consultation']
  },
  {
    icon: Building,
    title: 'Commercial Design',
    description: 'Professional spaces that inspire and enhance productivity',
    features: ['Office Design', 'Retail Spaces', 'Hospitality']
  },
  {
    icon: RefreshCw,
    title: 'Renovations',
    description: 'Breathing new life into existing spaces with strategic updates',
    features: ['Kitchen Remodels', 'Bathroom Renovation', 'Whole Home']
  },
  {
    icon: MessageCircle,
    title: 'Consultations',
    description: 'Expert guidance and design direction for DIY projects',
    features: ['Design Strategy', 'Material Selection', 'Layout Planning']
  }
];

const ServicesPreview = () => {
  return (
    <section className="py-20 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4">
            <span className="font-serif text-navy">Our</span>
            <span className="font-sans ml-2">Services</span>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            From initial consultation to final installation, we provide comprehensive design solutions tailored to your unique vision and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-sage-green/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sage-green/20 transition-colors">
                <service.icon className="w-8 h-8 text-navy" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-3">{service.title}</h3>
              <p className="text-charcoal/70 mb-4">{service.description}</p>
              <ul className="space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-charcoal/60 flex items-center">
                    <span className="w-1.5 h-1.5 bg-deep-gold rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center bg-navy text-ivory px-8 py-4 rounded-lg font-semibold hover:bg-navy/90 transition-all duration-300"
          >
            See All Services
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;