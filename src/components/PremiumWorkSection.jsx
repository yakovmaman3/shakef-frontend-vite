// PremiumWorkSection.jsx
import React from "react";
import ImageSlider from "./ImageSlider";

export default function PremiumWorkSection() {
  const images = [
    "/images/premium/1.jpg",
    "/images/premium/2.jpg",
    "/images/premium/3.jpg",
    "/images/premium/4.jpg",
  ];

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">עבודות בעיצוב אישי וברמת גימור גבוהה</h2>
      <p className="text-gray-200 mb-6 leading-relaxed">
        עיצוב אישי, תשומת לב לפרטים קטנים, שילוב בין יופי לחומר. עבודות מתכת שמתאימות לבתים פרטיים, עסקים, מוסדות ופרויקטים יוקרתיים.
      </p>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <ImageSlider images={images} interval={2000} />
      </div>
    </section>
  );
}
