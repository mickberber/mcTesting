/*SAMPLE TEST FILE*/

//require tests
var tests = require('./tests.js');
//include tests.write as it's own variable for ease
var writeTests = tests.write;

//inside of this testFile function,
//each test can be easily entered in as an argument
writeTests.testFile(
  writeTests.description('this should be an array')(tests.isArray([])),
  writeTests.description('these arrays should be equal')(tests.compareArrays([1,2,3],[1,2,3])),
  writeTests.description('this should be a function')(tests.isFunction('this'))
);

function here() {
  return 'yup'
};
