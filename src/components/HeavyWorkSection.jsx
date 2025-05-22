import React from "react";
import ImageSlider from "./ImageSlider";

export default function HeavyWorkSection() {
  const images = [
    { src: "/public/images/heavy/1.jpg", alt: "קונסטרוקציית מתכת, פלדה וברזל למבנה תעשייתי" },
    { src: "/public/images/heavy/2.jpg", alt: "גלריית מתכת, פלדה וברזל לחיזוק מבנה קיים" },
    { src: "/public/images/heavy/3.jpg", alt: "מרפסת תלויה מתכת, פלדה וברזל לפי תכנון אדריכלי" },
    { src: "/public/images/heavy/4.jpg", alt: "חיזוק מבנה עם שלד מתכת, פלדה וברזל מותאם אישית" },
    { src: "/public/images/heavy/5.jpg", alt: "גלריה תעשייתית ממתכת, פלדה וברזל לפרויקטים כבדים" }
  ];

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">עבודות מסגרות כבדה</h2>

      <p className="text-gray-200 mb-6 leading-relaxed text-[1.05rem] tracking-tight font-light">
        שילוב בין עוצמה, הנדסה ודיוק.
        <br />
        אנו מתמחים בביצוע פרויקטים של קונסטרוקציות פלדה, מרפסות תלויות, חיזוקי מבנים, מדרגות מתכת, גלריות תעשייתיות ותשתיות ברזל לפי תוכנית.
        <br />
        ביצוע עבודות מתכת כבדה עבור קבלנים, מהנדסים ויזמים — ברמת גימור גבוהה ועמידה מלאה בדרישות התקן.
      </p>

      <div className="rounded-lg overflow-hidden shadow-lg">
        <ImageSlider images={images} interval={2000} />
      </div>
    </section>
  );
}
