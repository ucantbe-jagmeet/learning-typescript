"use strict";
let stringArr = ['one', 'hey', 'Dave'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'john';
// stringArr.push(42)
guitars[0] = 1984;
// guitars.unshift(true)
guitars.unshift('jggy');
// stringArr = guitars 
guitars = stringArr;
mixedData = guitars;
let test = [];
let bands = [];
bands.push('van halen');
// tuple 
let myTuple = ["jagmeet", 23, true];
let mixed = ['john', 1, false];
// myTuple = mixed
mixed = myTuple;
// myTuple[1] = 44
let myObj;
myObj = [];
myObj = bands;
myObj = {};
// console.log( typeof myObj);
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
// type Guitarist = {
//     name: string;
//     active?: boolean;
//     albums: ( string | number)[];
// }
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5152, 'john'],
};
let JP = {
    name: "Jimmy",
    albums: [5152, 'john'],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return `Hello!!!`;
};
// console.log( greetGuitarist(JP));
// Enums 
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
