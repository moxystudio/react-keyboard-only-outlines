const { baseConfig, withRTL, compose } = require('@moxy/jest-config');

module.exports = compose([
    baseConfig,
    withRTL,
]);
