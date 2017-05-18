import { 
  FETCH_ARTICLE, FETCH_ARTICLE_SUCCESS , FETCH_ARTICLE_FAIL,
  FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS , FETCH_ARTICLES_FAIL,
  FETCH_TOPICS, FETCH_TOPICS_SUCCESS, FETCH_TOPICS_FAIL,
  CHANGE_TOPICS_FOLLOWING
} from './constants';

export function fetchArticle(article_id) {
  return {
    type: FETCH_ARTICLE,
    article_id
  }
}

export function fetchArticleSuccess(data) {
  return {
    type: FETCH_ARTICLE_SUCCESS,
    payload: data
  }
}

export function fetchArticleFail() {
  return {
    type: FETCH_ARTICLE_FAIL
  }
}

export function fetchArticles() {
  return {
    type: FETCH_ARTICLES
  }
}

export function fetchArticlesSuccess(data) {
  return {
    type: FETCH_ARTICLES_SUCCESS,
    payload: data
  }
}

export function fetchArticlesFail() {
  return {
    type: FETCH_ARTICLES_FAIL
  }
}

export function fetchTopics() {
  return {
    type: FETCH_TOPICS
  }
}

export function fetchTopicsSuccess(data) {
  return {
    type: FETCH_TOPICS_SUCCESS,
    payload: data
  }
}

export function fetchTopicsFail() {
  return {
    type: FETCH_TOPICS_FAIL
  }
}

export function changeTopicsFollowing(id, following) {
  return {
    type: CHANGE_TOPICS_FOLLOWING,
    payload: { 'topic_id': id, 'following': following }
  }
}