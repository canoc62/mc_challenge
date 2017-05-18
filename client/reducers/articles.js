import _ from 'lodash';
import { 
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLES_SUCCESS
} from './../actions/constants';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLE_SUCCESS:
    console.log('action: ', action);
      console.log('article state: ', state);
      const fetchArticleState = Object.assign({}, state);
      console.log('action.payload.data[0].id', action.payload.data[0].id);
      fetchArticleState[action.payload.data[0].id] = action.payload.data[0];
      console.log('after fetching single article:', fetchArticleState[action.payload.id]);
      return fetchArticleState;
    case FETCH_ARTICLES_SUCCESS:
      const fetchArticlesState = _.mapKeys(action.payload.data, 'id');
      return fetchArticlesState;
    default:
      return state;
  }
}