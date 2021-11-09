const path = require('path')

module.exports = {
    i18n: {
        locales: ['default', 'en', 'fr'],
        defaultLocale: 'default',
        localeDetection: false,
        localePath: path.resolve('./public/static/locales')
    }
};