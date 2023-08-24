import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  console.log("props inside TopicList Item", props);

  return (
    <div className="topic-list__item">
      <span onClick={() => props.handleTopicClick(props.id)}>
        {props.title}
      </span>
    </div>
  );
};

export default TopicListItem;
