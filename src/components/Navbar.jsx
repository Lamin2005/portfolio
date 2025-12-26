import React, { useState } from "react";
import "../style/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDownLeftRight } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-main">
      <nav className="navbar">
        <div className="nav-logo">La Min Hein</div>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>

          {/* Contact shows only in mobile */}
          <a href="#contact" className="mobile-contact">
            Contact
          </a>
        </div>

        <a href="#contact" className="desktop-contact">
          Contact <FontAwesomeIcon icon={faArrowsUpDownLeftRight} />
        </a>

        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </div>
  );
}
