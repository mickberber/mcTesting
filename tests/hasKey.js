var tests = require('./../mcTesting.js');
var write = tests.write;

var testArr = ['testVal']

module.exports = write.testFile(
  write.description('hasKey should return true when passed an object that has a given key')(
    tests.compareYield(
      tests.hasKey({'key': 'test'}, 'key'),
      true)),
    write.description('hasKey should return false when passed an object that doesn\'t has a given key')(
      tests.compareYield(
        tests.hasKey({'key': 'test'}, 'different_key'),
        false)),
    write.description('hasKey should return false when passed an array that is undefined at a given index')(
      tests.compareYield(
        tests.hasKey(testArr, 1),
        false)),
    write.description('hasKey should return true when passed an array that IS NOT undefined at a given index')(
      tests.compareYield(
        tests.hasKey(testArr, 0),
        true))
);
