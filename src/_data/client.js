module.exports = {
    name: "Fail/Safe Media",
    email: "info@failsafe.media",
    phoneForTel: "603-930-9482",
    phoneFormatted: "(603) 930-9482",
    address: {
        lineOne: "168 S. River Road",
        // lineTwo: "Second Address Line",
        city: "Bedford",
        state: "NH",
        zip: "03110",
        country: "US",
        mapLink: "https://maps.app.goo.gl/6SkJnY3dGWMcUMHJ9",
    },
    socials: {
        facebook: "https://www.facebook.com/profile.php?id=61571369287069",
        instagram: "https://www.instagram.com/failsafe.media",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://failsafe.media",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
