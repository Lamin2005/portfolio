import React from "react";
import "../style/Ctasection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const FaGithub = () => <FontAwesomeIcon icon={faGithub} />;
const FaLinkedinIn = () => <FontAwesomeIcon icon={faLinkedinIn} />;
const FaFacebookF = () => <FontAwesomeIcon icon={faFacebookF} />;

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
      <a href="#" target="_blank" className="social-btn"><FaGithub /> Github</a>
      <a href="#" target="_blank" className="social-btn"><FaLinkedinIn /> LinkIn</a>
      <a href="#" target="_blank" className="social-btn"><FaFacebookF /> Facebook</a>
    </div>
  </div>
</section>


  );
}

export default Ctasection;
