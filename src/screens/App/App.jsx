
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';
import { createGlobalStyle } from "styled-components";

import HomePage from 'screens/HomePage/HomePage';
import StartProject from 'screens/Project/StartProject';
import AppHelmet from 'shared/components/Header/AppHelmet';


const SCREEN_TRANSITION_TIME_MS = 100;

const GlobalStyle = createGlobalStyle`
    .fade-enter {
        opacity: 0;
    }

    .fade-enter.fade-enter-active {
        opacity: 1;
        transition: opacity ${SCREEN_TRANSITION_TIME_MS}ms ease-out;
        z-index: 2;
    }

    .fade-exit.fade-exit-active {
        z-index: 1;
    }
`;

class App extends Component {

    render() {
        const { location } = this.props;
        return [
            <AppHelmet key="app-helmet" />,
            <GlobalStyle key="fade-styles" />,
            <TransitionGroup key="transition-group" component={null}>
                <CSSTransition 
                key={location.key} 
                classNames="fade"
                timeout={SCREEN_TRANSITION_TIME_MS}>
                    <Switch location={ location }>
                        <Route exact path="/" component={ HomePage } />
                        <Route path="/project/start" component={ StartProject } />
                        <Route render={() => <div>Not Found</div>} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
            ];
    }
}

const mapStateToProps = state =>({
    location: state.router.location
});
const mapDispatchToProps = dispatch =>({});

export default connect(mapStateToProps, mapDispatchToProps)(App);