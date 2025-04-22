import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white text-gray-800 py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">צור קשר</h2>
        <p className="text-gray-600 mb-6">נשמח לשוחח איתכם! מלאו את הטופס ונחזור אליכם בהקדם.</p>
        <form className="space-y-4">
          <input type="text" placeholder="שם מלא" className="w-full border border-gray-300 rounded px-4 py-2" />
          <input type="email" placeholder="אימייל" className="w-full border border-gray-300 rounded px-4 py-2" />
          <textarea placeholder="הודעה" rows="4" className="w-full border border-gray-300 rounded px-4 py-2" />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            שלח
          </button>
        </form>
      </div>
    </section>
  );
}
