import React from "react";
import TopicList from "./TopicList";
import "../styles/TopNavigationBar.scss";
import FavIcon from "./FavIcon";

const TopNavigation = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="side-bar">
        <span className="topic">
          <TopicList
            handleTopicClick={props.handleTopicClick}
            topicListData={props.topicListData}
          />
        </span>
        <span className="heart">
          <FavIcon
            displayAlert={props.isFavPhotoExist}
            selected={props.isFavPhotoExist}
          />
        </span>
      </div>
    </div>
  );
};

export default TopNavigation;
