import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: 'Finally, a simple structure that makes building better habits easier.',
      tag: 'Sample Feedback Placeholder',
      context: 'Early Reader · Week 02 Routine',
    },
    {
      quote: 'Everything is organized in one place. I know exactly what to focus on each day.',
      tag: 'Sample Feedback Placeholder',
      context: 'Beta Community Member · Digital PDF',
    },
    {
      quote: 'I love how simple and practical the daily checklist is.',
      tag: 'Sample Feedback Placeholder',
      context: 'Daily Protocol User · Habit Tracker',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FBF8F2] border-t border-[#DCCBBC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#8B796C] uppercase mb-2">
            FEEDBACK &amp; EXPERIENCE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#2B1C16] tracking-tight leading-tight text-balance">
            What People Are Saying
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#8B796C] max-w-lg mx-auto">
            Transparent notice: Below are clearly labeled reader feedback placeholders showcasing early impressions of the system.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F4EBDD]/60 border border-[#DCCBBC] rounded-xl p-8 flex flex-col justify-between shadow-sm hover:border-[#8B796C] transition-colors"
            >
              <div>
                <Quote className="w-8 h-8 text-[#4A2B1D]/40 mb-4" />
                <p className="font-serif text-lg sm:text-xl text-[#2B1C16] italic leading-snug">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#DCCBBC]/70 flex flex-col gap-1">
                <span className="text-xs font-semibold text-[#4A2B1D]">
                  {item.context}
                </span>
                <span className="text-[11px] text-[#8B796C]">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
