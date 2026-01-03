import "../style/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const FaGithub = () => <FontAwesomeIcon icon={faGithub} />;
const FaLinkedinIn = () => <FontAwesomeIcon icon={faLinkedinIn} />;
const FaFacebookF = () => <FontAwesomeIcon icon={faFacebookF} />;

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} <span className="brand">La Min Hein</span>.
        All rights reserved.
      </p>

      <div className="socials">
        <a href="https://github.com/Lamin2005" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/la-min-hein-277bb338a" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="https://www.facebook.com/share/1Bz8fkMWaE/" aria-label="Facebook">
          <FaFacebookF />
        </a>
      </div>
    </footer>
  );
}
