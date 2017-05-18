import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { ROOT_API_URL, FETCH_ARTICLES, FETCH_TOPICS } from './../actions/constants';
import { 
  fetchArticlesSuccess, fetchArticlesFail,
  fetchTopicsSuccess, fetchTopicsFail
 } from './../actions/actions';

export function* getArticles() {
  try {
    console.log('...about to fetch articles');
    const articles_response = yield call(axios.get, `${ROOT_API_URL}articles.json`);
    yield put(fetchArticlesSuccess(articles_response.data));
  } catch (e) {
    console.log('error in fetching articles:', e);
    yield put(fetchArticlesFail());
  }
}

export function* watchGetArticles() {
  console.log('watching for async in sagas');
  yield takeEvery(FETCH_ARTICLES, getArticles);
}

export function* getTopics() {
  try {
    console.log('...about to fetch topics');
    const topics_response = yield call(axios.get, `${ROOT_API_URL}topics.json`);
    yield put(fetchTopicsSuccess(topics_response.data));
  } catch (e) {
    console.log('error in fetching topics:', e);
    yield put(fetchTopicsFail());
  }
}

export function* watchGetTopics() {
  console.log('watching for async in sagas');
  yield takeEvery(FETCH_TOPICS, getTopics);
}

export default function* rootSaga() {
  yield [
    watchGetArticles(),
    watchGetTopics()
  ]
}