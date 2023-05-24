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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "author";
})(Role || (Role = {}));
// after assigning the number 5 to the admin
// other elements will get number 6,7
var person = {
    // const person = {
    name: "ucantbe",
    age: 23,
    hobbies: ["sports", "cooking"],
    role: Role.AUTHOR,
};
var favorites;
favorites = ["Traveling"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //   console.log(hobby.localeCompare(()));  // !!!ERROR!!!
}
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
