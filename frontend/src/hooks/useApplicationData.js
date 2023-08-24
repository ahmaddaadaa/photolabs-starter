import { useState, useEffect, useReducer } from "react";

const photoDataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PHOTO_DATA":
      console.log("this case Update_Photo_data is being called");
      return action.data;
    default:
      return state;
  }
};

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

const useApplicationData = () => {
  const [topicListData, setTopicListData] = useState([]);
  const [topicID, setTopicId] = useState(null);
  const [photoData, dispatchPhotoData] = useReducer(photoDataReducer, []);

  const [receivedData, setReceivedData] = useState(null);
  const [receivedObj, setReceivedObj] = useState({
    id: "7",
    location: {
      city: "Calgary",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-7-Full.jpg`,
      regular: `${process.env.PUBLIC_URL}/Image-7-Regular.jpg`,
    },
    similar_photos: [],
    user: {
      id: "7",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  });

  // Callback function to receive data from the HomeRoute
  const handleDataFromHomeRoute = (data) => {
    console.log("data from home route!!!!", data);
    setReceivedData(data);
  };
  const resetDataFromApp = () => {
    setReceivedData(false); // Reset dataFromApp to false
  };
  const handleObjFromHomeRoute = (data) => {
    console.log("obj from home route!!!", data);
    setReceivedObj(data);
  };

  // used by PhotoDetailModel
  const [buttonStatus, setStatus] = useState(false);
  const handleCloseButton = function () {
    setStatus(!buttonStatus);
    props.resetData();
  };

  // fav list
  const [favList, dispatchFavList] = useReducer(favListReducer, []);
  const updateFavList = function (id) {
    if (favList.includes(id)) {
      dispatchFavList({ type: "REMOVE", id });
    } else {
      dispatchFavList({ type: "ADD", id });
    }
  };

  useEffect(() => {
    fetch("http://localhost:8001/api/topics/")
      .then((res) => res.json())
      .then((data) => {
        setTopicListData(data);
        console.log("TopicData:", data);
      })
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((data) => {
        dispatchPhotoData({ type: "UPDATE_PHOTO_DATA", data });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  }, []);

  const handleTopicClick = (data) => {
    console.log("handleTopicClick is called!!!!");
    setTopicId(data);
    console.log("topicID", topicID);
    fetch(`http://localhost:8001/api/topics/photos/${data}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("fetch req made!!", data);
        dispatchPhotoData({ type: "UPDATE_PHOTO_DATA", data });
      })
      .catch((error) => {
        console.error("Error fetching photos:", error);
      });
  };

  return {
    buttonStatus,
    handleCloseButton,
    favList,
    updateFavList,
    photoData,
    topicListData,
    topicID,
    handleTopicClick,
    receivedData,
    receivedObj,
    handleDataFromHomeRoute,
    resetDataFromApp,
    handleObjFromHomeRoute,
  };
};

export default useApplicationData;
