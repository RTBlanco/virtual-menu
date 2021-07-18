import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { restaurantReducer } from './reducers/ManageRestaurant';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';

const store = createStore(restaurantReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

