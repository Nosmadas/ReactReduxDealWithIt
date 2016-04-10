import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import DevTools from './js/devtools/devTools';
import App from './js/components/app';
import Store from './js/createStore';

const renderApp = () => {
    
    render(<Provider store={Store}><div>
        <App />
        <DevTools />
    </div></Provider>, document.getElementById('app'));
};

Store.subscribe(renderApp);
renderApp()