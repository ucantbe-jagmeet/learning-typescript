"use strict";
// type alias
// #### Literal Types ####
let myName;
// myName = 'John'
let userName;
// userName = "Dave"
//functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
// logMsg('Hello!')
// logMsg( add( 2, 3))
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     ( a:number , b:number): number
// }
let multiply = function (c, d) {
    return c * d;
};
// logMsg( multiply( 2, 2))
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//default param value
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
// logMsg( addAll( 2, 3, 2))
// logMsg( addAll( 2, 3))
// logMsg( sumAll( 2, 3))
// logMsg( sumAll(undefined, 3))
// ############# Rest Parameter ################
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
// logMsg( total( 10, 1, 2, 3, 4))
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
    }
};
const isNumber = (value) => {
    return typeof value == 'number' ? true : false;
};
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createError('This should never happen');
};
