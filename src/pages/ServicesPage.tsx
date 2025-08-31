import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, RefreshCw, MessageCircle, ArrowRight, Plus, Minus, Check } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description: 'Complete home transformations that reflect your lifestyle and aesthetic preferences',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: [
      'Full Home Design & Renovation',
      'Kitchen & Bathroom Design',
      'Living Room & Bedroom Styling',
      'Custom Furniture & Built-ins',
      'Color & Material Selection',
      'Lighting Design & Installation'
    ],
    faqs: [
      {
        question: 'How long does a typical residential project take?',
        answer: 'Most residential projects take 3-6 months from concept to completion, depending on scope and complexity.'
      },
      {
        question: 'Do you work with existing furniture?',
        answer: 'Absolutely! We love incorporating meaningful pieces and can design around your existing furniture while adding new elements.'
      }
    ]
  },
  {
    icon: Building,
    title: 'Commercial Design',
    description: 'Professional spaces that enhance productivity while reflecting your brand identity',
    image: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: [
      'Office & Workspace Design',
      'Retail Store Layout',
      'Restaurant & Hospitality',
      'Healthcare Facilities',
      'Brand Identity Integration',
      'Ergonomic Planning'
    ],
    faqs: [
      {
        question: 'Can you work with our existing brand guidelines?',
        answer: 'Yes, we specialize in translating brand identity into physical spaces while maintaining design excellence.'
      },
      {
        question: 'Do you handle permits and construction management?',
        answer: 'We coordinate with licensed contractors and can manage the entire project timeline for you.'
      }
    ]
  },
  {
    icon: RefreshCw,
    title: 'Renovations',
    description: 'Breathing new life into existing spaces with strategic updates and improvements',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: [
      'Kitchen Remodeling',
      'Bathroom Renovation',
      'Whole Home Updates',
      'Historical Restoration',
      'Accessibility Modifications',
      'Energy-Efficient Upgrades'
    ],
    faqs: [
      {
        question: 'Can you work within our budget?',
        answer: 'We offer flexible packages and can prioritize changes to maximize impact within your budget constraints.'
      },
      {
        question: 'How do you minimize disruption during renovation?',
        answer: 'We create detailed timelines and coordinate all trades to minimize inconvenience to your daily routine.'
      }
    ]
  },
  {
    icon: MessageCircle,
    title: 'Design Consultations',
    description: 'Expert guidance and professional direction for your DIY design projects',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    features: [
      'Design Strategy Sessions',
      'Material & Color Selection',
      'Layout Planning',
      'Furniture Recommendations',
      'Shopping Lists & Sourcing',
      'Virtual Design Support'
    ],
    faqs: [
      {
        question: 'How many consultation sessions do I need?',
        answer: 'Most clients find 2-3 sessions sufficient, but we can customize based on your specific project needs.'
      },
      {
        question: 'Can consultations be done virtually?',
        answer: 'Yes! We offer both in-person and virtual consultations to accommodate your schedule and location.'
      }
    ]
  }
];

const ServicesPage = () => {
  const [openFaqs, setOpenFaqs] = useState<{[key: string]: boolean}>({});

  const toggleFaq = (serviceIndex: number, faqIndex: number) => {
    const key = `${serviceIndex}-${faqIndex}`;
    setOpenFaqs(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="relative py-20 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-navy/70"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-ivory mb-6 animate-in">
            <span className="font-serif">Our</span>
            <span className="font-sans ml-2 text-deep-gold">Services</span>
          </h1>
          <p className="text-xl text-warm-taupe max-w-3xl mx-auto leading-relaxed">
            From concept to completion, we offer comprehensive design solutions tailored to transform your vision into reality.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, serviceIndex) => (
              <div key={serviceIndex} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${serviceIndex % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`${serviceIndex % 2 === 1 ? 'lg:col-start-2' : ''} animate-in`} style={{ animationDelay: `${serviceIndex * 200}ms` }}>
                  <div className="bg-sage-green/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                    <service.icon className="w-10 h-10 text-navy" />
                  </div>
                  
                  <h2 className="text-4xl font-bold text-charcoal mb-6">
                    <span className="font-serif text-navy">{service.title}</span>
                  </h2>
                  
                  <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center group">
                        <div className="w-6 h-6 bg-sage-green/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-sage-green/30 transition-colors">
                          <Check className="w-3 h-3 text-sage-green" />
                        </div>
                        <span className="text-charcoal/70 group-hover:text-charcoal transition-colors">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* FAQs */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-charcoal mb-4">Frequently Asked Questions</h3>
                    {service.faqs.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border border-warm-taupe/20 rounded-xl overflow-hidden hover:border-sage-green/30 transition-colors">
                        <button
                          onClick={() => toggleFaq(serviceIndex, faqIndex)}
                          className="w-full flex items-center justify-between p-5 text-left hover:bg-sage-green/5 transition-all duration-300"
                        >
                          <span className="font-medium text-charcoal">{faq.question}</span>
                          {openFaqs[`${serviceIndex}-${faqIndex}`] ? (
                            <Minus className="w-5 h-5 text-charcoal transition-transform duration-300" />
                          ) : (
                            <Plus className="w-5 h-5 text-charcoal transition-transform duration-300" />
                          )}
                        </button>
                        {openFaqs[`${serviceIndex}-${faqIndex}`] && (
                          <div className="px-5 pb-5 animate-in">
                            <p className="text-charcoal/70 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`${serviceIndex % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} animate-in`} style={{ animationDelay: `${serviceIndex * 200 + 100}ms` }}>
                  <div className="relative group">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-24 bg-sage-green overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-green to-sage-green/80"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-ivory mb-16 text-center animate-in">
            <span className="font-serif">Our</span>
            <span className="font-sans ml-2">Process</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                number: '1',
                title: 'Consultation',
                description: 'We begin with an in-depth discussion of your vision, lifestyle, and functional needs.',
                icon: '💬'
              },
              {
                number: '2',
                title: 'Concept Development',
                description: 'Our team creates detailed plans, 3D renderings, and material selections for your approval.',
                icon: '✏️'
              },
              {
                number: '3',
                title: 'Transformation',
                description: 'We manage every detail of implementation, ensuring flawless execution of your design.',
                icon: '✨'
              }
            ].map((step, index) => (
              <div key={index} className="text-center animate-in" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="w-24 h-24 bg-deep-gold text-charcoal rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-ivory mb-4">{step.title}</h3>
                <p className="text-warm-taupe leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 to-navy/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-ivory mb-8 animate-in">
            <span className="font-serif">Ready to Get</span>
            <br />
            <span className="font-sans text-deep-gold">Started?</span>
          </h2>
          <p className="text-xl text-warm-taupe mb-10 max-w-2xl mx-auto leading-relaxed">
            Book a complimentary consultation to discuss your project and discover how we can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-deep-gold text-charcoal px-10 py-5 rounded-full text-lg font-semibold hover:bg-deep-gold/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Free Consultation
            <ArrowRight className="ml-3" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;