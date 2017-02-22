"use strict";

const _ = require('lodash');
const DEFAULT_MIN_LENGTH = 1;

/**
 * Throws an application error with following format: date:<ISO DATE>|reason:<PROVIDED REASON>|stack:<PROVIDED STACK>
 * @param reason error reason, in example: name must be at least 8 characters
 * @param stack error stack
 */
const err = (reason, stack) => {
    throw new Error(`date: ${new Date().toISOString()}|reason: ${reason} ${stack ? `|stack: ${stack}` : ''}`);
};

/**
 * Given a value, checks if its an string with a min of minLength characters
 * @param value the value to be evaluated
 * @param minLength the expected min length of the provided value
 * @returns {*|boolean} TRUE if value is an string of at least minLength chars
 */
const isStringWithMinLength = (value, minLength = DEFAULT_MIN_LENGTH) => {
    return value && value.length >= minLength;
};

/**
 * Given a value, checks if its a number of at least minLength digits
 * @param value the value to be evaluated
 * @param minLength the expected min number of digits of the provided value number
 * @returns {*|*|boolean} TRUE if value is a number of at least minLength digits
 */
const isNumberWithMinLength = (value, minLength = DEFAULT_MIN_LENGTH) => {
    return value && _.isNumber(value) && isStringWithMinLength(value.toString(), minLength);
};

module.exports = {err, isStringWithMinLength, isNumberWithMinLength};