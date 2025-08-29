import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, RefreshCw, MessageCircle, ArrowRight, Plus, Minus } from 'lucide-react';

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
      <section className="py-16 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-ivory mb-6">
            <span className="font-serif">Our</span>
            <span className="font-sans ml-2 text-deep-gold">Services</span>
          </h1>
          <p className="text-xl text-warm-taupe max-w-3xl mx-auto">
            From concept to completion, we offer comprehensive design solutions tailored to transform your vision into reality.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, serviceIndex) => (
              <div key={serviceIndex} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${serviceIndex % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={serviceIndex % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-sage-green/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-navy" />
                  </div>
                  
                  <h2 className="text-3xl font-bold text-charcoal mb-4">
                    <span className="font-serif text-navy">{service.title}</span>
                  </h2>
                  
                  <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="w-4 h-4 text-sage-green mr-3 flex-shrink-0" />
                        <span className="text-charcoal/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* FAQs */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-charcoal">Frequently Asked Questions</h3>
                    {service.faqs.map((faq, faqIndex) => (
                      <div key={faqIndex} className="border border-warm-taupe/30 rounded-lg">
                        <button
                          onClick={() => toggleFaq(serviceIndex, faqIndex)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-sage-green/5 transition-colors"
                        >
                          <span className="font-medium text-charcoal">{faq.question}</span>
                          {openFaqs[`${serviceIndex}-${faqIndex}`] ? (
                            <Minus className="w-5 h-5 text-charcoal" />
                          ) : (
                            <Plus className="w-5 h-5 text-charcoal" />
                          )}
                        </button>
                        {openFaqs[`${serviceIndex}-${faqIndex}`] && (
                          <div className="px-4 pb-4">
                            <p className="text-charcoal/70">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={serviceIndex % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-80 object-cover rounded-lg shadow-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-sage-green">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-ivory mb-12 text-center">
            <span className="font-serif">Our</span>
            <span className="font-sans ml-2">Process</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-deep-gold text-charcoal rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-ivory mb-3">Consultation</h3>
              <p className="text-warm-taupe">
                We begin with an in-depth discussion of your vision, lifestyle, and functional needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-deep-gold text-charcoal rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-ivory mb-3">Concept Development</h3>
              <p className="text-warm-taupe">
                Our team creates detailed plans, 3D renderings, and material selections for your approval.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-deep-gold text-charcoal rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-ivory mb-3">Transformation</h3>
              <p className="text-warm-taupe">
                We manage every detail of implementation, ensuring flawless execution of your design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-ivory mb-6">
            <span className="font-serif">Ready to Get</span>
            <br />
            <span className="font-sans text-deep-gold">Started?</span>
          </h2>
          <p className="text-xl text-warm-taupe mb-8 max-w-2xl mx-auto">
            Book a complimentary consultation to discuss your project and discover how we can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-deep-gold text-charcoal px-8 py-4 rounded-full text-lg font-semibold hover:bg-deep-gold/90 transform hover:scale-105 transition-all duration-300"
          >
            Book Free Consultation
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;