import React, { useEffect, useMemo, useState } from "react";

export default function ImageSlider({ images = [], interval = 3000 }) {
  const safeImages = Array.isArray(images) ? images : [];
  const [current, setCurrent] = useState(0);
  const [failedSources, setFailedSources] = useState(() => new Set());

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const visibleImages = safeImages.filter((img) => {
    const src = typeof img === "string" ? img : img?.src;
    return src && !failedSources.has(src);
  });

  useEffect(() => {
    if (!visibleImages.length || prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % visibleImages.length);
    }, interval);

    return () => window.clearInterval(id);
  }, [visibleImages.length, interval, prefersReducedMotion]);

  useEffect(() => {
    if (current >= visibleImages.length) {
      setCurrent(0);
    }
  }, [visibleImages.length, current]);

  const goToPrevious = () => {
    if (!visibleImages.length) return;
    setCurrent((prev) => (prev - 1 + visibleImages.length) % visibleImages.length);
  };

  const goToNext = () => {
    if (!visibleImages.length) return;
    setCurrent((prev) => (prev + 1) % visibleImages.length);
  };

  const markAsFailed = (src) => {
    setFailedSources((prev) => {
      if (prev.has(src)) return prev;
      const next = new Set(prev);
      next.add(src);
      return next;
    });
  };

  if (!visibleImages.length) {
    return (
      <div className="w-full h-[360px] md:h-[480px] bg-neutral-800 flex items-center justify-center text-white/75">
        תמונות יתווספו בקרוב
      </div>
    );
  }

  return (
    <div className="relative w-full h-[360px] md:h-[480px] overflow-hidden bg-neutral-900 group">
      {visibleImages.map((img, index) => {
        const src = typeof img === "string" ? img : img?.src;
        const alt =
          typeof img === "string"
            ? `תמונה ${index + 1}`
            : img?.alt || `תמונה ${index + 1}`;

        return (
          <img
            key={src}
            src={src}
            alt={alt}
            onError={() => markAsFailed(src)}
            aria-hidden={index !== current}
            className={[
              "absolute inset-0 w-full h-full object-contain",
              prefersReducedMotion ? "" : "transition-opacity duration-700 ease-in-out",
              index === current ? "opacity-100" : "opacity-0 pointer-events-none",
            ].join(" ")}
          />
        );
      })}

      {visibleImages.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/45 hover:bg-black/65 text-white text-2xl flex items-center justify-center transition focus-visible:ring-2 focus-visible:ring-white"
            aria-label="תמונה קודמת"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/45 hover:bg-black/65 text-white text-2xl flex items-center justify-center transition focus-visible:ring-2 focus-visible:ring-white"
            aria-label="תמונה הבאה"
          >
            ›
          </button>

          <div
            className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 rounded-full bg-black/35 px-3 py-2"
            aria-label="בחירת תמונה"
          >
            {visibleImages.map((img, index) => {
              const src = typeof img === "string" ? img : img?.src;

              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    index === current ? "bg-white" : "bg-white/45 hover:bg-white/75"
                  }`}
                  aria-label={`מעבר לתמונה ${index + 1}`}
                  aria-current={index === current ? "true" : undefined}
                />
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
