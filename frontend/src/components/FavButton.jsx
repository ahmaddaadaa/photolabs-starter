import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavButton = ({ selected, onClick }) => {
  const [isSelected, setIsSelected] = useState(selected);

  const handleClick = () => {
    setIsSelected(!isSelected);
    onClick(!isSelected);
  };

  return (
    <div className="fav-badge" onClick={handleClick}>
      <span>
        <FavIcon selected={isSelected} />
      </span>
    </div>
  );
};

export default FavButton;
