import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="text-gray-200">
      <div className="max-w-2xl mx-auto text-center py-8 px-4">
        <h2 className="text-3xl font-bold mb-4">צור קשר</h2>
        <p className="mb-6">נשמח לשוחח איתכם! מלאו את הטופס ונחזור אליכם בהקדם.</p>
        <form className="space-y-4">
          <input type="text" placeholder="שם מלא" className="w-full rounded px-4 py-2 text-black" />
          <input type="email" placeholder="אימייל" className="w-full rounded px-4 py-2 text-black" />
          <textarea placeholder="הודעה" rows="4" className="w-full rounded px-4 py-2 text-black" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            שלח
          </button>
        </form>
      </div>
    </section>
  );
}
