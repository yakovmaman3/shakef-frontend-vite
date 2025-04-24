import React, { useEffect, useState } from "react";

export default function Navbar({ setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) {
        setIsScrolled(window.scrollY > 10);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`flex flex-col items-center justify-center py-2 transition-all duration-500 md:flex-row md:justify-between md:px-8 ${
          isScrolled ? "mobile-navbar-scroll" : ""
        }`}
      >
        <h1
          className={`text-2xl font-bold tracking-tight text-white transition-transform duration-500 ${
            isScrolled ? "md:translate-x-0 translate-x-[-80px]" : ""
          }`}
        >
          שַׁקֵּף
        </h1>
        <span
          className={`text-sm text-white mt-1 md:mt-0 transition-opacity duration-500 ${
            isScrolled ? "md:opacity-100 opacity-0" : "opacity-100"
          }`}
        >
          החוויה שלכם – הסיפוק שלנו
        </span>
        <nav
          className={`flex space-x-4 mt-2 md:mt-0 transition-transform duration-500 ${
            isScrolled ? "md:translate-x-0 translate-x-[80px]" : ""
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
        </nav>
      </div>
    </header>
  );
}
