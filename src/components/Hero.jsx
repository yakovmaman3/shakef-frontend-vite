import React from "react";

function Hero() {
  return (
    <section
      className="relative h-screen bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 text-center text-white max-w-2xl px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          מומחיות בברזל ועיצוב בהתאמה אישית
        </h2>
        <p className="text-lg md:text-xl text-gray-200">
          שערים ● גדרות ● מעקות ● עבודות מתכת ייחודיות לפרויקטים פרטיים ועסקיים
        </p>
      </div>
    </section>
  );
}

export default Hero;