module.exports = arrToObj;

// array-to-object
function arrToObj (array, values) {
  if (!Array.isArray(array) || !Array.isArray(values))
    return null;

  var res = {};
  array.forEach(function (ele) {
    if (!values.length) return;
    res[ele] = values.shift();
  });
  return res;
}
