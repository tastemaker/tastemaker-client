import 'babel-polyfill'; // This needs to come VERY FIRST so ES6 polyfills will be available in ES5 browsers

import React from 'react';
import { render as ReactDOMRender } from 'react-dom';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import createRootReducer from './shared/state/reducers';
import ThemeProvider from './shared/theme/futura/ThemeProvider';
import App from './screens/App/App';
import analytics from 'services/analytics';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createBrowserHistory();
const store = createStore(
    createRootReducer(history),
    {},
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
);

// Track pageviews for analytics and scroll to
// top of page whenever a new location loads.
history.listen(location => {
    analytics.trackPageView({ location, isInitialPageLoad: false })

    // Opt out of automatic scroll to top on url change.
    if (location.state && location.state.doNotScrollTop) { return; }

    // Scroll to top of viewport.
    window.scrollTo(0, 0);
});

const MOUNT_NODE = document.getElementById('root');

const render = () => {
    ReactDOMRender(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
    );
};

render();
