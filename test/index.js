'use strict'

const test = require('tape')
const classKeys = require('..')
const arrayDiff = require('array-diff-array')

test('should work', t => {
  class Foo {
    constructor () {
      this.foobar = 'foobar'
    }

    bar () {}
    get baz () { return 'baz' }
  }

  t.equal(arrayDiff(classKeys(new Foo()), ['foobar', 'constructor', 'bar', 'baz']).length, 0)

  class Bar extends Foo {
    bbar () {}
  }

  t.equal(arrayDiff(classKeys(new Bar()), ['foobar', 'constructor', 'bbar']).length, 0)

  function Baz () {
    this.baz = 'baz'
    this.foo = function () {}

    Object.defineProperty(this, 'bar', {})
  }

  t.equal(arrayDiff(classKeys(new Baz()), ['baz', 'foo', 'bar', 'constructor']).length, 0)

  t.throws(() => classKeys(), '`obj` cannot be an undefined or null')

  t.end()
})
