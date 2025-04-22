import React from "react";

export default function GallerySection() {
  const images = [
    "/images/demo1.jpg",
    "/images/demo2.jpg",
    "/images/demo3.jpg",
    "/images/demo4.jpg",
    "/images/demo5.jpg",
    "/images/demo6.jpg"
  ];

  return (
    <section id="gallery" className="bg-white text-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">גלריה</h2>

        {images.length ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`gallery ${index + 1}`}
                className="rounded shadow hover:scale-105 transition duration-300 object-cover w-full h-48"
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-lg mt-4">תוכן הגלריה בתהליך בנייה...</p>
        )}
      </div>
    </section>
  );
}
