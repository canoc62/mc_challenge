import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { ROOT_API_URL, FETCH_ARTICLES } from './../actions/constants';
import { fetchArticlesSuccess, fetchArticlesFail } from './../actions/actions';

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

export default function* rootSaga() {
  yield [
    watchGetArticles()
  ]
}