#mc-testing


##Documentation
![Alt text](./assets/mctestingjs.png 'Mc-Testing logo')

~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=


##Main Test Module Methods
###tests.typeof
===============
Returns type of value that is passed. Takes one argument.
  In addition to the native typeof function, this also returns specified values for arrays('array') and NaNs('NaN')

###tests.isString
===============
Returns true or false. Takes one argument.
  Checks to see if the argument passed is a string or not.

###tests.isArray
===============
Returns true or false. Takes one argument.
  Checks to see if the argument passed is an Array or not.

###tests.isObject
===============
Returns true or false. Takes one argument.
  Checks to see if the argument passed is an Object or not.

###tests.isNumber
===============
Returns true or false. Takes one argument.
  Checks to see if the argument passed is a number or not.

###tests.comparePrimitives
===============
Returns true or false. Takes unlimited arguments.
  Checks to see if the arguments passed are all deeply equal.

###tests.compareArrays
===============
Returns true or false. Takes unlimited arguments.
  Checks to see if the arguments passed are all equal.

###tests.compareObjects
===============
Returns true or false. Takes unlimited arguments.
  Checks to see if the arguments passed are all equal.

###tests.compareYield
===============
Returns true or false. Takes two arguments, a callback and a value for comparison.
  Checks to see if the arguments passed are equal.


##Write Test Module Methods
###write.testFile
===============
Initiates the testing process && returns results of all tests.
Takes unlimited arguments. Console.log()s to the terminal.

###write.description
===============
Assumes argument passed will be a string.
String should be meant to describe the test being run.
Returns a function to be called with a test passed in as an argument.
