import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Check } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-ivory mb-6">
            <span className="font-serif">Get In</span>
            <span className="font-sans ml-2 text-deep-gold">Touch</span>
          </h1>
          <p className="text-xl text-warm-taupe max-w-3xl mx-auto">
            Ready to transform your space? Let's discuss your vision and create something extraordinary together.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                <span className="font-serif text-navy">Start Your</span>
                <br />
                <span className="font-sans">Project Today</span>
              </h2>
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-warm-taupe rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green bg-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-warm-taupe rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-warm-taupe rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green bg-white"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-charcoal mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-warm-taupe rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="residential">Residential Design</option>
                        <option value="commercial">Commercial Design</option>
                        <option value="renovation">Renovation</option>
                        <option value="consultation">Design Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                      className="w-full px-4 py-3 border border-warm-taupe rounded-lg focus:outline-none focus:ring-2 focus:ring-sage-green bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-navy text-ivory px-6 py-4 rounded-lg font-semibold hover:bg-navy/90 transition-all duration-300 flex items-center justify-center"
                  >
                    <Send className="mr-2" size={20} />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="bg-sage-green/10 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-sage-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-ivory" />
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-2">Message Sent!</h3>
                  <p className="text-charcoal/70">
                    Thank you for reaching out. We'll respond to your inquiry within 24 hours.
                  </p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-charcoal mb-6">
                  <span className="font-serif text-navy">Contact</span>
                  <span className="font-sans ml-2">Information</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-sage-green/20 p-3 rounded-lg mr-4">
                      <Mail className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">Email</h4>
                      <a 
                        href="mailto:hello@sscdinteriors.com"
                        className="text-charcoal/70 hover:text-navy transition-colors"
                      >
                        hello@sscdinteriors.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-sage-green/20 p-3 rounded-lg mr-4">
                      <Phone className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">Phone</h4>
                      <a 
                        href="tel:+15551234567"
                        className="text-charcoal/70 hover:text-navy transition-colors"
                      >
                        +1 (555) 123-4567
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-sage-green/20 p-3 rounded-lg mr-4">
                      <MapPin className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">Studio Location</h4>
                      <p className="text-charcoal/70">
                        123 Design District<br />
                        San Francisco, CA 94107
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-sage-green/20 p-3 rounded-lg mr-4">
                      <Clock className="w-6 h-6 text-navy" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-charcoal">Business Hours</h4>
                      <div className="text-charcoal/70">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: By appointment only</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Studio Image */}
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="SSCD Interiors Studio"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-bold text-charcoal mb-2">Visit Our Studio</h4>
                <p className="text-charcoal/70 text-sm">
                  Schedule an appointment to visit our design studio and material library. See our latest projects and get inspired for your own space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-warm-taupe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-charcoal/10 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-navy mx-auto mb-4" />
              <h3 className="text-xl font-bold text-charcoal mb-2">Studio Location</h3>
              <p className="text-charcoal/70">Interactive map coming soon</p>
              <p className="text-sm text-charcoal/60 mt-2">123 Design District, San Francisco, CA 94107</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;