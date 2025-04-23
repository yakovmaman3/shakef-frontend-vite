// HomePage.jsx
import React from "react";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import HeavyWorkSection from "./components/HeavyWorkSection";
import PremiumWorkSection from "./components/PremiumWorkSection";
import VisionSection from "./components/VisionSection";

export default function HomePage() {
  return (
    <div className="text-white bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <HeroSection />
      <div className="backdrop-blur-md bg-black/30">
        <IntroSection />
        <HeavyWorkSection />
        <PremiumWorkSection />
        <VisionSection />
      </div>
    </div>
  );
}
