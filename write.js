var write = {};

//Turn array like arguments object into an array
//for convinence
write.arrayify = function(args) {
  return Array.prototype.slice.call(args);
};

write.testFile = function() {
  var args = write.arrayify(arguments);
  var header = '\nMcTestingjs::\n==========\n';
  var numTests = 0;
  var passed = 0;
  var failed = 0;
  var results = args.map(function(value) {
    numTests++;
    if(value.slice(-6) === 'Passed') {
      passed++;
    } else {
      failed++;
    }
    return '    Test number ' + numTests + ':' + value;
  }).join('\n');
  var footer = '\nResults:\n==========\n    Total number of tests: ' + numTests + '\n    Total tests passed: ' + passed  + '\n    Total tests failed: ' + failed;
  return header + results + footer + '\n';
};

write.description = function(string) {
  //expected to be truthy or falsy, or a string
  return function(testToRun) {
    if(testToRun) {
      return string + ' Passed';
    } else {
      return string + ' Failed';
    }
  };
};

write.masterTestFile = function(arr) {
    console.log(arr.join(''));
};

module.exports = write;
