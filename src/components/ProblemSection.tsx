import React from 'react';
import { Compass, Repeat, Split, ShieldAlert } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      num: '01',
      icon: Compass,
      title: 'No Clear Routine',
      description: "You don't know which habits to follow or where to start.",
    },
    {
      num: '02',
      icon: Repeat,
      title: 'Inconsistent Habits',
      description: 'You start routines but struggle to maintain them.',
    },
    {
      num: '03',
      icon: Split,
      title: 'Too Much Conflicting Advice',
      description: 'Social media makes improving your appearance confusing.',
    },
    {
      num: '04',
      icon: ShieldAlert,
      title: 'Lack of Confidence',
      description: "You want to improve but don't have a clear system.",
    },
  ];

  return (
    <section id="problem" className="py-20 bg-[#F4EBDD] border-t border-[#DCCBBC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#8B796C] uppercase mb-2">
            THE PROBLEM
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#2B1C16] tracking-tight leading-tight text-balance">
            Why You Still Don&apos;t Look Your Best
          </h2>
          <p className="mt-3 text-[#4A2B1D]/80 text-base max-w-lg mx-auto">
            Most men want to improve their appearance, but without an organized daily framework, effort gets scattered.
          </p>
        </div>

        {/* 4 Minimalist Beige Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob) => {
            const Icon = prob.icon;
            return (
              <div
                key={prob.num}
                className="group relative bg-[#FBF8F2] border border-[#DCCBBC] rounded-lg p-7 flex flex-col justify-between hover:border-[#8B796C] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-medium tracking-widest text-[#8B796C]">
                      {prob.num}
                    </span>
                    <div className="w-10 h-10 rounded-md bg-[#F4EBDD] border border-[#DCCBBC]/60 flex items-center justify-center text-[#4A2B1D] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#2B1C16] mb-3 leading-snug">
                    {prob.title}
                  </h3>
                  <p className="text-sm text-[#4A2B1D]/80 leading-relaxed font-normal">
                    {prob.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCCBBC]/40 flex items-center text-[11px] font-medium text-[#8B796C]">
                  <span>Obstacle Identified</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
