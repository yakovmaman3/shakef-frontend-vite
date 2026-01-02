import React from "react";

export default function AccessibilityStatement() {
  const updatedAt = "02/01/2026"; // עדכן אם צריך

  return (
    <div className="space-y-4 leading-relaxed">
      <h2 id="accessibility-title" className="text-2xl font-bold">
        הצהרת נגישות
      </h2>

      <p id="accessibility-desc" className="text-base">
        אנו ב״שַׁקֵּף עבודות מתכת״ רואים חשיבות עליונה בהנגשת השירותים הדיגיטליים לכלל הציבור,
        כולל אנשים עם מוגבלויות. אנו פועלים לשיפור הנגישות באתר בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות
        (התאמות נגישות לשירות), התשע״ג–2013, ובהתאם לת״י 5568 (מבוסס על הנחיות WCAG) ברמת AA.
      </p>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">מה נעשה באתר</h3>
        <ul className="list-disc pr-5 space-y-1 text-base">
          <li>מבנה סמנטי תקין (כותרות, אזורי ניווט, תוכן ראשי).</li>
          <li>ניווט מלא באמצעות מקלדת, כולל תמיכה ב־Esc לסגירת חלונות.</li>
          <li>טקסט חלופי לתמונות רלוונטיות ותגיות נגישות לכפתורים ואייקונים.</li>
          <li>מיקוד ברור (Focus) לאלמנטים אינטראקטיביים.</li>
          <li>טפסים עם תוויות (labels) והודעות שגיאה קריאות לקוראי מסך.</li>
        </ul>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">תאימות ושימוש</h3>
        <p className="text-base">
          האתר מותאם לדפדפנים נפוצים (Chrome / Edge / Firefox / Safari) ולשימוש במובייל.
          אם נתקלתם בבעיה, נשמח לטפל בה בהקדם.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold">יצירת קשר בנושא נגישות</h3>
        <p className="text-base">
          רכז נגישות: יעקב (שַׁקֵּף) <br />
          טלפון: <a className="underline" href="tel:+972552270388">055-227-0388</a> <br />
          וואטסאפ:{" "}
          <a className="underline" href="https://wa.me/972552270388" target="_blank" rel="noreferrer">
            055-227-0388
          </a>{" "}
          <br />
          אימייל: <a className="underline" href="mailto:admin@shakef.com">admin@shakef.com</a>
        </p>
      </div>

      <p className="text-sm opacity-80">עודכן לאחרונה: {updatedAt}</p>
    </div>
  );
}
