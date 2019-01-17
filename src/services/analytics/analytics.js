
import * as google from './google';
import * as amplitude from './amplitude';


export const trackPageView = ({location, isInitialPageLoad}) => {

    // Google and FB pixels/tags fire their own pageviews on inital load.
    if (!isInitialPageLoad) {
        google.trackPageView(location);
        // facebook pixel automatically tracks all page views except on init
        // we can disable this, but may lose some features
        // "You should leave the listener on and let it track PageViews when you SPA's URL changes.
        // This Facebook Pixel feature also manages the referrers and URLs so you can also use and
        // track Custom URL conversions."
        // source: https://developers.facebook.com/ads/blog/post/2017/05/29/tagging-a-single-page-application-facebook-pixel
        // modsyFacebook.trackPageView(location);
    }
}

export const trackSignup = (user) => {
    amplitude.trackSignup(user);
}

export const trackLogin = (user) => {
    amplitude.trackLogin(user);
}