import React from 'react';
import { Award, Users, Clock, Heart } from 'lucide-react';

const AboutPage = () => {
  const milestones = [
    { year: '2010', event: 'Founded SSCD Interiors' },
    { year: '2013', event: 'First major commercial project' },
    { year: '2016', event: 'Won "Best Residential Design" award' },
    { year: '2019', event: 'Expanded to luxury hospitality sector' },
    { year: '2022', event: 'Featured in Architectural Digest' },
    { year: '2025', event: 'Celebrating 15 years of excellence' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Design',
      description: 'Every project is approached with genuine enthusiasm and creative energy'
    },
    {
      icon: Users,
      title: 'Client-Centered',
      description: 'Your vision and lifestyle guide every design decision we make'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Uncompromising attention to detail in every aspect of our work'
    },
    {
      icon: Clock,
      title: 'Timeless Appeal',
      description: 'Creating designs that remain beautiful and relevant for years to come'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 bg-warm-taupe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-charcoal mb-6">
                <span className="font-serif text-navy">About</span>
                <br />
                <span className="font-sans">SSCD Interiors</span>
              </h1>
              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Founded in 2010 by murali krishna, SSCD Interiors has established itself as a premier design studio specializing in sophisticated residential and commercial environments.
              </p>
              <p className="text-lg text-charcoal/70 leading-relaxed">
                Our approach combines timeless design principles with contemporary innovation, creating spaces that are both aesthetically stunning and deeply functional for the way you live and work.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop"
                alt="Murali Krishna in her design studio"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -top-6 -left-6 bg-sage-green rounded-lg p-4 text-ivory">
                <div className="text-center">
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal mb-8 text-center">
            <span className="font-serif text-navy">Our</span>
            <span className="font-sans ml-2">Story</span>
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-charcoal/80 mb-6 leading-relaxed">
              Murali's journey into interior design began with a degree in Architecture from UC Berkeley, followed by years working with renowned design firms in San Francisco and New York. Her multicultural background and extensive travels have deeply influenced her aesthetic, creating a unique design language that blends global influences with local sensibilities.
            </p>
            
            <p className="text-charcoal/80 mb-6 leading-relaxed">
              What sets SSCD Interiors apart is our commitment to understanding the intimate relationship between people and their environments. We believe that great design isn't just about beautiful objects—it's about creating spaces that enhance your daily rituals, support your goals, and reflect your authentic self.
            </p>
            
            <p className="text-charcoal/80 leading-relaxed">
              Today, our team of talented designers  continues to push boundaries while maintaining the personalized service and attention to detail that has become our signature. Every project, regardless of size, receives the same level of care and creative energy.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-sage-green">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-ivory mb-12 text-center">
            <span className="font-serif">Our</span>
            <span className="font-sans ml-2">Journey</span>
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-deep-gold"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-ivory rounded-lg p-6 shadow-lg">
                      <h3 className="text-2xl font-bold text-navy mb-2">{milestone.year}</h3>
                      <p className="text-charcoal">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-deep-gold rounded-full border-4 border-sage-green"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-charcoal mb-12 text-center">
            <span className="font-serif text-navy">Our</span>
            <span className="font-sans ml-2">Values</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-sage-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sage-green/20 transition-colors">
                  <value.icon className="w-10 h-10 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{value.title}</h3>
                <p className="text-charcoal/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-ivory mb-12">
            <span className="font-serif">What Our</span>
            <span className="font-sans ml-2 text-deep-gold">Clients Say</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-ivory/10 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-ivory/90 mb-6 text-lg italic leading-relaxed">
                "Murali and her team transformed our home into something we never could have imagined. Every detail was thoughtfully considered, and the result exceeded all our expectations."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Client testimonial"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-ivory font-semibold"> Devi</h4>
                  <p className="text-warm-taupe text-sm">Penthouse Renovation</p>
                </div>
              </div>
            </div>
            
            <div className="bg-ivory/10 rounded-lg p-8 backdrop-blur-sm">
              <p className="text-ivory/90 mb-6 text-lg italic leading-relaxed">
                "The attention to detail and creative problem-solving made our challenging commercial project a huge success. Our employees love coming to work now."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Client testimonial"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-ivory font-semibold">Venkatesh</h4>
                  <p className="text-warm-taupe text-sm">CEO, TechFlow Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;