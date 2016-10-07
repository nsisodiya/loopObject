module.exports = function mapObject(obj, cb, sorted) {
  var keys = Object.keys(obj);
  if (sorted === true) {
    keys.sort();
  }
  return keys.map(function (key) {
    return cb(obj[key], key);
  });
};