import { Users, Clock, Heart, Home } from 'lucide-react';

const AboutPage = () => {
  const milestones = [
    { year: '1990', event: 'SSCD Interiors was founded by Murali Krishna Brothers' },
    { year: '1998', event: 'Completed 100+ residential homes across Hyderabad' },
    { year: '2005', event: 'Entered commercial and office interior segment' },
    { year: '2015', event: 'Expanded into full turnkey interior solutions' },
    { year: '2024', event: 'Crossed 600+ successfully delivered projects' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Built on Trust',
      description: 'A family-run studio committed to honesty, transparency, and relationships that last.'
    },
    {
      icon: Users,
      title: 'Client-First Approach',
      description: 'We design spaces around the lifestyle, comfort, and needs of every client.'
    },
    {
      icon: Home,
      title: 'Complete Solutions',
      description: 'From design to execution, we handle every detail with precision and care.'
    },
    {
      icon: Clock,
      title: '35+ Years of Excellence',
      description: 'A legacy of delivering beautiful, functional spaces since 1990.'
    }
  ];

  return (
    <div className="pt-24">

      {/* HERO SECTION */}
      <section className="relative py-20 bg-warm-taupe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h1 className="text-5xl font-bold text-charcoal mb-6 leading-tight">
                <span className="font-serif text-navy">About</span>
                <br />
                <span className="font-sans">SSCD Interiors</span>
              </h1>

              <p className="text-xl text-charcoal/80 mb-6 leading-relaxed">
                Founded in 1990, SSCD Interiors is a family-driven design studio known for creating elegant, functional, and timeless spaces across Hyderabad.
              </p>

              <p className="text-lg text-charcoal/70 leading-relaxed">
                With over 35 years of industry experience and 600+ successfully completed projects, our work spans apartments, villas, offices, retail spaces, and full turnkey interiors.
              </p>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop"
                alt="Team at SSCD Interiors Studio"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />

              <div className="absolute -top-6 -left-6 bg-sage-green rounded-lg p-4 text-ivory shadow-lg">
                <div className="text-center">
                  <p className="text-3xl font-bold">35+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 bg-ivory">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="text-4xl font-bold text-charcoal mb-10 text-center">
            <span className="font-serif text-navy">Our</span>
            <span className="font-sans ml-2">Story</span>
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-charcoal/80 mb-6 leading-relaxed">
              For over three decades, SSCD Interiors has been shaping homes and commercial spaces across Hyderabad. What began as a small studio run by Murali Krishna Brothers has evolved into a trusted name in interior design.
            </p>

            <p className="text-charcoal/80 mb-6 leading-relaxed">
              Our design philosophy blends practicality with aesthetic beauty. Whether it’s a compact apartment, a luxury villa, or a complete office setup, we focus on how people live, work, and interact with their surroundings.
            </p>

            <p className="text-charcoal/80 leading-relaxed">
              Today, our team continues to deliver exceptional craftsmanship, personalized service, and designs that stand the test of time—one project at a time.
            </p>
          </div>

        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-sage-green">
        <div className="max-w-6xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-ivory mb-12 text-center">
            <span className="font-serif">Our</span>
            <span className="font-sans ml-2">Journey</span>
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-deep-gold"></div>

            <div className="space-y-12">
              {milestones.map((m, idx) => (
                <div key={idx} className={`flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>

                  <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-ivory rounded-lg p-6 shadow-lg">
                      <h3 className="text-2xl font-bold text-navy mb-2">{m.year}</h3>
                      <p className="text-charcoal">{m.event}</p>
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

      {/* OUR VALUES */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-charcoal mb-12 text-center">
            <span className="font-serif text-navy">Our</span>
            <span className="font-sans ml-2">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-sage-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sage-green/20 transition">
                  <value.icon className="w-10 h-10 text-navy" />
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">{value.title}</h3>
                <p className="text-charcoal/70">{value.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};

export default AboutPage;
