import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Frame from './containers/frame';

export default function () {
    return (
        <Router history={ createHistory() }>
            <Switch>
                <Route path="/" component={ Frame } />
            </Switch>
        </Router>
    );
}
