import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    favList,
    updateFavList,
    topicListData,
    photoData,
    handleTopicClick,
    receivedData,
    receivedObj,
    handleDataFromHomeRoute,
    resetDataFromApp,
    handleObjFromHomeRoute,
  } = useApplicationData();

  return (
    <>
      <HomeRoute
        handleTopicClick={handleTopicClick}
        photoData={photoData}
        topicListData={topicListData}
        sendDataToApp={handleDataFromHomeRoute}
        sendObjToApp={handleObjFromHomeRoute}
        favListArray={favList}
        favListFunction={updateFavList}
      />

      <PhotoDetailsModal
        dataFromApp={receivedData}
        objFromApp={receivedObj}
        resetData={resetDataFromApp}
        favListArray={favList}
        favListFunction={updateFavList}
      />
    </>
  );
};

export default App;
