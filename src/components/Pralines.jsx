import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import { MdLiquor } from "react-icons/md";
import PralineCard from "./PralineCard"; // Assuming PralineCard is in the same folder

const Pralines = () => {
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [pralines, setPralines] = useState([]); // State for fetched pralines
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // Fetch pralines data from the local JSON server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/pralines");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setPralines(data); // Update state with fetched data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleBackClick = () => {
    navigate("/"); // Navigate to the homepage
  };

  if (loading) return <p>Loading pralines...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1>Pralines</h1>
      <p>
        <MdLiquor className="alcool" /> contains alcohol
      </p>

      {/* Display praline cards */}
      <div className="praline-grid">
        {pralines.map((praline) => (
          <PralineCard
            key={praline.name}
            name={praline.name}
            type={praline.type}
            picture={praline.picture}
            withAlcohol={praline.withAlcohol}
          />
        ))}
      </div>
      <button onClick={handleBackClick} className="toggle-footer-btn homeBtn">
        <FaHouse />
      </button>
    </div>
  );
};

export default Pralines;
