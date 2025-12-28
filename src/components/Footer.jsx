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
        <a href="#" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="#" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="#" aria-label="Facebook">
          <FaFacebookF />
        </a>
      </div>
    </footer>
  );
}
