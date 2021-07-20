import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import rootReducer from './reducers/ManageRestaurant';
import Modal from 'react-modal'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';

const store = createStore(rootReducer, applyMiddleware(thunk))

Modal.setAppElement('#root')
 
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

