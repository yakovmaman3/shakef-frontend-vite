import { useEffect, useRef } from "react";

export default function Modal({
  isOpen,
  onClose,
  children,
  ariaLabelledBy,
  ariaDescribedBy,
  offsetTop = 64   // גובה ה-Navbar
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement;
    dialogRef.current?.focus();

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      style={{
        top: offsetTop,
        height: `calc(100vh - ${offsetTop}px)`
      }}
    >
      <div
        className="modal-content scrollable"
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        tabIndex="-1"
        ref={dialogRef}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="סגור חלון"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}
