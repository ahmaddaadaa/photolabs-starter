import React, { useState } from "react";
import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = () => {
  const [favList, updateFavList] = useState({});
  const handleClicks = function(id) {
    console.log("inside handle clicks")
    console.log(id);
    //setClick(prevClick => !prevClick);
    //updateFavList(favList.push(id));
    updateFavList({...favList, [id]:!favList[id]});
    console.log(favList);

    
  };
  return (
    <div>
      <TopNavigationBar isFavPhotoExist={Object.values(favList).some(fav => fav)}/>
    <div className="home-route">
      <div className="photo-list">
        <PhotoList handleClicks={handleClicks} favList={favList}/>
       </div>
    </div>
    </div>
  );
};

export default HomeRoute;
