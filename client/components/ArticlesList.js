import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from './../actions/actions'

class ArticlesList extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {

    const { articles } = this.props;
    //const titles = articles.map( article => article.title);
    const titles = [];
    for (let i in articles) {
      titles.push(articles[i].title)
    }
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