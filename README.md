# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jakinbacon/lotide`

**Require it:**

`const _ = require('@jakinbacon/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arrActual, arrExpected)`: asserts two arrays as equal.
* `assertEqual(actual, expected)`: asserts two values as equal.
* `assertObjectsEqual(objActual, objExpected)`: asserts two objects as equal.
* `countLetters(string)`: returns an object with the count of all chars in a string.
* `countOnly(allItems, targetItems)`: returns an object with the count of all target items.
* `eqArrays(arrActual, arrExpected)`: returns a boolean value based on whether two arrays are equal.
* `eqObjects(objActual, objExpected)`: returns a boolean value based on whether two objects are equal.
* `findKey(obj, callback))`: returns first key which value satisfies the callback function.
* `findKeyByValue(obj, target))`: returns the first key that has the target value as it's value.
* `flatten(array)`: Takes an array and outputs a new array with all nested arrays flattened.
* `head(array)`: returns the first element in an array.
* `isEven(number)`: returns a boolean value based on whether a number is even or not.
* `letterPositions(string)`: returns an object with the indices of all the chars in a string.
* `map(array, callback)`: performs callback function on each element of array, returns new array with mutated values.
* `middle(array)`: returns the middle value of an array.
* `reverse(string)`: reverses a string.
* `tail(array)`: returns everything that follows the first element in an array.
* `takeUntil(array, callback)`: returns a new array with values pushed from array until a value satisfies the callback function.
* `without(array, targets)`: returns an array without the specified target values.