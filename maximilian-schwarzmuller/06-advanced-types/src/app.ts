type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Jagmeet",
  privileges: ["Create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// function add(a: number):number
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  // this if loop is called type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// const result = add("ucantbe", "jagmeet");
// const result = add(1, 5);

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "my-company" },
};

// console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job?.title);

const userInput = "";

const storedData = userInput ?? "DEFAULT";

console.log(storedData);

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInfo(emp: UnknownEmployee) {
//   console.log("Name " + emp.name);

//   if ("privileges" in emp) {
//     console.log("Privileges " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date " + emp.startDate);
//   }
// }

// // printEmployeeInfo(e1);
// // printEmployeeInfo({ name: "Manu", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving ......");
//   }
// }
// class Truck {
//   drive() {
//     console.log("Driving a Truck......");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading cargo... " + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();

//   // if ("loadCargo" in vehicle) {
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1000);
//   }
// }

// // useVehicle(v1);
// // useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;

//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//       break;
//   }

//   console.log("Moving with speed: " + speed);
// }

// // moveAnimal({ type: "bird", flyingSpeed: 10 });

// // const userInputElement = <HTMLInputElement>(
// //   document.getElementById("user-input")!
// // );

// const userInputElement = document.getElementById("user-input");

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there";
// }

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   1: "Not a valid Email",
//   username: "Must start with a capital letter",
// };
