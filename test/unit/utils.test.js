"use strict";

const assert = require('assert');
const utils = require('../../src/utils');

describe('Utils tests', () => {

    it('isStringWithMinLength:: should return TRUE if given value is an string with at least minLength characters', () => {
        assert(utils.isStringWithMinLength('validString', 5));
    });

});