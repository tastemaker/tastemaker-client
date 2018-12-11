
import React, { Component } from "react";
import { Helmet } from "react-helmet";

import { GOOGLE_ANALYTICS_ID } from "config/app";


export default class AppHelmet extends Component {

    render() {
        return (
            <Helmet key="mainHelmet">
                <title>Tastemaker</title>

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