import React, { useState } from 'react';
import { X, Mail, CheckCircle2, ShieldCheck, FileText, RefreshCw } from 'lucide-react';

export type LegalModalType = 'contact' | 'privacy' | 'terms' | 'refund' | null;

interface LegalModalsProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!activeModal) return null;

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B1C16]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FBF8F2] border border-[#DCCBBC] rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-9 shadow-2xl relative text-[#2B1C16]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#8B796C] hover:text-[#2B1C16] hover:bg-[#F4EBDD] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal: CONTACT */}
        {activeModal === 'contact' && (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-[#4A2B1D]" />
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1C16]">
                Contact Astrauw Glowup
              </h3>
            </div>
            <p className="text-sm text-[#4A2B1D]/80 mb-6">
              Have questions about your digital order, downloading your PDF, or customer support? Reach our support team anytime.
            </p>

            {contactSubmitted ? (
              <div className="p-6 rounded-xl bg-[#F4EBDD] border border-[#DCCBBC] text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#4A2B1D] mx-auto" />
                <h4 className="font-serif text-xl font-bold text-[#2B1C16]">Message Received</h4>
                <p className="text-sm text-[#4A2B1D]/80">
                  Thank you, {name || 'Customer'}. Our team will respond to your inquiry at <span className="font-semibold">{email || 'your email'}</span> within 24 hours.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2.5 text-sm font-semibold bg-[#4A2B1D] text-[#FBF8F2] rounded-lg"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#8B796C] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Marcus Vance"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#DCCBBC] bg-white text-sm text-[#2B1C16] focus:outline-none focus:border-[#4A2B1D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#8B796C] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marcus@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#DCCBBC] bg-white text-sm text-[#2B1C16] focus:outline-none focus:border-[#4A2B1D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#8B796C] mb-1">
                    Message or Order ID
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we assist you with your planner?"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#DCCBBC] bg-white text-sm text-[#2B1C16] focus:outline-none focus:border-[#4A2B1D]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#4A2B1D] hover:bg-[#2B1C16] text-[#FBF8F2] font-semibold text-sm rounded-lg transition-colors cursor-pointer"
                >
                  Send Message
                </button>
                <p className="text-[11px] text-[#8B796C] text-center">
                  Direct email support: support@astrauwglowup.com
                </p>
              </form>
            )}
          </div>
        )}

        {/* Modal: PRIVACY POLICY */}
        {activeModal === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <ShieldCheck className="w-6 h-6 text-[#4A2B1D]" />
              <h3 className="font-serif text-2xl font-bold text-[#2B1C16]">
                Privacy Policy
              </h3>
            </div>
            <p className="text-xs text-[#8B796C]">Last Updated: 2026</p>
            <div className="text-sm text-[#4A2B1D]/85 space-y-3 leading-relaxed">
              <p>
                At Astrauw Glowup, we respect your privacy and are committed to safeguarding your personal information. This Privacy Policy details how we handle data collected during checkout and digital delivery.
              </p>
              <h4 className="font-serif font-bold text-base text-[#2B1C16] pt-2">1. Data We Collect</h4>
              <p>
                When you purchase the 30-Day Looksmaxxing Planner ($10 USD), we collect your name and email address solely to process your order, deliver your digital PDF, and provide customer support.
              </p>
              <h4 className="font-serif font-bold text-base text-[#2B1C16] pt-2">2. Payment Processing</h4>
              <p>
                Payment information (credit card numbers, billing addresses) is processed directly by secure, PCI-compliant payment gateways. Astrauw Glowup never stores your payment credentials on our servers.
              </p>
              <h4 className="font-serif font-bold text-base text-[#2B1C16] pt-2">3. Zero Data Selling</h4>
              <p>
                We do not sell, rent, or trade your personal information to third parties or marketing brokers.
              </p>
            </div>
          </div>
        )}

        {/* Modal: TERMS & CONDITIONS */}
        {activeModal === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <FileText className="w-6 h-6 text-[#4A2B1D]" />
              <h3 className="font-serif text-2xl font-bold text-[#2B1C16]">
                Terms &amp; Conditions
              </h3>
            </div>
            <p className="text-xs text-[#8B796C]">Last Updated: 2026</p>
            <div className="text-sm text-[#4A2B1D]/85 space-y-3 leading-relaxed">
              <p>
                By purchasing or downloading the 30-Day Looksmaxxing Planner, you agree to these Terms and Conditions.
              </p>
              <h4 className="font-serif font-bold text-base text-[#2B1C16] pt-2">1. Digital License</h4>
              <p>
                Upon payment of $10 USD, you receive a non-exclusive, personal, non-transferable license to download, print, and use the 30-Day Looksmaxxing Planner for individual self-improvement. Unauthorized distribution, resale, or public sharing is prohibited.
              </p>
              <h4 className="font-serif font-bold text-base text-[#2B1C16] pt-2">2. Educational &amp; Habit Guidance Only</h4>
              <p>
                The planner contains daily wellness, grooming, posture, and lifestyle habit prompts. It is not medical, clinical, or plastic surgery advice. Users should consult qualified health professionals before initiating intense physical regimens.
              </p>
              <h4 className="font-serif font-bold text-base text-[#2B1C16] pt-2">3. Instant Delivery</h4>
              <p>
                Digital download links are made accessible immediately upon confirmed transaction completion.
              </p>
            </div>
          </div>
        )}

        {/* Modal: REFUND POLICY */}
        {activeModal === 'refund' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <RefreshCw className="w-6 h-6 text-[#4A2B1D]" />
              <h3 className="font-serif text-2xl font-bold text-[#2B1C16]">
                Refund Policy
              </h3>
            </div>
            <p className="text-xs text-[#8B796C]">Clear &amp; Fair Policy</p>
            <div className="text-sm text-[#4A2B1D]/85 space-y-3 leading-relaxed">
              <p>
                We stand behind the quality and craftsmanship of the 30-Day Looksmaxxing Planner.
              </p>
              <h4 className="font-serif font-bold text-base text-[#2B1C16] pt-2">Digital Delivery Assurance</h4>
              <p>
                Because the 30-Day Looksmaxxing Planner is an irrevocable digital PDF download, all sales of $10 USD are generally final once the digital files are accessed.
              </p>
              <h4 className="font-serif font-bold text-base text-[#2B1C16] pt-2">Defective Files or Delivery Issues</h4>
              <p>
                If you encounter any corrupted download links, formatting errors, or did not receive your access email, contact our customer support team immediately at support@astrauwglowup.com. We will rectify the file delivery within 24 hours or issue a full refund if the file cannot be accessed.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
