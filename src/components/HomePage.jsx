import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GallerySection from "./GallerySection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";

export default function HomePage() {
  const [section, setSection] = useState("home");
  const [visibleIndex, setVisibleIndex] = useState(0);
  const words = ["איכות", "מקצועיות", "אמינות"];
  const wrapperRef = useRef(null);
  const lastClickedRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleClickOutside = (e) => {
    if (
      section !== "home" &&
      wrapperRef.current &&
      !wrapperRef.current.contains(e.target) &&
      lastClickedRef.current !== e.target
    ) {
      setSection("home");
    }
  };

  const renderSection = () => {
    const wrapperClasses = "bg-black/30 backdrop-blur-sm p-6 rounded-md max-h-[80vh] overflow-y-auto text-white";
    switch (section) {
      case "gallery":
        return (
          <motion.div
            key="gallery"
            ref={wrapperRef}
            className="w-full max-h-[80vh] overflow-y-auto bg-black/30 backdrop-blur-sm p-6 rounded-md text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">גלריה</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1,2,3,4,5,6].map(id => (
                <div key={id} className="bg-white/10 rounded-lg p-4 text-center hover:bg-white/20 transition">
                  <img src="#" alt={`gallery ${id}`} className="w-full h-40 object-cover mb-2" />
                  <p>gallery {id}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case "about":
        return <motion.div key="about" ref={wrapperRef} className={wrapperClasses} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><AboutSection /></motion.div>;
      case "contact":
        return <motion.div key="contact" ref={wrapperRef} className={wrapperClasses} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><ContactSection /></motion.div>;
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
    <div
      className="relative min-h-screen bg-fixed bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/hero.jpg)' }}
      onClick={handleClickOutside}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md shadow-md text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center p-4 gap-2">
          <div className="text-right">
            <h1 className="text-2xl md:text-3xl font-bold">שַׁקֵּף</h1>
            <p className="text-xs md:text-sm text-gray-300">החוויה שלכם - הסיפוק שלנו</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm md:text-base font-medium">
            <button ref={lastClickedRef} onClick={(e) => { lastClickedRef.current = e.target; setSection("home"); }} className="hover:text-blue-400">דף הבית</button>
            <button ref={lastClickedRef} onClick={(e) => { lastClickedRef.current = e.target; setSection("about"); }} className="hover:text-blue-400">אודותינו</button>
            <button ref={lastClickedRef} onClick={(e) => { lastClickedRef.current = e.target; setSection("gallery"); }} className="hover:text-blue-400">גלריה</button>
            <button ref={lastClickedRef} onClick={(e) => { lastClickedRef.current = e.target; setSection("contact"); }} className="hover:text-blue-400">צור קשר</button>
          </nav>
        </div>
      </header>

      {/* Content Area */}
      <div className="pt-32 px-4 max-w-7xl mx-auto z-10 relative text-white min-h-[60vh]">
        <AnimatePresence mode="wait">
          {renderSection()}
        </AnimatePresence>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
        <a href="https://wa.me/972552270388" target="_blank" rel="noopener noreferrer">
          <div className="bg-green-500 rounded-full p-3 shadow-md hover:bg-green-600 transition">
            <span role="img" aria-label="WhatsApp" className="text-white text-xl">💬</span>
          </div>
        </a>
        <a href="tel:0552270388">
          <div className="bg-blue-500 rounded-full p-3 shadow-md hover:bg-blue-600 transition">
            <span role="img" aria-label="Call" className="text-white text-xl">📞</span>
          </div>
        </a>
      </div>
    </div>
  );
}
