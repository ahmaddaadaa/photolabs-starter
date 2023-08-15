import { useReducer } from "react";

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

const useFavList = () => {
  const [favList, dispatchFavList] = useReducer(favListReducer, []);

  const addToFavList = (id) => {
    dispatchFavList({ type: "ADD", id });
  };

  const removeFromFavList = (id) => {
    dispatchFavList({ type: "REMOVE", id });
  };

  return { favList, addToFavList, removeFromFavList };
};

export default useFavList;
