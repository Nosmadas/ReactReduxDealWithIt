import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware, combineReducers  } from 'redux'
import createLogger from 'redux-logger';
import DevTools from './js/devtools/devTools';
import App from './js/components/app';
import reducer from './js/reducers/selectedTelemarketerReducer';

const logger = createLogger();
const enhancer = compose(applyMiddleware(logger), DevTools.instrument());
const initialState = { telemarketers: [] }
const store = createStore(reducer, initialState, enhancer);

const renderApp = () => {
    render(<Provider store={store}>
        <div>
            <App />
            <DevTools />
        </div>
    </Provider>, document.getElementById('app'));
};

store.subscribe(renderApp);
renderApp();