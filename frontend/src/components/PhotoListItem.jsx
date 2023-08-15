import React, { useState } from "react";
import "../styles/PhotoListItem.scss";
import "../styles/FavBadge.scss";
import "../styles/PhotoList.scss";
import FavButton from "./FavButton";

const PhotoListItem = (props) => {
  const { id, location, urls, user } = props.data;
  const [popUpwindowStatus, setpopUpwindowStatus] = useState(true);

  const handleImageClicks = function () {
    setpopUpwindowStatus(popUpwindowStatus);
    props.sendDataToPhotoList(popUpwindowStatus);
    props.sendSelectedPhotoDeatil(props.data);
  };

  const handleFavClick = () => {
    props.favListFunction(id);
  };

  return (
    <div className={`photo-list__item ${props.differentPage ? "custom-styling" : ""}`}>
      <span className="FavButton">
        <FavButton
          selected={props.favListArray.includes(id)}
          onClick={handleFavClick}
        />
      </span>

      <img
        className="photo-list__image"
        src={urls.regular}
        onClick={handleImageClicks}
      />

      <div className="photo-list__bottomLine">
        <div className="profile">
          <img className="photo-list__user-profile" src={user.profile} />
        </div>
        <div className="photo-list__user-details">
          <span className="photo-list__user-info">{user.name}</span>
          <div className="photo-list__user-location">
            <span>{location.city} </span>
            <span>{location.country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
