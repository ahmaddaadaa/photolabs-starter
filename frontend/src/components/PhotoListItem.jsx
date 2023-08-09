import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  /* Insert React */
  const { location, username, profile, imageSource } = props.data;

  return (
    <div className="photo-list__item">
    <img className="photo-list__image" src={imageSource} />

    <div className="photo-list__bottomLine">
      <img className="photo-list__user-profile" src={profile} />
      <div className="photo-list__user-details">  
      <span className="photo-list__user-info">{username}</span>
      <div className="photo-list__user-location">
        <span>{location.city} </span>
        <span>{location.country}</span>
      </div>
    </div>
    </div>
    
    
  </div>);
};

export default PhotoListItem;
