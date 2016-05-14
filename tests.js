function tests() {};

tests.isString(value) {
  if(typeof value === 'string') {
    return true;
  } else {
    return false;
  }
};

tests.isArray(value) {
  if(Array.isArray(value)) {
    return true;
  } else {
    return false;
  }
};

tests.isObject(value) {
  if(typeof value === 'object') {
    return true;
  } else {
    return false;
  }
};

tests.isNumber(value) {
  if(typeof value === 'number') {
    return true;
  } else {
    return false;
  }
}

test.isFunction(value) {
  if(typeof value === 'function') {
    return true;
  } else {
    return false;
  }
}

tests.length(value) {
  if(value.length) {
    return value.length;
  } else {
    return 'No length property available.';
  }
}

tests.compareArrays() {
  var args = Array.prototype.slice.call(arguments);
  for(var i = 0; i < args[0].length; i++) {
    for(var j = 1; j < args.length; j++) {
      if(test.length(args[j]) !== test.length(args[0])) {
        return false;
      }
      if(args[0][i] !== args[j][i]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = tests;
