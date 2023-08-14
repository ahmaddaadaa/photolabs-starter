import React, { useEffect, useState } from "react";
useEffect;

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import FavIcon from "components/FavIcon";
import PhotoList from "components/PhotoList";
import "../styles/PhotoListItem.scss";
import "../styles/FavBadge.scss";
import "../styles/PhotoList.scss"
import FavButton from "components/FavButton";

const PhotoDetailsModal = (props) => {
  const receivedObj = props.objFromApp;
  
  const receivedData = props.dataFromApp;
  const [buttonStatus, setStatus] = useState(receivedData);
  const handleCloseButton = function () {
    setStatus(!buttonStatus);
    props.resetData();
  };
  useEffect(() => {
    setStatus(receivedData);
  }, [receivedData]);
  
 
  const handleFavClickInModal = () => {
    // props.handleClicksInModal("hello From Modal");
    // props.onDataFromModal("hello"); // Sending "hello" back to HomeRoute
    console.log("you clicked Fav inside pop up");
    props.onDataFromModal(receivedObj.id);
  };
 
  return (
    <div className={`photo-details-modal ${buttonStatus ? "" : "hide"}`}>
      <button
        className="photo-details-modal__close-button"
        onClick={handleCloseButton}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-list__item_window">
        <div className="fav-badge">
    
        <FavButton selected={buttonStatus} onClick={handleFavClickInModal} />
     
        </div>
        <img
          className="big-top-photo"
          src={receivedObj.urls.regular}
        />
      </div>
      <h5 className="title">Similar Photos</h5>
      <div className="list-container">
      <img className="small-photos-list" src={receivedObj.urls.regular}/>
      <img className="small-photos-list" src={receivedObj.urls.regular}/>
      <img className="small-photos-list" src={receivedObj.urls.regular}/>

      </div>
    </div>
  );
};

export default PhotoDetailsModal;
