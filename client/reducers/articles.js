import _ from 'lodash';
import { FETCH_ARTICLES_SUCCESS } from './../actions/constants';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      const fetchArticlesState = _.mapKeys(action.payload.data, 'id');
      return fetchArticlesState;
    default:
      return state;
  }
}