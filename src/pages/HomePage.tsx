import { Link } from "react-router-dom";
import { ArrowRight, Star, Users, Home, Layers } from "lucide-react";
import { motion } from "framer-motion";
import PortfolioTeaser from "../components/PortfolioTeaser";
import ServicesPreview from "../components/ServicesPreview";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const HomePage: React.FC = () => {


  return (
    <div className="overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-110"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&fit=crop)",
          }}
        >
          <div className="absolute inset-0 bg-navy/40"></div>
        </motion.div>

        <motion.div
          className="relative z-10 text-center text-ivory px-4"
          initial="hidden"
          animate="show"
          variants={fadeUp}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Transforming Spaces
            <br />
            <span className="text-deep-gold font-serif">Into Living Art</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-warm-taupe"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A family-run interior studio crafting elegant, meaningful, and functional spaces for over 35 years.
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/contact"
              className="inline-flex items-center bg-deep-gold text-charcoal px-8 py-4 rounded-full text-lg font-semibold hover:bg-deep-gold/90 transition-all"
            >
              Book a Consultation
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <motion.div variants={fadeUp} initial="hidden" whileInView="show">
            <h2 className="text-4xl font-bold text-charcoal mb-6 leading-tight">
              <span className="font-serif text-navy">Meet Murali Krishna</span>
              <br />
              <span className="font-sans">Founder, SSCD Interiors</span>
            </h2>

            <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
              With more than 35 years of hands-on experience designing homes, offices, villas, retail spaces, and full turnkey interiors—Murali brings mastery, practicality, and warmth into every project.
            </p>

            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              SSCD Interiors has completed over 600+ projects across Hyderabad, built purely on trust, craftsmanship, and relationships.
            </p>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/about"
                className="inline-flex items-center bg-sage-green text-ivory px-6 py-3 rounded-lg font-semibold hover:bg-sage-green/90 transition-all"
              >
                Our Story
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="rounded-xl overflow-hidden shadow-xl">
              <motion.img
                src="https://images.pexels.com/photos/3184305/pexels-photo-3184305.jpeg?auto=compress&cs=tinysrgb&w=600&fit=crop"
                alt="Founder"
                className="w-full h-96 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>

            {/* FLOATING BADGE */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-deep-gold rounded-lg p-6 text-charcoal shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center space-x-4">
                <Home size={24} className="animate-pulse" />
                <div>
                  <p className="font-bold text-lg">35+ Years</p>
                  <p className="text-sm">Interior Expertise</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-sage-green">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          {/* Projects */}
          <motion.div
            className="text-ivory"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Star className="w-12 h-12 mx-auto mb-4 text-deep-gold animate-bounce" />
            <h3 className="text-4xl font-bold">600+</h3>
            <p className="text-lg mt-2">Projects Delivered</p>
          </motion.div>

          {/* Clients */}
          <motion.div
            className="text-ivory"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Users className="w-12 h-12 mx-auto mb-4 text-deep-gold animate-pulse" />
            <h3 className="text-4xl font-bold">1000+</h3>
            <p className="text-lg mt-2">Happy Clients</p>
          </motion.div>

          {/* Services */}
          <motion.div
            className="text-ivory"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Layers className="w-12 h-12 mx-auto mb-4 text-deep-gold animate-spin-slow" />
            <h3 className="text-4xl font-bold">Full Turnkey</h3>
            <p className="text-lg mt-2">Design & Execution</p>
          </motion.div>

        </div>
      </section>

      {/* PORTFOLIO */}
      <PortfolioTeaser />

      {/* SERVICES */}
      <ServicesPreview />

      {/* CTA */}
      <section className="py-20 bg-navy text-center">
        <motion.h2
          className="text-4xl font-bold text-ivory mb-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
        >
          <span className="font-serif">Ready to Transform</span>
          <br />
          <span className="font-sans text-deep-gold">Your Space?</span>
        </motion.h2>

        <motion.p
          className="text-xl text-warm-taupe mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Let’s create something extraordinary together.
        </motion.p>

        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/contact"
            className="inline-flex items-center bg-deep-gold text-charcoal px-8 py-4 rounded-full text-lg font-semibold hover:bg-deep-gold/90 transition-all"
          >
            Start Your Project
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
