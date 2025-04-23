import React, { useEffect, useState } from "react";

export default function ImageSlider({ images, interval = 3000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className="relative w-full overflow-hidden rounded h-[420px] flex items-center justify-center">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`תמונה ${index + 1}`}
          className={`transition-opacity duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)] w-auto max-h-full object-contain mx-auto ${
            index === current ? "opacity-100" : "opacity-0 absolute"
          }`}
        />
      ))}
    </div>
  );
}
