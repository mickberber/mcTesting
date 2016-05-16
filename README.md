#mc-testing

![Alt text](./assets/mctestingjs.png 'Mc-Testing logo')
~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=

npm install mc-testing

Simple test suite, that needs a lot of work

I don't like the testing suites available so much

So to get a better handle on testing

I started to write my own

~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=

TO GET STARTED:
`/*SAMPLE TEST FILE*/

//require tests
var tests = require('./tests.js');
//include tests.write as it's own variable for ease
var writeTests = tests.write;

//inside of this testFile function,
//each test can be easily entered in as an argument
writeTests.testFile(
  writeTests.description('this should be an array')(tests.isArray([])),
  writeTests.description('these arrays should be equal')(tests.compareArrays([1,2,3],[1,2,3]))
);`
