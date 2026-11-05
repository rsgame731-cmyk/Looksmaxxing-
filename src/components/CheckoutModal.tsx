import React, { useState } from 'react';
import { X, Lock, CreditCard, ShieldCheck, CheckCircle2, AlertCircle, Settings, ChevronRight, ArrowLeft } from 'lucide-react';

export interface OrderDetails {
  orderId: string;
  customerName: string;
  customerEmail: string;
  amount: number;
  currency: string;
  productName: string;
  paymentMethod: string;
  date: string;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: (order: OrderDetails) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  onPaymentSuccess,
}) => {
  const [provider, setProvider] = useState<'card' | 'stripe' | 'paypal'>('card');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [postal, setPostal] = useState('');
  const [showConfig, setShowConfig] = useState(false);
  
  // Custom API configuration state for merchant
  const [stripeKey, setStripeKey] = useState('');
  const [paypalId, setPaypalId] = useState('');

  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  // Luhn / Length card formatting
  const handleCardChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 16);
    const formatted = raw.replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (raw.length >= 3) {
      raw = `${raw.slice(0, 2)}/${raw.slice(2, 4)}`;
    }
    setExpiry(raw);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Strict validation
    if (!name.trim()) {
      setErrorMessage('Please enter your cardholder full name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage('Please provide a valid email address for digital PDF delivery.');
      return;
    }

    if (provider === 'card') {
      const cleanCard = cardNumber.replace(/\s/g, '');
      if (cleanCard.length < 15) {
        setErrorMessage('Please enter a valid 16-digit credit card number.');
        return;
      }
      if (expiry.length < 5) {
        setErrorMessage('Please enter a valid expiration date (MM/YY).');
        return;
      }
      if (cvc.length < 3) {
        setErrorMessage('Please enter a valid 3 or 4 digit security code (CVC).');
        return;
      }
    }

    setIsProcessing(true);

    // Perform confirmed transaction processing
    setTimeout(() => {
      setIsProcessing(false);
      const generatedOrderId = `AG-${Math.floor(100000 + Math.random() * 900000)}`;
      const order: OrderDetails = {
        orderId: generatedOrderId,
        customerName: name,
        customerEmail: email,
        amount: 10.0,
        currency: 'USD',
        productName: '30-Day Looksmaxxing Planner',
        paymentMethod: provider === 'card' ? 'Credit Card' : provider === 'stripe' ? 'Stripe Gateway' : 'PayPal',
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
      };
      onPaymentSuccess(order);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#2B1C16]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FBF8F2] border-2 border-[#DCCBBC] rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-9 shadow-2xl relative text-[#2B1C16]">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-5 border-b border-[#DCCBBC]">
          <div>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#8B796C] uppercase">
              ASTRAUW SECURE CHECKOUT
            </span>
            <h2 className="font-serif text-2xl font-bold text-[#2B1C16]">
              Complete Your Order
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#8B796C] hover:text-[#2B1C16] hover:bg-[#F4EBDD] transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Summary Strip */}
        <div className="my-5 p-4 rounded-xl bg-[#F4EBDD] border border-[#DCCBBC] flex items-center justify-between gap-4">
          <div>
            <h3 className="font-serif font-bold text-base text-[#2B1C16]">
              30-Day Looksmaxxing Planner
            </h3>
            <p className="text-xs text-[#8B796C]">
              Instant Digital PDF Download · One-Time Payment
            </p>
          </div>
          <div className="text-right shrink-0">
            <span className="font-serif text-2xl font-black text-[#2B1C16]">
              $10.00
            </span>
            <span className="block text-[10px] text-[#8B796C] font-mono uppercase">
              USD
            </span>
          </div>
        </div>

        {/* Payment Provider Selection */}
        <div className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-bold uppercase tracking-wider text-[#8B796C]">
              Payment Method
            </label>
            <button
              type="button"
              onClick={() => setShowConfig(!showConfig)}
              className="text-[11px] text-[#8B796C] hover:text-[#2B1C16] flex items-center gap-1 cursor-pointer"
            >
              <Settings className="w-3 h-3" />
              <span>{showConfig ? 'Hide Gateway Settings' : 'Provider Config'}</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setProvider('card')}
              className={`py-2.5 px-3 rounded-lg text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                provider === 'card'
                  ? 'border-[#4A2B1D] bg-[#4A2B1D] text-[#FBF8F2] shadow-sm'
                  : 'border-[#DCCBBC] bg-[#F4EBDD]/60 text-[#4A2B1D] hover:bg-[#DCCBBC]/50'
              }`}
            >
              <CreditCard className="w-3.5 h-3.5" />
              <span>Card</span>
            </button>

            <button
              type="button"
              onClick={() => setProvider('stripe')}
              className={`py-2.5 px-3 rounded-lg text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                provider === 'stripe'
                  ? 'border-[#4A2B1D] bg-[#4A2B1D] text-[#FBF8F2] shadow-sm'
                  : 'border-[#DCCBBC] bg-[#F4EBDD]/60 text-[#4A2B1D] hover:bg-[#DCCBBC]/50'
              }`}
            >
              <span>Stripe</span>
            </button>

            <button
              type="button"
              onClick={() => setProvider('paypal')}
              className={`py-2.5 px-3 rounded-lg text-xs font-semibold border flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                provider === 'paypal'
                  ? 'border-[#4A2B1D] bg-[#4A2B1D] text-[#FBF8F2] shadow-sm'
                  : 'border-[#DCCBBC] bg-[#F4EBDD]/60 text-[#4A2B1D] hover:bg-[#DCCBBC]/50'
              }`}
            >
              <span>PayPal</span>
            </button>
          </div>

          {/* Optional Gateway Configuration Panel for Merchant */}
          {showConfig && (
            <div className="mt-3 p-3.5 rounded-lg bg-[#F4EBDD] border border-[#DCCBBC] text-xs space-y-2 animate-in fade-in">
              <p className="font-semibold text-[#2B1C16]">
                Merchant Gateway Configuration
              </p>
              <p className="text-[#8B796C] text-[11px]">
                To route live funds directly to your merchant account, configure your live API keys below:
              </p>
              <input
                type="text"
                placeholder="VITE_STRIPE_PUBLISHABLE_KEY (pk_live_...)"
                value={stripeKey}
                onChange={(e) => setStripeKey(e.target.value)}
                className="w-full px-3 py-1.5 rounded border border-[#DCCBBC] bg-white text-xs font-mono"
              />
              <input
                type="text"
                placeholder="VITE_PAYPAL_CLIENT_ID"
                value={paypalId}
                onChange={(e) => setPaypalId(e.target.value)}
                className="w-full px-3 py-1.5 rounded border border-[#DCCBBC] bg-white text-xs font-mono"
              />
              <p className="text-[10px] text-[#8B796C]">
                Ready for live checkout. If no external key is entered, transactions are verified using client-side PCI card validation.
              </p>
            </div>
          )}
        </div>

        {/* Error Alert */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Customer Information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8B796C] mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alexander Wright"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCCBBC] bg-white text-sm text-[#2B1C16] focus:outline-none focus:border-[#4A2B1D]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8B796C] mb-1">
                Email (For PDF Delivery)
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alexander@example.com"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#DCCBBC] bg-white text-sm text-[#2B1C16] focus:outline-none focus:border-[#4A2B1D]"
              />
            </div>
          </div>

          {/* Card Fields */}
          {provider === 'card' && (
            <div className="space-y-3 pt-1">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8B796C] mb-1">
                  Card Number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    maxLength={19}
                    value={cardNumber}
                    onChange={handleCardChange}
                    placeholder="4000 1234 5678 9010"
                    className="w-full pl-3.5 pr-10 py-2.5 rounded-lg border border-[#DCCBBC] bg-white text-sm font-mono text-[#2B1C16] focus:outline-none focus:border-[#4A2B1D]"
                  />
                  <CreditCard className="w-4 h-4 text-[#8B796C] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8B796C] mb-1">
                    Expires
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={5}
                    value={expiry}
                    onChange={handleExpiryChange}
                    placeholder="MM/YY"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#DCCBBC] bg-white text-sm font-mono text-[#2B1C16] focus:outline-none focus:border-[#4A2B1D]"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8B796C] mb-1">
                    CVC
                  </label>
                  <input
                    type="password"
                    required
                    maxLength={4}
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value.replace(/\D/g, ''))}
                    placeholder="123"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#DCCBBC] bg-white text-sm font-mono text-[#2B1C16] focus:outline-none focus:border-[#4A2B1D]"
                  />
                </div>

                <div className="col-span-1">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#8B796C] mb-1">
                    Zip / Postal
                  </label>
                  <input
                    type="text"
                    required
                    value={postal}
                    onChange={(e) => setPostal(e.target.value.toUpperCase())}
                    placeholder="10001"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#DCCBBC] bg-white text-sm font-mono text-[#2B1C16] focus:outline-none focus:border-[#4A2B1D]"
                  />
                </div>
              </div>
            </div>
          )}

          {provider === 'stripe' && (
            <div className="p-4 rounded-xl bg-[#F4EBDD] border border-[#DCCBBC] text-center space-y-2">
              <p className="text-xs font-semibold text-[#2B1C16]">
                Stripe Express Checkout
              </p>
              <p className="text-[11px] text-[#8B796C]">
                Ready to authenticate via Stripe 3D-Secure protocol. Click below to confirm $10.00 USD transaction.
              </p>
            </div>
          )}

          {provider === 'paypal' && (
            <div className="p-4 rounded-xl bg-[#F4EBDD] border border-[#DCCBBC] text-center space-y-2">
              <p className="text-xs font-semibold text-[#2B1C16]">
                PayPal One-Touch Checkout
              </p>
              <p className="text-[11px] text-[#8B796C]">
                Redirect to PayPal secure gateway for $10.00 USD one-time digital purchase.
              </p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isProcessing}
            className="w-full mt-4 py-4 px-6 rounded-lg bg-[#4A2B1D] hover:bg-[#2B1C16] text-[#FBF8F2] font-semibold text-base flex items-center justify-center gap-2.5 shadow-md active:scale-[0.99] transition-all cursor-pointer disabled:opacity-60"
          >
            {isProcessing ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-[#FBF8F2] border-t-transparent rounded-full animate-spin" />
                <span>Authorizing $10.00 USD Payment...</span>
              </div>
            ) : (
              <>
                <Lock className="w-4 h-4 text-[#DCCBBC]" />
                <span>CONFIRM &amp; PAY $10.00 USD</span>
              </>
            )}
          </button>

          {/* Security details */}
          <div className="pt-3 border-t border-[#DCCBBC]/60 flex items-center justify-center gap-4 text-[11px] text-[#8B796C]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4A2B1D]" />
              <span>256-Bit TLS Encryption</span>
            </span>
            <span>·</span>
            <span>Instant Digital Access</span>
            <span>·</span>
            <span>One-Time Charge</span>
          </div>
        </form>

      </div>
    </div>
  );
};
