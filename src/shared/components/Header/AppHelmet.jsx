
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';

import { GOOGLE_ANALYTICS_ID } from "config/app";
import analytics from 'services/analytics';


class AppHelmet extends Component {

    componentDidMount() {
        const { location } = this.props;
        analytics.trackPageView({
            location: location,
            isInitialPageLoad: true
        });
    }

    render() {
        return (
            <Helmet key="mainHelmet">
                <title>Tastemaker</title>

                <script src="https://www.google.com/recaptcha/api.js" async defer></script>

                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-32679143-1"></script>
                <script>{`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', '${GOOGLE_ANALYTICS_ID}');
                `}</script>

                <link rel="stylesheet" href="https://use.typekit.net/aor1pcz.css" />
            </Helmet>
            );
    }
}

const mapStateToProps = state => ({
    location: state.router.location
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHelmet);