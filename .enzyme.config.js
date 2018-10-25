/**
 * Solves an issue with react-slick and React 16 *
 * https://github.com/akiran/react-slick/issues/958
 */
window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () {},
        removeListener: function () {},
    };
};

// Setup enzyme.
const { configure: configureEnzyme } = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

configureEnzyme({ adapter: new EnzymeAdapter() });
