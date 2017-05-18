import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index';
import App from './components/App';
import rootSaga from './sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

//const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('app-container')
);