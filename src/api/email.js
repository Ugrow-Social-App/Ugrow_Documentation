// Email API
// settings
emailjs.init({
    publicKey: EMAIL_CONFIG.PUBLIC_KEY,
    limitRate: {
        throttle: 10000
    }
});

// Send email
window.sendContactEmail = function(form) {

    return emailjs.sendForm(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        form
    );

};