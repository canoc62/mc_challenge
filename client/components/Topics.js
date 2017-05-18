import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTopics, changeTopicsFollowing } from './../actions/actions'
import TopicItem from './TopicItem';

class Topics extends Component {
  constructor() {
    super();

    // this.state = {
    //   fetchedTopics: false
    // }
    this.handleFollowingButton = this.handleFollowingButton.bind(this);
  }

  componentDidMount() {
    //if (!this.props.topics) {
      //this.props.fetchTopics();
      //this.setState({fetchedTopics: true})
    //}
  }

  handleFollowingButton(topicId, followingStatus) {
    console.log('topic Id of topic clicked:', topicId);
    console.log('following status:', followingStatus);
    this.props.changeTopicsFollowing(topicId, followingStatus);
  }

  render() {

    const { topics } = this.props;
    //console.log('Topics props:', this.props);
    //const titles = articles.map( article => article.title);
    const titles = _.map(topics, (topic) => { 
      //console.log(topic.topic['id']);
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
      <div>
        <h1>Topics List</h1>
        <h3><Link to='/'>Articles</Link></h3>
        <ul>
          {titles}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ topics }) {
  return { topics };
}

export default connect(mapStateToProps, { fetchTopics, changeTopicsFollowing })(Topics);