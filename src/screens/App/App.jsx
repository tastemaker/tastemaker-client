
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import HomePage from '../HomePage/HomePage';
import StartProject from '../Project/StartProject';
import AppHelmet from '../../shared/header/AppHelmet';


export default class App extends Component {

    render() {
        return [
            <AppHelmet key="app-helmet" />,
            <Switch key="router-switch">
                <Route exact path="/" component={ HomePage } />
                <Route path="/project/start" component={ StartProject } />
            </Switch>
            ];
    }
}