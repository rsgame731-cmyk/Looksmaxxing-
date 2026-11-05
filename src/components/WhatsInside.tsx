import React from 'react';
import { Calendar, TrendingUp, Sparkles, Activity, Droplets, BookOpen } from 'lucide-react';

export const WhatsInside: React.FC = () => {
  const features = [
    {
      num: '01',
      title: '30 Daily Pages',
      description: 'One focused action every day to help you stay consistent.',
      icon: Calendar,
      detail: 'Clear morning, midday, and evening protocol with zero guesswork.',
    },
    {
      num: '02',
      title: 'Weekly Glow-Up System',
      description: 'Review your progress and improve every week.',
      icon: TrendingUp,
      detail: '7-day habit audit, physical check-ins, and calibration prompts.',
    },
    {
      num: '03',
      title: 'Skincare & Grooming',
      description: 'Build simple personal care and grooming habits.',
      icon: Sparkles,
      detail: 'Minimalist routines for clear skin, facial definition, and clean hair.',
    },
    {
      num: '04',
      title: 'Fitness & Posture',
      description: 'Develop sustainable fitness and posture routines.',
      icon: Activity,
      detail: 'Daily spinal decompression, neck alignment, and athletic movement.',
    },
    {
      num: '05',
      title: 'Water & Habit Tracker',
      description: 'Track the small habits that support your goals.',
      icon: Droplets,
      detail: 'Hydration checkpoints to eliminate facial bloat and support skin health.',
    },
    {
      num: '06',
      title: 'Notes & Reflection',
      description: 'Journal your progress and stay motivated.',
      icon: BookOpen,
      detail: 'Daily prompts to cultivate internal self-respect, mindset, and poise.',
    },
  ];

  return (
    <section id="whats-inside" className="py-20 md:py-28 bg-[#F4EBDD] border-t border-[#DCCBBC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#8B796C] uppercase mb-2">
            WHAT&apos;S INSIDE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#2B1C16] tracking-tight leading-tight text-balance">
            Everything You Need to Glow Up
          </h2>
          <p className="mt-3 text-base text-[#4A2B1D]/80 max-w-lg mx-auto">
            A complete, printable digital system engineered for clarity, daily discipline, and real lifestyle upgrades.
          </p>
        </div>

        {/* 6 Premium Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="relative bg-[#FBF8F2] border border-[#DCCBBC] rounded-lg p-7 sm:p-8 flex flex-col justify-between hover:border-[#8B796C] transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm tracking-widest text-[#8B796C] font-semibold">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-md bg-[#F4EBDD] border border-[#DCCBBC]/60 text-[#4A2B1D] flex items-center justify-center group-hover:bg-[#4A2B1D] group-hover:text-[#FBF8F2] transition-colors">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B1C16] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#4A2B1D]/85 leading-relaxed font-normal mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DCCBBC]/50 text-xs text-[#8B796C] font-medium">
                  <span>{item.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
