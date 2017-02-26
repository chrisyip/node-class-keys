# node-class-keys

[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Travis CI][travis-image]][travis-url] [![codecov][codecov-image]](codecov-url)

Get keys of an instance of any class. Uses `Object.getOwnPropertyNames` and `Object.getOwnPropertySymbols`.

Usage:

```
npm i class-keys
```

```js
import classKeys from 'class-keys'

const keys = classKeys(instance)
```

## Why?

Because:

```
class Foo {
  constructor () {
    this.baz = 'baz'
  }
  bar () {}
  [Symbol.for('foo')] () {}
}
const foo = new Foo()
Object.keys(foo) // []
Object.getOwnPropertyNames(foo) // []
Object.getOwnPropertySymbols(foo) // []
```

With `class-keys`:

```
class Foo {
  constructor () {
    this.baz = 'baz'
  }
  bar () {}
  [Symbol.for('foo')] () {}
}
const foo = new Foo()
classKeys(foo) // ['baz', 'constructor', 'bar', Symbol(foo)]
```

## Warning

**`class-keys` uses instance's prototype to detect non-enumerable properties, so results may not match your expectation.**

```js
classKeys({}) // [ '__defineGetter__', '__defineSetter__', 'hasOwnProperty', '__lookupGetter__', '__lookupSetter__', 'propertyIsEnumerable', 'constructor', 'toString', 'toLocaleString', 'valueOf', 'isPrototypeOf', '__proto__']

classKeys(new Date()) // ['constructor', 'toString', 'toDateString', 'toTimeString', ... 'toLocaleDateString', 'toLocaleTimeString', Symbol(Symbol.toPrimitive)]
```

[npm-url]: https://npmjs.org/package/class-keys
[npm-image]: http://img.shields.io/npm/v/class-keys.svg?style=flat-square
[daviddm-url]: https://david-dm.org/chrisyip/node-class-keys
[daviddm-image]: http://img.shields.io/david/chrisyip/node-class-keys.svg?style=flat-square
[travis-url]: https://travis-ci.org/chrisyip/node-class-keys
[travis-image]: http://img.shields.io/travis/chrisyip/node-class-keys.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/chrisyip/node-class-keys
[codecov-image]: https://img.shields.io/codecov/c/github/chrisyip/node-class-keys.svg?style=flat-square
