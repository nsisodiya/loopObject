module.exports = function mapObject(obj, callback) {
  Object.keys(obj).forEach(function (key) {
    callback(obj[key], key);
  });
};