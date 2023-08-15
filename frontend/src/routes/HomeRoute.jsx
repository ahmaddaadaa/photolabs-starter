import React, { useEffect, useState } from "react";
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';



const HomeRoute = (props) => {

  const handleDataFromPhotoList = (data) => {
    props.sendDataToApp(data);
  };

  const handleObjFromPhotoList = (data) => {
    props.sendObjToApp(data);
  };

  
  return (
    <>
      <div>
        <TopNavigationBar isFavPhotoExist={props.favListArray.length > 0} />
        <div className="home-route">
          <div className="photo-list">
            <PhotoList
              favListArray={props.favListArray}
              favListFunction={props.favListFunction}
              sendDataToHomeRoute={handleDataFromPhotoList}
              sendObjToHomeRoute={handleObjFromPhotoList}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRoute;