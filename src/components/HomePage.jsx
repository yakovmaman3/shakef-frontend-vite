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
      {/* Transparent Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm text-white px-6 py-4 flex items-center justify-between">
        <div className="text-right leading-tight">
          <h1 className="text-3xl font-bold">שַׁקֵּף</h1>
          <p className="text-sm text-gray-300 mt-1">החוויה שלכם - הסיפוק שלנו</p>
        </div>
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-blue-400 transition">דף הבית</a>
          <a href="#about" className="hover:text-blue-400 transition">אודותינו</a>
          <a href="#gallery" className="hover:text-blue-400 transition">גלריה</a>
          <a href="#contact" className="hover:text-blue-400 transition">צור קשר</a>
        </nav>
      </header>

      {/* Animated Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-6xl font-bold pt-28">
        <div className="flex gap-6">
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
        <p className="text-lg mt-8 text-gray-200 font-medium text-center px-4">
          שערים ● גדרות ● מעקות ● עבודות מתכת ייחודיות לפרויקטים פרטיים ועסקיים
        </p>
      </div>
    </div>
  );
}
