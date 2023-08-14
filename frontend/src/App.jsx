import React, { useState } from 'react';


import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import PhotoList from 'components/PhotoList';
import TopicList from 'components/TopicList';
import TopNavigationBar from 'components/TopNavigationBar';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

const App = () => {
  // console.log("props in the App", props);
  const [receivedData, setReceivedData] = useState(null);
  const [receivedObj, setReceivedObj] = useState({
    "id": "7",
    "location": {
      "city": "Calgary",
      "country": "Canada"
    },
    "urls": {
      "full": `${process.env.PUBLIC_URL}/Image-7-Full.jpg`,
      "regular": `${process.env.PUBLIC_URL}/Image-7-Regular.jpg`
    },
    "user": {
      "id": "7",
      "username": "exampleuser",
      "name": "Joe Example",
      "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
    }
  });
   // Callback function to receive data from the HomeRoute
   const handleDataFromHomeRoute = (data) => {
    setReceivedData(data);
  };
  const resetDataFromApp = () => {
    setReceivedData(false); // Reset dataFromApp to false
  };
  const handleObjFromHomeRoute = (data) => {
    setReceivedObj(data);
  };

  const [dataFromModal, setDataFromModal] = useState(null);
  console.log("Data received from PhotoDetailsModal:", dataFromModal);
  const handleDataFromModal = (data) => {
    setDataFromModal(data);
    // Do something with the received data in App component
  };
  return (
    <>
    <HomeRoute 
      sendDataToApp={handleDataFromHomeRoute} 
      sendObjToApp={handleObjFromHomeRoute}
      dataFromModal={dataFromModal}
      // favClickInModal={handleFavClickInModal}
      />
    <PhotoDetailsModal 
      dataFromApp={receivedData}
      objFromApp={receivedObj} 
      resetData={resetDataFromApp}
      onDataFromModal={handleDataFromModal}
      />
      
    </>

    
  );
};

export default App;