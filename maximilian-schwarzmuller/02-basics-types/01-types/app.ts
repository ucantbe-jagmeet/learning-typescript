// object types contains key types
// {} is typescript notation of specialized object type

// const person: {
//   name: string;
//   age: number;
// } = {

const person = {
  name: "ucantbe",
  age: 23,
  hobbies: ["sports", "cooking"],
};

let favorites: string[];
favorites = ["Traveling"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.localeCompare(()));  // !!!ERROR!!!
}
