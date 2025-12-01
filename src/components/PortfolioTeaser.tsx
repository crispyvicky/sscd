import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioProjects = [
  {
    id: 1,
    title: 'Modern Penthouse',
    category: 'Residential Space',
    image:
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=900&fit=crop',
    description: 'Minimal, warm, and luxury-inspired interiors'
  },
  {
    id: 2,
    title: 'Premium Workspace',
    category: 'Commercial Space',
    image:
      'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=900&fit=crop',
    description: 'Open layouts crafted for comfort & productivity'
  },
  {
    id: 3,
    title: 'Coastal Retreat Villa',
    category: 'Residential Space',
    image:
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=900&fit=crop',
    description: 'Nature-inspired luxury with earthy tones'
  },
  {
    id: 4,
    title: 'Luxury Boutique Stay',
    category: 'Hospitality',
    image:
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=900&fit=crop',
    description: 'Experience-first design with a warm palette'
  }
];

const PortfolioTeaser = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioProjects.length) % portfolioProjects.length);
  };

  return (
    <section className="py-20 bg-warm-taupe overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 fade-in-up">
          <h2 className="text-4xl font-bold text-charcoal mb-3">
            <span className="font-serif">Featured</span>
            <span className="font-sans ml-2 text-navy">Projects</span>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            A glimpse into the spaces we've shaped over the years
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-10 mb-12">
          {portfolioProjects.map((project, i) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group relative block rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-all duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                  <span className="text-deep-gold text-sm">{project.category}</span>
                  <h3 className="text-2xl font-bold text-ivory mt-1">{project.title}</h3>
                  <p className="text-warm-taupe text-sm mt-1">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative fade-in-up">
          <div className="overflow-hidden rounded-xl shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {portfolioProjects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <Link to={`/portfolio/${project.id}`}>
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-72 object-cover"
                      />

                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <span className="text-deep-gold text-sm">{project.category}</span>
                        <h3 className="text-xl font-bold text-ivory mt-1">{project.title}</h3>
                        <p className="text-warm-taupe text-sm mt-1">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Nav Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-ivory/80 hover:bg-ivory p-2 rounded-full shadow-md"
          >
            <ChevronLeft size={18} className="text-charcoal" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-ivory/80 hover:bg-ivory p-2 rounded-full shadow-md"
          >
            <ChevronRight size={18} className="text-charcoal" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-5 space-x-2">
            {portfolioProjects.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-navy scale-110' : 'bg-charcoal/40'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 fade-in-up">
          <Link
            to="/portfolio"
            className="inline-flex items-center bg-navy text-ivory px-7 py-3 rounded-lg font-semibold hover:bg-navy/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View All Projects
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PortfolioTeaser;
