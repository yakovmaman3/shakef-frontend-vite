import React, { useState } from "react";
import HomePage from "./components/HomePage";

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="min-h-screen">
      <HomePage
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        setShowPhone={setShowPhone}
      />

      {(activeSection || showPhone) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 flex items-center justify-center"
          onClick={() => {
            setActiveSection(null);
            setShowPhone(false);
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white/10 text-white p-8 rounded-xl max-w-xl w-full backdrop-blur-md shadow-xl transition-all scale-100 duration-500"
          >
            {activeSection === "about" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">אודותינו</h2>
                <p className="text-lg mb-4 leading-relaxed">
                  שַׁקֵּף – מסגרות בהתאמה אישית. אנו מתמחים בעבודות מתכת קלות וכבדות — החל ממעקות, שערים, ריהוט וברזל מעוצב ועד לפרויקטים כבדים כגון מרפסות, קונסטרוקציות, שלדי מבנים ומערכות מיוחדות.
                </p>
                <p className="text-md mt-4">📍 אזור פעילות: השרון, המרכז והשפלה<br />🕒 ימים א׳–ה׳, 7:00–17:00</p>
              </div>
            )}
            {activeSection === "contact" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">צור קשר</h2>
                <p className="mb-6">נשמח לשוחח איתכם! מלאו את הטופס ונחזור אליכם בהקדם.</p>
                <form
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();

                    const name = e.target.name.value;
                    const email = e.target.email.value;
                    const phone = e.target.phone.value;
                    const message = e.target.message.value;

                    if (!name || !message) {
                      alert("נא למלא שם ופנייה.");
                      return;
                    }

                    if (!email && !phone) {
                      alert("אנא מלא אימייל או מספר טלפון לפחות.");
                      return;
                    }

                    try {
                      const res = await fetch("https://shakef-backend-mail.onrender.com/contact", {
                        method: "POST",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ name, email, phone, message }),
                      });

                      if (res.ok) {
                        alert("ההודעה נשלחה בהצלחה!");
                        e.target.reset();
                      } else {
                        alert("אירעה שגיאה בשליחה.");
                      }
                    } catch (err) {
                      alert("שגיאת רשת: לא ניתן לשלוח את הטופס.");
                      console.error(err);
                    }
                  }}
                >
                  <input type="text" name="name" placeholder="שם מלא" className="w-full rounded px-4 py-2 text-black" required />
                  <input type="email" name="email" placeholder="אימייל (אופציונלי)" className="w-full rounded px-4 py-2 text-black" />
                  <input type="tel" name="phone" placeholder="מספר טלפון (אופציונלי)" className="w-full rounded px-4 py-2 text-black" />
                  <textarea name="message" placeholder="הודעה" rows="4" className="w-full rounded px-4 py-2 text-black" required />
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
                  <a href="tel:0552270388" className="hover:text-blue-400 transition">
                    📞 055-2270388
                  </a>
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
