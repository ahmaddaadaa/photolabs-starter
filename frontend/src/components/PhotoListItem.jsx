import React, { useEffect, useState } from "react";

import "../styles/PhotoListItem.scss";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";
import "../styles/PhotoList.scss"
import FavButton from "./FavButton";







const PhotoListItem = (props) => {
  /* Insert React */
  const { id, location, urls, user } = props.data;
  const [likes, setCounter] = useState(0);

  const increment = function() {
    setCounter(likes + 1);
  };
  const [popUpwindowStatus, setpopUpwindowStatus] = useState(true);

  const handleImageClicks = function() {
    console.log("handleImageClick is called with id", id);
    console.log("selectedphoto", props.data);
    setpopUpwindowStatus(popUpwindowStatus)
    props.sendDataToPhotoList(popUpwindowStatus);
    props.sendSelectedPhotoDeatil(props.data);

  }
   
  const handleFavClick = () => {
    props.handleClicks(id);
  };

  


  return (
    
    <div className="photo-list__item">

      {/* <div  className="fav-badge" onClick={() => props.handleClicks(id)}><span><FavIcon selected={props.favList[id]}/></span></div> */}
      <FavButton selected={props.favList[id]} onClick={handleFavClick} />

    <img className="photo-list__image" src={urls.regular} onClick={handleImageClicks}/>
    
    <div className="photo-list__bottomLine">
      <img className="photo-list__user-profile" src={user.profile} />
      <div className="photo-list__user-details">  
      <span className="photo-list__user-info">{user.name}</span>
      <div className="photo-list__user-location">
        <span>{location.city} </span>
        <span>{location.country}</span>
      </div>
      {likes}
      <button onClick={increment}>+</button>
      
    </div>
    </div>
    
    
  </div>
  );
};

export default PhotoListItem;