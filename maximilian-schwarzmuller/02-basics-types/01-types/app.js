// object types contains key types
// {} is typescript notation of specialized object type
// const person: {
//   name: string;
//   age: number;
// } = {
var person = {
    name: "ucantbe",
    age: 23,
    hobbies: ["sports", "cooking"],
};
var favorites;
favorites = ["Traveling"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
