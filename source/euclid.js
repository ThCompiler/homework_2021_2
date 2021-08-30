'use strict';

/**
 * baseEuclid is function, that compute greatest common divisor of
 * two numbers
 * @param {number} first is first number
 * @param {number} second is second number
 * @returns gcd of two numbers
 */
const baseEuclid = (first, second) => {
    while (second) {
        [first, second] = [second, first %= second];
    }
    return first;
};

/**
 * euclid is function, that compute greatest common divisor of 
 * passed numbers 
 * @param  {...number} numbers is sequence of input numbers
 * @returns gcd of input numbers
 * 
 * If there are passed not number value in arguments,
 * function will return null as unknown result
 */
const euclid = (...numbers) => {
    if (numbers.reduce((previousVal, currentVal) => 
                        (typeof currentVal != 'number' && 
                        currentVal !== undefined) || previousVal, false)) {
        return null;
    }
    
    return numbers.reduce((previousVal, currentVal) =>
                                        baseEuclid(previousVal, currentVal));
}
