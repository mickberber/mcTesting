#mc-testing

![Alt text](./assets/mctestingjs.png 'Mc-Testing logo')
~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=

`npm install mc-testing`

Simple test suite, that needs a lot of work

I don't like the testing suites available so much

So to get a better handle on testing

I started to write my own

~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=

TO GET STARTED(Quick Version):

Recreate this file to start:
![Alt text](./assets/testFilejs.png 'testFilejs screenshot')

run:
`node testFile.js`

and your tests will output something like this in the command line:
![Alt text](./assets/testResults.png 'testResultsjs screenshot')




Writing tests starts with
=========================
1-Creating a testFile.js.
2-Require the module `var tests = require('mc-testing');`
3-For ease, I recommend also adding `var writeTests = tests.writeTests;`, which contains the description and testFile methods
4-The `writeTests.testFile` method does the work of kicking off our process. All tests will be passed into this method as arguments.
5-Writing an individual tests begins with the `writeTests.description` method. This method takes a string as a description of what you are testing.
6-`writeTests.description` returns a function that takes a McTestingjs test method.
Example: `writeTests.description('these arrays should be equal')(tests.compareArrays([1,2,3],[1,2,3]))`


FAQ's

Do I have to write tests beforehand for it to work?
`--YES`

Is this an assertion library?
`--YES`

What becomes easier by using this module?
I believe this to be a quick and simple way to test my code, and passing in a couple callbacks seemed like a pretty good way to accomplish quick concise lines of code.
