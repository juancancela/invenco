"use strict";

/**
 * Generator function that provides an infinite sequence of numbers of the fibonacci series
 */
function* fibonacci() {
    var leftValue = 0;
    var rigthValue = 1;
    while (true) {
        var currentValue = leftValue;
        yield currentValue;
        leftValue = rigthValue;
        rigthValue = currentValue + leftValue;
    }
}

module.exports = fibonacci;