var tests = require('./../mcTesting.js');
var write = tests.write;

write.testFile(
  write.description('compareYield should return true when given two equal values')(
    tests.compareYield(tests.compareYield(true, true), true))
);
