const echo =<T>( arg: T):T => arg

const isObj = <T>( arg:T):boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

// console.log( isObj(true));
// console.log( isObj('John'));
// console.log( isObj([1, 2, 3]));
// console.log( isObj( { name:'John'}));
// console.log( isObj(null));


const isTrue = <T>( arg: T):{ arg: T, is:boolean} =>{
    if( Array.isArray(arg) && !arg.length){
        return { arg, is:false}
    }
    if( isObj(arg) && !Object.keys(arg as keyof T).length){
        return { arg, is:false}
    }
    return { arg, is: !!arg}
}

// console.log(isTrue(false));
// console.log(isTrue(0));
// console.log(isTrue(true));
// console.log(isTrue(1));
// console.log(isTrue('Dave'));
// console.log(isTrue(''));
// console.log(isTrue(null));
// console.log(isTrue(undefined));
// console.log(isTrue({}));
// console.log(isTrue({ name: 'dave'}));
// console.log(isTrue([]));
// console.log(isTrue(NaN));
// console.log(isTrue(-0));

interface HasID{
    id:number
}

const processUser = < T extends HasID >( user:T): T =>{
    return user
}

console.log( processUser({ id:1, name:'Dave'}));
// console.log( processUser({  name:'Dave'}));

const getUSersProperty = <T extends HasID , K extends keyof T>( users : T[], key : K):T[K][] =>{
    return users.map( user => user[key])
}

class StateObject<T> {
    private data : T

    constructor(value : T) {
        this.data = value
    }

    get state(): T{
        return this.data
    }

    set state(value:T){
        this.data = value
    }
}

const store = new StateObject<string>('John')
console.log(store.state);

store.state = 'Dave'
// store.state = 12

const myState = new StateObject<( string | number | boolean)[]>([15])
myState.state = ( ['Dave', 42, true])
console.log(myState.state);
