// ImageSlider.jsx
import React, { useEffect, useState } from "react";

export default function ImageSlider({ images, interval = 2000 }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images, interval]);

  return (
    <div className="w-full h-64 md:h-96 overflow-hidden relative">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
