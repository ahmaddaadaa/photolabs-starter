import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";
import "../styles/PhotoList.scss"






const PhotoListItem = (props) => {
  /* Insert React */
  const { id, location, urls, user } = props.data;
  const [likes, setCounter] = useState(0);
  // const [favList, updateFavList] = useState({});
  // const [id, saveId] = useState(0);
//  const [click, setClick] = useState(false);
  const increment = function() {
    setCounter(likes + 1);
  };

  // const handleClicks = function() {
  //   console.log("inside handle clicks")
  //   console.log(id);
  //   setClick(prevClick => !prevClick);
  //   //updateFavList(favList.push(id));
  //   updateFavList({...favList, [id]:!!favList[id]});
  //   console.log(favList);
    
  // };
  


  return (
    
    <div className="photo-list__item">
      <div  className="fav-badge" onClick={() => props.handleClicks(id)}><span><FavIcon selected={props.favList[id]}/></span></div>
    <img className="photo-list__image" src={urls.regular} />
    
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
    
    
  </div>);
};

export default PhotoListItem;
