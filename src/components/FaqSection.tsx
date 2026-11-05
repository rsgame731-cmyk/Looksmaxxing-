import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const faqs = [
    {
      q: 'Is this safe? Are there extreme methods?',
      a: 'No. The planner focuses on practical habits, personal care, grooming, fitness, and confidence. It does not promote extreme or harmful methods.',
    },
    {
      q: 'Do I need a gym membership?',
      a: 'No. Many of the habits can be practiced at home. You can adapt the fitness activities to your own level.',
    },
    {
      q: 'How long until I see results?',
      a: 'Everyone is different. The planner helps you build consistency over 30 days, but physical and personal results vary.',
    },
    {
      q: 'Is this beginner-friendly?',
      a: 'Yes. The planner is designed with simple daily actions that are easy to understand and follow.',
    },
    {
      q: 'How do I receive my planner?',
      a: 'After successful payment, you receive access to the downloadable PDF.',
    },
    {
      q: 'Is this a physical product?',
      a: 'No. This is a digital PDF planner.',
    },
    {
      q: 'Is there a monthly subscription?',
      a: 'No. You pay just $10 once.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FBF8F2] border-t border-[#DCCBBC]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#8B796C] uppercase mb-2">
            COMMON QUESTIONS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#2B1C16] tracking-tight leading-tight text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#4A2B1D]/80 max-w-lg mx-auto">
            Everything you need to know before beginning your 30-day glow-up protocol.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#F4EBDD]/60 border border-[#DCCBBC] rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#2B1C16]">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#DCCBBC]/50 flex items-center justify-center shrink-0 text-[#4A2B1D] transition-transform duration-200">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-[#4A2B1D]/90 leading-relaxed font-normal border-t border-[#DCCBBC]/50 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
