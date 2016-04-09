import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
import DevTools from './js/devtools/devTools';
import rootReducer from './js/reducers/app';
import App from './js/components/app';

const telemarketers = [
    { name: 'Big Ass', selected: false },
    { name: 'Booty Sweat', selected: false },
    { name: 'Shitty Butters', selected: false },
    { name: 'Buttland', selected: true }];

const territories = [
    { name: "North" },
    { name: "South West", t2: [{ name: "Dorset" }] },
    { name: "South East" }];

const initialState = {
    telemarketers: telemarketers,
    territories: territories
};

const logger = createLogger();
const enhancer = compose(applyMiddleware(logger), DevTools.instrument());
const store = createStore(rootReducer, initialState, enhancer);

const renderApp = () => {
    
    render(<Provider store={store}><div>
        <App />
        <DevTools />
    </div></Provider>, document.getElementById('app'));
};

store.subscribe(renderApp);
renderApp();