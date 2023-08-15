import { useState, useReducer } from 'react';

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
  const [state, setState] = useState({
    favList: [],
    receivedData: null,
  
  });

  const dispatchFavList = useReducer(favListReducer, state.favList)[1];

  const updateToFavPhotoIds = (id) => {
    if (state.favList.includes(id)) {
      dispatchFavList({ type: "REMOVE", id });
    } else {
      dispatchFavList({ type: "ADD", id });
    }
  };


  return {
    state,
    updateToFavPhotoIds,
  };
};

export default useApplicationData;
