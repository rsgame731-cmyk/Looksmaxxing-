import React from 'react';
import { Check, Shield, Download, Lock, ArrowRight, Zap } from 'lucide-react';
import { BEACONS_CHECKOUT_URL } from '../config/constants';

interface PricingSectionProps {
  onOpenCheckout: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenCheckout }) => {
  const inclusions = [
    'Complete 30-Day Looksmaxxing Planner',
    '30 Daily Action Pages',
    'Daily Checklists & Routines',
    'Weekly Progress Reviews',
    'Water & Habit Tracker',
    'Personal Notes & Reflection Pages',
    'Printable PDF Format',
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-[#F4EBDD] border-t border-[#DCCBBC]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#8B796C] uppercase mb-2">
            SPECIAL LAUNCH PRICE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.8rem] font-bold text-[#2B1C16] tracking-tight leading-tight text-balance">
            Invest in Your Glow Up
          </h2>
          <p className="mt-3 text-base text-[#4A2B1D]/80 max-w-md mx-auto">
            Get lifetime access to the complete digital system today for less than the cost of lunch.
          </p>
        </div>

        {/* Premium Single Product Card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-[#FBF8F2] border-2 border-[#4A2B1D] rounded-2xl p-8 sm:p-11 shadow-2xl relative overflow-hidden">
            
            {/* Top Badge */}
            <div className="absolute top-0 right-0 bg-[#4A2B1D] text-[#FBF8F2] text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-bl-lg">
              SPECIAL LAUNCH OFFER
            </div>

            {/* Product Title & Format */}
            <div className="border-b border-[#DCCBBC] pb-6">
              <span className="text-xs font-mono font-semibold tracking-wider text-[#8B796C] uppercase">
                DIGITAL PDF EDITION
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1C16] mt-1">
                30-DAY LOOKSMAXXING PLANNER
              </h3>
              <p className="text-xs sm:text-sm text-[#8B796C] mt-1">
                One-time payment. Instant digital download.
              </p>
            </div>

            {/* Pricing Display — The Strongest Visual Element */}
            <div className="py-7 flex items-baseline gap-4">
              <span className="text-xl sm:text-2xl text-[#8B796C] line-through font-serif decoration-[#4A2B1D]/50">
                $19.00
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl sm:text-6xl lg:text-7xl font-black text-[#2B1C16] tracking-tight">
                  $10
                </span>
                <span className="text-base sm:text-lg font-bold text-[#4A2B1D] uppercase">
                  USD
                </span>
              </div>
              <span className="text-xs font-semibold text-[#4A2B1D] bg-[#F4EBDD] px-2.5 py-1 rounded border border-[#DCCBBC]">
                SAVE 47%
              </span>
            </div>

            {/* Inclusions List */}
            <div className="space-y-3.5 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-[#8B796C]">
                What&apos;s Included:
              </p>
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#4A2B1D] text-[#FBF8F2] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm sm:text-base text-[#2B1C16] font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Main Action CTA Button (Dark Chocolate-Brown with white text) */}
            <a
              href={BEACONS_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full py-4 px-6 text-base sm:text-lg font-semibold text-[#FBF8F2] bg-[#4A2B1D] hover:bg-[#2B1C16] active:scale-[0.98] transition-all rounded-lg shadow-lg flex items-center justify-center gap-3 cursor-pointer"
            >
              <Lock className="w-4 h-4 text-[#DCCBBC]" />
              <span>GET INSTANT ACCESS — $10</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Trust and Safety Badges Under CTA */}
            <div className="mt-6 pt-5 border-t border-[#DCCBBC]/60 text-center space-y-2">
              <p className="text-xs text-[#4A2B1D]/90 font-medium">
                Secure checkout. Digital PDF delivered after successful payment.
              </p>
              <div className="flex items-center justify-center gap-3 text-xs text-[#8B796C]">
                <span>No subscription</span>
                <span>·</span>
                <span>No recurring fees</span>
                <span>·</span>
                <span>Encrypted checkout</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
