// HeroSection.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["איכות", "מקצועיות", "אמינות"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <AnimatePresence mode="wait">
        <motion.h1
          key={words[index]}
          className="text-5xl md:text-6xl font-bold text-white drop-shadow-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 1 }}
        >
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
