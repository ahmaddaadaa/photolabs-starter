import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";





const PhotoListItem = (props) => {
  /* Insert React */
  const { location, username, profile, imageSource } = props.data;
  const [likes, setCounter] = useState(0);
  const [click, setClick] = useState(false);
  const increment = function() {
    setCounter(likes + 1);
  };

  const handleClicks = function() {
    console.log("I am here")
    setClick(prevClick => !prevClick);
    
  };


  return (
    
    <div className="photo-list__item">
      <div  className="fav-badge" onClick={handleClicks}><span><FavIcon selected={click}/></span></div>
    <img className="photo-list__image" src={imageSource} />
    
    <div className="photo-list__bottomLine">
      <img className="photo-list__user-profile" src={profile} />
      <div className="photo-list__user-details">  
      <span className="photo-list__user-info">{username}</span>
      <div className="photo-list__user-location">
        <span>{location.city} </span>
        <span>{location.country}</span>
      </div>
      {likes}
      <button onClick={increment}>+</button>
      
     
    </div>
    </div>
    
    
  </div>);
};

export default PhotoListItem;
