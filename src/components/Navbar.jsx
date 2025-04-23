import React from "react";

export default function Navbar({ setActiveSection, setShowPhone }) {
  return (
    <header className="bg-white/10 backdrop-blur-sm text-white shadow-md sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center md:flex-row md:justify-between text-center md:text-right">
        <div className="text-right leading-tight cursor-pointer select-none"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <h1 className="text-4xl font-bold">שַׁקֵּף</h1>
          <p className="text-sm -mt-1 tracking-tight">עבודות מתכת</p>
        </div>

        <div className="mt-3 md:mt-0 text-sm md:text-base font-semibold text-white text-center w-full md:w-auto">
          החוויה שלכם - הסיפוק שלנו
        </div>

        <nav className="flex gap-6 font-medium mt-3 md:mt-0">
          {/* אודות גולל לדיב */}
          <button
            onClick={() => {
              const section = document.getElementById("about");
              if (section) section.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover:text-blue-300 transition"
          >
            אודות
          </button>

          {/* צור קשר - מודאל */}
          <button
            onClick={() => setActiveSection("contact")}
            className="hover:text-blue-300 transition"
          >
            צור קשר
          </button>
        </nav>
      </div>
    </header>
  );
}
