import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchArticles } from './../actions/actions'

class ArticlesList extends Component {
  componentWillMount() {
    this.props.fetchArticles();
  }

  componentDidMount() {
    
  }

  render() {

    const { articles } = this.props;
    //const titles = articles.map( article => article.title);
    const titles = _.map(articles, article => article.title);
    
    return (
      <div>
        <h1>Articles List</h1>
        <ul>
          {titles}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ articles }) {
  return { articles };
}

export default connect(mapStateToProps, { fetchArticles })(ArticlesList);