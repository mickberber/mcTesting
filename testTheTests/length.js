var tests = require('./../tests.js');
var write = tests.write;

module.exports = write.testFile(
  write.description('tests.length should return the length of an array')(
    tests.compareYield(
      tests.length([1,2,3,4]), 4)),
  write.description('tests.length should return the length of a string')(
    tests.compareYield(
      tests.length('string'), 4))
);
