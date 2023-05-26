class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees);
    console.log(this.employees.length);
  }
}

const accounting = new Department("Information Technology");
accounting.addEmployee("Jagmeet");
accounting.addEmployee("Tony");

// accounting.employees[2] = "Anna";

accounting.describe();
accounting.printEmployeeInfo();

// const accountingCopy = { name: "Dummy", describe: accounting.describe };
// accountingCopy.describe();
