#mc-testing

![Alt text](./assets/mctestingjs.png 'Mc-Testing logo')
~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=

`npm install mc-testing`

Simple test suite, that needs a lot of work

I don't like the testing suites available so much

So to get a better handle on testing

I started to write my own

~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=



Writing tests with Mc-Testing:
=========================

Create a testFile.js.

Require the module `var tests = require('mc-testing');`

For ease, I recommend also adding `var write = tests.write;`, which contains the description and testFile methods.

The `write.testFile` method is where you'll write your tests. All tests will be passed into this method as arguments.

Writing an individual tests begins with the `write.description` method. This method takes a string as a description of what you are testing.

`write.description` returns a function that takes a McTestingjs test method.
Example: `write.description('these arrays should be equal')(tests.compareArrays([1,2,3],[1,2,3]))`

![Alt text](./assets/samplefile.png 'samplefile screenshot')



Use a 'MasterTestFile' as a wrapper for multiple files
![Alt text](./assets/masterfile.png 'samplefile screenshot')

Make sure to set module.exports equal to your testing function(as seen in the top screenshot).

Require all your tests in a masterTestFile.

Place all your tests in an array that will be passed into the `write.masterTestFile` function.

run:
`node masterTestFile.js`

and your tests will output something like this in the command line:
![Alt text](./assets/sampleoutput.png 'testResultsjs screenshot')







FAQ's

Do I have to write tests beforehand for it to work?
`--YES`

Is this an assertion library?
`--YES`

What becomes easier by using this module?
I believe this to be a quick and simple way to test my code, and passing in a couple callbacks seemed like a pretty good way to accomplish quick concise lines of code.

#License
MIT(https://opensource.org/licenses/mit-license.php)
