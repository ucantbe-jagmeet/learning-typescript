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

// logMsg('Hello!')
// logMsg( add( 2, 3))

let subtract = function ( c:number, d:number) :number {
    return c - d;
}

type mathFunction = ( a:number , b:number) => number
// interface mathFunction {
//     ( a:number , b:number): number
// }

let multiply: mathFunction = function ( c, d){
    return c * d
}

// logMsg( multiply( 2, 2))

const addAll = ( a:number, b:number, c?:number):number => {
    if( typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b
}

//default param value
const sumAll = ( a:number = 10, b:number, c:number = 2):number => {
    return a + b + c
}

// logMsg( addAll( 2, 3, 2))
// logMsg( addAll( 2, 3))
// logMsg( sumAll( 2, 3))
// logMsg( sumAll(undefined, 3))

// ############# Rest Parameter ################
const total = ( a:number ,...nums: number[]):number =>{
    return a + nums.reduce( (prev, curr)=> prev + curr)
}
// logMsg( total( 10, 1, 2, 3, 4))

const createError = ( errMsg: string) => {
    throw new Error( errMsg)
}

const infinite = ( )=> {
    let i : number = 1

    while( true){
        i++
        
    }
}

const isNumber = (value:any):boolean => {
    return typeof value == 'number' ? true: false
}


const numberOrString = (value : number | string ): string => {
    if( typeof value === 'string') return 'string'
    if( typeof value === 'number') return 'number'
    return createError('This should never happen')
    
}