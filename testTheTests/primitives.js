var tests = require('./../tests.js');
var write = tests.write;

module.exports = write.testFile(
  write.description('compare primitives should return a boolean')(
    tests.compareYield(
      tests.comparePrimitives('string', 'string'), true)),
  write.description('compare primitives should return true when passed two strings')(
    tests.compareYield(
      tests.comparePrimitives('string', 'string'), true))
);
