import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const sections = ["home", "about", "contact"];

  return (
    <nav>
      <ul className="nav-ul">
        {/* Links for Scrolling Sections */}
        {sections.map((section) => (
          <li key={section}>
            <ScrollLink
              to={section}
              smooth={true}
              duration={500}
              className="praline-btn-yellow"
              aria-label={section}
            ></ScrollLink>
            <span className="nav-label">{section}</span>
          </li>
        ))}

        {/* Link for Pralines Page */}
        <li>
          <RouterLink
            to="/pralines"
            className="praline-btn-yellow"
            aria-label="pralines"
          ></RouterLink>
          <span className="nav-label">pralines</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
