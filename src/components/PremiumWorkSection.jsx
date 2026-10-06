import React from "react";
import ImageSlider from "./ImageSlider";

export default function PremiumWorkSection() {
  const images = [
    {
      src: "/images/premium/1.png",
      alt: "מדרגות מתכת בעיצוב וביצוע בהתאמה אישית",
    },
    {
      src: "/images/premium/2.jpg",
      alt: "מדרגות מתכת מעוצבות לחלל מגורים",
    },
    {
      src: "/images/premium/3.jpg",
      alt: "עבודת מתכת מדויקת בעיצוב אדריכלי",
    },
    {
      src: "/images/premium/4.jpg",
      alt: "מדרגות מתכת ופלדה ברמת גימור גבוהה",
    },
    {
      src: "/images/premium/5.jpg",
      alt: "שער ועבודת מתכת מודרנית בהתאמה אישית",
    },
    {
      src: "/images/premium/6.jpg",
      alt: "פרויקט מתכת בהתאמה אישית",
    },
    {
      src: "/images/premium/7.jpg",
      alt: "עבודת מסגרות ומתכת ברמת גימור גבוהה",
    },
    {
      src: "/images/premium/8.jpg",
      alt: "עבודת מתכת מעוצבת לפי דרישות הלקוח",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            מדרגות ועבודות מתכת ברמת גימור גבוהה
          </h2>

          <p className="text-gray-200 text-lg leading-relaxed">
            אנו מבצעים מגוון רחב של עבודות מתכת בהתאמה אישית, עם דגש על
            תכנון מדויק, ביצוע מקצועי וגימור איכותי.
            <br />
            <br />
            אחד מתחומי ההתמחות המרכזיים שלנו הוא תכנון וביצוע מדרגות מתכת –
            מדרגות קורה מרכזית, מדרגות מרחפות, מדרגות עם סיבובים ופתרונות
            מיוחדים המותאמים למבנה ולעיצוב.
            <br />
            <br />
            בפרויקטים הדורשים תכנון מפורט ניתן לבצע תכנון ב־SolidWorks לפני
            הייצור, כדי להגיע לדיוק גבוה בחלקי הפלדה, בחיבורים ובגאומטריה של
            הפרויקט.
          </p>
        </div>

        <ImageSlider images={images} />
      </div>
    </section>
  );
}