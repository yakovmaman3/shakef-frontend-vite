import React from "react";
import ImageSlider from "./ImageSlider";

export default function PremiumWorkSection() {
  const images = [
    {
      src: "/images/premium/1.png",
      alt: "עבודת מתכת בעיצוב אישי וברמת גימור גבוהה",
    },
    {
      src: "/images/premium/2.jpg",
      alt: "אלמנט מתכת מעוצב בהתאמה לחלל",
    },
    {
      src: "/images/premium/3.jpg",
      alt: "עבודת מתכת מדויקת לפי תכנון אדריכלי",
    },
    {
      src: "/images/premium/4.jpg",
      alt: "פרויקט מתכת בהתאמה אישית וברמת גימור גבוהה",
    },
    {
      src: "/images/premium/5.jpg",
      alt: "שער ועבודת מתכת מודרנית בהתאמה אישית",
    },
    {
      src: "/images/premium/6.jpg",
      alt: "פרויקט מתכת בעיצוב אישי",
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
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
        עבודות מתכת בעיצוב אישי וברמת גימור גבוהה
      </h2>

      <p className="text-gray-200 text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
        פרויקטים שבהם המתכת היא חלק מהעיצוב דורשים לא רק ביצוע נכון,
        אלא גם תשומת לב לפרופורציות, לחיבורים ולפרטים הקטנים.
        <br />
        <br />
        אנו מבצעים מעקות, שערים, ריהוט ואלמנטים אדריכליים ממתכת בהתאמה
        אישית, לפי תכנון קיים או תוך פיתוח פתרון שמתאים לחלל ולשפה העיצובית.
        <br />
        <br />
        המטרה היא להגיע לתוצאה נקייה, מדויקת ואיכותית שנראית נכון גם מקרוב.
      </p>

      <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10">
        <ImageSlider images={images} />
      </div>
    </section>
  );
}
