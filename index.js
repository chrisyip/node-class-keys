'use strict'

const union = require('array-union')

module.exports = obj => {
  if (obj == null) {
    throw new TypeError('`obj` cannot be an undefined or null')
  }

  const prototype = Object.getPrototypeOf(obj)

  return union(
    Object.getOwnPropertyNames(obj),
    Object.getOwnPropertyNames(prototype),
    Object.getOwnPropertySymbols(prototype)
  )
}
