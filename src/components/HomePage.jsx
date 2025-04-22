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
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex justify-end p-4 space-x-6 space-x-reverse text-white text-xl">
        <a href="#" className="hover:underline">דף הבית</a>
        <a href="#about" className="hover:underline">אודותינו</a>
        <a href="#gallery" className="hover:underline">גלריה</a>
        <a href="#contact" className="hover:underline">צור קשר</a>
      </nav>

      {/* Animated Text */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white text-6xl font-bold">
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
      </div>
    </div>
  );
}
