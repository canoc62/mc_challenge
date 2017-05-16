import axios from 'axios';
import { ROOT_API_URL, FETCH_ARTICLES } from './constants';

export function fetchArticles() {

  const request = axios.get(`${ROOT_URL}/articles.json`);

  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: 'FETCH_ARTICLES' });
    });
  }
}