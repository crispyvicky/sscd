import { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

const WhatsAppPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        // Show popup after 3 seconds
        const timer = setTimeout(() => {
            // Check if already submitted/closed in this session if needed, for now just show it
            setIsOpen(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!phoneNumber.trim()) return;

        // Format message
        const message = `Check this number out: ${phoneNumber}`;

        // Open WhatsApp
        window.open(`https://wa.me/918919721762?text=${encodeURIComponent(message)}`, '_blank');

        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-fade-in">
            <div className="bg-white rounded-lg p-6 max-w-md w-full relative shadow-xl transform transition-all animate-slide-up">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-1 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-navy mb-2">Let's Chat!</h3>
                    <p className="text-gray-600">
                        Enter your mobile number and we'll connect with you on WhatsApp.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="popup-phone" className="sr-only">Phone Number</label>
                        <input
                            id="popup-phone"
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="Enter your phone number"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-navy/90 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                        <Send size={18} />
                        Connect on WhatsApp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default WhatsAppPopup;
