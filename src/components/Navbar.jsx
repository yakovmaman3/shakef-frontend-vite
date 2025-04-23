// Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between text-white">
        <div className="text-right leading-tight">
          <h1 className="text-4xl font-bold">שַׁקֵּף</h1>
          <p className="text-sm text-gray-300 -mt-1">עבודות מתכת</p>
        </div>
        <div className="flex items-center space-x-6 space-x-reverse text-sm">
          <span className="hidden md:block text-gray-200">
            הַחֲוָיָה שֶׁלָּכֶם - הַסִּפּוּק שֶׁלָּנוּ
          </span>
          <nav className="flex gap-6 font-medium">
            <a href="#home" className="hover:text-blue-400 transition">דף הבית</a>
            <a href="#about" className="hover:text-blue-400 transition">אודות</a>
            <a href="#contact" className="hover:text-blue-400 transition">צור קשר</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
