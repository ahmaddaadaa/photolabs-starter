import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss'
import FavIcon from './FavIcon';

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span><TopicList/></span> 
      <span className='heart'><FavIcon displayAlert={props.isFavPhotoExist} selected={props.isFavPhotoExist}/></span>
      

    </div>
   
  )
}

export default TopNavigation;