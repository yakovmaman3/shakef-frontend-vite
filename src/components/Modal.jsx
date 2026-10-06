import React, { useEffect, useRef } from "react";

export default function Modal({
  isOpen,
  onClose,
  titleId,
  descriptionId,
  children,
  initialFocusSelector,
}) {
  const dialogRef = useRef(null);
  const lastActiveElementRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    lastActiveElementRef.current = document.activeElement;

    const dialogEl = dialogRef.current;
    if (!dialogEl) return;

    const focusableSelector =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

    const focusables = () =>
      Array.from(dialogEl.querySelectorAll(focusableSelector)).filter(
        (el) =>
          !el.hasAttribute("disabled") &&
          el.getAttribute("aria-hidden") !== "true"
      );

    const focusFirst = () => {
      if (initialFocusSelector) {
        const preferred = dialogEl.querySelector(initialFocusSelector);

        if (preferred && preferred.focus) {
          preferred.focus();
          return;
        }
      }

      const list = focusables();
      (list[0] || dialogEl).focus();
    };

    focusFirst();

    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const list = focusables();

      if (!list.length) {
        e.preventDefault();
        return;
      }

      const first = list[0];
      const last = list[list.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";

      const lastActive = lastActiveElementRef.current;

      if (lastActive && lastActive.focus) {
        lastActive.focus();
      }
    };
  }, [isOpen, onClose, initialFocusSelector]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/70 backdrop-blur-sm px-4 py-5 md:py-10"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="flex min-h-full items-start justify-center">
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          tabIndex={-1}
          className="w-full max-w-xl max-h-[calc(100dvh-2.5rem)] md:max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-xl bg-neutral-900/95 text-white shadow-2xl backdrop-blur-md border border-white/10 p-6 md:p-8 outline-none"
          onMouseDown={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </div>
  );
}