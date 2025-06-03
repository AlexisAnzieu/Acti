const path = require("path");

module.exports = {
    i18n: {
        locales: ["en", "fr"],
        defaultLocale: "en",
        localeDetection: false,
        localePath: path.resolve("./public/locales"),
    },
};
