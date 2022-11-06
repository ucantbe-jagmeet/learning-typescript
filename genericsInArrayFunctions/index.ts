// Generics -

const score : Array<number> = [];
const names : Array<string> = [];

function identityOne(val: boolean | number) : boolean |number 
{
    return val ; // which value will be return we can say anything 
}

function identityTwo( val : any): any
{
    return val;
}

function identityThree <Type>(val: Type) : Type 
{
    return val ;
}

//identityThree(true) ; // hover over the function you will see that Type will automatically changes to the type of input variable;

function identityFour<T> (val:T) :T{ 
    return val;
}

interface  Bottle
{
    brand:string,
    type: number
}

identityFour <Bottle> ({})