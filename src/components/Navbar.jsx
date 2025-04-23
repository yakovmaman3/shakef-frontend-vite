// Navbar.jsx
import React from "react";

function Navbar({ setActiveSection, setShowPhone }) {
  return (
    
<header className="bg-white/10 backdrop-blur-sm text-white shadow-md sticky top-0 z-50 border-b border-white/20">
  <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center md:flex-row md:justify-between text-center md:text-right">
    <div className="text-right leading-tight">
      <h1
        className="text-4xl font-bold cursor-pointer select-none"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        שַׁקֵּף
      </h1>
      <p className="text-sm -mt-1 tracking-tight">עבודות מתכת</p>
    </div>
    <div className="mt-3 md:mt-0 text-sm md:text-base font-semibold text-white text-center w-full md:w-auto">
      הַחֲוָיָה שֶׁלָּכֶם - הַסִּפּוּק שֶׁלָּנוּ
    </div>
    <nav className="flex gap-6 font-medium mt-3 md:mt-0">
      <button onClick={() => setActiveSection("about")} className="hover:text-blue-300 transition">אודות</button>
      <button onClick={() => setActiveSection("contact")} className="hover:text-blue-300 transition">צור קשר</button>
    </nav>
  </div>
</header>

  );
}

export default Navbar;