import React from 'react';
import { render } from '@testing-library/react';
import keyboardOnlyOutlines from '@moxy/keyboard-only-outlines';
import KeyboardOnlyOutlines from '../src';

jest.mock('@moxy/keyboard-only-outlines', () => jest.fn(() => jest.fn()));

afterEach(() => {
    jest.clearAllMocks();
});

it('should call keyboardOnlyOutlines on mount', () => {
    render(<KeyboardOnlyOutlines>Child</KeyboardOnlyOutlines>);

    expect(keyboardOnlyOutlines).toHaveBeenCalledTimes(1);
    expect(keyboardOnlyOutlines).toHaveBeenCalledWith({});
});

it('should dispose keyboardOnlyOutlines on unmount', () => {
    const { unmount } = render(<KeyboardOnlyOutlines>Child</KeyboardOnlyOutlines>);

    unmount();

    const dispose = keyboardOnlyOutlines.mock.results[0].value;

    expect(dispose).toHaveBeenCalledTimes(1);
});

it('should not reapply keyboardOnlyOutlines if nothing changed when rerendering', () => {
    const { rerender } = render(<KeyboardOnlyOutlines>Child</KeyboardOnlyOutlines>);

    const dispose = keyboardOnlyOutlines.mock.results[0].value;

    rerender(<KeyboardOnlyOutlines>Child</KeyboardOnlyOutlines>);

    expect(keyboardOnlyOutlines).toHaveBeenCalledTimes(1);
    expect(dispose).toHaveBeenCalledTimes(0);
});

it('should reapply keyboardOnlyOutlines if styles prop changed', () => {
    const { rerender } = render(<KeyboardOnlyOutlines>Child</KeyboardOnlyOutlines>);

    const dispose = keyboardOnlyOutlines.mock.results[0].value;

    rerender(<KeyboardOnlyOutlines styles="">Child</KeyboardOnlyOutlines>);

    expect(keyboardOnlyOutlines).toHaveBeenCalledTimes(2);
    expect(keyboardOnlyOutlines).toHaveBeenCalledWith({ styles: '' });
    expect(dispose).toHaveBeenCalledTimes(1);
});

it('should reapply keyboardOnlyOutlines if stylesheetTarget prop changed', () => {
    const { rerender } = render(<KeyboardOnlyOutlines>Child</KeyboardOnlyOutlines>);

    const dispose = keyboardOnlyOutlines.mock.results[0].value;

    rerender(<KeyboardOnlyOutlines stylesheetTarget={ document.body }>Child</KeyboardOnlyOutlines>);

    expect(keyboardOnlyOutlines).toHaveBeenCalledTimes(2);
    expect(keyboardOnlyOutlines).toHaveBeenCalledWith({ stylesheetTarget: document.body });
    expect(dispose).toHaveBeenCalledTimes(1);
});

it('should not reapply if children prop changed but target node staid the same', () => {
    const { rerender } = render(<KeyboardOnlyOutlines>Child</KeyboardOnlyOutlines>);

    rerender(<KeyboardOnlyOutlines>Foo</KeyboardOnlyOutlines>);

    expect(keyboardOnlyOutlines).toHaveBeenCalledTimes(1);
});
