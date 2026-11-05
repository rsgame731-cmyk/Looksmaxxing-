import React from 'react';
import { X, Check, ShieldCheck } from 'lucide-react';

export const MindsetSection: React.FC = () => {
  const beforePoints = [
    'Inconsistent routines.',
    'No structure or direction.',
    'Overwhelmed by information.',
    'Struggling with discipline.',
    'Unsure where to start.',
  ];

  const afterPoints = [
    'Clear daily system.',
    'Better personal care routines.',
    'More organized lifestyle.',
    'Improved self-confidence.',
    'Discipline and consistency.',
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F4EBDD] border-t border-[#DCCBBC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#8B796C] uppercase mb-2">
            THE MINDSET SHIFT
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#2B1C16] tracking-tight leading-tight text-balance">
            It&apos;s Not Just About Looks. It&apos;s About Becoming Better.
          </h2>
          <p className="mt-3 text-base text-[#4A2B1D]/80 max-w-xl mx-auto">
            True transformation is built from the inside out through daily habits, quiet self-respect, and disciplined execution.
          </p>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* BEFORE CARD */}
          <div className="bg-[#FBF8F2]/70 border border-[#DCCBBC] rounded-xl p-8 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#DCCBBC]">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#8B796C]">
                  BEFORE
                </h3>
                <span className="text-xs font-mono uppercase tracking-wider text-[#8B796C]">
                  The Default Cycle
                </span>
              </div>

              <div className="mt-6 space-y-4">
                {beforePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#DCCBBC]/40 border border-[#8B796C]/40 flex items-center justify-center shrink-0 mt-0.5 text-[#8B796C]">
                      <X className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span className="text-sm sm:text-base text-[#4A2B1D]/80 leading-relaxed font-normal">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#DCCBBC]/60 text-xs text-[#8B796C]">
              <span>Random internet advice without accountability</span>
            </div>
          </div>

          {/* AFTER CARD */}
          <div className="bg-[#FBF8F2] border-2 border-[#4A2B1D] rounded-xl p-8 sm:p-9 flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#4A2B1D] text-[#FBF8F2] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-bl">
              THE 30-DAY SHIFT
            </div>

            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#DCCBBC]">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2B1C16]">
                  AFTER BETTER HABITS
                </h3>
              </div>

              <div className="mt-6 space-y-4">
                {afterPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#4A2B1D] text-[#FBF8F2] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base text-[#2B1C16] font-semibold leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#DCCBBC]/60 flex items-center gap-2 text-xs font-semibold text-[#4A2B1D]">
              <ShieldCheck className="w-4 h-4 text-[#4A2B1D]" />
              <span>Real, repeatable habits backed by daily structure</span>
            </div>
          </div>

        </div>

        {/* Responsible Disclaimer: Do not guarantee physical transformations */}
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-xs text-[#8B796C] leading-relaxed">
            *Notice: The 30-Day Looksmaxxing Planner does not guarantee unrealistic or extreme physical alterations. We believe lasting masculine presentation stems from consistent hygiene, posture, proper hydration, grooming, and mental discipline.
          </p>
        </div>

      </div>
    </section>
  );
};
