import React from "react";

import "../styles/PhotoListItem.scss";




const PhotoListItem = (props) => {
  /* Insert React */
  const { location, username, profile, imageSource } = props.data;

  return (
    <div className="photo-list-item">
    <img src={imageSource} />

    <div className="photographer">
      <img src={profile} />
      <span className="username">{username}</span>
    </div>

    <div className="location">
      <span className="city">{location.city} </span>
      <span className="country">{location.country}</span>
    </div>
  </div>);
};

export default PhotoListItem;
