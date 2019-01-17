
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { connect } from 'react-redux';

import { GOOGLE_ANALYTICS_ID, AMPLITUDE_ID } from "config/app";
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

                <script type="text/javascript">{`
                    (function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script")
                    ;r.type="text/javascript";r.async=true
                    ;r.src="https://cdn.amplitude.com/libs/amplitude-4.4.0-min.gz.js"
                    ;r.onload=function(){if(e.amplitude.runQueuedFunctions){
                    e.amplitude.runQueuedFunctions()}else{
                    console.log("[Amplitude] Error: could not load SDK")}}
                    ;var i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)
                    ;function s(e,t){e.prototype[t]=function(){
                    this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}
                    var o=function(){this._q=[];return this}
                    ;var a=["add","append","clearAll","prepend","set","setOnce","unset"]
                    ;for(var u=0;u<a.length;u++){s(o,a[u])}n.Identify=o;var c=function(){this._q=[]
                    ;return this}
                    ;var l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"]
                    ;for(var p=0;p<l.length;p++){s(c,l[p])}n.Revenue=c
                    ;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"]
                    ;function v(e){function t(t){e[t]=function(){
                    e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}
                    for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){
                    e=(!e||e.length===0?"$default_instance":e).toLowerCase()
                    ;if(!n._iq.hasOwnProperty(e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]}
                    ;e.amplitude=n})(window,document);

                    amplitude.getInstance().init("${AMPLITUDE_ID}", null, {
                        includeUtm: true,
                        includeReferrer: true,
                        includeGclid: true
                    }, function() {

                        if (amplitude.getInstance().isNewSession()) {
                            amplitude.getInstance().logEvent("First View", {
                                location: window.location.pathname
                            });
                        }
                    });
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