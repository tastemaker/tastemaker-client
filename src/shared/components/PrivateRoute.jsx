
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, isAuthLoading, accessToken, ...rest }) => {

    if (isAuthLoading) return <div />;

    // Juan remove
    console.log("Redirecting");
    console.log(rest);

    return (
        <Route
            {...rest}
            render={ props =>
                accessToken 
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/signup', state: { from: props.location }}} />
            }
        />
    );
};

export default connect(state => ({
    isAuthLoading: state.user.isAuthLoading,
    accessToken: state.user.accessToken
}))(PrivateRoute);