"use strict";

const assert = require('assert');
const fibonacci = require('../fibonacci');

describe('Utils tests', () => {

    it('fibonacci.js:: test fibonacci series is correctly generated', () => {
        let fib = fibonacci();
        let fibonacciSeries = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597];

        fibonacciSeries.forEach((val) => {
            assert.equal(val, fib.next().value);
        });
    });

});