var tests = require('./../mcTesting.js');
var write = tests.write;

module.exports = write.testFile(
  write.description('hasMethod should return false when passed a string primitive')(
    tests.compareYield(tests.hasMethod('string', 'method'), false)),
  write.description('hasMethod should return false when passed a plain object')(
    tests.compareYield(tests.hasMethod({}, 'method'), false))
);
