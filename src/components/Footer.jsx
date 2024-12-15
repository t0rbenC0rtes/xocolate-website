import React from "react";
import { useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleFooter = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="footer-container">
      <button onClick={toggleFooter} className="toggle-footer-btn">
        {isVisible ? "" : ""}
      </button>
      <div className={`footer-content ${isVisible ? "slide-in" : "slide-out"}`}>
        <p className="credits">
          Website by
          <span>
            <a href="#"> Antoine Lafontaine</a>
          </span>
          <br />
          Photos by
          <span>
            <a href="#"> Random clampin</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
