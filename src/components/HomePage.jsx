import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const words = ["איכות", "מקצועיות", "אמינות"];
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/hero.jpg)' }}
    >
      {/* Responsive Floating Header */}
      <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-md shadow-md text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center p-4 gap-2">
          <div className="text-right">
            <h1 className="text-2xl md:text-3xl font-bold">שַׁקֵּף</h1>
            <p className="text-xs md:text-sm text-gray-300">החוויה שלכם - הסיפוק שלנו</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm md:text-base font-medium">
            <a href="#home" className="hover:text-blue-400">דף הבית</a>
            <a href="#about" className="hover:text-blue-400">אודותינו</a>
            <a href="#gallery" className="hover:text-blue-400">גלריה</a>
            <a href="#contact" className="hover:text-blue-400">צור קשר</a>
          </nav>
        </div>
      </header>

      {/* Animated Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-4xl sm:text-5xl md:text-6xl font-bold pt-32 text-center px-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
          {words.map((word, index) => (
            <motion.span
              key={index}
              animate={{ opacity: visibleIndex === index ? 1 : 0.15 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            >
              {word}
            </motion.span>
          ))}
        </div>
        <p className="text-base sm:text-lg mt-8 text-gray-200 font-medium max-w-xl">
          שערים ● גדרות ● מעקות ● עבודות מתכת ייחודיות לפרויקטים פרטיים ועסקיים
        </p>
      </div>
    </div>
  );
}
