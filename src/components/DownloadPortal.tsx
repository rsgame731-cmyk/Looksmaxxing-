import React, { useState } from 'react';
import { OrderDetails } from './CheckoutModal';
import { 
  CheckCircle2, 
  Download, 
  FileText, 
  Printer, 
  Sparkles, 
  Calendar, 
  CheckSquare, 
  Droplets, 
  ArrowLeft,
  Share2,
  Clock,
  ShieldCheck
} from 'lucide-react';
import { PLANNER_PREVIEW_PAGES } from '../data/plannerContent';

interface DownloadPortalProps {
  order: OrderDetails;
  onBackToHome: () => void;
}

export const DownloadPortal: React.FC<DownloadPortalProps> = ({ order, onBackToHome }) => {
  const [activeDay, setActiveDay] = useState(1);
  const [completedHabits, setCompletedHabits] = useState<Record<number, boolean[]>>({
    1: [true, true, false, false, false, false],
  });
  const [waterGlasses, setWaterGlasses] = useState<Record<number, number>>({
    1: 4,
  });
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Toggle habit checkbox
  const toggleHabit = (day: number, idx: number) => {
    setCompletedHabits((prev) => {
      const current = prev[day] ? [...prev[day]] : [false, false, false, false, false, false];
      current[idx] = !current[idx];
      return { ...prev, [day]: current };
    });
  };

  // Toggle water glass
  const setWater = (day: number, count: number) => {
    setWaterGlasses((prev) => ({
      ...prev,
      [day]: prev[day] === count ? count - 1 : count,
    }));
  };

  // Generate real PDF file download (HTML printable blob)
  const triggerPdfDownload = () => {
    const plannerDoc = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>30-Day Looksmaxxing Planner — Astrauw Glowup</title>
        <style>
          body { font-family: 'Georgia', serif; background: #F4EBDD; color: #2B1C16; padding: 40px; margin: 0; }
          .page { background: #FBF8F2; border: 2px solid #DCCBBC; border-radius: 8px; padding: 40px; margin-bottom: 40px; max-width: 800px; margin-left: auto; margin-right: auto; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
          h1 { color: #2B1C16; font-size: 32px; text-transform: uppercase; margin-bottom: 5px; text-align: center; }
          h2 { color: #4A2B1D; font-size: 20px; text-align: center; margin-top: 0; font-weight: normal; }
          .meta { text-align: center; font-size: 12px; color: #8B796C; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 30px; }
          .section-title { font-size: 16px; font-weight: bold; color: #4A2B1D; border-bottom: 2px solid #4A2B1D; padding-bottom: 5px; margin-top: 25px; text-transform: uppercase; }
          .checklist-item { padding: 8px 0; border-bottom: 1px solid #DCCBBC; font-size: 14px; font-family: sans-serif; display: flex; align-items: center; }
          .checkbox { width: 14px; height: 14px; border: 1.5px solid #4A2B1D; margin-right: 12px; display: inline-block; }
          .quote { font-style: italic; background: #F4EBDD; padding: 15px; border-left: 3px solid #4A2B1D; margin: 20px 0; font-size: 14px; }
          .footer { text-align: center; font-size: 11px; color: #8B796C; margin-top: 30px; border-top: 1px solid #DCCBBC; padding-top: 15px; font-family: sans-serif; }
          @media print { body { background: white; padding: 0; } .page { border: none; box-shadow: none; page-break-after: always; } }
        </style>
      </head>
      <body>
        <div class="page">
          <div class="meta">ASTRAUW GLOWUP · OFFICIAL DIGITAL EDITION</div>
          <h1>30-DAY LOOKSMAXXING PLANNER</h1>
          <h2>Transform Your Face, Body, Style & Confidence</h2>
          <div class="quote">
            "You do not rise to the level of your goals. You fall to the level of your daily systems."
          </div>
          <div class="section-title">Order Verification</div>
          <div class="checklist-item"><span class="checkbox"></span> Order ID: ${order.orderId}</div>
          <div class="checklist-item"><span class="checkbox"></span> Licensed To: ${order.customerName} (${order.customerEmail})</div>
          <div class="checklist-item"><span class="checkbox"></span> Price Paid: $10.00 USD (Full Lifetime Digital Rights)</div>

          <div class="section-title">Daily Morning Protocol</div>
          <div class="checklist-item"><span class="checkbox"></span> 500ml room temp water with Himalayan salt + lemon</div>
          <div class="checklist-item"><span class="checkbox"></span> Cold water facial wash & hydrating cleanser</div>
          <div class="checklist-item"><span class="checkbox"></span> Hyaluronic acid + Ceramide moisturizer + Mineral SPF 50</div>
          <div class="checklist-item"><span class="checkbox"></span> 10-Minute cervical spine decompression & posture reset</div>
          <div class="checklist-item"><span class="checkbox"></span> Tongue flat on palate (Mewing awareness)</div>

          <div class="section-title">Daily Midday Protocol</div>
          <div class="checklist-item"><span class="checkbox"></span> Hydration target: Complete 2.0 Liters total water</div>
          <div class="checklist-item"><span class="checkbox"></span> 15-Minute outdoor walk for circadian rhythm</div>
          <div class="checklist-item"><span class="checkbox"></span> Clean dental & oral posture check</div>

          <div class="section-title">Daily Evening Protocol</div>
          <div class="checklist-item"><span class="checkbox"></span> Double cleanse to eliminate daily sebum & sunscreen</div>
          <div class="checklist-item"><span class="checkbox"></span> Retinol or night recovery cream application</div>
          <div class="checklist-item"><span class="checkbox"></span> Screen cutoff 45 minutes prior to sleep</div>
          <div class="checklist-item"><span class="checkbox"></span> 8 Hours restorative sleep in cool, dark room</div>

          <div class="footer">
            © 2026 Astrauw Glowup. All rights reserved. Confidence. Discipline. Consistency.
          </div>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([plannerDoc], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Astrauw-Glowup-30-Day-Planner-${order.orderId}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  const handlePrint = () => {
    window.print();
  };

  const dailyHabits = [
    'Morning Cleanse + HA + SPF 50 application',
    'Drink 3.5 Liters water throughout the day',
    '10,000 steps & 15-min sunlight walk',
    '45-minute posture & resistance workout',
    'Strict tongue posture (Mewing) awareness',
    'Evening double-cleanse & night reflection',
  ];

  return (
    <div className="min-h-screen bg-[#F4EBDD] text-[#2B1C16] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Navigation back */}
        <div className="flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4A2B1D] hover:text-[#2B1C16] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Astrauw Glowup</span>
          </button>
          <div className="flex items-center gap-2 text-xs font-mono text-[#8B796C]">
            <ShieldCheck className="w-4 h-4 text-[#4A2B1D]" />
            <span>Verified Customer Access</span>
          </div>
        </div>

        {/* Confirmation Hero Card */}
        <div className="bg-[#FBF8F2] border-2 border-[#4A2B1D] rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-[#DCCBBC]">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#4A2B1D] text-[#FBF8F2] flex items-center justify-center shrink-0 shadow-md">
                <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
              </div>
              <div>
                <span className="text-[11px] font-mono tracking-widest text-[#8B796C] uppercase font-bold">
                  TRANSACTION CONFIRMED · {order.orderId}
                </span>
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2B1C16]">
                  Your Glow-Up Planner Is Ready
                </h1>
                <p className="text-xs sm:text-sm text-[#4A2B1D]/80 mt-1">
                  Thank you, <span className="font-semibold text-[#2B1C16]">{order.customerName}</span>. Your digital access license has been provisioned.
                </p>
              </div>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <span className="text-xs font-semibold text-[#8B796C]">Total Paid:</span>
              <div className="font-serif text-3xl font-black text-[#2B1C16]">$10.00 USD</div>
              <span className="text-[10px] text-[#8B796C] font-mono uppercase">One-Time Lifetime Access</span>
            </div>
          </div>

          {/* Delivery Note */}
          <div className="my-6 p-4 rounded-xl bg-[#F4EBDD] border border-[#DCCBBC] text-xs sm:text-sm text-[#4A2B1D]/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-[#2B1C16]">Delivery Confirmed to:</p>
              <p className="font-mono text-xs text-[#4A2B1D]">{order.customerEmail}</p>
            </div>
            <span className="text-[11px] text-[#8B796C]">
              Order Date: {order.date}
            </span>
          </div>

          {/* Primary Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={triggerPdfDownload}
              className="py-4 px-6 rounded-lg bg-[#4A2B1D] hover:bg-[#2B1C16] text-[#FBF8F2] font-semibold text-base flex items-center justify-center gap-3 shadow-md hover:shadow-lg cursor-pointer transition-all active:scale-[0.99]"
            >
              <Download className="w-5 h-5 text-[#DCCBBC]" />
              <span>DOWNLOAD PLANNER (PDF)</span>
            </button>

            <button
              onClick={handlePrint}
              className="py-4 px-6 rounded-lg bg-[#F4EBDD] hover:bg-[#DCCBBC] text-[#4A2B1D] border border-[#DCCBBC] font-semibold text-base flex items-center justify-center gap-3 cursor-pointer transition-all"
            >
              <Printer className="w-5 h-5" />
              <span>Print Today&apos;s Worksheet</span>
            </button>
          </div>

          {downloadSuccess && (
            <div className="mt-4 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs text-center font-medium animate-in fade-in">
              ✓ Digital planner file downloaded successfully to your device!
            </div>
          )}
        </div>

        {/* In-Browser Digital Planner & Daily Reader */}
        <div className="bg-[#FBF8F2] border border-[#DCCBBC] rounded-2xl p-6 sm:p-10 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#DCCBBC]">
            <div>
              <span className="text-xs font-mono font-semibold tracking-wider text-[#8B796C] uppercase">
                INTERACTIVE DAILY WORKSPACE
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#2B1C16] mt-1">
                Day {activeDay} of 30 — Action Protocol
              </h2>
            </div>

            {/* Quick Day Selector */}
            <div className="flex items-center gap-2">
              <label className="text-xs font-semibold text-[#8B796C]">Jump to Day:</label>
              <select
                value={activeDay}
                onChange={(e) => setActiveDay(Number(e.target.value))}
                className="px-3 py-1.5 rounded-lg border border-[#DCCBBC] bg-white text-xs font-mono text-[#2B1C16] focus:outline-none"
              >
                {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>
                    Day {d < 10 ? `0${d}` : d} {d <= 7 ? '(Foundation)' : d <= 14 ? '(Appearance)' : d <= 21 ? '(Style)' : '(Discipline)'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Daily Motivational Focus */}
          <div className="my-6 p-4 rounded-xl bg-[#F4EBDD]/70 border-l-3 border-[#4A2B1D] text-sm text-[#4A2B1D]">
            <span className="font-bold text-[#2B1C16]">Day {activeDay} Focus: </span>
            {activeDay <= 7
              ? 'Nail down your morning hydration and mineral sunscreen routine without compromise.'
              : activeDay <= 14
              ? 'Prioritize posture: Keep spine elongated, shoulders depressed, and jaw aligned.'
              : activeDay <= 21
              ? 'Style execution: Ensure every garment worn is properly pressed and fits your natural frame.'
              : 'Full identity consolidation: Execute the habits effortlessly as part of who you are.'}
          </div>

          {/* Interactive Daily Checklists */}
          <div className="space-y-3 mb-8">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8B796C]">
              Non-Negotiable Daily Checkpoints:
            </h3>
            <div className="grid grid-cols-1 gap-2.5">
              {dailyHabits.map((habit, idx) => {
                const isChecked = completedHabits[activeDay]?.[idx] || false;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => toggleHabit(activeDay, idx)}
                    className={`w-full text-left p-3.5 rounded-lg border transition-all flex items-center justify-between cursor-pointer ${
                      isChecked
                        ? 'bg-[#F4EBDD] border-[#4A2B1D]/40 text-[#2B1C16]'
                        : 'bg-white border-[#DCCBBC] text-[#4A2B1D] hover:bg-[#F4EBDD]/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                          isChecked
                            ? 'bg-[#4A2B1D] border-[#4A2B1D] text-white'
                            : 'border-[#8B796C] bg-white'
                        }`}
                      >
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className={`text-sm ${isChecked ? 'line-through text-[#8B796C]' : 'font-medium'}`}>
                        {habit}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-[#8B796C]">
                      {isChecked ? 'Done' : 'Pending'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Hydration Tracker (Water Glasses) */}
          <div className="p-5 rounded-xl bg-[#F4EBDD] border border-[#DCCBBC] mb-6">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-[#4A2B1D]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B1C16]">
                  3.5L Water Intake (Tap to log each 500ml)
                </h4>
              </div>
              <span className="text-xs font-mono font-bold text-[#4A2B1D]">
                {((waterGlasses[activeDay] || 0) * 0.5).toFixed(1)}L / 3.5L
              </span>
            </div>

            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 7 }, (_, i) => i + 1).map((glass) => {
                const isDrank = (waterGlasses[activeDay] || 0) >= glass;
                return (
                  <button
                    key={glass}
                    type="button"
                    onClick={() => setWater(activeDay, glass)}
                    className={`py-3 rounded-lg border flex flex-col items-center justify-center gap-1 transition-all cursor-pointer ${
                      isDrank
                        ? 'bg-[#4A2B1D] border-[#4A2B1D] text-[#FBF8F2] shadow-sm'
                        : 'bg-white border-[#DCCBBC] text-[#8B796C] hover:bg-[#FBF8F2]'
                    }`}
                  >
                    <Droplets className="w-4 h-4" />
                    <span className="text-[10px] font-mono font-bold">{glass * 500}ml</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Daily Reflection Journal Area */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#8B796C] mb-2">
              Daily Self-Respect &amp; Wins Log:
            </label>
            <textarea
              rows={3}
              placeholder="What promise to yourself did you keep today? How did you carry yourself?"
              className="w-full p-3.5 rounded-lg border border-[#DCCBBC] bg-white text-sm text-[#2B1C16] focus:outline-none focus:border-[#4A2B1D]"
            />
          </div>

          {/* Day Navigation */}
          <div className="mt-8 pt-6 border-t border-[#DCCBBC] flex items-center justify-between">
            <button
              disabled={activeDay <= 1}
              onClick={() => setActiveDay((d) => Math.max(1, d - 1))}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#F4EBDD] text-[#4A2B1D] hover:bg-[#DCCBBC] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              ← Previous Day
            </button>

            <span className="text-xs font-mono text-[#8B796C]">
              Day {activeDay} of 30
            </span>

            <button
              disabled={activeDay >= 30}
              onClick={() => setActiveDay((d) => Math.min(30, d + 1))}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-[#4A2B1D] text-[#FBF8F2] hover:bg-[#2B1C16] disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
            >
              Next Day →
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
