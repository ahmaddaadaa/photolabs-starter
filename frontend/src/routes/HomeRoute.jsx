import React, { useEffect, useState } from "react";
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from "./PhotoDetailsModal";
import useHandleClicks from "../hooks/useHandleClicks";


const HomeRoute = (props) => {
  const { favList, handleClicks } = useHandleClicks();
  const [dataFromModal, updateDataFromModal] = useState(null);

  const handleDataFromPhotoList = (data) => {
    props.sendDataToApp(data);
  };

  const handleObjFromPhotoList = (data) => {
    props.sendObjToApp(data);
  };

  useEffect(() => {
    if (props.dataFromModal !== dataFromModal ) {
      updateDataFromModal(props.dataFromModal);
    }

    // Now you can update the favList based on the updated dataFromModal
    if (dataFromModal) {
      handleClicks(dataFromModal);
    }

  }, [props.dataFromModal, dataFromModal]);

  console.log("dataFromModal: ",dataFromModal);
  
  return (
    <>
      <div>
        <TopNavigationBar isFavPhotoExist={Object.values(favList).some((fav) => fav)} />
        <div className="home-route">
          <div className="photo-list">
            <PhotoList
              handleClicks={handleClicks}
              favList={favList}
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