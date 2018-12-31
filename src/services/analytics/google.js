
export const trackPageView = (location) => {
    if (window.gtag) {
        window.gtag('set', {'page_path': location.pathname + location.search});
        window.gtag('event', 'page_view', {
            'page_path': location.pathname
        });
    }
};