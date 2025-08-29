import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const portfolioProjects = [
  {
    id: 1,
    title: 'Modern Penthouse',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Luxury urban living with panoramic city views'
  },
  {
    id: 2,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Contemporary workspace fostering collaboration'
  },
  {
    id: 3,
    title: 'Coastal Retreat',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Serene beachfront home with natural elements'
  },
  {
    id: 4,
    title: 'Boutique Hotel',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Intimate luxury hospitality design'
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
    <section className="py-20 bg-warm-taupe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-charcoal mb-4">
            <span className="font-serif">Featured</span>
            <span className="font-sans ml-2 text-navy">Projects</span>
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Explore our carefully curated selection of transformative design projects
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-8 mb-12">
          {portfolioProjects.map((project) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.id}`}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 to-transparent p-6">
                <span className="text-deep-gold text-sm font-medium">{project.category}</span>
                <h3 className="text-xl font-bold text-ivory mt-1">{project.title}</h3>
                <p className="text-warm-taupe text-sm mt-2">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {portfolioProjects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <Link to={`/portfolio/${project.id}`} className="block">
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/90 to-transparent p-4">
                        <span className="text-deep-gold text-sm font-medium">{project.category}</span>
                        <h3 className="text-lg font-bold text-ivory mt-1">{project.title}</h3>
                        <p className="text-warm-taupe text-sm mt-1">{project.description}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-ivory/80 hover:bg-ivory p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={20} className="text-charcoal" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-ivory/80 hover:bg-ivory p-2 rounded-full transition-colors"
          >
            <ChevronRight size={20} className="text-charcoal" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {portfolioProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-navy' : 'bg-charcoal/30'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="inline-flex items-center bg-navy text-ivory px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-all duration-300"
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