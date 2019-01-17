

export const trackSignup = (user) => {

    if (!window.amplitude) return;

    window.amplitude.getInstance().setUserId(user.id);
    window.amplitude.getInstance().setUserProperties({email: user.email});
    window.amplitude.getInstance().logEvent("Sign Up");
};

export const trackLogin = (user) => {

    if (!window.amplitude) return;

    window.amplitude.getInstance().setUserId(user.id);
    window.amplitude.getInstance().setUserProperties({email: user.email});
    window.amplitude.getInstance().logEvent("Log In");
}