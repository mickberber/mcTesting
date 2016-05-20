var tests = require('./../tests.js');
var write = tests.write;

function callback() {
  return [];
}

function callbackObj() {
  return {};
}

module.exports = write.testFile(
  write.description('isArray should return true when passed an array')
    (tests.isArray([])),
  write.description('isArray should return false when passed a string')
    (tests.compareYield(
      tests.isArray('string'), false)),
  write.description('isArray should return false when passed an object')
    (tests.compareYield(
      tests.isArray({}), false)),
  write.description('isArray should return false when passed NaN')
    (tests.compareYield(
      tests.isArray(NaN), false)),
  write.description('isArray should return false when passed a number')
    (tests.compareYield(
      tests.isArray(22), false)),
  write.description('isArray should return false when passed a function')
    (tests.compareYield(
      tests.isArray(function(){}), false)),
  write.description('isArray should return true when passed a callback that returns an array')
    (tests.compareYield(
      tests.isArray(callback()), true)),
  write.description('isArray should return false when a function returns an object')
    (tests.compareYield(
      tests.isArray(callbackObj()), false))
);
