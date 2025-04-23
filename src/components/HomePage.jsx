// HomePage.jsx
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import IntroSection from "./IntroSection";
import HeavyWorkSection from "./HeavyWorkSection";
import PremiumWorkSection from "./PremiumWorkSection";
import VisionSection from "./VisionSection";

export default function HomePage({ activeSection, setActiveSection }) {
  return (
    <div className="relative text-white">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar setActiveSection={setActiveSection} />
      </div>

      <div
        className="min-h-screen bg-fixed bg-center bg-cover pt-28"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <HeroSection />

        <div className="backdrop-blur-md bg-black/30">
          <IntroSection />
          <HeavyWorkSection />
          <PremiumWorkSection />
          <VisionSection />
        </div>

        {/* Floating Buttons */}
        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
          <a href="https://wa.me/972552270388" target="_blank" rel="noopener noreferrer">
            <div className="bg-green-500 rounded-full p-3 shadow-md hover:bg-green-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48a11.924 11.924 0 00-16.89 0 11.924 11.924 0 000 16.89l-1.36 4.03 4.03-1.36a11.924 11.924 0 0016.89-16.89zm-9.73 14.7c-2.4 0-4.63-.84-6.42-2.29-.1-.09-.13-.24-.07-.36l.91-2.09a.267.267 0 01.3-.15c.23.06.47.11.71.15.19.04.38.06.58.06.23 0 .44-.03.64-.08a.27.27 0 01.27.12c.48.7 1.18 1.24 1.95 1.55.15.07.33.01.42-.14.33-.54.72-1.03 1.16-1.46.22-.22.33-.51.33-.82 0-.28-.07-.56-.2-.8a.268.268 0 01.06-.3c.57-.59 1.23-1.14 1.97-1.63a.27.27 0 01.34.03 9.96 9.96 0 012.64 3.61.27.27 0 01-.06.31 10.025 10.025 0 01-7.38 3.2z"/></svg>
            </div>
          </a>
          {typeof window !== 'undefined' && window.innerWidth > 768 ? (
  <div onClick={() => setShowPhone(true)} className="bg-blue-600 rounded-full p-3 shadow-md hover:bg-blue-700 transition cursor-pointer">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 5.882c0 7.623 6.495 13.118 14.118 13.118.842 0 1.651-.066 2.423-.189a1 1 0 00.772-1.498l-1.72-2.87a1 1 0 00-1.319-.382l-2.272 1.052a9.007 9.007 0 01-4.957-4.957l1.052-2.272a1 1 0 00-.382-1.319L6.687 3.687a1 1 0 00-1.498.772c-.123.772-.189 1.581-.189 2.423z" />
    </svg>
  </div>
) : (
  <a href="tel:0552270388">
    <div className="bg-blue-600 rounded-full p-3 shadow-md hover:bg-blue-700 transition">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 5.882c0 7.623 6.495 13.118 14.118 13.118.842 0 1.651-.066 2.423-.189a1 1 0 00.772-1.498l-1.72-2.87a1 1 0 00-1.319-.382l-2.272 1.052a9.007 9.007 0 01-4.957-4.957l1.052-2.272a1 1 0 00-.382-1.319L6.687 3.687a1 1 0 00-1.498.772c-.123.772-.189 1.581-.189 2.423z" />
      </svg>
    </div>
  </a>
)}
        </div>
      </div>
    </div>
  );
}