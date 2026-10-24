import React from "react";
import ImageSlider from "./ImageSlider";

export default function HeavyWorkSection() {
  const images = [
    {
      src: "/images/heavy/1.jpg",
      alt: "קונסטרוקציית מתכת, פלדה וברזל למבנה תעשייתי",
    },
    {
      src: "/images/heavy/2.jpg",
      alt: "גלריית מתכת, פלדה וברזל לחיזוק מבנה קיים",
    },
    {
      src: "/images/heavy/3.jpg",
      alt: "מרפסת תלויה מתכת, פלדה וברזל לפי תכנון אדריכלי",
    },
    {
      src: "/images/heavy/4.jpg",
      alt: "חיזוק מבנה עם שלד מתכת, פלדה וברזל מותאם אישית",
    },
    {
      src: "/images/heavy/5.jpg",
      alt: "גלריה תעשייתית ממתכת, פלדה וברזל לפרויקטים כבדים",
    },
  ];

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">
        מסגרות כבדה וקונסטרוקציות פלדה
      </h2>

      <p className="text-gray-200 mb-8 leading-relaxed text-lg max-w-4xl mx-auto">
        ביצוע קונסטרוקציות פלדה, גלריות, מרפסות, חיזוקי מבנים, שלדים
        ותשתיות מתכת בהתאם לתוכניות ולדרישות הפרויקט.
        <br />
        <br />
        אנו שמים דגש על התאמה מדויקת לתנאי השטח, פרטי חיבור ועיגון,
        סדר ייצור נכון וביצוע מקצועי משלב התכנון ועד ההתקנה.
        <br />
        <br />
        עבודה עבור קבלנים, מהנדסים, יזמים ולקוחות פרטיים בפרויקטים
        הדורשים אחריות, תיאום ורמת ביצוע גבוהה.
      </p>

      <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
        <ImageSlider images={images} interval={2800} />
      </div>
    </section>
  );
}
