import React from "react";

function Navbar({ setActiveSection }) {
  return (
    <header className="bg-white/10 backdrop-blur-sm text-white shadow-md sticky top-0 z-50 border-b border-white/20">
      <div className="navbar transition-all duration-500 max-w-7xl mx-auto px-4 py-4 flex flex-col items-center md:flex-row md:justify-between text-center md:text-right">
        <div className="navbar-logo text-right leading-tight">
          <button
            type="button"
            className="select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 warning-ring rounded"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="חזרה לראש העמוד"
          >
            <h1 className="text-4xl font-bold">שַׁקֵּף</h1>
          </button>
          <p className="text-sm tracking-wide mt-1">עבודות מתכת</p>
        </div>

        <div className="navbar-motto mt-3 md:mt-0 text-sm md:text-base font-semibold text-white text-center w-full md:w-auto">
          הַחֲוָיָה שֶׁלָּכֶם - הַסִּפּוּק שֶׁלָּנוּ
        </div>

        <nav className="navbar-links flex gap-4 font-medium mt-3 md:mt-0" aria-label="ניווט ראשי">
          <button
            type="button"
            onClick={() => setActiveSection("about")}
            className="hover:text-blue-300 transition focus-visible:ring-2 focus-visible:ring-white/80 rounded px-2 py-1"
            aria-haspopup="dialog"
          >
            אודות
          </button>
          <button
            type="button"
            onClick={() => setActiveSection("contact")}
            className="hover:text-blue-300 transition focus-visible:ring-2 focus-visible:ring-white/80 rounded px-2 py-1"
            aria-haspopup="dialog"
          >
            צור קשר
          </button>
          <button
            type="button"
            onClick={() => setActiveSection("accessibility")}
            className="hover:text-blue-300 transition focus-visible:ring-2 focus-visible:ring-white/80 rounded px-2 py-1"
            aria-haspopup="dialog"
          >
            נגישות
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
