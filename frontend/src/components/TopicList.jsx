import React from "react";
import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  console.log("props inside topic list:", props.topicListData);

  return (
    <div className="top-nav-bar__topic-list">
      {props.topicListData.map((topic_obj) => (
        <TopicListItem
          handleTopicClick={props.handleTopicClick}
          id={topic_obj.id}
          key={topic_obj.id}
          title={topic_obj.title}
        />
      ))}
    </div>
  );
};

export default TopicList;
