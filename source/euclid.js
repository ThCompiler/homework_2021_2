'use strict';

const base_euclid = (first, second) => {
    while (second) {
        [first, second] = [second, first %= second];
    }
    return first;
};

const euclid = (first_number, ...other_numbers) => other_numbers.reduce(
        (previous_value, current_value) => base_euclid(previous_value, current_value), first_number);
