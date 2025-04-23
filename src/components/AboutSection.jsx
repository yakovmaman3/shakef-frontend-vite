import React from "react";

export default function AboutSection() {
  return (
    <section className="text-center px-6 py-16 max-w-4xl mx-auto leading-relaxed">
      <h2 className="text-3xl font-bold mb-6 text-white">אודות שקף</h2>

      <p className="text-md text-gray-400">
        🕒 שעות פעילות: ימים א׳–ה׳, 7:00–17:00<br />
        📍 <span
          className="underline decoration-dotted cursor-help"
          title="השרון, המרכז והשפלה"
        >
          איזור פעילות
        </span>
      </p>
    </section>
  );
}
