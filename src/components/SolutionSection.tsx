import React from 'react';
import { CalendarCheck, Layers, CheckSquare2, ArrowRight } from 'lucide-react';
import { BookMockup } from './BookMockup';
import { BEACONS_CHECKOUT_URL } from '../config/constants';

interface SolutionSectionProps {
  onOpenCheckout: () => void;
  onPreviewClick: () => void;
}

export const SolutionSection: React.FC<SolutionSectionProps> = ({ onOpenCheckout, onPreviewClick }) => {
  const benefits = [
    {
      icon: CalendarCheck,
      title: '30-Day System',
      description: 'Structured daily actions. No guesswork.',
    },
    {
      icon: Layers,
      title: '5 Key Areas',
      description: 'Face, Hair, Body, Style & Confidence.',
    },
    {
      icon: CheckSquare2,
      title: 'Easy Checklists',
      description: 'Simple routines you can actually follow.',
    },
  ];

  return (
    <section id="solution" className="py-20 md:py-28 bg-[#FBF8F2] border-t border-[#DCCBBC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Solution copy & 3 Benefits */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#8B796C] uppercase mb-2">
              THE SOLUTION
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#2B1C16] tracking-tight leading-[1.15] text-balance">
              This Is Not Just an Ebook. It&apos;s Your 30-Day System.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#4A2B1D]/85 leading-relaxed font-normal">
              A complete daily transformation planner designed to help you develop better habits across every area of your appearance and personal development.
            </p>

            {/* 3 Structured Benefit Blocks */}
            <div className="mt-8 space-y-5 w-full">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-lg bg-[#F4EBDD]/50 border border-[#DCCBBC]/70 transition-colors hover:bg-[#F4EBDD]"
                  >
                    <div className="w-10 h-10 rounded-md bg-[#4A2B1D] text-[#FBF8F2] flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#2B1C16]">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-[#4A2B1D]/80 font-normal mt-0.5">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Call to action within section */}
            <div className="mt-9 flex items-center gap-4">
              <a
                href={BEACONS_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-[#FBF8F2] bg-[#4A2B1D] hover:bg-[#2B1C16] transition-all rounded shadow-sm cursor-pointer"
              >
                <span>CLAIM YOUR SYSTEM — $10</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Beautiful Mockup beside text */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <BookMockup onClick={onPreviewClick} />
          </div>

        </div>
      </div>
    </section>
  );
};
