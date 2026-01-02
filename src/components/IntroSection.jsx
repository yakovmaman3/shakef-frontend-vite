import React from "react";

export default function IntroSection({ setShowPhone }) {
  return (
    <section className="text-center px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">שַׁקֵּף – מסגרות בהתאמה אישית</h2>
      <p className="text-lg text-gray-200 leading-relaxed mb-8">
        שַׁקֵּף מתמחה בביצוע כל סוגי עבודות המתכת – מסגרות קלה וכבדה – כולל שערים חשמליים, מעקות בהתאמה אישית, ריהוט ממתכת, גלריות, חיזוקים וקונסטרוקציות פלדה.
        <br />
        אנו פועלים באזור השרון, המרכז והשפלה, בשיתוף פעולה עם אדריכלים, מהנדסים, קבלני ביצוע ולקוחות פרטיים.
        <br />
        העבודות מבוצעות לפי תכניות אדריכליות ומפרטים הנדסיים, תוך הקפדה על רמת גימור גבוהה, ביצוע מדויק והתאמה מלאה לשטח ולדרישות הלקוח.
        <br />
        שַׁקֵּף מספקת פתרונות מתכת לפרויקטים כגון גשרים, מרפסות, חיזוקי מבנים, גלריות, שערים מעוצבים, מדרגות מתכת ומעקות בהתאמה ייחודית — עם ליווי מלא משלב התכנון ועד לגמר הביצוע.
      </p>

      <div className="flex justify-center gap-6 flex-wrap">
        <button
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

