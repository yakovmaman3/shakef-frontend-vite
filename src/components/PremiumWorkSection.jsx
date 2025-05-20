import React from "react";
import ImageSlider from "./ImageSlider";

export default function PremiumWorkSection() {
  const images = [
    { src: "/images/premium/1.jpg", alt: "שער מתכת, ברזל ופלדה מעוצב בהתאמה אישית" },
    { src: "/images/premium/2.jpg", alt: "מעקה מתכת, ברזל ופלדה ייחודי לבית פרטי" },
    { src: "/images/premium/3.jpg", alt: "ריהוט ממתכת, ברזל ופלדה בסגנון מודרני" },
    { src: "/images/premium/4.jpg", alt: "מדרגות מתכת, ברזל ופלדה איכותיות לחלל מגורים" },
    { src: "/images/premium/5.jpg", alt: "שער מתכת, פלדה וברזל מודרני לבית יוקרתי" }
  ];

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">עבודות בעיצוב אישי וברמת גימור גבוהה</h2>

      <p className="text-gray-200 mb-6 leading-relaxed text-[1.05rem] tracking-tight font-light">
        עיצוב אישי, תשומת לב לפרטים הקטנים, שילוב בין יופי לחומר.
        <br />
        אנו יוצרים שערים מעוצבים, מעקות בהתאמה אישית, מדרגות וריהוט מתכתי ייחודי — תוך שילוב של פונקציונליות עם אסתטיקה גבוהה.
        <br />
        מתמחים בעבודות מתכת יוקרתיות לבתים פרטיים, משרדים, מסעדות, אולמות אירועים ומרחבים מעוצבים.
      </p>

      <div className="rounded-lg overflow-hidden shadow-lg">
        <ImageSlider images={images} interval={2000} />
      </div>
    </section>
  );
}