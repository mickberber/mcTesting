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
  write.description('isNumber should return true when passed a string')
  (tests.compareYield(
    tests.isNumber('string'), false)),
  write.description('isNumber should return false when passed an array')
    (tests.compareYield(
      tests.isNumber([]), false)),
  write.description('isNumber should return false when passed an object')
    (tests.compareYield(
      tests.isNumber({}), false)),
  write.description('isNumber should return true when passed NaN')
    (tests.compareYield(
      tests.isNumber(NaN), true)),
  write.description('isNumber should return true when passed a number')
    (tests.compareYield(
      tests.isNumber(22), true)),
  write.description('isNumber should return false when passed a function')
    (tests.compareYield(
      tests.isNumber(function(){}), false)),
  write.description('isNumber should return false when passed a callback that returns a string')
    (tests.compareYield(
      tests.isNumber(callback()), false)),
  write.description('isNumber should return false when passed a callback that returns an array')
    (tests.compareYield(
      tests.isNumber(callback()), false)),
  write.description('isNumber should return false when a function returns an object')
    (tests.compareYield(
      tests.isNumber(callbackObj()), false))
);
