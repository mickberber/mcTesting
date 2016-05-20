var tests = require('./../tests.js');
var write = tests.write;

module.exports = write.testFile(
  write.description('typeof should return \'array\' when passed an array')
    (tests.compareYield(
      tests.typeof([]), 'array')),
  write.description('typeof should return \'string\' when passed a string')
    (tests.compareYield(
      tests.typeof('string'), 'string')),
  write.description('typeof should return \'object\' when passed a object')
    (tests.compareYield(
      tests.typeof({}), 'object')),
  write.description('typeof should return \'NaN\' when passed a NaN')
    (tests.compareYield(
      tests.typeof(NaN), 'NaN')),
  write.description('typeof should return \'number\' when passed a number')
    (tests.compareYield(
      tests.typeof(22), 'number')),
  write.description('typeof should return \'boolean\' when passed a boolean')
    (tests.compareYield(
      tests.typeof(3 > 2), 'boolean'))
);
