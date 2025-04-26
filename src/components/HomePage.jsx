
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import HeavyWorkSection from "./HeavyWorkSection";
import PremiumWorkSection from "./PremiumWorkSection";
import VisionSection from "./VisionSection";

export default function HomePage({ activeSection, setActiveSection, setShowPhone }) {
  return (
    <div className="relative text-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar setActiveSection={setActiveSection} setShowPhone={setShowPhone} />
      </div>

      <div
        className="min-h-screen bg-fixed bg-center bg-cover pt-28 ios-fix"
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}


      >
        <HeroSection />

        <div className="backdrop-blur-md bg-black/30">
          <IntroSection setShowPhone={setShowPhone} />
          <HeavyWorkSection />
          <PremiumWorkSection />
          <VisionSection />
        </div>

        {/* Floating Buttons */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
          {/* וואטסאפ */}
          <a href="https://wa.me/972552270388" target="_blank" rel="noopener noreferrer">
            <div className="bg-green-500 rounded-full p-3 shadow-md hover:bg-green-600 transition">
              <img src="/icons/whatsapp.svg" alt="וואטסאפ" className="w-6 h-6" />
            </div>
          </a>

          {/* טלפון */}
          <div onClick={() => setShowPhone(true)} className="bg-blue-600 rounded-full p-3 shadow-md hover:bg-blue-700 transition cursor-pointer">
            <img src="/icons/phone.jpg" alt="טלפון" className="w-6 h-6 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
