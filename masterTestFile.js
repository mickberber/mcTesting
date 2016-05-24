var tests = require('./mcTesting.js');
var write = tests.write;
var arrayify = require('./tests/arrayify.js');
var isArrayTests = require('./tests/isArray.js');
var isNumberTests = require('./tests/isNumber.js');
var isObjectTests = require('./tests/isObject.js');
var isStringTests = require('./tests/isString.js');
var typeOfTests = require('./tests/isFunction.js');
var length = require('./tests/length.js');
var primitives = require('./tests/primitives.js');
var compArrays = require('./tests/compareArrays.js');

tests = [
  arrayify,
  isArrayTests,
  isNumberTests,
  isObjectTests,
  isStringTests,
  typeOfTests,
  length,
  primitives,
  compArrays
];

write.masterTestFile(tests);
