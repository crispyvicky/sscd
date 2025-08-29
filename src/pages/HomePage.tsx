import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Award, Users } from 'lucide-react';
import PortfolioTeaser from '../components/PortfolioTeaser';
import ServicesPreview from '../components/ServicesPreview';

interface HomePageProps {
  setShowLeadPopup: (show: boolean) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setShowLeadPopup }) => {
  useEffect(() => {
    let hasShownPopup = false;
    
    const timer = setTimeout(() => {
      if (!hasShownPopup) {
        setShowLeadPopup(true);
        hasShownPopup = true;
      }
    }, 30000);

    const handleScroll = () => {
      if (window.scrollY > 800 && !hasShownPopup) {
        setShowLeadPopup(true);
        hasShownPopup = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setShowLeadPopup]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-navy/30"></div>
        </div>
        
        <div className="relative z-10 text-center text-ivory px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in duration-1000">
            <span className="font-sans">Transforming Spaces</span>
            <br />
            <span className="font-serif text-deep-gold">Into Living Art</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-warm-taupe animate-in fade-in duration-1000 delay-300">
            Award-winning interior design studio creating sophisticated, personalized environments that reflect your unique style and enhance your daily life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-deep-gold text-charcoal px-8 py-4 rounded-full text-lg font-semibold hover:bg-deep-gold/90 transform hover:scale-105 transition-all duration-300 animate-in fade-in duration-1000 delay-500"
          >
            Book a Consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-charcoal mb-6">
                <span className="font-serif text-navy">Meet Sarah</span>
                <br />
                <span className="font-sans">Creative Director</span>
              </h2>
              <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                With over 15 years of experience in luxury residential and commercial design, Sarah Singh brings a unique blend of contemporary elegance and timeless sophistication to every project. Her approach focuses on creating spaces that are both beautiful and deeply functional.
              </p>
              <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
                Our studio's philosophy centers on understanding how you live and work, then crafting environments that enhance your daily experience while reflecting your personal aesthetic.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center bg-sage-green text-ivory px-6 py-3 rounded-lg font-semibold hover:bg-sage-green/90 transition-all duration-300"
              >
                Learn More About Our Story
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
                  alt="Sarah Singh, Creative Director"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-deep-gold rounded-lg p-6 text-charcoal">
                <div className="flex items-center space-x-4">
                  <Award size={24} />
                  <div>
                    <p className="font-semibold">Award Winning</p>
                    <p className="text-sm">Design Studio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-sage-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-ivory">
              <Star className="w-12 h-12 mx-auto mb-4 text-deep-gold" />
              <h3 className="text-3xl font-bold mb-2">150+</h3>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div className="text-ivory">
              <Users className="w-12 h-12 mx-auto mb-4 text-deep-gold" />
              <h3 className="text-3xl font-bold mb-2">95%</h3>
              <p className="text-lg">Client Satisfaction</p>
            </div>
            <div className="text-ivory">
              <Award className="w-12 h-12 mx-auto mb-4 text-deep-gold" />
              <h3 className="text-3xl font-bold mb-2">12</h3>
              <p className="text-lg">Design Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Teaser */}
      <PortfolioTeaser />

      {/* Services Preview */}
      <ServicesPreview />

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-ivory mb-6">
            <span className="font-serif">Ready to Transform</span>
            <br />
            <span className="font-sans text-deep-gold">Your Space?</span>
          </h2>
          <p className="text-xl text-warm-taupe mb-8 max-w-2xl mx-auto">
            Let's discuss your vision and create something extraordinary together. Every great space begins with a conversation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-deep-gold text-charcoal px-8 py-4 rounded-full text-lg font-semibold hover:bg-deep-gold/90 transform hover:scale-105 transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;