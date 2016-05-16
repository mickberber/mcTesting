var write = {};

//Turn array like arguments object into an array
//for convinence
write.arrayify = function(args) {
  return Array.prototype.slice.call(args);
};

write.testFile = function() {
  var args = write.arrayify(arguments);
  var results = args.map(function(value) {
    return value;
  }).join('\n');
};

write.description = function(string) {
  var result = 'Test:: ' + string;
  //expected to be truthy or falsy, or a string
  return function(testToRun) {
    if(testToRun) {
      return result + ' Passed';
    } else {
      return result + ' Failed';
    }
  };
};

module.exports = write;
