// HomePage.jsx
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import HeavyWorkSection from "./HeavyWorkSection";
import PremiumWorkSection from "./PremiumWorkSection";
import VisionSection from "./VisionSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ImageSlider from "./ImageSlider";

export default function HomePage() {
  return (
    <div className="relative text-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="min-h-screen bg-fixed bg-center bg-cover pt-28" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
        <HeroSection />

        <div className="backdrop-blur-md bg-black/30">
          <IntroSection />
          <HeavyWorkSection />
          <PremiumWorkSection />
          <VisionSection />
          <AboutSection />
          <ContactSection />
        </div>

        {/* Floating Buttons */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
          <a href="https://wa.me/972552270388" target="_blank" rel="noopener noreferrer">
            <div className="bg-green-500 rounded-full p-3 shadow-md hover:bg-green-600 transition">
              <span role="img" aria-label="WhatsApp" className="text-white text-xl">💬</span>
            </div>
          </a>
          <a href="tel:0552270388">
            <div className="bg-blue-500 rounded-full p-3 shadow-md hover:bg-blue-600 transition">
              <span role="img" aria-label="Call" className="text-white text-xl">📞</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
