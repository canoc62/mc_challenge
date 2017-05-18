import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { ROOT_API_URL, FETCH_ARTICLE, FETCH_ARTICLES, FETCH_TOPICS } from './../actions/constants';
import {
  fetchArticleSuccess, fetchArticleFail,
  fetchArticlesSuccess, fetchArticlesFail,
  fetchTopicsSuccess, fetchTopicsFail
 } from './../actions/actions';

export function* getArticle({ article_id }) {
  try {
    console.log('fetch single article');
    const article_response = yield call(axios.get, `${ROOT_API_URL}articles/${article_id}.json`);
    yield put(fetchArticleSuccess(article_response.data));
  } catch (e) {
    console.log('Error in fetching article:', e);
    yield put(fetchArticleFail());
  }
}

export function* watchGetArticle() {
  yield takeEvery(FETCH_ARTICLE, getArticle);
}

export function* getArticles() {
  try {
    const articles_response = yield call(axios.get, `${ROOT_API_URL}articles.json`);
    yield put(fetchArticlesSuccess(articles_response.data));
  } catch (e) {
    console.log('Error in fetching articles:', e);
    yield put(fetchArticlesFail());
  }
}

export function* watchGetArticles() {
  yield takeEvery(FETCH_ARTICLES, getArticles);
}

export function* getTopics() {
  try {
    const topics_response = yield call(axios.get, `${ROOT_API_URL}topics.json`);
    yield put(fetchTopicsSuccess(topics_response.data));
  } catch (e) {
    console.log('Error in fetching topics:', e);
    yield put(fetchTopicsFail());
  }
}

export function* watchGetTopics() {
  yield takeEvery(FETCH_TOPICS, getTopics);
}

export default function* rootSaga() {
  yield [
    watchGetArticle(),
    watchGetArticles(),
    watchGetTopics(),
  ]
}