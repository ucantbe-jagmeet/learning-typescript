"use strict";
exports.__esModule = true;
function addTwo(num) {
    // return true ; this will show error
    return num + 2; // this will always return the number value
}
addTwo(4);
function getValue(val) {
    if (val > 5) {
        return true;
    }
    return "200 ok";
}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "Spoidermon", "superman"];
// const hero = [ 1, 2, 3];
heros.map(function (hero) {
    return 'hero is ${hero}';
});
function consoleError(errmsg) {
    console.log(errmsg);
    // return "";
}
function handleError(errmsg) {
    throw new Error(errmsg);
    // return "";
}
