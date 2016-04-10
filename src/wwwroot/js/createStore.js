import { createStore, compose, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from './reducers/app';
import DevTools from './devtools/devTools';
import InitialState from './initialState';

const logger = createLogger();
const enhancer = compose(applyMiddleware(logger), DevTools.instrument());
const store = createStore(rootReducer, InitialState, enhancer);

export default store;