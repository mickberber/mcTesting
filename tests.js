var tests = {};

tests.typeof = function(value) {
  if(Array.isArray(value)) {
    return 'array';
  }
  return typeof value;
};

tests.isString = function(value) {
  if(typeof value === 'string') {
    return true;
  } else {
    return false;
  }
};

tests.isArray = function(value) {
  if(Array.isArray(value)) {
    return true;
  } else {
    return false;
  }
};

tests.isObject = function(value) {
  if(typeof value === 'object') {
    return true;
  } else {
    return false;
  }
};

tests.isNumber = function(value) {
  if(value.toString() === 'NaN') {
    return 'NaN';
  }
  if(typeof value === 'number') {
    return true;
  } else {
    return false;
  }
};

tests.isFunction = function(value) {
  if(typeof value === 'function') {
    return true;
  } else {
    return false;
  }
};

tests.length = function(value) {
  if(value.length) {
    return value.length;
  } else {
    return 'No length property available.';
  }
};

tests.compareArrays = function() {
  var args = Array.prototype.slice.call(arguments);
  for(var i = 0; i < args[0].length; i++) {
    for(var j = 1; j < args.length; j++) {
      if(tests.length(args[j]) !== tests.length(args[0])) {
        return false;
      }
      if(args[0][i] !== args[j][i]) {
        return false;
      }
    }
  }
  return true;
};

tests.compareObjects = function() {
  var args = Array.prototype.slice.call(arguments);
  var string = JSON.stringify(args[0]);
  for(var i = 1; i < args.length; i++) {
    if(string !== JSON.stringify(args[i])){
      return false;
    }
  }
  return true;
};


module.exports = tests;
