// App.jsx
import React, { useState } from "react";
import HomePage from "./components/HomePage";

function App() {
  const [activeSection, setActiveSection] = useState(null);

  const handleOverlayClose = () => setActiveSection(null);

  return (
    <div className="min-h-screen">
      <HomePage activeSection={activeSection} setActiveSection={setActiveSection} />
      {activeSection && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 flex items-center justify-center"
          onClick={handleOverlayClose}
        >
          <div onClick={(e) => e.stopPropagation()} className="bg-white/10 text-white p-8 rounded-xl max-w-xl w-full backdrop-blur-md shadow-xl transition-all scale-100 duration-500">
            {activeSection === "about" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">אודותינו</h2>
                <p className="text-lg mb-4 leading-relaxed">
                  טקסט לדוגמה על החברה. כאן תוכלו לכתוב על הדרך שלכם, הערכים שמנחים אתכם,
                  ומה מייחד את השירות שלכם בעבודות מתכת.
                </p>
                <p className="text-md mt-4">✉️ example@shakef.com</p>
                <p className="text-md">📞 ----</p>
              </div>
            )}
            {activeSection === "contact" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">צור קשר</h2>
                <p className="mb-6">נשמח לשוחח איתכם! מלאו את הטופס ונחזור אליכם בהקדם.</p>
                <form className="space-y-4">
                  <input type="text" placeholder="שם מלא" className="w-full rounded px-4 py-2 border" />
                  <input type="email" placeholder="אימייל" className="w-full rounded px-4 py-2 border" />
                  <textarea placeholder="הודעה" rows="4" className="w-full rounded px-4 py-2 border" />
                  <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                    שלח
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;