import React, { useState } from "react";
import HomePage from "./components/HomePage";

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="min-h-screen select-none">
      <HomePage
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        setShowPhone={setShowPhone}
      />
      {(activeSection === "contact" || showPhone) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 flex items-center justify-center"
          onClick={() => {
            setActiveSection(null);
            setShowPhone(false);
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white/10 text-white p-8 rounded-xl max-w-xl w-full backdrop-blur-md shadow-xl transition-all scale-100 duration-500 ${
              activeSection === "contact" || showPhone ? "mt-10" : ""
            }`}
          >
            {activeSection === "contact" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">צור קשר</h2>
                <p className="mb-6">נשמח לשוחח איתכם! מלאו את הטופס ונחזור אליכם בהקדם.</p>
                <form className="space-y-4">
                  <input type="text" placeholder="שם מלא" className="w-full rounded px-4 py-2 text-black select-text" />
                  <input type="email" placeholder="אימייל" className="w-full rounded px-4 py-2 text-black select-text" />
                  <textarea placeholder="הודעה" rows="4" className="w-full rounded px-4 py-2 text-black select-text" />
                  <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                    שלח
                  </button>
                </form>
              </div>
            )}
            {showPhone && (
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">התקשרו אלינו</h2>
                <p className="text-lg">
                  <a href="tel:0552270388" className="no-underline hover:text-blue-400 transition">055-2270388 📞</a>
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
