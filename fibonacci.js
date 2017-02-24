"use strict";

/**
 * Generator function that provides an infinite sequence of numbers of the fibonacci series
 */
function* fibonacci() {
    let leftValue = 0;
    let rigthValue = 1;
    while (true) {
        let currentValue = leftValue;
        yield currentValue;
        leftValue = rigthValue;
        rigthValue = currentValue + leftValue;
    }
}

module.exports = fibonacci;