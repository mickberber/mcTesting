var tests = require('./../mcTesting.js');
var write = tests.write;

function callback() {
  return [];
}

function callbackObj() {
  return {};
}

function callbackStr() {
  return 'string';
}

module.exports = write.testFile(
  write.description('isFunction should return false when passed a string')
  (tests.compareYield(
    tests.isFunction('string'), false)),
  write.description('isFunction should return false when passed an array')
    (tests.compareYield(
      tests.isFunction([]), false)),
  write.description('isFunction should return false when passed an object')
    (tests.compareYield(
      tests.isFunction({}), false)),
  write.description('isFunction should return false when passed NaN')
    (tests.compareYield(
      tests.isFunction(NaN), false)),
  write.description('isFunction should return false when passed a number')
    (tests.compareYield(
      tests.isFunction(22), false)),
  write.description('isFunction should return true when passed a function')
    (tests.compareYield(
      tests.isFunction(function(){}), true)),
  write.description('isFunction should return false when passed a callback that returns a string')
    (tests.compareYield(
      tests.isFunction(callback()), false)),
  write.description('isFunction should return false when passed a callback that returns an array')
    (tests.compareYield(
      tests.isFunction(callback()), false)),
  write.description('isFunction should return false when a function returns an object')
    (tests.compareYield(
      tests.isFunction(callbackObj()), false))
);
