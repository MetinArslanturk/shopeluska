import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import layoutReducer from '../reducers/layout';
import authReducer from '../reducers/auth';
import productsReducer from '../reducers/products';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
      combineReducers({
        layout: layoutReducer,
        auth: authReducer,
        products: productsReducer
      }),
      composeEnhancers(applyMiddleware(thunk))
    );
  
    return store;
  };
  