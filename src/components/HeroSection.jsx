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
    <div
      className="h-[85vh] flex flex-col justify-center items-center text-center px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero_op1.webp')" }}
    >
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
