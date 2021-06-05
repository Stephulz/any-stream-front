import { applyMiddleware, compose, createStore } from 'redux';
import { reducers } from '../reducers'
import thunk from 'redux-thunk';

const middlewares = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(...middlewares)))

export { store };


