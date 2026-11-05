import React from 'react';
import { ArrowRight, Check, Sparkles, Download, ShieldCheck } from 'lucide-react';
import { BookMockup } from './BookMockup';
import { BEACONS_CHECKOUT_URL } from '../config/constants';

interface HeroProps {
  onOpenCheckout: () => void;
  onPreviewClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout, onPreviewClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 bg-[#F4EBDD]">
      {/* Subtle warm atmospheric radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#DCCBBC]/30 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Small Top Label */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#8B796C] uppercase">
                BY ASTRAUW GLOWUP
              </span>
              <span className="w-8 h-[1px] bg-[#8B796C]/60" />
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2B1C16] leading-[1.08] text-balance">
              Transform Your Looks in 30 Days
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-lg sm:text-xl text-[#4A2B1D]/85 font-normal max-w-xl leading-relaxed">
              A step-by-step system to upgrade your face, body, style &amp; confidence.
            </p>

            {/* Mobile Mockup Placement (beneath headline on mobile) */}
            <div className="w-full flex justify-center my-8 lg:hidden">
              <BookMockup onClick={onPreviewClick} />
            </div>

            {/* Primary CTA Area */}
            <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={BEACONS_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-semibold text-[#FBF8F2] bg-[#4A2B1D] hover:bg-[#2B1C16] active:scale-[0.98] transition-all rounded shadow-md whitespace-nowrap cursor-pointer hover:shadow-lg"
              >
                <span>GET THE PLANNER NOW — $10</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={onPreviewClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-[#4A2B1D] bg-[#FBF8F2] hover:bg-[#DCCBBC]/50 border border-[#DCCBBC] transition-all rounded whitespace-nowrap cursor-pointer"
              >
                <span>Preview Inside Pages</span>
              </button>
            </div>

            {/* Value Checkpoints Under Button */}
            <div className="mt-6 pt-5 border-t border-[#DCCBBC]/70 flex flex-col gap-2.5 text-xs sm:text-sm text-[#4A2B1D]/90 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#4A2B1D] shrink-0 stroke-[2.5]" />
                <span>Instant Digital Download</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#4A2B1D] shrink-0 stroke-[2.5]" />
                <span>One-Time Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#4A2B1D] shrink-0 stroke-[2.5]" />
                <span>No Extreme Methods. Just Real, Practical Habits.</span>
              </div>
            </div>

            {/* Social Proof Whisper */}
            <div className="mt-8 flex items-center gap-3 text-xs text-[#8B796C]">
              <span className="font-semibold text-[#2B1C16]">30-Day PDF Digital Edition</span>
              <span>·</span>
              <span>Printable &amp; Tablet Ready</span>
              <span>·</span>
              <span>Immediate Lifetime Access</span>
            </div>
          </div>

          {/* Right Column: Large 3D Mockup on Desktop */}
          <div className="hidden lg:col-span-5 lg:flex justify-center items-center">
            <BookMockup onClick={onPreviewClick} />
          </div>

        </div>
      </div>
    </section>
  );
};
