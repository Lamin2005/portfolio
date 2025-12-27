import React from "react";
import "../style/Ctasection.css";

function Ctasection() {
  return (
   <section className="social-cta" id="contact">
  <div className="cta-card">
    <h2>Social media for Connect 🤝✨</h2>
    <p>
      Follow me on social media 🚀 and let's create something
      <span className="highlight"> amazing 💎</span> together!
    </p>

    <div className="social-links">
      <a href="#" target="_blank" className="social-btn">🐙 GitHub</a>
      <a href="#" target="_blank" className="social-btn">💼 LinkedIn</a>
      <a href="#" target="_blank" className="social-btn">📧 Email</a>
    </div>
  </div>
</section>


  );
}

export default Ctasection;
