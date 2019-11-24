import { Component } from 'react';
import PropTypes from 'prop-types';
import shallowEqual from 'shallowequal';
import keyboardOnlyOutlines from '@moxy/keyboard-only-outlines';

export default class KeyboardOnlyOutlines extends Component {
    static propTypes = {
        children: PropTypes.node,
        stylesheetTarget: PropTypes.object,
        styles: PropTypes.string,
    };

    static defaultProps = {
        children: null,
    };

    keyboardOutlinesOptions;

    componentDidMount() {
        this.applyKeyboardOutlines();
    }

    componentDidUpdate() {
        this.applyKeyboardOutlines();
    }

    componentWillUnmount() {
        this.disposeKeyboardOutlines();
    }

    render() {
        return this.props.children;
    }

    applyKeyboardOutlines() {
        const { stylesheetTarget, styles } = this.props;

        const options = { stylesheetTarget, styles };

        // Skip if nothing changed
        if (shallowEqual(options, this.keyboardOutlinesOptions)) {
            return;
        }

        this.keyboardOutlinesOptions = options;

        this.disposeKeyboardOutlines();
        this.dispose = keyboardOnlyOutlines(options);
    }

    disposeKeyboardOutlines() {
        if (this.dispose) {
            this.dispose();
            this.dispose = undefined;
        }
    }
}
