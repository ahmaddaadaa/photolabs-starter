import React, { useState, useEffect } from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const [receivedDataFromPhotoListItem, setReceivedDataFromPhotoListItem] =
    useState(null);
  const [receivedObjFromPhotoListItem, setReceivedObjFromPhotoListItem] =
    useState({});


  // Callback function to receive data from the PhotoListItem
  const handleDataFromPhotoListItem = (data) => {
    setReceivedDataFromPhotoListItem(data);
    props.sendDataToHomeRoute(data);
  };
  const handleSelectedPhotoDataFromPhotoListItem = (data) => {
    setReceivedObjFromPhotoListItem(data);
    props.sendObjToHomeRoute(data);
  };
  const filteredPhotos = props.photoData.filter(
    (photo) => photo.id !== props.excludedPhotoId
  );

  return (
    <ul className="photo-list">
      {filteredPhotos.map((photo_obj) => (
        <PhotoListItem
          key={photo_obj.id}
          handleImageClicks={props.handleImageClicks}
          data={photo_obj}
          handleClicks={props.handleClicks}
          favListArray={props.favListArray}
          favListFunction={props.favListFunction}
          sendDataToPhotoList={handleDataFromPhotoListItem}
          sendSelectedPhotoDeatil={handleSelectedPhotoDataFromPhotoListItem}
          differentPage={props.differentPage}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
