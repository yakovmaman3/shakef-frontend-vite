import React from "react";
import ImageSlider from "./ImageSlider";

export default function StairsSection() {
  const images = [
    {
      src: "/images/stairs/1.jpg",
      alt: "מדרגות מתכת בתכנון וביצוע בהתאמה אישית",
    },
    {
      src: "/images/stairs/2.jpg",
      alt: "מדרגות פלדה עם חיפוי וגמר בהתאמה לחלל",
    },
    {
      src: "/images/stairs/3.jpg",
      alt: "מדרגות קורה מרכזית ממתכת בעיצוב מודרני",
    },
    {
      src: "/images/stairs/4.jpg",
      alt: "מדרגות מתכת עם סיבוב ופרטי חיבור מדויקים",
    },
    {
      src: "/images/stairs/5.jpg",
      alt: "גרם מדרגות מתכת ברמת גימור גבוהה",
    },
  ];

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
        מדרגות מתכת בתכנון וביצוע בהתאמה אישית
      </h2>

      <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
        מדרגות הן שילוב בין קונסטרוקציה, נוחות ועיצוב. כל גרם מתוכנן לפי
        מידות המבנה, תנאי השטח, סוג החיפוי והשפה האדריכלית של החלל.
        <br />
        <br />
        אנו מבצעים מדרגות קורה מרכזית, מדרגות מרחפות, מהלכים ישרים,
        מדרגות עם סיבובים ופתרונות מיוחדים, בשילוב עץ, אבן, זכוכית ומעקות
        בהתאם לתכנון.
        <br />
        <br />
        התהליך כולל מדידה, תכנון, ייצור והתקנה, עם דגש על דיוק, חיבורים
        נקיים ורמת גימור גבוהה.
      </p>

      <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
        <ImageSlider images={images} interval={3200} />
      </div>
    </section>
  );
}
