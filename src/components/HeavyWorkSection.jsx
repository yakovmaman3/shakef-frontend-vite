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
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        עבודות מסגרות כבדה ותכנון מדויק
      </h2>

      <p className="text-gray-200 mb-6 leading-relaxed text-[1.05rem] tracking-tight font-light">
        שילוב בין עוצמה, הנדסה ודיוק.
        <br />

        אנו מבצעים קונסטרוקציות פלדה, מרפסות תלויות,
        חיזוקי מבנים, מדרגות מתכת, גלריות תעשייתיות
        ותשתיות ברזל לפי תוכנית.
        <br />

        בפרויקטים הדורשים תכנון מפורט ניתן לבצע תכנון
        ב־SolidWorks לפני הייצור, לצורך התאמת חלקי הפלדה
        והחיבורים לפרויקט.
        <br />

        ביצוע עבור לקוחות פרטיים, קבלנים, מהנדסים ויזמים —
        ברמת גימור גבוהה ובהתאם לתכנון ולדרישות הפרויקט.
      </p>

      <div className="rounded-lg overflow-hidden shadow-lg">
        <ImageSlider
          images={images}
          interval={2800}
        />
      </div>
    </section>
  );
}