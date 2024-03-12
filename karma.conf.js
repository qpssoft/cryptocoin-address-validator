// Karma configuration
module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['mocha', 'chai'],

        files: [
            'dist/crypto-coin-address-validators.min.js',
            'test/**/*.js'
        ],

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        browsers: ['ChromeHeadless'],

        singleRun: true,

        concurrency: Infinity
    })
};
