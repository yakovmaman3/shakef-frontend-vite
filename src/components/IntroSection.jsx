import React from "react";

export default function IntroSection({ setShowPhone }) {
  return (
    <section className="text-center px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
        שַׁקֵּף – עבודות מתכת בתכנון וביצוע בהתאמה אישית
      </h2>

      <p className="text-lg text-gray-200 leading-relaxed mb-8">
        אנו מתמחים במגוון רחב של עבודות מתכת – מעבודות מסגרות
        מדויקות ומעוצבות ועד לפרויקטים מורכבים של קונסטרוקציות פלדה,
        גלריות, מרפסות, חיזוקי מבנים, שערים, מעקות ופתרונות מתכת
        מיוחדים בהתאמה אישית.
        <br />
        <br />

        אחד מתחומי ההתמחות המרכזיים שלנו הוא{" "}
        <strong className="text-white">תכנון וביצוע מדרגות מתכת</strong>
        {" "}– מדרגות קורה מרכזית, מדרגות מרחפות, מדרגות עם סיבובים, בשילוב מדרכי עץ ושיש.
        ופתרונות מיוחדים המותאמים למידות המבנה, לעיצוב ולחיפוי הנבחר.
        <br />
        <br />

        בפרויקטים הדורשים תכנון מדויק אנו עובדים ב־
        <strong className="text-white">SolidWorks</strong>
        {" "}לתכנון המבנה, הגאומטריה, חלקי הפלדה והחיבורים לפני הייצור,
        ומלווים את הפרויקט משלב המדידה והתכנון ועד לייצור ולהתקנה בשטח.
        <br />
        <br />

        אנו עובדים עם לקוחות פרטיים, אדריכלים, מהנדסים וקבלנים
        באזור השרון, המרכז והשפלה, תוך הקפדה על מקצועיות, דיוק,
        איכות ביצוע ורמת גימור גבוהה.
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