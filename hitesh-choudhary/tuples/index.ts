// its speciallised array with some restrictions on it
// it can be of many type but it should follow PRECISE ORDER OF TYPES

// const user: (string | number)[] = ['hc', 1,]


let user: [string , number, boolean];

user = ['sad', 213, true]; // here order is priority

let rgb: [number , number , number] ;
rgb = [255, 255, 112];


type User = [number , string]

const newUser: User = [ 122, "jags@google.com"];

// newUser[0] = "mak.com";    shhows error
newUser[1] = "mak.com";

// newUser.push(true) <thi ruins the tuple arrays >

export {}