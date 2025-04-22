import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GallerySection from "./GallerySection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

export default function HomePage() {
  const [section, setSection] = useState("home");
  const [visibleIndex, setVisibleIndex] = useState(0);
  const words = ["איכות", "מקצועיות", "אמינות"];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderSection = () => {
    switch (section) {
      case "gallery":
        return <motion.div key="gallery" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-black/30 backdrop-blur-sm p-6 rounded-md max-h-[80vh] overflow-y-auto"><GallerySection /></motion.div>;
      case "about":
        return <motion.div key="about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-black/30 backdrop-blur-sm p-6 rounded-md max-h-[80vh] overflow-y-auto"><AboutSection /></motion.div>;
      case "contact":
        return <motion.div key="contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-black/30 backdrop-blur-sm p-6 rounded-md max-h-[80vh] overflow-y-auto"><ContactSection /></motion.div>;
      default:
        return (
          <div className="text-center py-20">
            <h2 className="text-5xl font-bold mb-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[visibleIndex]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                >
                  {words[visibleIndex]}
                </motion.span>
              </AnimatePresence>
            </h2>
            <p className="text-lg max-w-xl mx-auto text-gray-200">
              שערים ● גדרות ● מעקות ● עבודות מתכת ייחודיות לפרויקטים פרטיים ועסקיים
            </p>
          </div>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero.jpg)' }}>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md shadow-md text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center p-4 gap-2">
          <div className="text-right">
            <h1 className="text-2xl md:text-3xl font-bold">שַׁקֵּף</h1>
            <p className="text-xs md:text-sm text-gray-300">החוויה שלכם - הסיפוק שלנו</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm md:text-base font-medium">
            <button onClick={() => setSection("home")} className="hover:text-blue-400">דף הבית</button>
            <button onClick={() => setSection("about")} className="hover:text-blue-400">אודותינו</button>
            <button onClick={() => setSection("gallery")} className="hover:text-blue-400">גלריה</button>
            <button onClick={() => setSection("contact")} className="hover:text-blue-400">צור קשר</button>
          </nav>
        </div>
      </header>

      {/* Content Area */}
      <div className="pt-32 px-4 max-w-7xl mx-auto z-10 relative text-white min-h-[60vh]">
        <AnimatePresence mode="wait">
          {renderSection()}
        </AnimatePresence>
      </div>
    </div>
  );
}
