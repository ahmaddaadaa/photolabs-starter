import React, { useState } from "react";
import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

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
  const filteredPhotos = photos.filter(photo => photo.id !== props.excludedPhotoId);
  return (
    
    <ul className="photo-list">
      {filteredPhotos.map((photo_obj) => (
        <PhotoListItem
          key={photo_obj.id}
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
