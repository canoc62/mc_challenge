import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Topic from './Topic';

const ArticleItem = ({article}) => {
  let mediaContent = '';
  let mediaUrl;
  
  let createdAt = moment(article.createdAt).format('MMMM Do YYYY, h:mm:ss a');
  let topics = article.topics.map(topic => <Topic key={`${article.id}${topic.id}`}topicName={topic.name} />);

  if (article.media && article.media[0] && article.media[0].url) {
    mediaUrl = article.media[0].url;
    mediaContent = <img src={mediaUrl} alt='article-photo'/>;
  }

  return (
    <div className='article-item'>
      <h3 className='article-item-header'><Link to={`/articles/${article.id}`}>{article.title}</Link></h3>
      <div className='article-item-source-container'>Source: {article.attribution.displayName}</div>
      <div className='article-item-createdAt-container'>{createdAt}</div>
      <div className='article-item-media-container'>
        {mediaContent}
      </div>
      <p className='article-item-summary'>
        {article.summary}
        {' '}
        <span><a className='read-more' href={article.url}>Read more...</a></span>
      </p>
      <div className='article-item-topics-container'>{topics}</div>
      <div className='article-item-likes-container'>Likes: {article.likesCount}</div>
    </div>
  );
}

export default ArticleItem;