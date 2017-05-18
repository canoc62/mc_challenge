import { 
  FETCH_ARTICLES, FETCH_ARTICLES_SUCCESS , FETCH_ARTICLES_FAIL,
  FETCH_TOPICS, FETCH_TOPICS_SUCCESS, FETCH_TOPICS_FAIL 
} from './constants';

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