import React from 'react';
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { BEACONS_CHECKOUT_URL } from '../config/constants';

interface FinalCtaProps {
  onOpenCheckout: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-20 md:py-28 bg-[#2B1C16] text-[#FBF8F2] relative overflow-hidden">
      {/* Subtle warm decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#4A2B1D]/40 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <p className="text-xs font-semibold tracking-[0.25em] text-[#DCCBBC] uppercase mb-4">
          ASTRAUW GLOWUP
        </p>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#FBF8F2] leading-[1.12] text-balance">
          Your 30-Day Transformation Starts Now.
        </h2>

        <p className="mt-6 text-base sm:text-xl text-[#DCCBBC] max-w-2xl mx-auto font-normal leading-relaxed">
          Stop scrolling for random tips. Start following a system that helps you build better habits, confidence, and discipline.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href={BEACONS_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-9 py-5 text-base sm:text-lg font-semibold text-[#2B1C16] bg-[#FBF8F2] hover:bg-[#F4EBDD] active:scale-[0.98] transition-all rounded-lg shadow-xl hover:shadow-2xl cursor-pointer"
          >
            <span>DOWNLOAD THE PLANNER — $10</span>
            <ArrowRight className="w-5 h-5 text-[#2B1C16] transition-transform group-hover:translate-x-1" />
          </a>

          <p className="text-xs sm:text-sm text-[#A99585] tracking-wide">
            One-time payment. Instant digital access.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-[#4A2B1D]/80 flex flex-wrap items-center justify-center gap-6 text-xs text-[#8B796C]">
          <span>✓ Instant PDF Download</span>
          <span>✓ 30 Daily Worksheets</span>
          <span>✓ 100% Secure Checkout</span>
          <span>✓ No Recurring Subscription</span>
        </div>

      </div>
    </section>
  );
};
