var test = require('tape');

var arrToObj = require('./');

function isObject (obj) {
  return obj === Object(obj) && !Array.isArray(obj);
}

test('transform an array into an object', function (t) {
  t.plan(1);

  var array = ['moe', 'larry', 'curly', 2014];
  var values = [30, 40, 50, {month: 'May', day: 17}];
  var object = arrToObj(array, values);

  t.ok(object, isObject(object), 'should return a valid object!');
});


test('one of args is null then should fail and return null', function (t) {
  t.plan(1);

  var array = ['moe', 'larry', 'curly', 2014];
  var values = null;

  var object = arrToObj(array, values);
  t.deepEqual(object, null, 'should return `null`!');
});
