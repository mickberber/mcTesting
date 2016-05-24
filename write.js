var write = {};
var chalk = require('chalk');

//Turn array like arguments object into an array
//for convinence
write.arrayify = function(args) {
  return Array.prototype.slice.call(args);
};

write.testFile = function() {
  var args = write.arrayify(arguments);
  var header = chalk.cyan('\nMcTestingjs::\n==========\n');
  var numTests = 0;
  var passed = 0;
  var failed = 0;
  var results = args.map(function(value) {
    numTests++;
    if(value.bool === true) {
      passed++;
    } else {
      failed++;
    }
    return '    Test number ' + numTests + ' :: ' + value.string;
  }).join('\n');
  var footer = chalk.cyan('\nResults:\n==========') + '\n    Total number of tests: ' + numTests + chalk.green('\n    Total tests passed: ' + passed)  + chalk.red('\n    Total tests failed: ' + failed);
  return header + results + footer + '\n';
};

write.description = function(string) {
  //expected to be truthy or falsy, or a string
  return function(testToRun) {
    if(testToRun) {
      return { string: chalk.green(string + ' :: ✓'), bool: true };
    } else {
      return { string: chalk.red(string + ' :: X'), bool: false };
    }
  };
};

write.masterTestFile = function(arr) {
    console.log(arr.join(''));
};

module.exports = write;
