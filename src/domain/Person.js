"use strict";

const err = require('./../utils').err;
const isStringWithMinLength = require('./../utils').isStringWithMinLength;
const isNumberWithMinLength = require('./../utils').isNumberWithMinLength;
const MIN_LENGTH_PERSON_NAME = 2;
const MIN_LENGTH_PERSON_LASTNAME = 3;
const MIN_LENGTH_PERSON_PHONE = 7;

class Person {
    constructor(name, lastName, phone){
        validate(name, lastName, phone);
        this._name = name;
        this._lastName = lastName;
        this._phone = phone;
    }

    get name() {
        return this._name;
    }

    get lastName() {
        return this._lastName;
    }

    get phone() {
        return this._phone;
    }
}


/**
 * validation function executed during object construction
 * @param name person's name. In example: Juan
 * @param lastName person' last name. In example: Cancela
 * @param phone person's phone. In example: 1556064444
 */
const validate = (name, lastName, phone) => {
    if(!isStringWithMinLength(name, MIN_LENGTH_PERSON_NAME)) {
        err(`Person.name must be an string with a min length of ${MIN_LENGTH_PERSON_NAME}`);
    }

    if(!isStringWithMinLength(lastName, MIN_LENGTH_PERSON_LASTNAME)){
        err(`Person.lastName must be an string with a min length of ${MIN_LENGTH_PERSON_LASTNAME}`);
    }

    if(!isNumberWithMinLength(phone, MIN_LENGTH_PERSON_PHONE)){
        err(`Person.phone must be a number with a min length of ${MIN_LENGTH_PERSON_PHONE}`);
    }
};


module.exports = {Person, MIN_LENGTH_PERSON_NAME, MIN_LENGTH_PERSON_LASTNAME, MIN_LENGTH_PERSON_PHONE};
