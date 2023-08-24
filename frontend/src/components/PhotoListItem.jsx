import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import "../styles/FavBadge.scss";
import "../styles/PhotoList.scss";
import FavButton from "./FavButton";

const PhotoListItem = (props) => {
  const [popUpwindowStatus, setpopUpwindowStatus] = useState(true);

  const handleImageClicks = function () {
    setpopUpwindowStatus(popUpwindowStatus);
    props.sendDataToPhotoList(popUpwindowStatus);
    props.sendSelectedPhotoDeatil(props.data);
  };

  const handleFavClick = () => {
    props.favListFunction(props.data.id);
  };

  return (
    <div
      className={`photo-list__item ${
        props.differentPage ? "custom-styling" : ""
      }`}
    >
      <span className="FavButton">
        <FavButton
          selected={props.favListArray.includes(props.data.id)}
          onClick={handleFavClick}
        />
      </span>

      <img
        className="photo-list__image"
        src={props.data.urls.regular}
        onClick={handleImageClicks}
      />

      <div className="photo-list__bottomLine">
        <div className="profile">
          <img
            className="photo-list__user-profile"
            src={props.data.user.profile}
          />
        </div>
        <div className="photo-list__user-details">
          <span className="photo-list__user-info">{props.data.user.name}</span>
          <div className="photo-list__user-location">
            <span>{props.data.location.city} </span>
            <span>{props.data.location.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
