var tests = require('./../mcTesting.js');
var write = tests.write;

module.exports = write.testFile(
  write.description('compareYield should return true when given two equal values')(
    tests.compareYield(tests.compareYield(true, true), true)),
  write.description('compareYield should return false when given two non equal values')(
    tests.compareYield(tests.compareYield(true, false), false)),
  write.description('compareYield should return true when given two equal numbers')(
    tests.compareYield(tests.compareYield(11, 11), true)),
  write.description('compareYield should return false when given two non equal numbers')(
    tests.compareYield(tests.compareYield(11, 22), false)),
  write.description('compareYield should return true when given two undefined values')(
    tests.compareYield(tests.compareYield(undefined, undefined), true))
);
