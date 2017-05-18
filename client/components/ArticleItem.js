import React from 'react';
import { Link } from 'react-router-dom';

const ArticleItem = ({article}) => {
  return (
    <div>
      <h5><Link to={`/articles/${article.id}`}>{article.title}</Link></h5>
      <p>{article.summary}</p>
      <p>{article.url}</p>
      <p>Likes: {article.likesCount}</p>
    </div>
  );
}

export default ArticleItem;