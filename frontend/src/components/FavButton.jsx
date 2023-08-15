import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

const FavButton = ({ selected, onClick }) => {
  return (
    <div className="fav-badge" onClick={onClick}>
      <span>
        <FavIcon selected={selected} />
      </span>
    </div>
  );
};

export default FavButton;
