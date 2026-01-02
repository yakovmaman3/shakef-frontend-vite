import { useEffect, useState } from "react";

export default function Navbar({
  openAbout,
  openContact,
  openAccessibility
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // כופה הצטמצמות רק במובייל
  const forceCollapseNavbarMobileOnly = () => {
    if (window.innerWidth <= 768) {
      window.scrollTo({ top: 1, behavior: "instant" });
    }
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        <div className="logo">שקף</div>

        <nav className="nav-actions">
          <button
            onClick={() => {
              forceCollapseNavbarMobileOnly();
              openAbout();
            }}
          >
            אודות
          </button>

          <button onClick={openContact}>
            צור קשר
          </button>

          <button
            onClick={() => {
              forceCollapseNavbarMobileOnly();
              openAccessibility();
            }}
          >
            נגישות
          </button>
        </nav>
      </div>
    </header>
  );
}
