import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import HeavyWorkSection from "./HeavyWorkSection";
import PremiumWorkSection from "./PremiumWorkSection";
import VisionSection from "./VisionSection";
import AboutSection from "./AboutSection";

export default function HomePage({ activeSection, setActiveSection, setShowPhone }) {
  return (
    <div className="relative text-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar setActiveSection={setActiveSection} setShowPhone={setShowPhone} />
      </div>

      <div
        className="min-h-screen bg-fixed bg-center bg-cover pt-28"
        style={{ backgroundImage: "url('/images/hero.webp')" }}
      >
        <HeroSection />

        <div className="backdrop-blur-md bg-black/30">
          <IntroSection setShowPhone={setShowPhone} />
          <HeavyWorkSection />
          <PremiumWorkSection />
          <VisionSection />
          <AboutSection />
        </div>

        {/* Floating Buttons */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
          <a href="https://wa.me/972552270388" target="_blank" rel="noopener noreferrer">
            <div className="bg-green-500 rounded-full p-3 shadow-md hover:bg-green-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 448 512" fill="currentColor">
                <path d="M380.9 97.1C339-2.6 221.4-28.8 133.7 33.3 68.4 81.6 43.7 169.5 72.7 244.6l-24.3 92.3a12 12 0 0 0 14.8 14.8l92.3-24.3c75.1 29 163 4.3 211.3-61 62.1-87.7 35.9-205.3-55.9-257.3z"/>
              </svg>
            </div>
          </a>

          <div onClick={() => setShowPhone(true)} className="bg-blue-600 rounded-full p-3 shadow-md hover:bg-blue-700 transition cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 512 512" fill="currentColor">
              <path d="M493.4 24.6l-104-24C370.4-.8 360 7.5 360 19v72.5C275.5 134.2 233.2 176.5 200.5 246.5c-16.1-6.7-31.5-15.3-46.2-25.7-14.7-10.4-27.9-21.9-39.5-34.3-10.5-11.3-25.2-18.5-40.7-19.5C38.5 165.1 0 203.6 0 251.5 0 309 39.1 352.4 89.6 371.5 104.1 377 118.3 381.5 132 385l0 71.1c0 11.4 10.4 19.8 20.9 15.5l104-24c6.7-1.6 11.1-7.8 10.2-14.6C255.4 370.7 398.5 227.6 507.9 35.4c3.9-6.4.7-14.7-6.2-17.2z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
