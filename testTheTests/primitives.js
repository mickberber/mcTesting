var tests = require('./../tests.js');
var write = tests.write;

module.exports = tests.testFile(
  write.description('compare primitives should return a boolean')(
    tests.compareYield(
      tests.comparePrimitives('string', 'string'), 'boolean')),
  write.description('compare primitives should return true when passed two strings')(
    tests.compareYield(
      tests.comparePrimitives('string', 'string'), true))
);
