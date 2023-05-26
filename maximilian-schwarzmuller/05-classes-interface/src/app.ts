class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(` Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = "d2" -> not done due to readonly property
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees);
    console.log(this.employees.length);
  }
}

const accounting = new Department("d1", "Information Technology");
accounting.addEmployee("Jagmeet");
accounting.addEmployee("Tony");

// accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInfo();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();
