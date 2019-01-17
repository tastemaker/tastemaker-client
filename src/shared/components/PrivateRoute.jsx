
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, isAuthLoading, accessToken, ...rest }) => {

    if (isAuthLoading) return <div />;

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

export default connect((state, ownProps) => ({
    isAuthLoading: state.user.isAuthLoading,
    accessToken: state.user.accessToken
}))(PrivateRoute);