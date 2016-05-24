var tests = require('./../mcTesting.js');
var write = tests.write;

module.exports = write.testFile(
  write.description('compareObjects should return true when passed two objects')(
    tests.compareYield(
      tests.compareObjects({}, {}),
      true)),
  write.description('compareObjects should return false when passed an object and a string')(
    tests.compareYield(
      tests.compareObjects('string', {}),
      false)),
  write.description('compareObjects should return false when passed an object and a number')(
    tests.compareYield(
      tests.compareObjects(42, {}),
      true))
);
