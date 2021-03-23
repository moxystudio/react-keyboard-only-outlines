'use strict';

const { compose, baseConfig } = require('@moxy/jest-config-base');
const { withRTL } = require('@moxy/jest-config-testing-library');

module.exports = compose(
    baseConfig(),
    withRTL(),
);
