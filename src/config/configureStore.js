import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import layoutReducer from '../reducers/layout';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
      combineReducers({
        layout: layoutReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
    );
  
    return store;
  };
  