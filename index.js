'use strict';

var isFiniteNumber = require('@fav/type.is-finite-number');
var toNumber = require('@fav/type.to-number');

function toFiniteNumber(value) {
  value = toNumber(value);

  if (isFiniteNumber(value)) {
    return value;
  }

  if (arguments.length > 1) {
    return arguments[1];
  }

  return NaN;
}

module.exports = toFiniteNumber;

