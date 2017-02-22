"use strict";

const assert = require('assert');
const Person = require('../../../src/domain/Person').Person;
const MIN_LENGTH_PERSON_NAME = require('../../../src/domain/Person').MIN_LENGTH_PERSON_NAME;
const MIN_LENGTH_PERSON_LASTNAME = require('../../../src/domain/Person').MIN_LENGTH_PERSON_LASTNAME;
const MIN_LENGTH_PERSON_PHONE = require('../../../src/domain/Person').MIN_LENGTH_PERSON_PHONE;

const VALID_NAME = 'Juan';
const VALID_LAST_NAME = 'Cancela';
const VALID_PHONE = 1556064444;

describe('Person class tests', () => {

    it('should create a Person instance if name, lastName and phone parameters are valid', () => {
        try {
            let person = new Person(VALID_NAME, VALID_LAST_NAME, VALID_PHONE);
            assert.equal(person.name, VALID_NAME, 'person.name must match provided value');
            assert.equal(person.lastName, VALID_LAST_NAME, 'person.lastName must match provided value');
            assert.equal(person.phone, VALID_PHONE, 'person.phone must match provided value');
        } catch (error) {
            assert.fail();
        }
    });

    it('should fail to create a Person instance if name property is null', () => {
        try {
            new Person(null, VALID_LAST_NAME, VALID_PHONE);
        } catch (error) {
            return;
        }
        assert.fail();
    });

    it(`should fail to create a Person instance if name property but does not have at least ${MIN_LENGTH_PERSON_NAME} chars`, () => {
        try {
            new Person('a', VALID_LAST_NAME, VALID_PHONE);
        } catch (error) {
            return;
        }
        assert.fail();
    });

    it('should fail to create a Person instance if last name property is null', () => {
        try {
            new Person(VALID_NAME, null, VALID_PHONE);
        } catch (error) {
            return;
        }
        assert.fail();
    });

    it(`should fail to create a Person instance if lastName property but does not have at least ${MIN_LENGTH_PERSON_LASTNAME} chars`, () => {
        try {
            new Person(VALID_NAME, 'a', VALID_PHONE);
        } catch (error) {
            return;
        }
        assert.fail();
    });

    it('should fail to create a Person instance if phone property is null', () => {
        try {
            new Person(VALID_NAME, VALID_LAST_NAME, null);
        } catch (error) {
            return;
        }
        assert.fail();
    });

    it('should fail to create a Person instance if phone property is not a number', () => {
        try {
            new Person(VALID_NAME, VALID_LAST_NAME, 'abc');
        } catch (error) {
            return;
        }
        assert.fail();
    });

    it(`should fail to create a Person instance if phone property does not have at least ${MIN_LENGTH_PERSON_PHONE} digits`, () => {
        try {
            new Person(VALID_NAME, VALID_LAST_NAME, 'abc');
        } catch (error) {
            return;
        }
        assert.fail();
    });

});