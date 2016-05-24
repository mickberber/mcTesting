var tests = require('./../mcTesting.js');
var write = tests.write;

var obj1 = {};
var obj2 = {};
var obj3 = {};
var fn1 = function() { return true; };
var fn2 = function() { return true; };
var fn3 = function() { return true; };

module.exports = write.testFile(
  write.description('arrayify should return an array')(
    tests.compareYield(
      tests.typeof(tests.arrayify()), 'array')),
  write.description('arrayify should return arguments in order')(
    tests.compareArrays(
      tests.arrayify(1,2,3,4,5), [1,2,3,4,5])),
  write.description('arrayify should work with objects')(
    tests.compareArrays(
      tests.arrayify(obj1, obj2, obj3), [obj1, obj2, obj3])),
  write.description('arrayify should work with functions')(
    tests.compareArrays(
      tests.arrayify(fn1, fn2, fn3), [fn1, fn2, fn3]))
);
