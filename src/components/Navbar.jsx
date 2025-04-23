// Navbar.jsx
import React from "react";

function Navbar({ setActiveSection }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-right leading-tight">
          <h1 className="text-4xl font-bold text-gray-900">שַׁקֵּף</h1>
          <p className="text-sm text-gray-500 -mt-1">עבודות מתכת</p>
        </div>
        <div className="flex items-center space-x-6 space-x-reverse text-sm">
          <span className="text-gray-600 hidden md:block">
            הַחֲוָיָה שֶׁלָּכֶם - הַסִּפּוּק שֶׁלָּנוּ
          </span>
          <nav className="flex gap-6 text-gray-700 font-medium">
            <button onClick={() => setActiveSection(null)} className="hover:text-blue-600 transition">דף הבית</button>
            <button onClick={() => setActiveSection("about")} className="hover:text-blue-600 transition">אודות</button>
            <button onClick={() => setActiveSection("contact")} className="hover:text-blue-600 transition">צור קשר</button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;