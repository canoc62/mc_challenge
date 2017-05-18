import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchTopics, changeTopicsFollowing } from './../actions/actions'

class Topics extends Component {
  constructor() {
    super();

    this.handleFollowingButton = this.handleFollowingButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchTopics();
  }

  handleFollowingButton() {

  }

  render() {

    const { topics } = this.props;
    console.log(this.props);
    //const titles = articles.map( article => article.title);
    const titles = _.map(topics, topic => topic.name);
    
    return (
      <div>
        <h1>Topics List</h1>
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