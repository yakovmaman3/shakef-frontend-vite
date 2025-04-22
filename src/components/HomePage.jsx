// HomePage.jsx
import React from "react";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import HeavyWorkSection from "./HeavyWorkSection";
import PremiumWorkSection from "./PremiumWorkSection";
import VisionSection from "./VisionSection";

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
