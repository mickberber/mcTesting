var tests = require('./tests.js');
var write = tests.write;
var arrayify = require('./testTheTests/arrayify.js');
var isArrayTests = require('./testTheTests/isArray.js');

tests = [
  arrayify,
  isArrayTests
];

write.masterTestFile(tests.join(''));
