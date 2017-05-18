import { combineReducers } from 'redux';
import articles from './articles';
import { topics } from './topics';

const rootReducer = combineReducers({
  articles,
  topics: topics
});

export default rootReducer;