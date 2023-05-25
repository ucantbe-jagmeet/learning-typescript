const userName = "ucantbe";
// userName = "Jagmeet";
// let age = 23;

// age = 22;

// var result;
// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

// console.log(result);

// const add = (a: number, b: number = 99) => a + b;

const printOutput: (a: string | number) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

// printOutput(add(66, 34));
// printOutput(add(66));

const hobbies = ["Sports", "Cooking", "Traveling"];
const activeHobbies = ["Hiking", ...hobbies];
// activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  name: "jags",
  age: 30,
};

// const copiedPerson = { ...person };

// console.log(copiedPerson);

const add = (...numbers: number[]) => {
  return numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};
const addedNumbers = add(3, 5, 6, 7, 8);
console.log(addedNumbers);

const [hobby1, hobby2, ...remaining] = hobbies;
console.log(hobbies, hobby1, hobby2);

const { name: user, age } = person;
