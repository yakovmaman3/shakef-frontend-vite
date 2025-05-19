import React from "react";

export default function IntroSection({ setShowPhone }) {
  return (
    <section className="text-center px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">שַׁקֵּף – מסגרות בהתאמה אישית</h2>
      <p className="text-lg text-gray-200 leading-relaxed mb-8">
        אנו מתמחים בעבודות מתכת קלות וכבדות — החל ממעקות, שערים, ריהוט וברזל מעוצב ועד לפרויקטים כבדים כגון מרפסות, קונסטרוקציות, שלדי מבנים ומערכות מיוחדות.
        <br />
        שירות וביצוע בליווי הנדסי ואדריכלי, כולל ייצור תכניות לביצוע.
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <button
          onClick={() => setShowPhone(true)}
          className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full font-semibold shadow"
        >
          📞 התקשרו אלינו
        </button>
        <a
          href="https://wa.me/972552270388"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 rounded-full font-semibold shadow"
        >
          💬 שלחו וואטסאפ
        </a>
      </div>
    </section>
  );
}

