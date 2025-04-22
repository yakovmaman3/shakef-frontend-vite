import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="text-gray-200">
      <div className="max-w-4xl mx-auto text-center py-8 px-4">
        <h2 className="text-3xl font-bold mb-4">אודותינו</h2>
        <p className="text-lg mb-4 leading-relaxed">
          טקסט לדוגמה על החברה. כאן תוכלו לכתוב על הדרך שלכם, הערכים שמנחים אתכם,
          ומה מייחד את השירות שלכם בעבודות מתכת.
        </p>
        <p className="text-md mt-4">✉️ example@shakef.com</p>
        <p className="text-md">📞 ----</p>
      </div>
    </section>
  );
}
