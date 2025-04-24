import React, { useEffect, useState } from "react";

export default function Navbar({ setActiveSection }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const mobileCheck = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(mobileCheck);

    const handleScroll = () => {
      if (mobileCheck) {
        setIsScrolled(window.scrollY > 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className={`flex flex-col items-center justify-center py-2 md:flex-row md:justify-between md:px-8 transition-all duration-500 ${isMobile && isScrolled ? 'opacity-90 backdrop-blur-sm' : ''}`}>
        <h1 className={`text-2xl font-bold tracking-tight text-white transition-all duration-500 ${isMobile && isScrolled ? 'translate-x-[-40px]' : ''}`}>
          שַׁקֵּף
        </h1>
        <span className={`text-sm text-white mt-1 md:mt-0 transition-opacity duration-500 ${isMobile && isScrolled ? 'opacity-0' : 'opacity-100'}`}>
          החוויה שלכם – הסיפוק שלנו
        </span>
        <nav className={`flex space-x-4 mt-2 md:mt-0 transition-all duration-500 ${isMobile && isScrolled ? 'translate-x-[40px]' : ''}`}>
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
        </nav>
      </div>
    </header>
  );
}
