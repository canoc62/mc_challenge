import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticle, fetchArticles } from './../actions/actions';
import ArticleDetailItem from './../components/ArticleDetailItem';

class ArticleDetail extends Component {
  componentDidMount() {
    if (this.props.articles && !Object.keys(this.props.articles).length) {
      this.props.fetchArticles();
    }
    this.props.fetchArticle(this.props.match.params.id);
  }

  render() {
    const { article } = this.props;

    if (!article) return <div>...Loading</div>;

    return (
      <div id='article-detail-item-container'>
        <ArticleDetailItem article={article} />
      </div>
    );
  }
}

function mapStateToProps({ articles }, ownProps) {
  return { articles, article: articles[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchArticle, fetchArticles })(ArticleDetail);