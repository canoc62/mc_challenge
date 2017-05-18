import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchTopics } from './../actions/actions'

class Topics extends Component {
  componentDidMount() {
    this.props.fetchTopics();
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

export default connect(mapStateToProps, { fetchTopics })(Topics);