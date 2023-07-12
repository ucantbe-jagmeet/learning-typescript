type One = string
type Two = string | number 
type Three = 'hello' 

// convert to more or less specific
let a:One = 'hello'
let b = a as Two  // less specific
let c = a as Three  // more specific

let d = <One>'World'
// let e = <One>'World'
let e = < string | number > "World"

const addOrConcat = ( a:number, b:number, c:"add"|"concat"): number | string =>{
    if( c === 'add') return a + b
    return ""+a+b
}

let myVal : string = addOrConcat( 2,2, 'concat') as string

//be carefull! TS sees no problem - but a string is returnes
let nextVal : number = addOrConcat( 2,2, 'concat') as number

// 10 as string 
( 10 as unknown ) as string  // double casting or forced casting