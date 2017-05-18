import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArticles, fetchTopics } from './../actions/actions';
import ArticleItem from './../components/ArticleItem';

class ArticlesList extends Component {
  componentDidMount() {
    if (this.props.articles && !Object.keys(this.props.articles).length) {
      this.props.fetchArticles();
    }
    if (this.props.topics && !Object.keys(this.props.topics).length) {
      this.props.fetchTopics();
    }
  }

  render() {
    const { articles } = this.props;
    const { topics } = this.props;

    if (!articles || !topics) {
      return <div>...Loading</div>
    }
    const articlesList = _.map(articles, (article) => {
      for (let i = 0; i < article.topics.length; i += 1) {
        let topicId = article.topics[i]['id'];
        if (topics[topicId] && topics[topicId]['following']) {
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