function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
  //   return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// let combineValues: Function;
// let combineValues: ()=> number; !! // it means Cv will take function which does not gets any input but returns a number
let combineValues: (a: number, b: number) => number; // it means Cv will take function gets two number inputs and also returns a number

combineValues = add;
// combineValues = 5;
// combineValues = printResult;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (number) => console.log(number));
