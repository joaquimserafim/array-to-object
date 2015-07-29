'use strict'

var test      = require('tape')
var isObject  = require('is-js-object')

var arrToObj = require('./')

test('get two arrays and transform into an object', function (assert) {
  var keys    = ['moe', 'larry', 'curly', 2014]
  var values  = [30, 40, 50, {month: 'May', day: 17}]
  var object  = arrToObj(keys, values)

  assert.deepEqual(isObject(object), true, 'should return a valid object!')
  assert.end()
})

test('get two arrays and transform into an object but the `values` array ' +
'have few elements than the `keys` array',
function (assert) {
  var keys    = ['moe', 'larry', 'curly', 2014]
  var values  = [30, 40, 50]
  var object  = arrToObj(keys, values)

  assert.deepEqual(isObject(object), true, 'should return a valid object!')
  assert.end()
})

test('one of the arrays is null then should fail and return null',
function (assert) {
  var keys    = ['moe', 'larry', 'curly', 2014]
  var values  = null

  var object = arrToObj(keys, values)
  assert.deepEqual(object, undefined, 'should return `undefined`!')
  assert.end()
})
