var tests = require('./../mcTesting.js');
var write = tests.write;

function callback() {
  return [];
}

function callbackObj() {
  return {};
}

module.exports = write.testFile(
  write.description('isObject should return true when passed an Object')
    (tests.isObject({})),
  write.description('isObject should return false when passed a string')
    (tests.compareYield(
      tests.isObject('string'), false)),
  write.description('isObject should return true when passed an array')
    (tests.compareYield(
      tests.isObject([]), true)),
  write.description('isObject should return false when passed NaN')
    (tests.compareYield(
      tests.isObject(NaN), false)),
  write.description('isObject should return false when passed a number')
    (tests.compareYield(
      tests.isObject(22), false)),
  write.description('isObject should return false when passed a function')
    (tests.compareYield(
      tests.isObject(function(){}), false)),
  write.description('isObject should return true when passed a callback that returns an array')
    (tests.compareYield(
      tests.isObject(callback()), true)),
  write.description('isObject should return true when a function returns an object')
    (tests.compareYield(
      tests.isObject(callbackObj()), true))
);
