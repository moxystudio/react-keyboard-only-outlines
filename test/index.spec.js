import keyboardOnlyOutlines from 'keyboard-only-outlines';
import React from 'react';
import { mount } from 'enzyme';
import Component from '../index';

jest.mock('keyboard-only-outlines', () => jest.fn(() => jest.fn()));

let mountedTree;

afterAll(() => {
    mountedTree = null;
});

it('renders the component and calls the keyboardOnlyOutlines constructor', () => {
    jest.spyOn(Component.prototype, 'componentDidMount');
    mountedTree = mount(<Component>Child</Component>);

    expect(mountedTree.find(Component)).toHaveLength(1);

    expect(Component.prototype.componentDidMount).toHaveBeenCalled();
    expect(keyboardOnlyOutlines).toHaveBeenCalled();
});

it('calls the keyboardOnlyOutlines destructor', () => {
    jest.spyOn(Component.prototype, 'componentWillUnmount');
    mountedTree = mount(<Component>Child</Component>);

    const dispose = mountedTree.instance().dispose;

    mountedTree.unmount();

    expect(Component.prototype.componentWillUnmount).toHaveBeenCalled();
    expect(dispose).toHaveBeenCalled();
});

it('instantiates the component with the correct props', () => {
    mountedTree = mount(<Component styles="body { background-color: green; }" stylesheetTarget={ document.body }>Child</Component>);

    expect(mountedTree.instance().props.styles).toBe('body { background-color: green; }');
    expect(mountedTree.instance().props.stylesheetTarget).toBe(document.body);
});

it('throws when a DOM node is not found', () => {
    expect(() => { mount(<Component />); }).toThrow();
});
