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

const add = (a: number, b: number) => a + b;

const printOutput = (output: string | number) => console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(66, 34));
