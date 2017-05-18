import _ from 'lodash';
import { FETCH_TOPICS_SUCCESS } from './../actions/constants';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_TOPICS_SUCCESS:
      const fetchTopicsState = _.mapKeys(action.payload.data, 'id');
      return fetchTopicsState;
    default:
      return state;
  }
}
