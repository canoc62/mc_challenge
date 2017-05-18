import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import App from './components/App';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

// const Hello = () => {
//   return (
//     <div> Hello </div>
//   );
// }=

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <div>
        {/*<Switch>
          <Route exact path='/' component={App} />
          <Route path='/hello' component={Hello} />
        </Switch>*/}
        <App />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app-container')
);