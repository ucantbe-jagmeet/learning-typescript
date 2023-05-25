const userName = "ucantbe";
// userName = "Jagmeet";
let age = 23;

age = 22;

// var result;
// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

// console.log(result);

const add = (a: number, b: number = 99) => a + b;

const printOutput: (a: string | number) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

// printOutput(add(66, 34));
printOutput(add(66));
