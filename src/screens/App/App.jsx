
import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';
import { createGlobalStyle } from "styled-components";

import AppHelmet from 'shared/components/Header/AppHelmet';
import PrivateRoute from 'shared/components/PrivateRoute';
import HomePage from 'screens/HomePage/HomePage';
import StartProject from 'screens/Project/StartProject';
import Signup from './Signup';


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
            // NOTE: Transition groups lead to multiple redirects and the message
            // "You tried to redirect to the same route you're currently on"
            // When used in conjunction with <Redirect /> (q.v. <PrivateRoute />)
            // More details here: https://github.com/ReactTraining/react-router/issues/6076
            // Disabling for now...
            // <TransitionGroup key="transition-group" component={null}>
            //     <CSSTransition 
            //     key={location.key} 
            //     classNames="fade"
            //     timeout={SCREEN_TRANSITION_TIME_MS}>
                    <Switch key="route-switch" location={ location }>
                        <Route exact path="/" component={ HomePage } />
                        <Route exact path="/signup" component={ Signup } />
                        <PrivateRoute path="/project/start" component={ StartProject } />
                        <Route render={() => <div>Not Found</div>} />
                    </Switch>
            //     </CSSTransition>
            // </TransitionGroup>
            ];
    }
}

const mapStateToProps = state =>({
    location: state.router.location
});
const mapDispatchToProps = dispatch =>({});

export default connect(mapStateToProps, mapDispatchToProps)(App);