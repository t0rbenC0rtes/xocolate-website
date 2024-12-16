import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PralineCard from "./PralineCard";

const Admin = () => {
  const navigate = useNavigate();
  const [pralines, setPralines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newPraline, setNewPraline] = useState({
    name: "",
    type: "",
    picture: "",
    withAlcohol: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://192.168.178.43:3001/pralines");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setPralines(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAdd = async () => {
    try {
      const response = await fetch("http://192.168.178.43:3001/pralines", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPraline),
      });
      if (!response.ok) throw new Error("Failed to add praline");
      const addedPraline = await response.json();
      setPralines([...pralines, addedPraline]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRemove = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this praline?"
    );
    if (!confirmDelete) return; // Exit if the user cancels
    try {
      await fetch(`http://192.168.178.43:3001/pralines/${id}`, { method: "DELETE" });
      setPralines(pralines.filter((praline) => praline.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container admin">
      <h1>Admin Panel</h1>

      <div className="adminInputs">
        <h1>Add New Praline</h1>
        <input
          type="text"
          placeholder="Name"
          value={newPraline.name}
          onChange={(e) =>
            setNewPraline({ ...newPraline, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Type"
          value={newPraline.type}
          onChange={(e) =>
            setNewPraline({ ...newPraline, type: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Picture URL"
          value={newPraline.picture}
          onChange={(e) =>
            setNewPraline({ ...newPraline, picture: e.target.value })
          }
        />
        <label>
          With Alcohol:
          <input
            type="checkbox"
            checked={newPraline.withAlcohol}
            onChange={(e) =>
              setNewPraline({ ...newPraline, withAlcohol: e.target.checked })
            }
          />
        </label>
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="praline-grid">
        {pralines.map((praline) => (
          <div className="deleteContainer" key={praline.id}>
            <PralineCard {...praline} />
            <button onClick={() => handleRemove(praline.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
