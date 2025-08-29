import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="font-sans">SSCD</span>
              <span className="font-serif ml-2">INTERIORS</span>
            </h3>
            <p className="text-warm-taupe mb-4">
              Transforming spaces into living art with sophisticated design and personalized service.
            </p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-warm-taupe hover:text-deep-gold transition-colors cursor-pointer" />
              <Facebook className="w-5 h-5 text-warm-taupe hover:text-deep-gold transition-colors cursor-pointer" />
              <Twitter className="w-5 h-5 text-warm-taupe hover:text-deep-gold transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/portfolio" className="text-warm-taupe hover:text-deep-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="text-warm-taupe hover:text-deep-gold transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-warm-taupe hover:text-deep-gold transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-warm-taupe hover:text-deep-gold transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-warm-taupe hover:text-deep-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-deep-gold" />
                <span className="text-warm-taupe">hello@sscdinteriors.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-deep-gold" />
                <span className="text-warm-taupe">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-warm-taupe/20 mt-8 pt-8 text-center">
          <p className="text-warm-taupe text-sm">
            © 2025 SSCD Interiors. All rights reserved. | 
            <Link to="/privacy" className="hover:text-deep-gold transition-colors ml-1">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;