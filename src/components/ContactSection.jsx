import React from "react";

export default function ContactSection() {
  const handleSubmit = async (e) => {
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
  };

  return (
    <section id="contact" className="text-gray-200">
      <div className="max-w-2xl mx-auto text-center py-8 px-4">
        <h2 className="text-3xl font-bold mb-4">צור קשר</h2>
        <p className="mb-6">נשמח לשוחח איתכם! מלאו את הטופס ונחזור אליכם בהקדם.</p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="שם מלא" className="w-full rounded px-4 py-2 text-black" required />
          <input type="email" name="email" placeholder="אימייל (אופציונלי)" className="w-full rounded px-4 py-2 text-black" />
          <input type="tel" name="phone" placeholder="מספר טלפון (אופציונלי)" className="w-full rounded px-4 py-2 text-black" />
          <textarea name="message" placeholder="הודעה" rows="4" className="w-full rounded px-4 py-2 text-black" required />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            שלח
          </button>
        </form>
      </div>
    </section>
  );
}
