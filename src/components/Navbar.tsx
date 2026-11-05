import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { BEACONS_CHECKOUT_URL } from '../config/constants';

interface NavbarProps {
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F4EBDD]/95 backdrop-blur-md border-b border-[#DCCBBC]/60 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display serif) */}
        <a 
          href="#" 
          className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#2B1C16] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          ASTRAUW GLOWUP
        </a>

        {/* Zone 2: Single-line Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A2B1D]/80">
          <button 
            onClick={() => scrollTo('problem')} 
            className="hover:text-[#2B1C16] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            The Problem
          </button>
          <button 
            onClick={() => scrollTo('solution')} 
            className="hover:text-[#2B1C16] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            The System
          </button>
          <button 
            onClick={() => scrollTo('whats-inside')} 
            className="hover:text-[#2B1C16] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            What&apos;s Inside
          </button>
          <button 
            onClick={() => scrollTo('pillars')} 
            className="hover:text-[#2B1C16] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            5 Pillars
          </button>
          <button 
            onClick={() => scrollTo('preview')} 
            className="hover:text-[#2B1C16] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Sneak Peek
          </button>
          <button 
            onClick={() => scrollTo('pricing')} 
            className="hover:text-[#2B1C16] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Pricing
          </button>
          <button 
            onClick={() => scrollTo('faq')} 
            className="hover:text-[#2B1C16] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            FAQ
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={BEACONS_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#FBF8F2] bg-[#4A2B1D] hover:bg-[#2B1C16] active:scale-[0.98] transition-all rounded shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>GET PLANNER — $10</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#4A2B1D] hover:text-[#2B1C16] transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FBF8F2] border-b border-[#DCCBBC] px-6 py-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#4A2B1D]">
            <button 
              onClick={() => scrollTo('problem')} 
              className="text-left py-1 hover:text-[#2B1C16] transition-colors"
            >
              The Problem
            </button>
            <button 
              onClick={() => scrollTo('solution')} 
              className="text-left py-1 hover:text-[#2B1C16] transition-colors"
            >
              The System
            </button>
            <button 
              onClick={() => scrollTo('whats-inside')} 
              className="text-left py-1 hover:text-[#2B1C16] transition-colors"
            >
              What&apos;s Inside
            </button>
            <button 
              onClick={() => scrollTo('pillars')} 
              className="text-left py-1 hover:text-[#2B1C16] transition-colors"
            >
              The 5 Pillars
            </button>
            <button 
              onClick={() => scrollTo('preview')} 
              className="text-left py-1 hover:text-[#2B1C16] transition-colors"
            >
              Sneak Peek
            </button>
            <button 
              onClick={() => scrollTo('pricing')} 
              className="text-left py-1 hover:text-[#2B1C16] transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollTo('faq')} 
              className="text-left py-1 hover:text-[#2B1C16] transition-colors"
            >
              FAQ
            </button>
            <div className="pt-3 border-t border-[#DCCBBC]/70">
              <a
                href={BEACONS_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 text-sm font-semibold text-[#FBF8F2] bg-[#4A2B1D] hover:bg-[#2B1C16] rounded shadow-sm"
              >
                <span>GET THE PLANNER NOW — $10</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
