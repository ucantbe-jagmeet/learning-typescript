let stringArr = ['one','hey','Dave'];

let guitars = ['Strat','Les Paul', 5150];

let mixedData = ['EVH',1984, true];

stringArr[0] = 'john'
// stringArr.push(42)

guitars[0] = 1984;
// guitars.unshift(true)
guitars.unshift('jggy')

// stringArr = guitars 
guitars = stringArr

mixedData = guitars

let test = []
let bands: string[] = [] 
bands.push('van halen')

// tuple 
let myTuple: [ string, number, boolean] = [ "jagmeet", 23, true];

let mixed = ['john', 1, false]
// myTuple = mixed
mixed = myTuple

// myTuple[1] = 44

let myObj: object 
myObj = []
myObj = bands
myObj = {}
// console.log( typeof myObj);

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

// exampleObj.prop2 = 42

interface Guitarist  {
    name?: string;
    active?: boolean;
    albums: ( string | number)[];
}
// type Guitarist = {
//     name: string;
//     active?: boolean;
//     albums: ( string | number)[];
// }

let evh : Guitarist = {
    name: "Eddie",
    active: false,
    albums: [ 1984, 5152, 'john'],
} 

let JP : Guitarist = {
    name: "Jimmy",
    albums: [ 5152, 'john'],
} 

const greetGuitarist = (guitarist: Guitarist) => {
    if( guitarist.name){
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return `Hello!!!`
}
// console.log( greetGuitarist(JP));

// Enums 

enum Grade {
    U=1, 
    D, 
    C, 
    B,
    A,
}
console.log(Grade.U);
