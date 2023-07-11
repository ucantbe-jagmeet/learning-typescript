// type alias

type stringOrNumber = string | number

type strnigOrNumberArray =  ( string | number)[]

type Guitarist = {
    name?: string;
    active: boolean;
    albums:strnigOrNumberArray;
}

type UserId = stringOrNumber;

// #### Literal Types ####

let myName : 'Dave'
// myName = 'John'

let userName: 'Dave' | 'John' | 'Amy'
// userName = "Dave"


//functions
const add = ( a:number, b:number):number => {
    return a + b
}

const logMsg = ( message: any):void => {
    console.log(message);
}

logMsg('Hello!')
logMsg( add( 2, 3))

let subtract = function ( c:number, d:number) :number {
    return c - d;
}

type mathFunction = ( a:number , b:number) => number

let multiply: mathFunction = function ( c, d){
    return c * d
}