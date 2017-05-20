import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTopics, changeTopicsFollowing } from './../actions/actions'
import TopicItem from './../components/TopicItem';

class Topics extends Component {
  constructor() {
    super();

    this.handleFollowingButton = this.handleFollowingButton.bind(this);
  }

  componentDidMount() {
    if (!Object.keys(this.props.topics).length) {
      console.log('fetchin topics'); 
      this.props.fetchTopics();
    }
  }

  handleFollowingButton(topicId, followingStatus) {
    this.props.changeTopicsFollowing(topicId, followingStatus);
  }

  render() {

    const { topics } = this.props;
    const titles = _.map(topics, (topic) => { 
      let topicId = topic.topic['id'];
      let followingStatus = topic['following'];

      return (
        <TopicItem 
          key={topicId}
          id={topicId}
          topic={topic}
          handleClick={() => this.handleFollowingButton(topicId, followingStatus)} 
        />
      );
    });
    
    return (
      <div className='topics-list-container'>
        <h3>Topics</h3>
        <div className='topics-list'>
          <ul>
            {titles}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ topics }) {
  return { topics };
}

export default connect(mapStateToProps, { fetchTopics, changeTopicsFollowing })(Topics);