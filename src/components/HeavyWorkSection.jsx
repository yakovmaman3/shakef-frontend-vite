import React from "react";
import ImageSlider from "./ImageSlider";

export default function HeavyWorkSection() {
  const images = [
    "/images/heavy/1.jpg",
    "/images/heavy/2.jpg",
    "/images/heavy/3.jpg",
    "/images/heavy/4.jpg",
    "/images/heavy/5.jpg"
  ];

  return (
    <section className="px-6 py-16 max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">עבודות מסגרות כבדה</h2>
      <p className="text-gray-200 mb-6 leading-relaxed text-[1.05rem] tracking-tight font-light">
    שילוב בין עוצמה, הנדסה ודיוק.
    <br />
    אנו מתמחים בפרויקטים של קונסטרוקציות, מרפסות, מדרגות, תשתיות פלדה וביצוע פרויקטים גדולים ומורכבים.
      </p>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <ImageSlider images={images} interval={2000} />
      </div>
    </section>
  );
}
