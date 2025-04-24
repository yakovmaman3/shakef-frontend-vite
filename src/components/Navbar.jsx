import React, { useEffect, useState } from "react";

export default function Navbar({ setActiveSection }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);

    const handleScroll = () => {
      if (isMobileDevice) {
        setIsScrolled(window.scrollY > 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isMobile) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="flex flex-col items-center justify-center py-2 transition-all duration-500">
          <div
            className={`transition-transform duration-500 ${
              isScrolled ? "translate-x-[-60px]" : "translate-x-0"
            }`}
          >
            <h1 className="text-2xl font-bold tracking-tight text-white">שַׁקֵּף</h1>
          </div>
          <div
            className={`text-sm text-white mt-1 transition-opacity duration-500 ${
              isScrolled ? "opacity-0" : "opacity-100"
            }`}
          >
            החוויה שלכם – הסיפוק שלנו
          </div>
          <div
            className={`flex space-x-4 mt-2 transition-transform duration-500 ${
              isScrolled ? "translate-x-[60px]" : "translate-x-0"
            }`}
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

  // Desktop version - untouched original
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex flex-col items-center justify-center py-2 md:flex-row md:justify-between md:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-white">שַׁקֵּף</h1>
        <span className="text-sm text-white mt-1 md:mt-0">
          החוויה שלכם – הסיפוק שלנו
        </span>
        <nav className="flex space-x-4 mt-2 md:mt-0">
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
