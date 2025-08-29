import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Penthouse',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Luxury urban living with panoramic city views',
    year: '2024'
  },
  {
    id: 2,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Contemporary workspace fostering collaboration',
    year: '2023'
  },
  {
    id: 3,
    title: 'Coastal Retreat',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Serene beachfront home with natural elements',
    year: '2024'
  },
  {
    id: 4,
    title: 'Boutique Hotel',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Intimate luxury hospitality design',
    year: '2023'
  },
  {
    id: 5,
    title: 'Family Home Renovation',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Complete transformation of 1920s home',
    year: '2024'
  },
  {
    id: 6,
    title: 'Art Gallery Space',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Minimalist gallery showcasing contemporary art',
    year: '2023'
  }
];

const categories = ['All', 'Residential', 'Commercial'];

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-warm-taupe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-charcoal mb-6">
            <span className="font-serif text-navy">Our</span>
            <span className="font-sans ml-2">Portfolio</span>
          </h1>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
            Discover our collection of thoughtfully designed spaces that showcase our commitment to excellence and innovation in interior design.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-ivory border-b border-warm-taupe/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-1">
            <Filter className="w-5 h-5 text-charcoal/60 mr-3" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-navy text-ivory'
                    : 'text-charcoal hover:bg-sage-green/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/portfolio/${project.id}`}
                className="group block bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-300"></div>
                  <div className="absolute top-4 right-4 bg-deep-gold text-charcoal text-xs font-semibold px-3 py-1 rounded-full">
                    {project.year}
                  </div>
                </div>
                
                <div className="p-6">
                  <span className="text-sage-green text-sm font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold text-charcoal mt-2 mb-3 group-hover:text-navy transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-charcoal/70">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;