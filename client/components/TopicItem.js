import React from 'react';

const TopicItem = (props) => {
  let buttonText;

  if (props.topic.following) {
    buttonText = 'Following';
    styles.button.border = '1px solid #ff0000';
    styles.button.color = 'red';
  } else {
    buttonText = '+ Follow';
    styles.button.color = '#000';
    styles.button.border = '1px solid #ecebeb';
  }

  return (
    <div className='topic-list-item'>
      <span>{props.topic.topic.name}</span>
      <button style={styles.button} className='topic-list-item-button' onClick={props.handleClick}> {buttonText} </button>
    </div>
  );
}

const styles = {
  button: {
    float: 'right',
    border: '',
    background: '#fff',
    padding: '2px',
    boxSizing: 'border-box',
    margin: '2px 5px 0 0',
    borderRadius: '3px',
    color: ''
  }
}

export default TopicItem;