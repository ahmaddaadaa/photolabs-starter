import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = (props) => {
  const title = props.title;
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;