import React from "react";

export default function IntroSection({ setShowPhone }) {
  return (
    <section className="text-center px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        שַׁקֵּף – עבודות מתכת בתכנון וביצוע בהתאמה אישית
      </h2>

      <p className="text-lg text-gray-200 leading-relaxed mb-8">
        אנו מבצעים עבודות מתכת לפרויקטים פרטיים, מסחריים והנדסיים –
        קונסטרוקציות פלדה, גלריות, מרפסות, מדרגות, מעקות, שערים ואלמנטים
        מיוחדים בהתאמה אישית.
        <br />
        <br />

        העבודה מתחילה בהבנת הצורך ותנאי השטח, ממשיכה למדידה, תכנון וייצור,
        ומסתיימת בהתקנה ובגימור מוקפד. בפרויקטים מורכבים אנו עובדים לפי
        תוכניות אדריכל ומהנדס ומבצעים תכנון מפורט בהתאם לצורך.
        <br />
        <br />

        אנו עובדים עם לקוחות פרטיים, אדריכלים, מהנדסים, קבלנים ויזמים
        באזור השרון, המרכז והשפלה, תוך הקפדה על מקצועיות, דיוק, אמינות
        ואיכות ביצוע.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <button
          type="button"
          onClick={() => setShowPhone()}
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
