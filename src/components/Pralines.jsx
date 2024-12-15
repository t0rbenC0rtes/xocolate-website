import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";

const Pralines = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleBackClick = () => {
    navigate("/"); // Navigate to the homepage
  };

  return (
    <div className="container">
      <h1>Pralines</h1>
      <p>Welcome to the Pralines page. More content coming soon!</p>
      <button onClick={handleBackClick} className="toggle-footer-btn homeBtn">
      <FaHouse />
      </button>
    </div>
  );
};

export default Pralines;
