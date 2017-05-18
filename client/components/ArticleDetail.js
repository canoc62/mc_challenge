import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticle } from './../actions/actions';

class ArticleDetail extends Component {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id);
  }

  render() {
    const { article } = this.props;

    if (!article) return <div>...Loading</div>;

    console.log('article prop: ', this.props.article);

    return (
      <div>
        ARTICLE DETAIL for Article: {this.props.match.params.id}
      </div>
    );
  }
}

function mapStateToProps({ articles }, ownProps) {
  return { article: articles[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchArticle })(ArticleDetail);