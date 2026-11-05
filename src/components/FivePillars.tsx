import React from 'react';

export const FivePillars: React.FC = () => {
  const pillars = [
    {
      id: 'face',
      area: '01 · FACE',
      name: 'Face',
      summary: 'Skincare, facial hygiene and healthy habits.',
      image: '/src/assets/images/pillar_face_skincare_1793870336205.jpg',
      points: ['Morning hydration & SPF', 'Ice bowl lymphatic drainage', 'Chewing & jawline posture'],
    },
    {
      id: 'hair',
      area: '02 · HAIR',
      name: 'Hair',
      summary: 'Hairstyle, haircare and grooming.',
      image: '/src/assets/images/pillar_hair_grooming_1793870338020.jpg',
      points: ['Face-shape haircut selection', 'Scalp circulation protocol', 'Natural hair volume styling'],
    },
    {
      id: 'body',
      area: '03 · BODY',
      name: 'Body',
      summary: 'Fitness, posture, hydration and recovery.',
      image: '/src/assets/images/pillar_fitness_posture_1793870338077.jpg',
      points: ['Spine decompression & neck alignment', 'Low facial bloat hydration', 'Lean compound strength'],
    },
    {
      id: 'style',
      area: '04 · STYLE',
      name: 'Style',
      summary: 'Outfits, clothing fit and personal presentation.',
      image: '/src/assets/images/pillar_style_wardrobe_1793870337374.jpg',
      points: ['Neutral capsule wardrobe', 'Proportion & drape mastery', 'Clean footwear & subtle scent'],
    },
    {
      id: 'confidence',
      area: '05 · CONFIDENCE',
      name: 'Confidence',
      summary: 'Mindset, self-respect and discipline.',
      image: '/src/assets/images/pillar_confidence_mindset_1793870355164.jpg',
      points: ['Internal promise keeping', 'Composed eye contact & tone', 'Daily evening reflection'],
    },
  ];

  return (
    <section id="pillars" className="py-20 md:py-28 bg-[#FBF8F2] border-t border-[#DCCBBC]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] text-[#8B796C] uppercase mb-2">
            THE 5 PILLARS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#2B1C16] tracking-tight leading-tight text-balance">
            Your Glow-Up Starts With 5 Key Areas
          </h2>
          <p className="mt-3 text-base text-[#4A2B1D]/80 max-w-lg mx-auto">
            Sustainable self-improvement requires harmony. Each pillar is addressed daily inside the planner.
          </p>
        </div>

        {/* 5 Elegant Visual Cards: 3 on top row, 2 centered or balanced on bottom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {pillars.slice(0, 3).map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#F4EBDD]/60 border border-[#DCCBBC] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#DCCBBC]/40">
                <img
                  src={pillar.image}
                  alt={`Astrauw Glowup - ${pillar.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1C16]/75 via-[#2B1C16]/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-mono tracking-widest text-[#DCCBBC] uppercase font-semibold">
                    {pillar.area}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#FBF8F2]">
                    {pillar.name}
                  </h3>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-sm sm:text-base text-[#4A2B1D]/90 font-medium mb-4">
                  {pillar.summary}
                </p>
                <ul className="space-y-2 text-xs text-[#8B796C] border-t border-[#DCCBBC]/50 pt-4">
                  {pillar.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B796C]/60 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-7 max-w-4xl mx-auto">
          {pillars.slice(3, 5).map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#F4EBDD]/60 border border-[#DCCBBC] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#DCCBBC]/40">
                <img
                  src={pillar.image}
                  alt={`Astrauw Glowup - ${pillar.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B1C16]/75 via-[#2B1C16]/20 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-mono tracking-widest text-[#DCCBBC] uppercase font-semibold">
                    {pillar.area}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#FBF8F2]">
                    {pillar.name}
                  </h3>
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-sm sm:text-base text-[#4A2B1D]/90 font-medium mb-4">
                  {pillar.summary}
                </p>
                <ul className="space-y-2 text-xs text-[#8B796C] border-t border-[#DCCBBC]/50 pt-4">
                  {pillar.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B796C]/60 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
