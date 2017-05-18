import React from 'react';

const TopicItem = (props) => {
  return (
    <div>
      {props.topic.topic.name}
      {' '}
      {props.id}
      <button onClick={props.handleClick}> Following </button>
    </div>
  );
}

export default TopicItem;