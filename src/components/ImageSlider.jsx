import React, { useEffect, useMemo, useState } from "react";

export default function ImageSlider({ images = [], interval = 3000 }) {
  const safeImages = Array.isArray(images) ? images : [];
  const [current, setCurrent] = useState(0);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (!safeImages.length) return;
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % safeImages.length);
    }, interval);

    return () => window.clearInterval(id);
  }, [safeImages.length, interval, prefersReducedMotion]);

  useEffect(() => {
    if (current >= safeImages.length) setCurrent(0);
  }, [safeImages.length, current]);

  if (!safeImages.length) {
    return (
      <div className="w-full h-[420px] rounded bg-white/10 flex items-center justify-center text-white/80">
        תמונות יתווספו בקרוב
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded h-[420px] flex items-center justify-center">
      {safeImages.map((img, index) => {
        const src = typeof img === "string" ? img : img?.src;
        const alt = typeof img === "string" ? `תמונה ${index + 1}` : img?.alt || `תמונה ${index + 1}`;

        return (
          <img
            key={index}
            src={src}
            alt={alt}
            className={[
              "w-auto max-h-full object-contain mx-auto",
              prefersReducedMotion ? "" : "transition-opacity duration-[1000ms]",
              index === current ? "opacity-100" : "opacity-0 absolute",
            ].join(" ")}
          />
        );
      })}
    </div>
  );
}
