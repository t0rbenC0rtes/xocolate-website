import React from "react";
import { MdLiquor } from "react-icons/md";

const PralineCard = ({ name, type, picture, withAlcohol }) => {
  return (
    <div className="praline-card">
      <img src={picture} alt={name} className="praline-image" />
      <h3>
        {name}
        <span>{withAlcohol ? <MdLiquor /> : ""}</span>
      </h3>
      <p>Type: {type}</p>
    </div>
  );
};

export default PralineCard;
