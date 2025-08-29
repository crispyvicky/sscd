import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LeadPopup: React.FC<LeadPopupProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setPhone('');
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-navy rounded-xl max-w-md w-full p-8 relative animate-in fade-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-ivory hover:text-deep-gold transition-colors"
        >
          <X size={20} />
        </button>

        {!isSubmitted ? (
          <>
            <h3 className="text-2xl font-bold text-ivory mb-4">
              Want a Quick Review of How We Work?
            </h3>
            
            <p className="text-warm-taupe mb-6">
              See how we turn ideas into beautiful spaces. Enter your mobile number for a free walk-through and quick call with our lead designer. Fast response. No spam!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="tel"
                placeholder="Your mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-ivory text-charcoal placeholder-charcoal/60 focus:outline-none focus:ring-2 focus:ring-deep-gold"
                required
              />
              <button
                type="submit"
                className="w-full bg-deep-gold text-charcoal font-semibold py-3 rounded-lg hover:bg-deep-gold/90 transition-colors"
              >
                Get Your Quick Review
              </button>
            </form>

            <div className="mt-6 border-t border-warm-taupe/20 pt-6">
              <h4 className="text-ivory font-semibold mb-3">Our Process:</h4>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-warm-taupe">
                  <span className="w-6 h-6 bg-deep-gold text-charcoal rounded-full flex items-center justify-center text-xs mr-3">1</span>
                  Consultation
                </div>
                <div className="flex items-center text-sm text-warm-taupe">
                  <span className="w-6 h-6 bg-deep-gold text-charcoal rounded-full flex items-center justify-center text-xs mr-3">2</span>
                  Concept
                </div>
                <div className="flex items-center text-sm text-warm-taupe">
                  <span className="w-6 h-6 bg-deep-gold text-charcoal rounded-full flex items-center justify-center text-xs mr-3">3</span>
                  Transformation
                </div>
              </div>
            </div>

            <p className="text-xs text-warm-taupe/80 mt-4">
              We respect your privacy. Your information is secure and never shared.
            </p>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-sage-green rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-ivory" />
            </div>
            <h3 className="text-xl font-bold text-ivory mb-2">Thank You!</h3>
            <p className="text-warm-taupe">
              We'll be in touch within 24 hours to schedule your quick review.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeadPopup;