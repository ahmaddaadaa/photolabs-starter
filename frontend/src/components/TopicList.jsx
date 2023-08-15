import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "mocks/topics";

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic_obj) => (
        <TopicListItem key={topic_obj.id} title={topic_obj.title} />
      ))}
    </div>
  );
};

export default TopicList;
