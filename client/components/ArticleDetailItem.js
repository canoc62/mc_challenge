import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import Topic from './Topic';

const ArticleDetailItem = ({article}) => {
  let mediaUrl;
  let articleBody = '';

  let createdAt = moment(article.createdAt).format('MMMM Do YYYY, h:mm:ss a');
  let topics = article.topics.map(topic => <Topic key={`${article.id}${topic.id}`} topicName={topic.name} />);

  if (article.media && article.media[0] && article.media[0].url) {
    mediaUrl = article.media[0].url;
  }

  if (article && article.body) {
    articleBody = article.body.replace(/(<p>)|(<\/p>)/g, '');
  }

  return (
    <div className='article-item'>
      <h3 className='article-item-header'><Link to={`/articles/${article.id}`}>{article.title}</Link></h3>
      <div className='article-item-source-container'>Source: {article.attribution.displayName}</div>
      <div className='article-item-createdAt-container'>{createdAt}</div>
      <div className='article-item-media-container'>
        <img src={mediaUrl} alt='article-media'/>
      </div>
      <p className='article-item-body'>{articleBody}</p>
      <div className='article-item-topics-container'>{topics}</div>
      <div className='article-item-likes-container'>Likes: {article.likesCount}</div>
    </div>
  );
}

export default ArticleDetailItem;