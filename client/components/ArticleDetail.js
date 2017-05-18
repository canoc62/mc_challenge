import React, { Component } from 'react';

const ArticleDetail = ({ match }) => {
  return (
    <div> 
      {/*<h5><Link to={`/articles/${article.id}`}>{article.title}</Link></h5>
      <p>article.summary}</p>
      <p>article.url</p>
      <p>Likes: {article.likesCount}</p>*/}
      ARTICLE DETAIL for Article: {match.params.id}
    </div>
  );
}

export default ArticleDetail;