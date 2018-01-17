var config = require('../')
var test = require('ava')

test('test basic properties of config', function (t) {
  t.truthy(isObject(config.parserOptions))
  t.truthy(isObject(config.env))
  t.truthy(isObject(config.globals))
  t.truthy(isObject(config.rules))
})

function isObject (obj) {
  return typeof obj === 'object' && obj !== null
}
