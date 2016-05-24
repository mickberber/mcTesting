var tests = {};
tests.write = require('./write.js');
//returns type of data passed to it
//I added 'array' and 'NaN' for convenience
tests.typeof = function(value) {
  if(Array.isArray(value)) {
    return 'array';
  }
  if(tests.isNumber(value)) {
    if(value.toString() === 'NaN') {
      return 'NaN';
    }
  }
  return typeof value;
};

//check if a value is a string
tests.isString = function(value) {
  if(typeof value === 'string') {
    return true;
  } else {
    return false;
  }
};

//check if a value is an Array
tests.isArray = function(value) {
  if(Array.isArray(value)) {
    return true;
  } else {
    return false;
  }
};

//check if a value is an Object
tests.isObject = function(value) {
  if(typeof value === 'object') {
    return true;
  } else {
    return false;
  }
};

//check if a value is a Number
tests.isNumber = function(value) {
  if(typeof value === 'number') {
    return true;
  } else {
    return false;
  }
};

//check if a value is a Function
tests.isFunction = function(value) {
  if(typeof value === 'function') {
    return true;
  } else {
    return false;
  }
};

//Turn array like arguments object into an array
//for convinence
tests.arrayify = function(args) {
  if(args === undefined) {
    return [];
  }
  return Array.prototype.slice.call(args);
};

//pretty explanatory here, returns length
tests.length = function(value) {
  if(value.length) {
    return value.length;
  } else {
    return false;
  }
};

//helper for comparing non objects, non NaNs
//non arrays, etc
tests.comparePrimitives = function() {
  var args = tests.arrayify(arguments);
  for(var i = 1; i < args.length; i++) {
    if(args[i] !== args[0]) {
      return false;
    }
  }
  return true;
};

//compare arrays
//assumes it is receiving two or more arrays
tests.compareArrays = function() {
  //arrayify arguments object
  var args = tests.arrayify(arguments);
  for(var i = 0; i < args[0].length; i++) {
    for(var j = 1; j < args.length; j++) {
      tests.comparePrimitives(args[0][i], args[j][i]);
    }
  }
  return true;
};

//compare objects with the JSON.stringify method as a sort of
//short cut
tests.compareObjects = function() {
  //arrayify
  var args = tests.arrayify(arguments);
  var string = JSON.stringify(args[0]);
  for(var i = 1; i < args.length; i++) {
    if(string !== JSON.stringify(args[i])){
      return false;
    }
  }
  return true;
};

//takes in two items to compare
tests.compareYield = function(callback, toEqual) {
  //assign value of callback to result
  var result = callback;
  //assign type of result to resultType for steps to take
  //in compare vaules
  var resultType = tests.typeof(result);
  if(resultType === 'array') {
    return tests.compareArrays(result, toEqual);
  } else if(resultType === 'object') {
    return tests.compareObjects(result, toEqual);
  } else if(resultType === 'NaN') {
    if(tests.typeof(toEqual) === 'NaN') {
      return true;
    }
  } else {
    return tests.comparePrimitives(result, toEqual);
  }
};

module.exports = tests;
