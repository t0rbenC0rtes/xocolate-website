import React from "react";

const sections = ["home", "about", "pralines", "contact"];

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-ul">
        {sections.map((section) => (
          <li key={section}>
            <button className="praline-btn-yellow" aria-label={section}></button>
            <span className="nav-label">{section}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
