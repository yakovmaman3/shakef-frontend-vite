import React, { useEffect, useMemo, useState } from "react";
import HomePage from "./components/HomePage";
import Modal from "./components/Modal";
import AccessibilityStatement from "./components/AccessibilityStatement";

function App() {
  const [activeSection, setActiveSection] = useState(null); // "about" | "contact" | "accessibility" | null
  const [showPhone, setShowPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [formError, setFormError] = useState("");

  const isMobile = useMemo(() => /Android|iPhone|iPad|iPod/i.test(navigator.userAgent), []);

  // Mobile navbar behavior (existing UX)
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      if (window.scrollY > 10 || activeSection === "contact") {
        document.body.classList.add("scrolled-mobile");
      } else {
        document.body.classList.remove("scrolled-mobile");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, isMobile]);

  const closeAll = () => {
    setActiveSection(null);
    setShowPhone(false);
    setIsSubmitting(false);
    setShowConfirmation(false);
    setFormError("");
  };

  const onPhoneClick = () => {
    if (isMobile) {
      window.location.href = "tel:+972552270388";
      return;
    }
    setShowPhone(true);
  };

  const onSubmitContact = async (e) => {
    e.preventDefault();
    setFormError("");
    setIsSubmitting(true);

    const form = e.currentTarget;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!name || !message || (!email && !phone)) {
      setFormError("נא למלא שם, הודעה, ולפחות אמצעי קשר אחד (טלפון או אימייל).");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("https://shakef-backend-mail.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (!res.ok) {
        setFormError("אירעה שגיאה בשליחה. נסו שוב או פנו אלינו בטלפון/וואטסאפ.");
        setIsSubmitting(false);
        return;
      }

      form.reset();
      setActiveSection(null);
      setIsSubmitting(false);
      setShowConfirmation(true);
      window.setTimeout(() => setShowConfirmation(false), 3500);
    } catch (err) {
      console.error(err);
      setFormError("שגיאת רשת: לא ניתן לשלוח את הטופס כעת. נסו שוב מאוחר יותר.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <HomePage setActiveSection={setActiveSection} onPhoneClick={onPhoneClick} />

      {/* About / Contact / Accessibility */}
      <Modal
        isOpen={activeSection === "about" || activeSection === "contact" || activeSection === "accessibility"}
        onClose={closeAll}
        titleId="modal-title"
        descriptionId="modal-desc"
        initialFocusSelector="button[data-modal-close]"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="modal-title" className="text-2xl font-bold mb-2">
              {activeSection === "about" && "אודותינו"}
              {activeSection === "contact" && "צור קשר"}
              {activeSection === "accessibility" && "נגישות"}
            </h2>
            <p id="modal-desc" className="text-base opacity-90">
              {activeSection === "about" && "מי אנחנו ומה אנחנו עושים."}
              {activeSection === "contact" && "שלחו פנייה ונחזור אליכם בהקדם."}
              {activeSection === "accessibility" && "הצהרת נגישות ודרכי יצירת קשר בנושא."}
            </p>
          </div>

          <button
            type="button"
            data-modal-close
            onClick={closeAll}
            className="shrink-0 rounded px-3 py-2 bg-white/10 hover:bg-white/20 transition focus-visible:ring-2 focus-visible:ring-white/80"
            aria-label="סגירת חלון"
          >
            ✕
          </button>
        </div>

        <div className="mt-6">
          {activeSection === "about" && (
            <div className="space-y-4 leading-relaxed">
              <p className="text-lg">
                שַׁקֵּף – מסגרות בהתאמה אישית. אנו מתמחים בעבודות מתכת קלות וכבדות – החל ממעקות, שערים,
                ריהוט וברזל דקורטיבי, ועד פרויקטים כבדים כגון מרפסות, קונסטרוקציות, שלדי מבנים ומערכות מיוחדות.
              </p>
              <p className="text-base">
                📍 אזור פעילות: השרון, המרכז והשפלה <br />
                🕒 ימים א׳–ה׳, 7:00–17:00
              </p>
              <p className="text-base">
                אימייל: <a className="underline" href="mailto:yakovmaman3@gmail.com">yakovmaman3@gmail.com</a> <br />
                טלפון: <a className="underline" href="tel:+972552270388">055-227-0388</a>
              </p>
            </div>
          )}

          {activeSection === "contact" && (
            <div>
              <form className="space-y-4" onSubmit={onSubmitContact} noValidate>
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">שם מלא *</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full rounded px-4 py-2 text-black text-right"
                    autoComplete="name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">אימייל</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded px-4 py-2 text-black text-right"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-1 font-medium">טלפון</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full rounded px-4 py-2 text-black text-right"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">הודעה *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full rounded px-4 py-2 text-black text-right"
                    required
                  />
                </div>

                {formError && (
                  <p className="text-sm bg-red-500/20 border border-red-500/40 rounded p-3" role="alert">
                    {formError}
                  </p>
                )}

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition focus-visible:ring-2 focus-visible:ring-white/80 disabled:opacity-60"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "שולח..." : "שלח"}
                  </button>

                  <p className="text-sm opacity-80" aria-live="polite">
                    {isSubmitting ? "שולח את הפנייה..." : ""}
                  </p>
                </div>

                <p className="text-xs opacity-80">
                  * חובה. יש למלא לפחות אמצעי קשר אחד (טלפון או אימייל).
                </p>
              </form>
            </div>
          )}

          {activeSection === "accessibility" && <AccessibilityStatement />}
        </div>
      </Modal>

      {/* Phone modal (desktop) */}
      <Modal
        isOpen={showPhone}
        onClose={closeAll}
        titleId="phone-title"
        descriptionId="phone-desc"
        initialFocusSelector='a[href^="tel:"]'
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="phone-title" className="text-2xl font-bold mb-2">טלפון</h2>
            <p id="phone-desc" className="text-base opacity-90">
              לחצו כדי לחייג.
            </p>
          </div>

          <button
            type="button"
            onClick={closeAll}
            className="shrink-0 rounded px-3 py-2 bg-white/10 hover:bg-white/20 transition focus-visible:ring-2 focus-visible:ring-white/80"
            aria-label="סגירת חלון"
          >
            ✕
          </button>
        </div>

        <div className="mt-6 space-y-3">
          <a
            href="tel:+972552270388"
            className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 transition rounded px-6 py-3 font-semibold focus-visible:ring-2 focus-visible:ring-white/80"
          >
            055-227-0388
          </a>

          <a
            href="https://wa.me/972552270388"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center w-full bg-green-500 hover:bg-green-600 transition rounded px-6 py-3 font-semibold focus-visible:ring-2 focus-visible:ring-white/80"
          >
            וואטסאפ
          </a>
        </div>
      </Modal>

      {/* Confirmation toast-like modal */}
      <Modal
        isOpen={showConfirmation}
        onClose={() => setShowConfirmation(false)}
        titleId="confirmation-title"
        descriptionId="confirmation-desc"
        initialFocusSelector='button[data-modal-close]'
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="confirmation-title" className="text-2xl font-bold mb-2">הפנייה נשלחה!</h2>
            <p id="confirmation-desc" className="text-base opacity-90">נחזור אליכם בהקדם – תודה!</p>
          </div>
          <button
            type="button"
            data-modal-close
            onClick={() => setShowConfirmation(false)}
            className="shrink-0 rounded px-3 py-2 bg-white/10 hover:bg-white/20 transition focus-visible:ring-2 focus-visible:ring-white/80"
            aria-label="סגירת חלון"
          >
            ✕
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
