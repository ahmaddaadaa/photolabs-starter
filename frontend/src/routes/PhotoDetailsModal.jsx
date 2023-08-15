import React, { useEffect, useState } from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import "../styles/PhotoListItem.scss";
import "../styles/FavBadge.scss";
import "../styles/PhotoList.scss";
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

  return (
    <div className={`photo-details-modal ${buttonStatus ? "" : "hide"}`}>
      <div className="column">
      <div>
        <button
          className="photo-details-modal__close-button"
          onClick={handleCloseButton}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>

      <div>
        <div className="photo-list__item_window">
          <div className="fav-badge">
            <FavButton
              selected={props.favListArray.includes(receivedObj.id)}
              onClick={() => props.favListFunction(receivedObj.id)}
            />
          </div>
          <img className="big-top-photo" src={receivedObj.urls.regular} />
        </div>
      </div>

      <div className="photo-list__bottomLine">
        <div className="profile">
          <img className="photo-list__user-profile" src={receivedObj.user.profile} />
        </div>
        <div className="photo-list__user-details">
          <span className="photo-list__user-info">{receivedObj.user.name}</span>
          <div className="photo-list__user-location">
            <span>{receivedObj.location.city} </span>
            <span>{receivedObj.location.country}</span>
          </div>
        </div>
      </div>
      <div className="line">    </div>
      <h5 className="title">Related Photos</h5>
      <div className="item-container">
        </div>
        </div>
        <PhotoList
          favListArray={props.favListArray}
          favListFunction={props.favListFunction}
          differentPage={true}
          excludedPhotoId={receivedObj.id} 
        />
     </div>
  

  );
};

export default PhotoDetailsModal;
