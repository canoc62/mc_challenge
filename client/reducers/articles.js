import FETCH_ARTICLES from './../actions/constants';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_ARTICLES:

      return state;
    default:
      return state;
  }
}