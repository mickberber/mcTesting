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
  write.description('isString should return true when passed a string')
  (tests.compareYield(
    tests.isString('string'), true)),
  write.description('isString should return false when passed an array')
    (tests.compareYield(
      tests.isString([]), false)),
  write.description('isString should return false when passed an object')
    (tests.compareYield(
      tests.isString({}), false)),
  write.description('isString should return false when passed NaN')
    (tests.compareYield(
      tests.isString(NaN), false)),
  write.description('isString should return false when passed a number')
    (tests.compareYield(
      tests.isString(22), false)),
  write.description('isString should return false when passed a function')
    (tests.compareYield(
      tests.isString(function(){}), false)),
  write.description('isString should return false when passed a callback that returns a string')
    (tests.compareYield(
      tests.isString(callback()), false)),
  write.description('isString should return false when passed a callback that returns an array')
    (tests.compareYield(
      tests.isString(callback()), false)),
  write.description('isString should return false when a function returns an object')
    (tests.compareYield(
      tests.isString(callbackObj()), false))
);
