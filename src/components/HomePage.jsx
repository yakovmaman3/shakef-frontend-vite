import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import HeavyWorkSection from "./HeavyWorkSection";
import PremiumWorkSection from "./PremiumWorkSection";
import VisionSection from "./VisionSection";

export default function HomePage({ setActiveSection, onPhoneClick }) {
  return (
    <div className="relative text-white">
      {/* Skip link for keyboard users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:right-3 bg-white text-black px-3 py-2 rounded shadow z-[60]"
      >
        דלג לתוכן הראשי
      </a>

      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar setActiveSection={setActiveSection} />
      </div>

      {/* Hero section with background image */}
      <div
        className="min-h-screen bg-fixed bg-center bg-cover pt-28 ios-fix"
        style={{
          backgroundImage: "url('/images/hero.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <HeroSection />
      </div>

      {/* Content section with plain dark background */}
      <main id="main" className="bg-[#4f4f4f]" tabIndex={-1}>
        <IntroSection setShowPhone={onPhoneClick} />
        <HeavyWorkSection />
        <PremiumWorkSection />
        <VisionSection />
      </main>

      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
        {/* WhatsApp */}
        <a
          href="https://wa.me/972552270388"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="פתיחת וואטסאפ לשליחת הודעה"
          className="inline-flex"
        >
          <span className="bg-green-500 rounded-full p-3 shadow-md hover:bg-green-600 transition focus-visible:ring-2 focus-visible:ring-white/80">
            <img src="/icons/whatsapp.svg" alt="" aria-hidden="true" className="w-6 h-6" />
          </span>
        </a>

        {/* Phone */}
        <button
          type="button"
          onClick={onPhoneClick}
          className="bg-blue-600 rounded-full p-3 shadow-md hover:bg-blue-700 transition focus-visible:ring-2 focus-visible:ring-white/80"
          aria-label="הצגת מספר טלפון"
        >
          <img src="/icons/phone.jpg" alt="" aria-hidden="true" className="w-6 h-6 rounded-full" />
        </button>
      </div>
    </div>
  );
}
