// object types contains key types
// {} is typescript notation of specialized object type

// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   // const person = {
//   name: "ucantbe",
//   age: 23,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };
// tuples are the array of fixed length
// person.role.push("admin");
// person.role[1] = 10;
// person.role = [ 0, "admin", "user"]

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
    "ADMIN" = 5,
    "READ_ONLY" = 100,
    "AUTHOR" = "author",
  }
  
  // after assigning the number 5 to the admin
  // other elements will get number 6,7
  
  const person = {
    // const person = {
    name: "ucantbe",
    age: 23,
    hobbies: ["sports", "cooking"],
    role: Role.AUTHOR,
  };
  
  // any type -> same as in javascript
  let favorites: string[];
  favorites = ["Traveling", "23"];
  
  console.log(person.name);
  
  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //   console.log(hobby.localeCompare(()));  // !!!ERROR!!!
  }
  
  if (person.role === Role.AUTHOR) {
    console.log("is author");
  }
  