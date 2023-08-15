import React, { useReducer, useState } from "react";
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useFavList from "hooks/useFavList";

const favListReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      if (!state.includes(action.id)) {
        return [...state, action.id];
      }
      return state;
    case "REMOVE":
      return state.filter((id) => id !== action.id);
    default:
      return state;
  }
};

const App = () => {
  
  //const { favList, updateToFavPhotoIds } = useFavList();

  const [favList, dispatchFavList] = useReducer(favListReducer, []);

  const updateFavList = function (id) {
    if (favList.includes(id)) {
      dispatchFavList({ type: "REMOVE", id });
    } else {
      dispatchFavList({ type: "ADD", id });
    }
  };


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


  return (
    <>
    <HomeRoute 
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