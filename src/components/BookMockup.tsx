import React from 'react';
import heroEditorialManImg from '../assets/images/hero_editorial_man_1793870336226.jpg';

export const BookMockup: React.FC<{ className?: string; onClick?: () => void }> = ({ className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative group cursor-pointer select-none perspective-1000 ${className}`}
      title="Click to preview inside the planner"
    >
      {/* Ambient warm drop shadow */}
      <div className="absolute -inset-4 bg-[#2B1C16]/20 blur-2xl rounded-3xl transform rotate-[-3deg] transition-all duration-500 group-hover:rotate-[-1deg] group-hover:scale-105" />

      {/* Behind pages simulation (stacked paper depth) */}
      <div className="absolute top-3 left-4 right-1 bottom-1 bg-[#DCCBBC] rounded-r-lg shadow-md transform rotate-[-1.5deg]" />
      <div className="absolute top-1.5 left-2 right-2 bottom-2 bg-[#FBF8F2] rounded-r-lg shadow-sm transform rotate-[-0.5deg]" />

      {/* Main 3D Book Cover */}
      <div className="relative w-full max-w-[340px] sm:max-w-[380px] md:max-w-[420px] aspect-[1/1.38] bg-[#FBF8F2] rounded-r-xl rounded-l-sm border border-[#DCCBBC] shadow-2xl overflow-hidden transition-transform duration-500 group-hover:rotate-1 group-hover:-translate-y-2 flex flex-col justify-between p-6 sm:p-7">
        
        {/* Left Book Spine Shadow / Crease */}
        <div className="absolute top-0 bottom-0 left-0 w-5 bg-gradient-to-r from-[#2B1C16]/30 via-[#2B1C16]/10 to-transparent pointer-events-none z-20" />
        <div className="absolute top-0 bottom-0 left-5 w-[1px] bg-[#4A2B1D]/15 pointer-events-none z-20" />

        {/* Satin sheen overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#F4EBDD]/20 to-[#FBF8F2]/60 pointer-events-none z-10" />

        {/* Top Header of Cover */}
        <div className="relative z-10 text-center pt-2">
          <p className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-[#8B796C] uppercase">
            ASTRAUW GLOWUP
          </p>
          <div className="w-12 h-[1px] bg-[#8B796C]/40 mx-auto my-2" />
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-black tracking-tight text-[#2B1C16] leading-none uppercase">
            30-DAY
          </h2>
          <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#4A2B1D] leading-tight uppercase mt-1">
            LOOKSMAXXING PLANNER
          </h3>
          <p className="text-[11px] sm:text-xs font-medium text-[#8B796C] mt-1.5 tracking-wide italic">
            Transform Your Face, Body, Style &amp; Confidence
          </p>
        </div>

        {/* Editorial Photo Frame in the Center */}
        <div className="relative z-10 my-3 w-full aspect-[4/3.8] rounded-md overflow-hidden border border-[#DCCBBC]/80 shadow-inner bg-[#F4EBDD]">
          <img
            src={heroEditorialManImg}
            alt="Astrauw Looksmaxxing Editorial Portrait"
            className="w-full h-full object-cover object-top filter contrast-[1.03]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1C16]/60 via-transparent to-transparent" />
          <div className="absolute bottom-2 left-3 right-3 text-left">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#FBF8F2] font-semibold">
              Daily Action Protocol
            </span>
          </div>
        </div>

        {/* Bottom Metadata of Cover */}
        <div className="relative z-10 text-center pb-1">
          <div className="w-12 h-[1px] bg-[#8B796C]/40 mx-auto mb-2" />
          <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#2B1C16] uppercase">
            DAILY SYSTEM FOR A COMPLETE GLOW UP
          </p>
          <div className="flex items-center justify-center gap-2 mt-2 text-[10px] text-[#8B796C]">
            <span>PRINTABLE PDF</span>
            <span>·</span>
            <span>30 DAYS</span>
            <span>·</span>
            <span>INSTANT ACCESS</span>
          </div>
        </div>

        {/* Realistic Page corner badge */}
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none">
          <div className="absolute transform rotate-45 bg-[#4A2B1D] text-[#FBF8F2] text-[8px] font-bold py-0.5 right-[-32px] top-[14px] w-[100px] text-center shadow-sm">
            OFFICIAL
          </div>
        </div>
      </div>
    </div>
  );
};
