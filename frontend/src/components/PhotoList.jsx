import React, { useState } from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from './PhotoListItem'
import photos from "mocks/photos";


const PhotoList = (props) => {

  return (
    <ul className="photo-list">
       {photos.map((photo_obj) => (
        <PhotoListItem key={photo_obj.id} data={photo_obj} handleClicks={props.handleClicks} favList={props.favList}/>
      ))}
    </ul>
  );
};

export default PhotoList;
