import React from "react";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-100 text-gray-800 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">אודותינו</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          טקסט לדוגמה על החברה. כאן תוכלו לכתוב על הדרך שלכם, הערכים שמנחים אתכם, 
          ומה מייחד את השירות שלכם בעבודות מתכת. בהמשך נעדכן את התוכן לפי הצורך.
        </p>
      </div>
    </section>
  );
}
