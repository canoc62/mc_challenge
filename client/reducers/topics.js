import { 
  FETCH_TOPICS_SUCCESS, CHANGE_TOPICS_FOLLOWING 
} from './../actions/constants';

export function topics(state = {}, action) {
  switch (action.type) {
    case FETCH_TOPICS_SUCCESS:
      const fetchTopicsState = createTopicsState(action.payload.data);
      return fetchTopicsState;
    case CHANGE_TOPICS_FOLLOWING:
      const newState = Object.assign({}, state);
      newState[action.payload['topic_id']]['following'] = !action.payload['following'];
      return newState;
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
