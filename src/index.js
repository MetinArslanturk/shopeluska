import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './config/configureStore';

const store = configureStore();
export const history = createBrowserHistory();
export const baseHref = '/';

// Prevent deprecated in strictmode console warnings
(() => {
  const oldLogError = console.error
  console.error = function(...args) {
    if (typeof args[0] !== 'string' || args[0].indexOf('is deprecated in StrictMode') === -1) {
      oldLogError.apply(console, args)
    }
  }
})()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router history={history}>
      <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
