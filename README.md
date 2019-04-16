# react-keyboard-outlines

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/react-keyboard-only-outlines
[downloads-image]:https://img.shields.io/npm/dm/react-keyboard-only-outlines.svg
[npm-image]:https://img.shields.io/npm/v/react-keyboard-only-outlines.svg
[travis-url]:https://travis-ci.org/moxystudio/react-keyboard-only-outlines
[travis-image]:http://img.shields.io/travis/moxystudio/react-keyboard-only-outlines/master.svg
[codecov-url]:https://codecov.io/gh/moxystudio/react-keyboard-only-outlines
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/react-keyboard-only-outlines/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/react-keyboard-only-outlines
[david-dm-image]:https://img.shields.io/david/moxystudio/react-keyboard-only-outlines.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/react-keyboard-only-outlines?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/react-keyboard-only-outlines.svg

A component that enables [keyboard-only-outlines](https://github.com/moxystudio/js-keyboard-only-outlines) so that outlines are only visible when using the keyboard.


## Installation

```sh
$ npm install react-keyboard-only-outlines
```

This library is written in modern JavaScript and is published in both CommonJS and ES module transpiled variants. If you target older browsers please make sure to transpile accordingly.


## Usage

You should use this component just once in your project:

```jsx
import KeyboardOnlyOutlines from 'react-keyboard-only-outlines';

<KeyboardOnlyOutlines>
    <MyApp />
</KeyboardOnlyOutlines>
```


## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| stylesheetTarget | DOM Node | Automatic, see below | The DOM node where to insert the stylesheet with styles to disable the outlines |
| styles | string | See [keyboard-only-outlines](https://github.com/moxystudio/js-keyboard-only-outlines) | The styles to apply when a focus event is caused by mouse navigation |

The `stylesheetTarget` is automatically inferred by checking the component's [rootNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/getRootNode). In most cases, this will be `document.head` unless the component is mounted within a shadow root.


## Tests

```sh
$ npm test
$ npm test -- --watch # during development
```


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).
