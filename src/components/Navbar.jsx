import React, { useEffect, useState } from "react";

export default function Navbar({ setActiveSection }) {
  const [isMobileScrolled, setIsMobileScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileCheck = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(mobileCheck);

    const handleScroll = () => {
      if (mobileCheck) {
        setIsMobileScrolled(window.scrollY > 10);
      } else {
        setIsMobileScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-col items-center justify-center py-2 md:flex-row md:justify-between md:px-8">
        <div
          className={`transition-all duration-500 ${
            isMobileScrolled ? "translate-x-[-60px]" : "translate-x-0"
          } ${!isMobile ? "translate-x-0" : ""}`}
        >
          <h1 className="text-2xl font-bold tracking-tight text-white">שַׁקֵּף</h1>
        </div>
        <div
          className={`text-sm text-white mt-1 md:mt-0 transition-opacity duration-500 ${
            isMobileScrolled ? "opacity-0" : "opacity-100"
          } ${!isMobile ? "opacity-100" : ""}`}
        >
          החוויה שלכם – הסיפוק שלנו
        </div>
        <div
          className={`flex space-x-4 mt-2 md:mt-0 transition-all duration-500 ${
            isMobileScrolled ? "translate-x-[60px]" : "translate-x-0"
          } ${!isMobile ? "translate-x-0" : ""}`}
        >
          <button
            onClick={() => setActiveSection("about")}
            className="text-white hover:text-blue-300 transition"
          >
            אודות
          </button>
          <button
            onClick={() => setActiveSection("contact")}
            className="text-white hover:text-blue-300 transition"
          >
            צור קשר
          </button>
        </div>
      </div>
    </header>
  );
}
