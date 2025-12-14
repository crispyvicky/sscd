import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LeadPopup from './components/LeadPopup';
import WhatsAppPopup from './components/WhatsAppPopup';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectPage from './pages/ProjectPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [showLeadPopup, setShowLeadPopup] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-ivory">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage setShowLeadPopup={setShowLeadPopup} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:id" element={<ProjectPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <LeadPopup
          isOpen={showLeadPopup}
          onClose={() => setShowLeadPopup(false)}
        />
        <WhatsAppPopup />
      </div>
    </Router>
  );
}

export default App;