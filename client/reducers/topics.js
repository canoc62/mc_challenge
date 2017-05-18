import _ from 'lodash';
import { 
  FETCH_TOPICS_SUCCESS, CHANGE_TOPICS_FOLLOWING 
} from './../actions/constants';

export function topics(state = {}, action) {
  switch (action.type) {
    case FETCH_TOPICS_SUCCESS:
      //const fetchTopicsState = _.mapKeys({'topic': action.payload.data, following: true}, ());
      const fetchTopicsState = createTopicsState(action.payload.data);
      console.log('fetchTopicsState:, ', fetchTopicsState);
      return fetchTopicsState;
    case CHANGE_TOPICS_FOLLOWING:
      return state;
    default:
      return state;
  }
}

function createTopicsState(data) {

  const topicsState = {};

  for (let i in data) {
    let newTopicsStateObj = {};
    newTopicsStateObj['topic'] = data[i];
    newTopicsStateObj['following'] = true;
    topicsState[data[i]['id']] = newTopicsStateObj;
  }

  return topicsState;
}
