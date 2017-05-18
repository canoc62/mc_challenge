import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArticles, fetchTopics } from './../actions/actions';
import ArticleItem from './ArticleItem';

class ArticlesList extends Component {
  componentWillMount() {
    this.props.fetchArticles();
    this.props.fetchTopics();
  }

  componentDidMount() {

  }

  render() {

    const { articles } = this.props;
    const { topics } = this.props;
    
    const articlesList = _.map(articles, (article) => {
      for (let i = 0; i < article.topics.length; i += 1) {
        let stringId = article.topics[i]['id'].toString();
        if (topics[stringId]) {
          return (
            <ArticleItem
              key={article.id}
              article={article}
            />
            );
          }
      }
    });
    
    return (
      <div>
        <h1>Articles List</h1>
        <h3><Link to='/topics'>Topics</Link></h3>
        <ul>
          {articlesList}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ articles, topics }) {
  return { articles, topics };
}

export default connect(mapStateToProps, { fetchArticles, fetchTopics })(ArticlesList);