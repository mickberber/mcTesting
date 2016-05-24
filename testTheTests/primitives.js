var tests = require('./../tests.js');
var write = tests.write;

module.exports = write.testFile(
  write.description('compare primitives should return true when passed two strings')(
    tests.compareYield(
      tests.comparePrimitives('string', 'string'),
      true)),
  write.description('compare primitives should return false when passed a number and a string')(
    tests.compareYield(
      tests.comparePrimitives(42, 'string'),
      false)),
  write.description('compare primitives should return false when passed a string and object')(
    tests.compareYield(
      tests.comparePrimitives('string', {}),
      false)),
  write.description('compare primitives should return false when passed a number and object')(
    tests.compareYield(
      tests.comparePrimitives(22, {}),
      false)),
  write.description('compare primitives should return false when passed a boolean and object')(
    tests.compareYield(
      tests.comparePrimitives(true, {}),
      false))
);
