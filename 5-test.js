'use strict';

const assert = require('assert');

const id = x => x;
const square = x => x * x;

const value = 10;

const result = square(value);
assert.notStrictEqual(value, result);

// const result2 = id(value);
// assert.notStrictEqual(value, result2);