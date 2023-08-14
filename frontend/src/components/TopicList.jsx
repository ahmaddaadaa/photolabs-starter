import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import FavBadge from "./FavBadge";
import topics from "mocks/topics";


const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {topics.map((topic_obj) => (
        <TopicListItem  key={topic_obj.id} title={topic_obj.title}/>
      ))}
   
    </div>
  );
};

export default TopicList;