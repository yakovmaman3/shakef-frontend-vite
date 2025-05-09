import React, { useState, useEffect } from "react";
import HomePage from "./components/HomePage";

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [showPhone, setShowPhone] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) return;

    const handleScroll = () => {
      if (window.scrollY > 10 || activeSection === "contact") {
        document.body.classList.add("scrolled-mobile");
      } else {
        document.body.classList.remove("scrolled-mobile");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="min-h-screen">
      <HomePage
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        setShowPhone={setShowPhone}
      />

      {(activeSection || showPhone || showConfirmation || isSubmitting) && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-40 flex items-center justify-center"
          onClick={() => {
            setActiveSection(null);
            setShowPhone(false);
            setShowConfirmation(false);
            setIsSubmitting(false);
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
            {activeSection === "contact" && !isSubmitting && !showConfirmation && (
              <div>
                <h2 className="text-2xl font-bold mb-4">צור קשר</h2>
                <p className="mb-6">נשמח לשוחח איתכם! מלאו את הטופס ונחזור אליכם בהקדם.</p>
                <form
                  className="space-y-4"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);

                    const name = e.target.name.value;
                    const email = e.target.email.value;
                    const phone = e.target.phone.value;
                    const message = e.target.message.value;

                    if (!name || !phone || !message) {
                      alert("נא למלא שם, מספר טלפון ופנייה.");
                      setIsSubmitting(false);
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
                        e.target.reset();
                        setActiveSection(null);
                        setShowConfirmation(true);
                        setIsSubmitting(false);
                        setTimeout(() => {
                          setShowConfirmation(false);
                        }, 3456);
                      } else {
                        alert("אירעה שגיאה בשליחה.");
                        setIsSubmitting(false);
                      }
                    } catch (err) {
                      alert("שגיאת רשת: לא ניתן לשלוח את הטופס.");
                      console.error(err);
                      setIsSubmitting(false);
                    }
                  }}
                >
                  <input type="text" name="name" placeholder="שם מלא" className="w-full rounded px-4 py-2 text-black text-right" required />
                  <input type="email" name="email" placeholder="אימייל (אופציונלי)" className="w-full rounded px-4 py-2 text-black text-right" />
                  <input type="tel" name="phone" placeholder="מספר טלפון" className="w-full rounded px-4 py-2 text-black text-right" required />
                  <textarea name="message" placeholder="פנייה" rows="4" className="w-full rounded px-4 py-2 text-black text-right" required />
                  <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                    שלח
                  </button>
                </form>
              </div>
            )}
            {isSubmitting && (
              <div className="text-center space-y-4 animate-pulse">
                <h2 className="text-2xl font-bold">שולח את הפנייה...</h2>
                <p className="text-lg flex justify-center gap-1">
                  <span className="inline-block w-2 h-2 bg-white rounded-full animate-bounce"></span>
                  <span className="inline-block w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
                  <span className="inline-block w-2 h-2 bg-white rounded-full animate-bounce delay-300"></span>
                </p>
              </div>
            )}
            {showPhone && !isSubmitting && !showConfirmation && (
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">התקשרו אלינו</h2>
                <p className="text-lg">
                  <a href="tel:0552270388" className="hover:text-blue-400 transition">
                    📞 055-2270388
                  </a>
                </p>
              </div>
            )}
            {showConfirmation && (
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">הפנייה נשלחה!</h2>
                <p className="text-lg">נחזור אליכם בהקדם – תודה!</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
