var tests = require('./tests.js');
var write = tests.write;
var arrayify = require('./testTheTests/arrayify.js');
var isArrayTests = require('./testTheTests/isArray.js');
var isNumberTests = require('./testTheTests/isNumber.js');
var isObjectTests = require('./testTheTests/isObject.js');
var isStringTests = require('./testTheTests/isString.js');
var typeOfTests = require('./testTheTests/isFunction.js');
var length = require('./testTheTests/length.js');
var primitives = require('./testTheTests/primitives.js');
var compArrays = require('./testTheTests/compareArrays.js');

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
