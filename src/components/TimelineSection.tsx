import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { BEACONS_CHECKOUT_URL } from '../config/constants';

interface TimelineSectionProps {
  onOpenCheckout: () => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ onOpenCheckout }) => {
  const weeks = [
    {
      weekNumber: 'WEEK 01',
      title: 'BUILD YOUR FOUNDATION',
      description: 'Develop your skincare, hygiene, hydration and daily routines.',
      focus: ['Morning cleansing & mineral SPF 50', '3L daily water baseline to eliminate puffiness', 'Posture baseline & daily 10k steps'],
      targetDays: 'Days 01 — 07',
    },
    {
      weekNumber: 'WEEK 02',
      title: 'LEVEL UP YOUR APPEARANCE',
      focus: ['Barber cut tailored to face shape', 'Daily mewing & jawline awareness', 'Compound resistance posture routine'],
      description: 'Focus on grooming, fitness, posture and presentation.',
      targetDays: 'Days 08 — 14',
    },
    {
      weekNumber: 'WEEK 03',
      title: 'DEVELOP YOUR STYLE',
      focus: ['Neutral palette fit refinement', 'Footwear conditioning & detail checks', 'Composed eye contact & speaking tone'],
      description: 'Improve your outfits, confidence and personal habits.',
      targetDays: 'Days 15 — 21',
    },
    {
      weekNumber: 'WEEK 04',
      title: 'BECOME YOUR BEST VERSION',
      focus: ['Full 30-day compliance evaluation', 'Automatic unconscious habit integration', 'Long-term self-respect identity'],
      description: 'Refine your routines, review your progress and build lasting discipline.',
      targetDays: 'Days 22 — 30',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F4EBDD] border-t border-[#DCCBBC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#8B796C] uppercase mb-2">
            THE 30-DAY TRANSFORMATION
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#2B1C16] tracking-tight leading-tight text-balance">
            A Simple Plan. 30 Days of Progress.
          </h2>
          <p className="mt-3 text-base text-[#4A2B1D]/80 max-w-lg mx-auto">
            Divided into 4 sequential stages so you never feel overwhelmed. Each week builds upon the last.
          </p>
        </div>

        {/* 4 Weekly Cards / Progression */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {weeks.map((wk, index) => (
            <div
              key={wk.weekNumber}
              className="relative bg-[#FBF8F2] border border-[#DCCBBC] rounded-xl p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#8B796C] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#4A2B1D] bg-[#F4EBDD] px-2.5 py-1 rounded">
                    {wk.weekNumber}
                  </span>
                  <span className="text-[11px] text-[#8B796C] font-mono">
                    {wk.targetDays}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-[#2B1C16] mb-3 leading-snug">
                  {wk.title}
                </h3>
                <p className="text-sm text-[#4A2B1D]/85 leading-relaxed font-normal mb-5">
                  {wk.description}
                </p>

                <div className="border-t border-[#DCCBBC]/50 pt-4 space-y-2">
                  {wk.focus.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#8B796C]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#4A2B1D] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#DCCBBC]/40 flex items-center justify-between text-[11px] font-medium text-[#8B796C]">
                <span>Phase 0{index + 1} of 04</span>
                <span>7 Days</span>
              </div>
            </div>
          ))}
        </div>

        {/* Section Call to action */}
        <div className="mt-14 text-center">
          <a
            href={BEACONS_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-base sm:text-lg font-semibold text-[#FBF8F2] bg-[#4A2B1D] hover:bg-[#2B1C16] active:scale-[0.98] transition-all rounded shadow-md hover:shadow-lg cursor-pointer"
          >
            <span>START YOUR 30-DAY JOURNEY — $10</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-3 text-xs text-[#8B796C]">
            Instant access to all 4 weeks &amp; printable PDF daily action sheets.
          </p>
        </div>

      </div>
    </section>
  );
};
