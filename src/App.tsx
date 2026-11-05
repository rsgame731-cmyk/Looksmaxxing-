/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { WhatsInside } from './components/WhatsInside';
import { FivePillars } from './components/FivePillars';
import { TimelineSection } from './components/TimelineSection';
import { ProductPreview } from './components/ProductPreview';
import { MindsetSection } from './components/MindsetSection';
import { Testimonials } from './components/Testimonials';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { LegalModals, LegalModalType } from './components/LegalModals';
import { BEACONS_CHECKOUT_URL } from './config/constants';

export default function App() {
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);

  const handleOpenCheckout = () => {
    window.open(BEACONS_CHECKOUT_URL, '_blank', 'noopener,noreferrer');
  };

  const scrollToPreview = () => {
    const el = document.getElementById('preview');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F4EBDD] text-[#2B1C16] flex flex-col font-sans selection:bg-[#4A2B1D] selection:text-[#FBF8F2]">
      {/* Top 3-Zone Navigation */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      {/* Main Landing Page Flow */}
      <main className="flex-grow">
        {/* Hero Section with 3D Book Mockup & CTA */}
        <Hero 
          onOpenCheckout={handleOpenCheckout} 
          onPreviewClick={scrollToPreview} 
        />

        {/* The Problem Section */}
        <ProblemSection />

        {/* The Solution Section */}
        <SolutionSection 
          onOpenCheckout={handleOpenCheckout} 
          onPreviewClick={scrollToPreview} 
        />

        {/* What's Inside — 6 Premium Feature Cards */}
        <WhatsInside />

        {/* The Five Pillars — Editorial Imagery */}
        <FivePillars />

        {/* The 30-Day Transformation — Weekly Progression */}
        <TimelineSection onOpenCheckout={handleOpenCheckout} />

        {/* Product Preview — Realistic Printable PDF Previews */}
        <ProductPreview onOpenCheckout={handleOpenCheckout} />

        {/* The Mindset Shift — Before vs After */}
        <MindsetSection />

        {/* Testimonials — Transparent Sample Placeholders */}
        <Testimonials />

        {/* Pricing Section — $10 Highlighted Hero Card */}
        <PricingSection onOpenCheckout={handleOpenCheckout} />

        {/* FAQ Section — 7 Accordion Questions */}
        <FaqSection />

        {/* Final CTA Section — Full Dark Chocolate Brown */}
        <FinalCta onOpenCheckout={handleOpenCheckout} />
      </main>

      {/* Footer */}
      <Footer onOpenLegal={(type) => setActiveLegalModal(type)} />

      {/* Legal & Contact Modals */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
