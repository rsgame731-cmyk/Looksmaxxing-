import React, { useState } from 'react';
import { PLANNER_PREVIEW_PAGES, PlannerPage } from '../data/plannerContent';
import { Check, CheckSquare, Droplets, BookOpen, Clock, Calendar, ArrowRight, Eye } from 'lucide-react';
import { BEACONS_CHECKOUT_URL } from '../config/constants';

interface ProductPreviewProps {
  onOpenCheckout: () => void;
}

export const ProductPreview: React.FC<ProductPreviewProps> = ({ onOpenCheckout }) => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const activePage = PLANNER_PREVIEW_PAGES[activePageIndex];

  return (
    <section id="preview" className="py-20 md:py-28 bg-[#FBF8F2] border-t border-[#DCCBBC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#8B796C] uppercase mb-2">
            SNEAK PEEK
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#2B1C16] tracking-tight leading-tight text-balance">
            Take a Look Inside Your Planner
          </h2>
          <p className="mt-3 text-base text-[#4A2B1D]/80 max-w-lg mx-auto">
            Real printable PDF pages designed with minimal luxury aesthetics. Click any page below to inspect the daily layouts.
          </p>
        </div>

        {/* Interactive Page Switcher Buttons (Mobile horizontal scroll / Desktop flex wrap) */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {PLANNER_PREVIEW_PAGES.map((page, index) => {
            const isActive = index === activePageIndex;
            return (
              <button
                key={page.id}
                onClick={() => setActivePageIndex(index)}
                className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shrink-0 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#4A2B1D] text-[#FBF8F2] shadow-sm'
                    : 'bg-[#F4EBDD] text-[#4A2B1D] hover:bg-[#DCCBBC] border border-[#DCCBBC]/80'
                }`}
              >
                <span className="font-mono text-[11px] opacity-75">{page.previewNumber}</span>
                <span>{page.title}</span>
              </button>
            );
          })}
        </div>

        {/* Realistic Printable PDF Page Display */}
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-[#FBF8F2] border-2 border-[#DCCBBC] rounded-xl p-6 sm:p-10 md:p-12 shadow-xl paper-sheet">
            
            {/* Top Sheet Header Banner */}
            <div className="border-b-2 border-[#4A2B1D] pb-5 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-semibold tracking-wider text-[#8B796C] uppercase mb-1">
                  <span>ASTRAUW GLOWUP</span>
                  <span>/</span>
                  <span>30-DAY LOOKSMAXXING PROTOCOL</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1C16]">
                  {activePage.title}
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#8B796C] mt-1">
                  {activePage.subtitle}
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="inline-block text-xs font-mono font-bold tracking-widest text-[#4A2B1D] bg-[#F4EBDD] px-3 py-1 rounded border border-[#DCCBBC]">
                  PAGE {activePage.previewNumber} OF 30
                </span>
              </div>
            </div>

            {/* Motivational Quote Band */}
            {activePage.quote && (
              <div className="mb-8 p-4 rounded bg-[#F4EBDD]/60 border-l-2 border-[#4A2B1D] text-xs sm:text-sm italic text-[#4A2B1D]/90">
                {activePage.quote}
              </div>
            )}

            {/* Structured Page Sections (Simulated PDF interactive checklist) */}
            <div className="space-y-7">
              {activePage.sections.map((sec, sIdx) => (
                <div key={sIdx} className="space-y-3">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#2B1C16] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#4A2B1D]" />
                    <span>{sec.heading}</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {sec.items.map((item, iIdx) => (
                      <div
                        key={iIdx}
                        className="flex items-start gap-3 p-2.5 rounded bg-[#F4EBDD]/40 border border-[#DCCBBC]/50 text-xs sm:text-sm text-[#2B1C16]"
                      >
                        <div className="w-4 h-4 rounded border border-[#8B796C] bg-white flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#4A2B1D] stroke-[3]" />
                        </div>
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Printable Page Footer */}
            <div className="mt-10 pt-5 border-t border-[#DCCBBC] flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#8B796C]">
              <span>{activePage.footerTip || 'Astrauw Glowup — Master Copy'}</span>
              <span className="font-mono">PDF Standard 300 DPI · Ready to Print or Tablet Use</span>
            </div>

            {/* Decorative binder punch holes simulation */}
            <div className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 flex-col gap-14">
              <div className="w-3 h-3 rounded-full bg-[#DCCBBC] shadow-inner" />
              <div className="w-3 h-3 rounded-full bg-[#DCCBBC] shadow-inner" />
              <div className="w-3 h-3 rounded-full bg-[#DCCBBC] shadow-inner" />
            </div>

          </div>
        </div>

        {/* Bottom CTA for Preview */}
        <div className="mt-12 text-center">
          <a
            href={BEACONS_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 text-sm sm:text-base font-semibold text-[#FBF8F2] bg-[#4A2B1D] hover:bg-[#2B1C16] transition-all rounded shadow-sm cursor-pointer"
          >
            <span>GET ALL 30 PAGES — $10</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
