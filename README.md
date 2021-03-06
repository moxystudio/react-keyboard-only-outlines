# react-keyboard-only-outlines

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/react-keyboard-only-outlines
[downloads-image]:https://img.shields.io/npm/dm/@moxy/react-keyboard-only-outlines.svg
[npm-image]:https://img.shields.io/npm/v/@moxy/react-keyboard-only-outlines.svg
[build-status-url]:https://github.com/moxystudio/react-keyboard-only-outlines/actions
[build-status-image]:https://img.shields.io/github/workflow/status/moxystudio/react-keyboard-only-outlines/Node%20CI/master
[codecov-url]:https://codecov.io/gh/moxystudio/react-keyboard-only-outlines
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/react-keyboard-only-outlines/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/react-keyboard-only-outlines
[david-dm-image]:https://img.shields.io/david/moxystudio/react-keyboard-only-outlines.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/react-keyboard-only-outlines?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/react-keyboard-only-outlines.svg

A component that enables [keyboard-only-outlines](https://github.com/moxystudio/js-keyboard-only-outlines) so that outlines are only visible when using the keyboard.


## Installation

```sh
$ npm install @moxy/react-keyboard-only-outlines
```

This library is written in modern JavaScript and is published in both CommonJS and ES module transpiled variants. If you target older browsers please make sure to transpile accordingly.


## Usage

You should use this component just once in your project:

```jsx
import KeyboardOnlyOutlines from '@moxy/react-keyboard-only-outlines';

<KeyboardOnlyOutlines>
    <MyApp />
</KeyboardOnlyOutlines>
```


## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| stylesheetTarget | DOM Node | See [keyboard-only-outlines](https://github.com/moxystudio/js-keyboard-only-outlines) | The DOM node where to insert the stylesheet with styles to disable the outlines |
| styles | string | See [keyboard-only-outlines](https://github.com/moxystudio/js-keyboard-only-outlines) | The styles to apply when a focus event is caused by mouse navigation |


## Tests

```sh
$ npm test
$ npm test -- --watch # during development
```


## License

Released under the [MIT License](https://www.opensource.org/licenses/mit-license.php).
