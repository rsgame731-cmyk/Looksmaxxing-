import React from 'react';
import { LegalModalType } from './LegalModals';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B1C16] text-[#FBF8F2] border-t border-[#4A2B1D]/50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#4A2B1D]">
          
          {/* Brand & Personality */}
          <div className="text-center md:text-left">
            <a 
              href="#" 
              onClick={scrollToTop} 
              className="font-serif text-2xl font-bold tracking-tight text-[#FBF8F2] hover:opacity-90 transition-opacity"
            >
              ASTRAUW GLOWUP
            </a>
            <p className="mt-2 text-sm text-[#A99585] tracking-wide">
              Confidence. Discipline. Consistency.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-[#DCCBBC]">
            <button 
              onClick={scrollToTop} 
              className="hover:text-[#FBF8F2] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => onOpenLegal('contact')} 
              className="hover:text-[#FBF8F2] transition-colors cursor-pointer"
            >
              Contact
            </button>
            <button 
              onClick={() => onOpenLegal('privacy')} 
              className="hover:text-[#FBF8F2] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenLegal('terms')} 
              className="hover:text-[#FBF8F2] transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
            <button 
              onClick={() => onOpenLegal('refund')} 
              className="hover:text-[#FBF8F2] transition-colors cursor-pointer"
            >
              Refund Policy
            </button>
          </nav>
        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B796C]">
          <p>© 2026 Astrauw Glowup. All rights reserved.</p>
          <p className="font-mono text-[11px]">30-Day Looksmaxxing Planner · $10.00 USD</p>
        </div>
      </div>
    </footer>
  );
};
