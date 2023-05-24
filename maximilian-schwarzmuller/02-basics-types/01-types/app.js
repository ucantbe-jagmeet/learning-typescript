function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
    //   return;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(5, 12));
// let combineValues: Function;
// let combineValues: ()=> number; !! // it means Cv will take function which does not gets any input but returns a number
var combineValues; // it means Cv will take function gets two number inputs and also returns a number
combineValues = add;
// combineValues = 5;
// combineValues = printResult;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (number) { return console.log(number); });
