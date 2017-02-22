#! /usr/bin/env node
"use strict";

const Person = require('./src/domain/Person');

/**
 *  !!! README.md has detailed information of how to run tests, coverage, and provided data sets.
 */
(function run() {
    let userArgs = process.argv.splice(2);

    let name = userArgs[0];
    let lastName = userArgs[1];
    let phone = parseInt(userArgs[2]);

    try {
        let person = new Person(name, lastName, phone);
        console.log(`Person successfully created!-> Name: ${person.name} | Last Name: ${person.lastName} | Phone: ${person.phone}`);
    } catch (error) {
        console.log(error);
    }
})();