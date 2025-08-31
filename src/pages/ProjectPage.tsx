import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, Calendar, MapPin } from 'lucide-react';

const projects = {
  '1': {
    title: 'Modern Penthouse',
    category: 'Residential',
    year: '2024',
    location: 'San Francisco, CA',
    description: 'A stunning transformation of a 3,500 sq ft penthouse featuring panoramic city views. The design emphasizes clean lines, luxury materials, and seamless indoor-outdoor living.',
    challenge: 'The original space felt cold and disconnected despite the amazing views. The client wanted a warm, sophisticated environment perfect for both intimate family moments and elegant entertaining.',
    solution: 'We created distinct zones using warm materials like natural oak and limestone, while maintaining visual flow. Custom millwork and strategic lighting design highlight the architectural features while adding warmth.',
    images: [
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
      'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop',
    ],
    testimonial: {
      text: "Murali and his team completely transformed our penthouse. Every detail was thoughtfully considered, from the custom lighting to the carefully selected art pieces. The space now feels like a true reflection of our family.",
      author: "Devi",
      role: "Homeowners"
    }
  },
  // Add other projects as needed
};

const ProjectPage = () => {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-charcoal mb-4">Project Not Found</h1>
          <Link to="/portfolio" className="text-navy hover:text-deep-gold">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative h-96 bg-warm-taupe">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${project.images[0]})` }}
        >
          <div className="absolute inset-0 bg-navy/40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link 
              to="/portfolio"
              className="inline-flex items-center text-ivory hover:text-deep-gold transition-colors mb-6"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Portfolio
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-ivory mb-4">
              <span className="font-serif">{project.title}</span>
            </h1>
            <div className="flex items-center space-x-6 text-warm-taupe">
              <div className="flex items-center">
                <Calendar className="mr-2" size={18} />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" size={18} />
                <span>{project.location}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-ivory">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <img
              src={project.images[currentImage]}
              alt={`${project.title} - Image ${currentImage + 1}`}
              className="w-full h-96 md:h-[500px] object-cover rounded-lg shadow-2xl"
            />
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-ivory/90 hover:bg-ivory p-3 rounded-full shadow-lg transition-all"
            >
              <ArrowLeft size={20} className="text-charcoal" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-ivory/90 hover:bg-ivory p-3 rounded-full shadow-lg transition-all"
            >
              <ArrowRight size={20} className="text-charcoal" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImage ? 'bg-deep-gold' : 'bg-ivory/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 bg-warm-taupe">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                <span className="font-serif text-navy">Project</span>
                <span className="font-sans ml-2">Overview</span>
              </h2>
              <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
                {project.description}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">The Challenge</h3>
                  <p className="text-charcoal/70 leading-relaxed">{project.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-navy mb-3">Our Solution</h3>
                  <p className="text-charcoal/70 leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-ivory rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-charcoal mb-6">Project Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-charcoal/70">Category</span>
                  <span className="font-medium text-charcoal">{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/70">Year</span>
                  <span className="font-medium text-charcoal">{project.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal/70">Location</span>
                  <span className="font-medium text-charcoal">{project.location}</span>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-warm-taupe/30">
                <h4 className="font-bold text-charcoal mb-4">Key Features</h4>
                <div className="space-y-2">
                  {['Custom Millwork', 'Smart Home Integration', 'Sustainable Materials', 'Luxury Finishes'].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-sage-green mr-2" />
                      <span className="text-charcoal/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 bg-sage-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-2xl font-serif text-ivory mb-8 italic leading-relaxed">
            "{project.testimonial.text}"
          </blockquote>
          <div className="text-ivory">
            <p className="font-bold text-lg">{project.testimonial.author}</p>
            <p className="text-warm-taupe">{project.testimonial.role}</p>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-charcoal mb-12">
            <span className="font-serif text-navy">More</span>
            <span className="font-sans ml-2">Projects</span>
          </h2>
          <Link
            to="/portfolio"
            className="inline-flex items-center bg-navy text-ivory px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-all duration-300"
          >
            View Full Portfolio
            <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;