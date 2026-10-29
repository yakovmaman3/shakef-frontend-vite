import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";

function ChevronLeft() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18 9 12l6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="w-7 h-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export default function ImageSlider({ images = [], interval = 3000 }) {
  const sliderRef = useRef(null);
  const safeImages = Array.isArray(images) ? images : [];

  const [current, setCurrent] = useState(0);
  const [failedSources, setFailedSources] = useState(() => new Set());
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const visibleImages = safeImages.filter((img) => {
    const src = typeof img === "string" ? img : img?.src;
    return src && !failedSources.has(src);
  });

  // Start the automatic slider only once the slider reaches the viewport.
  // After it has been seen once, autoplay stays enabled even if the user scrolls past it.
  useEffect(() => {
    if (hasEnteredViewport || !sliderRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEnteredViewport(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(sliderRef.current);

    return () => observer.disconnect();
  }, [hasEnteredViewport]);

  // Autoplay starts only after the first viewport entry and pauses while the lightbox is open.
  useEffect(() => {
    if (
      !hasEnteredViewport ||
      isLightboxOpen ||
      visibleImages.length < 2 ||
      prefersReducedMotion
    ) {
      return;
    }

    const id = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % visibleImages.length);
    }, interval);

    return () => window.clearInterval(id);
  }, [
    hasEnteredViewport,
    isLightboxOpen,
    visibleImages.length,
    interval,
    prefersReducedMotion,
  ]);

  useEffect(() => {
    if (current >= visibleImages.length) {
      setCurrent(0);
    }
  }, [visibleImages.length, current]);

  // Prevent the page behind the gallery from scrolling while the large viewer is open.
  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isLightboxOpen]);

  const goToPrevious = () => {
    if (!visibleImages.length) return;
    setCurrent((prev) => (prev - 1 + visibleImages.length) % visibleImages.length);
  };

  const goToNext = () => {
    if (!visibleImages.length) return;
    setCurrent((prev) => (prev + 1) % visibleImages.length);
  };

  // Keyboard navigation is active only inside the large viewer.
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (event.key === "ArrowLeft") {
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, visibleImages.length]);

  const openLightbox = (targetIndex = current) => {
    if (!visibleImages.length) return;
    setCurrent(targetIndex);
    setIsLightboxOpen(true);
  };

  const openPreviousInLightbox = () => {
    if (!visibleImages.length) return;
    const previousIndex =
      (current - 1 + visibleImages.length) % visibleImages.length;
    openLightbox(previousIndex);
  };

  const openNextInLightbox = () => {
    if (!visibleImages.length) return;
    const nextIndex = (current + 1) % visibleImages.length;
    openLightbox(nextIndex);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
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
      <div
        ref={sliderRef}
        className="w-full h-[360px] md:h-[480px] bg-[#4F4F4F] flex items-center justify-center text-white/75"
      >
        תמונות יתווספו בקרוב
      </div>
    );
  }

  const currentImage = visibleImages[current];
  const currentSrc =
    typeof currentImage === "string" ? currentImage : currentImage?.src;
  const currentAlt =
    typeof currentImage === "string"
      ? `תמונה ${current + 1}`
      : currentImage?.alt || `תמונה ${current + 1}`;

  const lightbox =
    isLightboxOpen && typeof document !== "undefined"
      ? createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="גלריית תמונות"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                closeLightbox();
              }
            }}
          >
            <div className="relative w-full h-full max-w-[1500px] max-h-[94vh] flex items-center justify-center">
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-1 right-1 sm:top-2 sm:right-2 z-30 w-11 h-11 rounded-full bg-black/55 hover:bg-black/75 text-white flex items-center justify-center transition focus-visible:ring-2 focus-visible:ring-white"
                aria-label="סגירת גלריה"
              >
                <CloseIcon />
              </button>

              <img
                src={currentSrc}
                alt={currentAlt}
                onError={() => markAsFailed(currentSrc)}
                className="max-w-full max-h-[88vh] w-auto h-auto object-contain select-none"
                draggable="false"
              />

              {visibleImages.length > 1 && (
                <>
                  <button
                    type="button"
                    dir="ltr"
                    onClick={goToPrevious}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/55 hover:bg-black/75 text-white flex items-center justify-center transition focus-visible:ring-2 focus-visible:ring-white"
                    aria-label="תמונה קודמת"
                  >
                    <ChevronLeft />
                  </button>

                  <button
                    type="button"
                    dir="ltr"
                    onClick={goToNext}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/55 hover:bg-black/75 text-white flex items-center justify-center transition focus-visible:ring-2 focus-visible:ring-white"
                    aria-label="תמונה הבאה"
                  >
                    <ChevronRight />
                  </button>

                  <div
                    className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 z-30 flex gap-2 rounded-full bg-black/55 px-3 py-2"
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
                            index === current
                              ? "bg-white"
                              : "bg-white/45 hover:bg-white/80"
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
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <div
        ref={sliderRef}
        className="relative w-full h-[360px] md:h-[480px] overflow-hidden bg-[#4F4F4F] group"
      >
        {visibleImages.map((img, index) => {
          const src = typeof img === "string" ? img : img?.src;
          const alt =
            typeof img === "string"
              ? `תמונה ${index + 1}`
              : img?.alt || `תמונה ${index + 1}`;

          return (
            <button
              key={src}
              type="button"
              onClick={() => openLightbox(index)}
              tabIndex={index === current ? 0 : -1}
              aria-label={`פתיחת תמונה ${index + 1} בגלריה`}
              className={[
                "absolute inset-0 w-full h-full flex items-center justify-center bg-transparent",
                prefersReducedMotion
                  ? ""
                  : "transition-opacity duration-700 ease-in-out",
                index === current ? "opacity-100" : "opacity-0 pointer-events-none",
              ].join(" ")}
            >
              <img
                src={src}
                alt={alt}
                onError={() => markAsFailed(src)}
                className="w-full h-full object-contain select-none"
                draggable="false"
              />
            </button>
          );
        })}

        {visibleImages.length > 1 && (
          <>
            <button
              type="button"
              dir="ltr"
              onClick={openPreviousInLightbox}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/45 hover:bg-black/65 text-white flex items-center justify-center transition focus-visible:ring-2 focus-visible:ring-white"
              aria-label="פתיחת גלריה בתמונה הקודמת"
            >
              <ChevronLeft />
            </button>

            <button
              type="button"
              dir="ltr"
              onClick={openNextInLightbox}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/45 hover:bg-black/65 text-white flex items-center justify-center transition focus-visible:ring-2 focus-visible:ring-white"
              aria-label="פתיחת גלריה בתמונה הבאה"
            >
              <ChevronRight />
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
                    onClick={() => openLightbox(index)}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      index === current
                        ? "bg-white"
                        : "bg-white/45 hover:bg-white/75"
                    }`}
                    aria-label={`פתיחת תמונה ${index + 1} בגלריה`}
                    aria-current={index === current ? "true" : undefined}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>

      {lightbox}
    </>
  );
}
