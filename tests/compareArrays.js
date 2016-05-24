var tests = require('./../mcTesting.js');
var write = tests.write;

module.exports = write.testFile(
  write.description('compareArrays should return true when passed two arrays with the same values')(
    tests.compareYield(
      tests.compareArrays([1,2,3], [1,2,3]),
      true))
);
