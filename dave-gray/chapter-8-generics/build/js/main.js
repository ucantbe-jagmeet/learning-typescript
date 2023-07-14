"use strict";
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
// console.log( isObj(true));
// console.log( isObj('John'));
// console.log( isObj([1, 2, 3]));
// console.log( isObj( { name:'John'}));
// console.log( isObj(null));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'Dave' }));
// console.log( processUser({  name:'Dave'}));
const getUSersProperty = (users, key) => {
    return users.map(user => user[key]);
};
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject('John');
console.log(store.state);
store.state = 'Dave';
// store.state = 12
const myState = new StateObject([15]);
myState.state = (['Dave', 42, true]);
console.log(myState.state);
