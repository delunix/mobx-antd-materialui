import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Router } from "react-router-dom";
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";
import createBrowserHistory from 'history/createBrowserHistory';
import stores from './stores/rootStore';

const browserHistory = createBrowserHistory();
console.log("browserHistory", browserHistory);

const routingStore = new RouterStore();
const history = syncHistoryWithStore(browserHistory, routingStore);

ReactDOM.render(
    <Provider {...stores}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
